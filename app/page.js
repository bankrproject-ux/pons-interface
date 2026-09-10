import { Rocket, TrendingUp, Flame, Zap, ArrowRight, Activity } from 'lucide-react';
import TokenCard from '@/components/TokenCard';
import { mockTokens } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-text-secondary mt-2">
          Welcome back! Here's what's happening with your tokens today.
        </p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Value Locked"
          value="$738.7M"
          change="+12.5%"
          trend="up"
          icon={<Activity size={24} />}
          color="accent-primary"
        />
        <StatCard
          title="24h Trading Volume"
          value="$9.89B"
          change="+18.2%"
          trend="up"
          icon={<TrendingUp size={24} />}
          color="accent-green"
        />
        <StatCard
          title="Active Tokens"
          value="42"
          change="+8%"
          trend="up"
          icon={<Flame size={24} />}
          color="accent-orange"
        />
        <StatCard
          title="Your Portfolio"
          value="$12,345"
          change="-2.4%"
          trend="down"
          icon={<Rocket size={24} />}
          color="accent-purple"
        />
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <div className="bg-surface-900 rounded-2xl border border-border p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-white">
                Trading Volume (24h)
              </h2>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Zap size={16} className="text-accent-primary" />
                Live Updates
              </div>
            </div>
            
            {/* Chart Placeholder */}
            <div className="h-64 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-text-secondary">Real-time Chart Loading...</div>
                <div className="text-xs text-text-muted mt-2">
                  Connect API to display live data
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Performers */}
        <div className="space-y-6">
          <div className="bg-surface-900 rounded-2xl border border-border p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Top Performers
            </h2>
            
            <div className="space-y-4">
              {mockTokens.trending.slice(0, 3).map((token, index) => (
                <div key={token.address} className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-text-muted">
                    #{index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {token.symbol[0]}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {token.symbol}
                        </div>
                        <div className="text-xs text-text-muted">
                          {token.volume24h}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-accent-green font-semibold">
                      +{token.priceChange}%
                    </div>
                    <div className="text-xs text-text-muted">
                      ${token.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-surface-900 rounded-2xl border border-border p-6">
            <h2 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h2>
            
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-accent-primary/10 border border-accent-primary/20 text-accent-primary hover:bg-accent-primary/20 transition-all">
                <Rocket size={20} />
                <span>Launch New Token</span>
                <ArrowRight size={16} className="ml-auto" />
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all">
                <TrendingUp size={20} />
                <span>View All Tokens</span>
                <ArrowRight size={16} className="ml-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending Tokens */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Trending Tokens</h2>
          <button className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors">
            View All
            <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockTokens.trending.slice(0, 4).map((token) => (
            <TokenCard key={token.address} token={token} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, trend, icon, color }) {
  const isUp = trend === 'up';
  
  return (
    <div className="bg-surface-900 rounded-2xl border border-border p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-${color}/10 text-${color}`}>
          {icon}
        </div>
        
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isUp ? 'text-accent-green' : 'text-red-500'
        }`}>
          {isUp ? '↑' : '↓'} {change}
        </div>
      </div>
      
      <div>
        <div className="text-2xl font-bold text-white">
          {value}
        </div>
        <div className="text-text-secondary text-sm mt-1">
          {title}
        </div>
      </div>
    </div>
  );
}
