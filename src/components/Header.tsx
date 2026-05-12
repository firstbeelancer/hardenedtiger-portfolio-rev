import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollHeader } from '../hooks/useScrollHeader';

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#apps', label: 'Приложения' },
  { href: '#branding', label: 'Брендинг' },
  { href: '#marketing', label: 'Маркетинг' },
  { href: '#sites', label: 'Сайты' },
  { href: '#contacts', label: 'Контакты' },
];

export default function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[hsl(var(--background)/0.8)] backdrop-blur-md border-b border-[hsl(var(--border))]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a className="font-mono font-extrabold text-base md:text-lg tracking-tight text-glow" href="/">
          <span className="text-gradient">HARDENED</span>
          <span className="text-[hsl(var(--foreground))]">_TIGER</span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden lg:inline-flex btn-primary-glow px-5 py-2 rounded-full text-sm"
        >
          Связаться
        </a>

        <button
          className="lg:hidden text-[hsl(var(--foreground))] p-2"
          aria-label="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[hsl(var(--background)/0.95)] backdrop-blur-md border-b border-[hsl(var(--border))]">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              className="btn-primary-glow px-5 py-2.5 rounded-full text-sm text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Связаться
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
