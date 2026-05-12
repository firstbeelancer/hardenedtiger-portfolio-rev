import { Fingerprint, Palette, Shirt, BookOpen, Package } from 'lucide-react';
import { brandingItems } from '../data/branding';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  fingerprint: Fingerprint,
  palette: Palette,
  shirt: Shirt,
  'book-open': BookOpen,
  package: Package,
};

export default function BrandingSection() {
  return (
    <section id="branding" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // branding
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Брендинг и дизайн">
              Брендинг и дизайн
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Визуальная система бренда от идеи до производства: логотип, айдентика, мерч, упаковка и гайдлайны.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {brandingItems.map((item) => {
            const Icon = iconMap[item.icon] || Fingerprint;
            return (
              <div key={item.title} className="bento-item p-5 h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 glow-orange">
                  <Icon className="w-5 h-5 text-[hsl(var(--background))]" />
                </div>
                <h3 className="text-sm font-bold mb-1.5 leading-tight">{item.title}</h3>
                <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
