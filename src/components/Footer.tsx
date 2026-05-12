import { GitBranch } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-[hsl(var(--muted-foreground))]">
          <span className="text-gradient font-bold">HARDENED_TIGER</span> · Марина Калмыкова · {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/firstbeelancer"
            target="_blank"
            rel="noreferrer"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <GitBranch className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
