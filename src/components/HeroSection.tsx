import { ArrowUpRight, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 md:pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-4">
            // AI-Native продукт и креативные системы
          </p>

          <h1 className="font-mono font-extrabold leading-[0.9] tracking-tight flex flex-wrap items-baseline">
            <span
              className="glitch font-mono tracking-tight text-[clamp(2.5rem,9vw,7rem)] text-gradient"
              data-text="HARDENED"
            >
              HARDENED
            </span>
            <span
              className="glitch font-mono tracking-tight text-[clamp(2.5rem,9vw,7rem)] text-[hsl(var(--foreground))]"
              data-text="_TIGER"
            >
              _TIGER
            </span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-4xl font-bold text-[hsl(var(--foreground))]">
            Марина Калмыкова
          </h2>

          <p className="mt-3 font-mono uppercase tracking-[0.18em] text-sm md:text-base text-[hsl(var(--primary)/0.8)]">
            ВАЙБ-ПРОГРАММИСТ · ИИ КРЕАТОР · ГРАФИЧЕСКИЙ ДИЗАЙНЕР · МАРКЕТОЛОГ
          </p>

          <p className="mt-8 text-lg md:text-xl text-[hsl(var(--foreground)/0.9)] max-w-2xl leading-relaxed">
            Я делаю продукт <span className="text-gradient font-semibold">целиком</span>: код, дизайн, текст, визуальную идею и маркетинговую упаковку. Без передачи между подрядчиками и потерь в смыслах.
          </p>

          <p className="mt-5 text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl leading-relaxed border-l-2 border-[hsl(var(--primary)/0.6)] pl-4">
            Я не «использую AI». Я работаю в <span className="text-[hsl(var(--primary))]">AI-Native</span> режиме: от ресерча и структуры — до кода, контента, визуала и продукта.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#apps" className="btn-primary-glow px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm">
              Смотреть проекты
            </a>
            <a href="#contacts" className="btn-ghost-orange px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" /> Связаться
            </a>
            <a
              href="https://github.com/firstbeelancer"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-orange px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Открыть GitHub
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 max-w-md gap-6">
            <div className="bento-item p-5">
              <div className="font-mono text-3xl md:text-4xl text-gradient font-bold">13+</div>
              <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] mt-1">лет в IT</div>
            </div>
            <div className="bento-item p-5">
              <div className="font-mono text-3xl md:text-4xl text-gradient font-bold">4</div>
              <div className="text-xs md:text-sm text-[hsl(var(--muted-foreground))] mt-1">роли в одном специалисте</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-full" />
            <div className="bento-item p-8 relative">
              <div className="font-mono text-xs text-[hsl(var(--primary)/0.6)] mb-4">// stack.json</div>
              <pre className="font-mono text-sm leading-relaxed text-[hsl(var(--foreground)/0.8)]">
{`{
  "mode": "AI-Native",
  "skills": [
    "programming",
    "design",
    "marketing",
    "branding"
  ],
  "delivery": "end-to-end",
  "ai": "co-author"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
