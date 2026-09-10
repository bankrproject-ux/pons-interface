import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-6 border-b border-pons-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-accent-blue">◈</span>
            <span>Pons<span className="text-accent-purple">Interface</span></span>
          </Link>
          
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-pons-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/launch" className="text-pons-300 hover:text-white transition-colors">
              Launch
            </Link>
            <Link href="/tokens" className="text-pons-300 hover:text-white transition-colors">
              Tokens
            </Link>
            <Link href="/trade" className="text-pons-300 hover:text-white transition-colors">
              Trade
            </Link>
          </div>
        </div>

        <button className="bg-accent-green/20 text-accent-green border border-accent-green/30 px-4 py-2 rounded-lg font-medium hover:bg-accent-green/30 transition-all">
          🦊 Connect Wallet
        </button>
      </div>
    </nav>
  );
}
