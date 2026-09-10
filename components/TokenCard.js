import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Flame, Rocket, ExternalLink } from 'lucide-react';

export default function TokenCard({ token }) {
  const progressPercent = Math.min((token.bondingProgress / 100) * 100, 100);
  
  return (
    <Link href={`/token/${token.address}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass rounded-2xl overflow-hidden group relative"
      >
        {/* Top Gradient Bar */}
        <div className={`h-1 bg-gradient-to-r ${
          token.graduated 
            ? 'from-accent-green to-accent-cyan' 
            : 'from-accent-orange to-accent-pink'
        }`} />
        
        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Token Avatar */}
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-purple flex items-center justify-center text-2xl font-bold font-display">
                  {token.symbol[0]}
                </div>
                
                {/* Status Dot */}
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-background ${
                  token.graduated ? 'bg-accent-green' : 'bg-accent-orange'
                }`} />
              </div>
              
              {/* Token Info */}
              <div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  {token.symbol}
                </h3>
                <p className="text-text-secondary text-sm">{token.name}</p>
              </div>
            </div>
            
            {/* Status Badge */}
            {token.graduated ? (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs font-medium">
                <Rocket size={14} />
                Graduated
              </div>
            ) : (
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/30 text-accent-orange text-xs font-medium">
                <Flame size={14} />
                Bonding
              </div>
            )}
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-1">
              <div className="text-text-muted text-xs font-medium">Price</div>
              <div className="font-mono text-lg font-semibold text-white">
                ${token.price}
              </div>
              <div className="flex items-center gap-1 text-xs text-accent-green">
                <TrendingUp size={12} />
                <span>+{token.priceChange}%</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-text-muted text-xs font-medium">24h Volume</div>
              <div className="font-mono text-lg font-semibold text-accent-cyan">
                {token.volume24h}
              </div>
              <div className="text-xs text-text-muted">
                {token.holders} holders
              </div>
            </div>
          </div>
          
          {/* Bonding Progress */}
          {!token.graduated && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-secondary text-xs font-medium">Bonding Progress</span>
                <span className="text-accent-orange text-xs font-bold font-mono">
                  {token.bondingProgress}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full"
                  style={{ boxShadow: '0 0 10px rgba(249, 115, 22, 0.5)' }}
                />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-y-0 w-full shimmer" />
              </div>
            </div>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-text-muted text-xs">
              <div className="w-6 h-6 rounded-full bg-accent-secondary/20 flex items-center justify-center text-[10px] text-accent-secondary">
                {token.creator.slice(0, 4)}
              </div>
              <span className="font-mono">{token.creator.slice(0, 6)}...{token.creator.slice(-4)}</span>
            </div>
            
            <div className="flex items-center gap-1 text-accent-primary text-xs font-medium group-hover:text-accent-secondary transition-colors">
              View Details
              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
