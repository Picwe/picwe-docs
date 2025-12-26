import type { NextConfig } from 'next'
import nextra from 'nextra'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
}

// Set up Nextra with its configuration
const withNextra = nextra({
  search: true,
})

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig)
