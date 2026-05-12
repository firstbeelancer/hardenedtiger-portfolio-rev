import { Send, Phone, Mail } from 'lucide-react';

export default function ContactsSection() {
  return (
    <section id="contacts" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // contacts
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Соберём ваш проект">
              Соберём ваш проект
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Обсудим задачу, подберём формат и запустим. Быстро, чётко, с результатом.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <a
            href="https://t.me/kalmmar"
            target="_blank"
            rel="noreferrer"
            className="bento-item p-6 h-full flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center glow-orange shrink-0">
              <Send className="w-6 h-6 text-[hsl(var(--background))]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Telegram</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">@kalmmar</p>
            </div>
          </a>

          <a
            href="tel:+79017439350"
            className="bento-item p-6 h-full flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center glow-orange shrink-0">
              <Phone className="w-6 h-6 text-[hsl(var(--background))]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Телефон</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">+7 901 743-93-50</p>
            </div>
          </a>

          <a
            href="mailto:info@tigerapps.pro"
            className="bento-item p-6 h-full flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center glow-orange shrink-0">
              <Mail className="w-6 h-6 text-[hsl(var(--background))]" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">info@tigerapps.pro</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
