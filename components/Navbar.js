import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet, Zap, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', icon: null },
    { href: '/launch', label: 'Launch', icon: Rocket },
    { href: '/tokens', label: 'Tokens', icon: TrendingUp },
    { href: '/trade', label: 'Trade', icon: ArrowLeftRight },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 }
  ];

  return (
    <nav className="sticky top-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">◈</span>
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-purple rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
              
              <div>
                <div className="font-display text-xl font-bold text-white">
                  Pons<span className="text-gradient">Interface</span>
                </div>
                <div className="text-xs text-text-muted -mt-1">
                  Premium Launchpad
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Connect Wallet Button */}
            <button
              onClick={() => setIsConnected(!isConnected)}
              className={`relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all group ${
                isConnected 
                  ? 'bg-accent-green/20 border border-accent-green/30 text-accent-green'
                  : 'btn-primary text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Wallet size={20} />
                <span>{isConnected ? 'Connected' : 'Connect Wallet'}</span>
                {isConnected && <ChevronDown size={16} />}
              </div>
              
              {!isConnected && (
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
