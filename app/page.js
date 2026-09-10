import Link from 'next/link';
import TokenCard from '@/components/TokenCard';
import { mockTokens } from '@/lib/mockData';

export default function HomePage() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Launch Tokens</span> on Robinhood Chain
        </h1>
        <p className="text-pons-400 text-lg mb-8">
          Fixed-supply tokens with instant liquidity via Pons Protocol
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/launch"
            className="bg-accent-blue hover:bg-accent-blue/80 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🚀 Launch Token
          </Link>
          <Link
            href="/trade"
            className="bg-pons-700 hover:bg-pons-600 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            📈 Trade
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <StatCard title="Tokens Launched" value="266,130" />
        <StatCard title="Total Volume" value="$1.86B" />
        <StatCard title="Active Tokens" value="42" />
        <StatCard title="Creators Paid" value="$15M+" />
      </div>

      {/* Trending Tokens */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">🔥 Trending Tokens</h2>
          <Link href="/tokens" className="text-accent-blue hover:underline">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockTokens.trending.map((token) => (
            <TokenCard key={token.address} token={token} />
          ))}
        </div>
      </div>

      {/* New Launches */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">✨ New Launches</h2>
          <Link href="/launches" className="text-accent-blue hover:underline">
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockTokens.newLaunches.map((token) => (
            <TokenCard key={token.address} token={token} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="glass rounded-xl p-6">
      <div className="text-pons-400 text-sm mb-2">{title}</div>
      <div className="text-2xl font-bold text-accent-green">{value}</div>
    </div>
  );
}
