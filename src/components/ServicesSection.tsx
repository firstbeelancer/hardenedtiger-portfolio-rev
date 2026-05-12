export default function ServicesSection() {
  const services = [
    { num: '01', title: 'Инструменты, которые работают', desc: 'Не демки и не «концепты ради концептов». Реальные приложения и сайты, которыми пользуются.' },
    { num: '02', title: 'Слова, которые закрывают сделки', desc: 'Тексты для лендингов, презентаций и продаж — заточенные под решение и аудиторию.' },
    { num: '03', title: 'Визуальная идея — от концепции до печати', desc: 'Брендинг, айдентика, мерч, упаковка. Один автор — цельный визуальный язык.' },
    { num: '04', title: 'AI не ускорялка, а соавтор системы', desc: 'AI встроен во все этапы: ресерч, структура, дизайн, код, контент, продакшен.' },
  ];

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // что я делаю
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Один автор — целый продукт">
              Один автор — целый продукт
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Я соединяю продуктовую логику, визуальное мышление, маркетинг, промтинг и вайбкодинг, чтобы создавать вещи, которые выглядят, работают и помогают продавать.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.num} className="bento-item p-6 h-full">
              <div className="font-mono text-xs text-[hsl(var(--primary)/0.7)] mb-3">{s.num}</div>
              <h3 className="text-lg font-bold mb-2 leading-tight">{s.title}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
