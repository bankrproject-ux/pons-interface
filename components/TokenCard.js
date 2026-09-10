import Link from 'next/link';

export default function TokenCard({ token }) {
  const progressPercent = Math.min(
    (token.bondingProgress / 100) * 100,
    100
  );

  return (
    <Link href={`/token/${token.address}`}>
      <div className="glass rounded-xl p-5 hover:border-accent-blue/50 transition-all cursor-pointer group">
        {/* Token Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xl font-bold">
              {token.symbol[0]}
            </div>
            <div>
              <h3 className="font-bold text-lg group-hover:text-accent-blue transition-colors">
                {token.symbol}
              </h3>
              <p className="text-pons-400 text-sm">{token.name}</p>
            </div>
          </div>
          
          {token.graduated ? (
            <span className="bg-accent-green/20 text-accent-green text-xs px-2 py-1 rounded">
              🎓 Graduated
            </span>
          ) : (
            <span className="bg-accent-orange/20 text-accent-orange text-xs px-2 py-1 rounded">
              🔥 Bonding
            </span>
          )}
        </div>

        {/* Price & Volume */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-pons-400 text-xs">Price</div>
            <div className="font-mono font-semibold">
              ${token.price}
            </div>
          </div>
          <div>
            <div className="text-pons-400 text-xs">24h Volume</div>
            <div className="font-mono font-semibold text-accent-green">
              ${token.volume24h}
            </div>
          </div>
        </div>

        {/* Bonding Progress */}
        {!token.graduated && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-pons-400">Bonding Progress</span>
              <span className="text-accent-orange">{token.bondingProgress}%</span>
            </div>
            <div className="h-2 bg-pons-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-orange to-accent-blue rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Creator Info */}
        <div className="flex items-center justify-between text-xs text-pons-400">
          <span>👤 {token.creator.slice(0, 6)}...{token.creator.slice(-4)}</span>
          <span>⏰ {timeAgo(token.createdAt)}</span>
        </div>
      </div>
    </Link>
  );
}

function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}
