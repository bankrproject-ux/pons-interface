import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Flame, Zap, ArrowRight } from 'lucide-react';
import TokenCard from '@/components/TokenCard';
import { mockTokens } from '@/lib/mockData';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Trending Tokens */}
      <TrendingSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 md:py-32 text-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-sm font-medium mb-8">
          <Zap size={16} />
          Robinhood Chain • Pons Protocol
        </div>
        
        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient">Launch Tokens</span>
          <br />
          <span className="text-white">like</span>
          <span className="text-gradient"> Never Before</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Fixed-supply tokens with instant liquidity. 
          <span className="text-white font-medium"> No bonding curve games</span>. 
          Fair launches, transparent fees, institutional-grade infrastructure.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Link
            href="/launch"
            className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 group"
          >
            <Rocket size={24} className="group-hover:rotate-12 transition-transform" />
            Launch Token
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/trade"
            className="glass px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 group"
          >
            <TrendingUp size={24} className="text-accent-cyan group-hover:scale-110 transition-transform" />
            Trade Now
          </Link>
        </div>
        
        {/* Live Indicator */}
        <div className="flex items-center justify-center gap-3 text-text-secondary text-sm">
          <div className="pulse-dot" />
          <span className="font-mono">2,312 tokens launching today</span>
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { label: 'Tokens Launched', value: '266,130', icon: '🚀', color: 'primary' },
    { label: 'Total Volume', value: '$1.86B', icon: '💰', color: 'green' },
    { label: 'Active Tokens', value: '42', icon: '⚡', color: 'cyan' },
    { label: 'Creators Paid', value: '$15M+', icon: '🏆', color: 'purple' }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
            {/* Background Icon */}
            <div className="absolute -right-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-300">
              {stat.icon}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="text-text-secondary text-sm mb-2 font-medium">{stat.label}</div>
              <div className={`stat-number text-4xl font-bold font-display text-accent-${stat.color}`}>
                {stat.value}
              </div>
              
              {/* Trend Indicator */}
              <div className="flex items-center gap-1 text-xs text-accent-green mt-3">
                <TrendingUp size={14} />
                <span>+12% today</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function TrendingSection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
            <Flame className="text-accent-orange" size={36} />
            <span className="text-gradient">Trending</span>
            <span className="text-white">Tokens</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Hottest tokens by volume and community engagement
          </p>
        </div>
        
        <Link 
          href="/tokens"
          className="group flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors font-medium"
        >
          View All
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockTokens.trending.slice(0, 4).map((token, index) => (
          <motion.div
            key={token.address}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TokenCard token={token} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center card-border-gradient"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-accent-purple/10 to-accent-cyan/20" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
        
        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to</span>
            <span className="text-gradient"> Launch?</span>
          </h2>
          
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Join thousands of creators who've launched successful tokens. 
            No code required, instant liquidity, fair distribution.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/launch"
              className="btn-primary px-8 py-4 rounded-xl font-semibold text-lg"
            >
              🚀 Launch Your Token
            </Link>
            
            <Link
              href="/learn"
              className="glass px-8 py-4 rounded-xl font-semibold text-lg"
            >
              📖 How It Works
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
