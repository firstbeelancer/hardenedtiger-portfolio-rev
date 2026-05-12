import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-mono font-extrabold text-gradient mb-4">404</h1>
          <p className="text-[hsl(var(--muted-foreground))] mb-6">Проект не найден</p>
          <Link to="/" className="btn-primary-glow px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" /> На главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Назад к проектам
        </Link>

        <div className="mb-8">
          <span className="status-pill mb-4 inline-flex">
            <span className="status-dot" /> {project.status}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mt-3">
            <span className="glitch font-mono tracking-tight text-gradient" data-text={project.title}>
              {project.title}
            </span>
          </h1>
          <p className="mt-2 font-mono text-sm text-[hsl(var(--primary)/0.7)] uppercase tracking-widest">
            {project.subtitle}
          </p>
        </div>

        <div className="bento-item p-6 md:p-8 mb-8">
          <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-[hsl(var(--brand-tiger)/0.2)] to-[hsl(var(--accent-primary)/0.1)] mb-6 flex items-center justify-center">
            <span className="text-[hsl(var(--muted-foreground))] font-mono text-sm">Preview</span>
          </div>

          <p className="text-lg text-[hsl(var(--foreground)/0.9)] leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono uppercase px-3 py-1 rounded-full border border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contacts" className="btn-primary-glow px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm">
              Обсудить проект <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Detailed project content placeholder */}
        <div className="space-y-6">
          <div className="bento-item p-6">
            <h3 className="font-mono text-xs text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
              // Задача
            </h3>
            <p className="text-[hsl(var(--foreground)/0.85)] leading-relaxed">
              Подробнее о задаче и контексте проекта будет добавлено позже.
            </p>
          </div>

          <div className="bento-item p-6">
            <h3 className="font-mono text-xs text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
              // Решение
            </h3>
            <p className="text-[hsl(var(--foreground)/0.85)] leading-relaxed">
              Описание решения и подхода к разработке.
            </p>
          </div>

          <div className="bento-item p-6">
            <h3 className="font-mono text-xs text-[hsl(var(--primary)/0.7)] uppercase tracking-[0.3em] mb-3">
              // Стек
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs px-3 py-1 rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
