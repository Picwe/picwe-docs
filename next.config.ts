import type { NextConfig } from 'next'
import nextra from 'nextra'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
}

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  search: true,
  // contentDirBasePath: '/docs', // Or even nested e.g. `/docs/advanced`
})

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig)
