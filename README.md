# PicWe Documentation

[![BNB Chain](https://img.shields.io/badge/BNB_Chain-Powered-yellow?logo=binance)](https://www.bnbchain.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![Nextra](https://img.shields.io/badge/Nextra-4.6.1-blue)](https://nextra.site/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Private-red)]()

> The official documentation site for **PicWe** - The First Full-Stack RWA Capital Markets Ecosystem built on **BNB Smart Chain (BSC)**.

## 📖 About

PicWe is a decentralized infrastructure for **Real-World Asset (RWA) capital markets**, strategically deployed on **BNB Chain** to leverage its high throughput, low transaction costs, and deep liquidity. This repository contains the complete documentation for the PicWe ecosystem.

**Core Protocol Features on BNB Chain:**
- **WEUSD**: Omni-chain settlement stablecoin, 1:1 pegged to USDC.
- **IRO**: Initial RWA Offering — permissionless RWA issuance platform using BNB Chain standards.
- **Origin mincast**: Revolutionary token minting protocol with floor price protection.
- **Invest Module**: Structured RWA investments optimized for BSC gas efficiency.

## 🌐 Supported Networks & Architecture

PicWe is built to be EVM-compatible with a primary focus on the BNB ecosystem.

| Network | Chain ID | Status |
|---------|----------|--------|
| **BNB Smart Chain Mainnet** | **56** | Live |
| **BNB Smart Chain Testnet** | **97** | Beta |

## 🔗 Contract Addresses (BNB Chain)

> *Please verify the latest addresses in the official documentation pages.*

| Contract Name | BNB Mainnet (BSC) Address | BNB Testnet Address |
|---------------|---------------------------|---------------------|
| **PicWe Core**| `0x29Ef43797B278F3abD0C5A4D9E3CA21649889834`     | `0x29Ef43797B278F3abD0C5A4D9E3CA21649889834`|
| **WEUSD Token**| `0xdd73EA766B80417C0607A3f08E34A0C415D89D56`    | `0xdd73EA766B80417C0607A3f08E34A0C415D89D56`|


## ✨ Documentation Features

- 📚 Comprehensive guides for interacting with PicWe Smart Contracts on BSC
- 🔍 Full-text search powered by Pagefind
- ⚡ Fast page loads with Next.js
- 📊 Interactive diagrams explaining RWA flows on BNB Chain

## 🚀 Getting Started 

To run this documentation site locally:

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd picwe-docs

```

2. Install dependencies:

```bash
pnpm install
# or
npm install

```

3. Start the development server:

```bash
pnpm dev

```

4. Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

## 📁 Project Structure

```
picwe-docs/
├── public/
│   ├── images/          # SVG diagrams and illustrations
│   │   ├── invest/      # Invest Module diagrams
│   │   ├── iro/         # IRO diagrams
│   │   └── origin-forge/# Origin Forge diagrams
│   └── ...
├── src/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   └── content/         # MDX documentation files
│       ├── developers/  # Developer documentation (BNB Integration)
│       ├── invest/      # Invest Module docs
│       ├── iro/         # IRO docs
│       └── origin-forge/# Origin Forge docs
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration

```

## 🛠️ Development Scripts

* `pnpm dev` - Start development server
* `pnpm build` - Build for production (Generates static site)
* `pnpm start` - Start production server
* `pnpm lint` - Run ESLint

## 📝 Content Guidelines

* **BNB Specifics**: Explicitly mention "BNB Chain" or "BSC" when describing gas fees or wallet connections.
* **Accuracy**: Ensure Contract Addresses in the docs match the deployed contracts on BscScan.
* **Diagrams**: Use diagrams to illustrate cross-chain flows if applicable.

## 🔍 Search

Full-text search is powered by [Pagefind](https://pagefind.app/). The search index is automatically generated during the build process.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/update-contracts`)
3. Commit your changes (`git commit -m 'Update BNB Chain contract addresses'`)
4. Push to the branch (`git push origin feature/update-contracts`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

* **Email**: info@picwe.org
* **Security**: info@picwe.org
* **Ecosystem**: BNB Chain

## 🙏 Acknowledgments

* Built with [Next.js](https://nextjs.org/)
* Documentation framework by [Nextra](https://nextra.site/)
* Powered by **BNB Chain** Infrastructure

```

```
