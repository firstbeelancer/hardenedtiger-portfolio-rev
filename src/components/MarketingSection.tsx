import { marketingItems } from '../data/marketing';
import * as Icons from 'lucide-react';

function getIcon(name: string) {
  const pascalName = name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[pascalName] || Icons.Sparkles;
  return Icon;
}

export default function MarketingSection() {
  return (
    <section id="marketing" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // marketing
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Маркетинг и SMM">
              Маркетинг и SMM
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Контент, который продаёт. Стратегия, которая масштабирует. Упаковка, которая выделяет.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketingItems.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div key={item.title} className="bento-item p-5 h-full flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center shrink-0 glow-orange">
                  <Icon className="w-5 h-5 text-[hsl(var(--background))]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1.5 leading-tight">{item.title}</h3>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
