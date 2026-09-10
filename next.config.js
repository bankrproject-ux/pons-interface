/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_ROBINHOOD_CHAIN_RPC: 'https://rpc.mainnet.chain.robinhood.com',
    NEXT_PUBLIC_PONS_FACTORY: '0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB',
    NEXT_PUBLIC_CHAIN_ID: '4663'
  }
};

module.exports = nextConfig;
