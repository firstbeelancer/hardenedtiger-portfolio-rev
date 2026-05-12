import { ArrowUpRight } from 'lucide-react';
import { apps, sites } from '../data/projects';

function ProjectCard({ project }: { project: typeof apps[number] }) {
  return (
    <a className="bento-item group block p-5 md:p-6 h-full" href={`/project/${project.slug}`}>
      <div className="relative overflow-hidden rounded-lg mb-5 aspect-[4/3] bg-[hsl(var(--secondary)/0.4)]">
        <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--brand-tiger)/0.2)] to-[hsl(var(--accent-primary)/0.1)] transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.8)] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 status-pill">
          <span className="status-dot" /> {project.status}
        </span>
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-[hsl(var(--primary)/0.7)] mb-2">
        {project.subtitle}
      </p>
      <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{project.title}</h3>
      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border border-[hsl(var(--border)/0.6)] text-[hsl(var(--muted-foreground))]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-[hsl(var(--primary))] text-sm font-medium">
        Подробный кейс
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}

export function AppsSection() {
  return (
    <section id="apps" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // apps
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Избранные приложения">
              Избранные приложения
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Кроссплатформенные инструменты для работы с продажами, AI, продуктивностью, аналитикой, безопасностью и AI-разработкой.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app) => (
            <ProjectCard key={app.slug} project={app} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SitesSection() {
  return (
    <section id="sites" className="relative py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <p className="font-mono text-xs md:text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
            // sites
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="glitch font-mono tracking-tight text-gradient" data-text="Сайты">
              Сайты
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Лендинги и корпоративные сайты — от сервисных компаний до IT-интеграторов.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {sites.map((site) => (
            <ProjectCard key={site.slug} project={site} />
          ))}
        </div>
      </div>
    </section>
  );
}
