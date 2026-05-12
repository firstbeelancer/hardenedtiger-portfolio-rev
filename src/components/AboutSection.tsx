export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="mb-10 md:mb-14 max-w-3xl">
            <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
              // about
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="glitch font-mono tracking-tight text-gradient" data-text="Обо мне">
                Обо мне
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base md:text-lg text-[hsl(var(--foreground)/0.85)] leading-relaxed">
            <p>
              Я — <span className="text-gradient font-semibold">ИИ креатор</span> и мультимодальный специалист на стыке маркетинга, графического и веб-дизайна, вайбкодинга и визуального продакшена.
            </p>
            <p>
              Я собираю продукты целиком: от идеи, смысла и структуры до интерфейса, текста, визуала и финальной презентации. Мне не нужно передавать задачу между пятью подрядчиками, потому что я умею держать в голове весь путь пользователя: что он увидит, что поймёт, куда нажмёт и почему поверит.
            </p>
            <p>
              Искусственный интеллект для меня — не модная кнопка «ускорить». Это рабочая среда, соавтор и усилитель мышления. Через AI я проектирую приложения, создаю визуальные концепции, пишу тексты, собираю сайты, генерирую музыку, видео и маркетинговые материалы.
            </p>
            <p>
              <span className="text-gradient font-semibold">Hardened Tiger</span> — это мой способ работать: быстро, точно, с характером и вниманием к деталям. Код, дизайн и слова должны не просто существовать. Они должны работать.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
