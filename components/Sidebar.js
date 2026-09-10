'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, Rocket, TrendingUp, ArrowLeftRight, BarChart3, 
  Settings, Zap, ChevronLeft, ChevronRight, Image
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: Home, badge: null },
  { name: 'Launch Token', href: '/launch', icon: Rocket, badge: 'New' },
  { name: 'Tokens', href: '/tokens', icon: Image, badge: '42' },
  { name: 'Trading', href: '/trade', icon: ArrowLeftRight, badge: null },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, badge: null },
  { name: 'Trending', href: '/trending', icon: TrendingUp, badge: '🔥' },
];

const secondaryItems = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Docs', href: '/docs', icon: ChevronRight },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  
  return (
    <aside className={`bg-surface-900 border-r border-border transition-all duration-300 ${
      collapsed ? 'w-20' : 'w-64'
    }`}>
      {/* Logo */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center">
            <Zap className="text-white" size={20} />
          </div>
          {!collapsed && (
            <div>
              <div className="font-display text-lg font-bold text-white">
                Pons<span className="text-gradient">Interface</span>
              </div>
              <div className="text-xs text-text-muted -mt-1">
                Premium Launchpad
              </div>
            </div>
          )}
        </Link>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg text-text-muted hover:text-white hover:bg-white/5 transition-all"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2">
          {!collapsed && (
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Main Menu
            </h2>
          )}
        </div>
        
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                    isActive 
                      ? 'bg-accent-primary/10 text-accent-primary border border-accent-primary/20' 
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon 
                    size={20} 
                    className={isActive ? 'text-accent-primary' : 'text-text-muted group-hover:text-accent-secondary transition-colors'} 
                  />
                  
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          item.badge === 'New' 
                            ? 'bg-accent-green/20 text-accent-green' 
                            : 'bg-accent-orange/20 text-accent-orange'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Secondary Menu */}
        <div className="mt-8 px-4 mb-2">
          {!collapsed && (
            <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              System
            </h2>
          )}
        </div>
        
        <ul className="space-y-1 px-2">
          {secondaryItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                >
                  <Icon size={20} className="text-text-muted" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-secondary to-accent-purple flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </div>
          
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">
                John Doe
              </div>
              <div className="text-xs text-text-muted">
                john@example.com
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
