import { Brain, CodeXml, Sparkles, MessageSquareQuote } from 'lucide-react';

const manifestoItems = [
  { icon: Brain, title: 'AI как соавтор структуры', desc: 'Помогает быстро исследовать тему, разложить задачу, найти логику продукта.' },
  { icon: CodeXml, title: 'AI как усилитель разработки', desc: 'Ускоряет прототипирование, помогает собирать интерфейсы, тестировать идеи и улучшать код.' },
  { icon: Sparkles, title: 'AI как визуальная студия', desc: 'Помогает создавать иллюстрации, moodboard, визуальные концепции, промты и стили.' },
  { icon: MessageSquareQuote, title: 'AI как редактор и продюсер смысла', desc: 'Помогает шлифовать тексты, презентации, сценарии, SMM и продающую упаковку.' },
];

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // AI-манифест
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="AI — не кнопка, а среда">
              AI — не кнопка, а среда
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            AI для меня — не отдельный инструмент, который включают в конце. Это среда, в которой рождается структура, проверяется идея, собирается интерфейс, пишется текст, создаётся визуал и доводится продукт.
          </p>
        </div>

        <p className="text-[hsl(var(--foreground)/0.85)] text-lg leading-relaxed max-w-3xl mb-12 border-l-2 border-[hsl(var(--primary)/0.6)] pl-5">
          Я не просто использую AI. Я <span className="text-gradient font-semibold">проектирую вместе с ним</span>: думаю, собираю, проверяю, улучшаю и превращаю хаос идей в работающие системы.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {manifestoItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bento-item p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-5 glow-orange">
                  <Icon className="w-6 h-6 text-[hsl(var(--background))]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
