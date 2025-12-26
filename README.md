# PicWe Documentation

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)](https://nextjs.org/)
[![Nextra](https://img.shields.io/badge/Nextra-4.6.1-blue)](https://nextra.site/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-Private-red)]()

> The official documentation site for PicWe - The First Full-Stack RWA Capital Markets Ecosystem

## 📖 About

PicWe is a decentralized infrastructure for **Real-World Asset (RWA) capital markets**. This repository contains the complete documentation for the PicWe ecosystem, including:

- **WEUSD**: Omni-chain settlement stablecoin, 1:1 pegged to USDC
- **IRO**: Initial RWA Offering — permissionless RWA issuance platform
- **Origin Forge**: Revolutionary token minting protocol with floor price protection
- **Invest Module**: Structured RWA investments with risk-based matching

## ✨ Features

- 📚 Comprehensive documentation covering all PicWe products
- 🔍 Full-text search powered by Pagefind
- 🌓 Dark mode support
- 📱 Responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Beautiful UI with Nextra theme
- 📊 Interactive diagrams and visualizations

## 🚀 Getting Started

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
# or
yarn install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│       ├── developers/  # Developer documentation
│       ├── invest/      # Invest Module docs
│       ├── iro/         # IRO docs
│       └── origin-forge/# Origin Forge docs
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Documentation

1. Create a new `.mdx` file in `src/content/` or appropriate subdirectory
2. Add the file to `_meta.ts` for navigation
3. Use MDX syntax with React components for interactive content
4. Add SVG diagrams to `public/images/` as needed

### Building for Production

```bash
pnpm build
```

The build process includes:
- Next.js optimization
- Pagefind search index generation
- Static asset optimization

## 🎨 Customization

### Theme Configuration

The project uses Nextra theme. Customize the theme in `next.config.ts`:

```typescript
const withNextra = nextra({
  search: true,
  // Add more Nextra options here
})
```

### Styling

- Global styles: `src/app/globals.css`
- Tailwind CSS configuration: `postcss.config.mjs`
- Component styles: Inline styles or Tailwind classes

## 📝 Content Guidelines

- Use clear, concise language
- Include code examples where applicable
- Add diagrams for complex concepts
- Keep documentation up-to-date with product changes
- Follow the existing documentation structure

## 🔍 Search

Full-text search is powered by [Pagefind](https://pagefind.app/). The search index is automatically generated during the build process.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted Node.js server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Contact

- **Email**: info@picwe.org
- **Security**: info@picwe.org

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Documentation framework by [Nextra](https://nextra.site/)
- Search powered by [Pagefind](https://pagefind.app/)

---

**PicWe** - The First Full-Stack RWA Capital Markets Ecosystem
