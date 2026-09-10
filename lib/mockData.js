export const mockTokens = {
  trending: [
    {
      address: '0x1234567890123456789012345678901234567890',
      symbol: 'AI',
      name: 'Artificial Inu',
      price: '$0.00045',
      volume24h: '$2.4M',
      bondingProgress: 85,
      graduated: false,
      creator: '0xabc123def456',
      createdAt: Date.now() - 1000 * 60 * 30, // 30 menit lalu
      image: '/tokens/ai.png'
    },
    {
      address: '0x2345678901234567890123456789012345678901',
      symbol: 'CASHCAT',
      name: 'Cash Cat',
      price: '$0.0012',
      volume24h: '$1.8M',
      bondingProgress: 100,
      graduated: true,
      creator: '0xdef456abc123',
      createdAt: Date.now() - 1000 * 60 * 60 * 2, // 2 jam lalu,
      image: '/tokens/cashcat.png'
    },
    // ... token lainnya
  ],
  
  newLaunches: [
    {
      address: '0x3456789012345678901234567890123456789012',
      symbol: 'SPACE',
      name: 'Space Hood',
      price: '$0.000008',
      volume24h: '$45K',
      bondingProgress: 12,
      graduated: false,
      creator: '0x123789456def',
      createdAt: Date.now() - 1000 * 60 * 5, // 5 menit lalu
    },
    // ... token lainnya
  ]
};

// Konstanta Pons
export const PONS_CONFIG = {
  factoryAddress: '0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB',
  legacyFactoryAddress: '0x0c37a24F5D23A486FA692d1500881d698B1F77a4',
  v3FactoryAddress: '0x1f7d7550b1b028f7571e69a784071f0205fd2efa',
  lockerAddress: '0x736D76699C26D0d966744cAe304C000d471f7F35',
  chainId: 4663,
  rpcUrl: 'https://rpc.mainnet.chain.robinhood.com',
  explorerUrl: 'https://robinhoodchain.blockscout.com'
};
