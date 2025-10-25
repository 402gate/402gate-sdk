import { Connection, PublicKey, Transaction, SystemProgram } from "@solana/web3.js";

export interface Fetch402Options {
  payer: any;
  mint?: "402G" | "USDC" | "SOL";
  rpc?: string;
}

export async function fetchWith402(url: string, opts: Fetch402Options) {
  const res = await fetch(url);

  // Kalau bukan 402, langsung balikin hasil JSON
  if (res.status !== 402) return await res.json();

  const meta = await res.json();
  const connection = new Connection(opts.rpc ?? "https://api.devnet.solana.com");

  console.log("⚡ 402 Payment Required:", meta);

  // Simulasi pembayaran di Devnet
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: new PublicKey(opts.payer.publicKey),
      toPubkey: new PublicKey(meta.recipient),
      lamports: meta.amount * 1e9
    })
  );

  const sig = "DEVNET_TX_SIMULATION_" + Math.random().toString(36).slice(2);

  // Retry dengan header Payment-Proof
  const retry = await fetch(url, {
    headers: {
      "Payment-Proof": `tx=${sig}; requestId=${meta.requestId}; payer=${opts.payer.publicKey}`
    }
  });

  return await retry.json();
}
