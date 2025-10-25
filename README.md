# 402gate-sdk — Client SDK (Devnet)

The official SDK for **402Gate**, providing tools and client helpers to handle `HTTP 402 Payment Required` responses on Solana.

> 🚧 Currently live on Solana **Devnet**

---

[![SDK CI](https://github.com/402gate/402gate-sdk/actions/workflows/ci.yml/badge.svg)]()
[![Built on Solana](https://img.shields.io/badge/Built%20on-Solana-9945FF?logo=solana)](https://solana.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

---

## ⚙️ Features
- **`fetchWith402()`** — Smart fetch wrapper that automatically handles 402 payments.  
- **`Payment-Proof` header generation** for verified micropayments.  
- Works with **Solana Web3** and **USDC, 402G, SOL** tokens.  
- Built for both Node.js and browser environments.  

---

## 📦 Installation
```bash
npm install @402gate/sdk
