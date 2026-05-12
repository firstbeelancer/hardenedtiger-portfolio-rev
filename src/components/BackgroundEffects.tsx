import { useParticleCanvas } from '../hooks/useParticleCanvas';

const FLOAT_CODE_SNIPPETS = [
  '${dayTasks.slice}', 'hover {', '// AI-Native', 'z-index', 'font-face {',
  '<Marina />', ':focus-visible {', 'display: grid', 'const idea =',
  'radial-gradient', 'await build()',
];

const DIRECTIONS = ['dir-1', 'dir-2', 'dir-3', 'dir-4'] as const;

interface FloatCodeItem {
  id: number;
  text: string;
  dir: typeof DIRECTIONS[number];
  alt: boolean;
  top: number;
  left: number;
  delay: number;
  duration: number;
  scale: number;
}

function generateFloatCodes(): FloatCodeItem[] {
  return Array.from({ length: 22 }, (_, i) => ({
    id: i,
    text: FLOAT_CODE_SNIPPETS[i % FLOAT_CODE_SNIPPETS.length],
    dir: DIRECTIONS[Math.floor(Math.random() * 4)],
    alt: Math.random() > 0.5,
    top: Math.random() * 95,
    left: Math.random() * 90,
    delay: Math.random() * 10,
    duration: Math.random() * 14 + 12,
    scale: Math.random() * 0.6 + 0.7,
  }));
}

const floatCodes = generateFloatCodes();

export default function BackgroundEffects() {
  const canvasRef = useParticleCanvas();

  return (
    <>
      <div className="ht-bg" aria-hidden="true" />
      <div className="ht-bg-aurora" aria-hidden="true" />
      <div className="ht-bg-overlay" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div className="ht-scanlines" aria-hidden="true" />
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        {floatCodes.map((fc) => (
          <span
            key={fc.id}
            className={`float-code float-code--${fc.dir}${fc.alt ? ' float-code--alt' : ''}`}
            style={{
              top: `${fc.top}%`,
              left: `${fc.left}%`,
              animationDelay: `${fc.delay}s`,
              animationDuration: `${fc.duration}s`,
              '--fc-scale': fc.scale,
              '--fc-duration': `${fc.duration}s`,
            } as React.CSSProperties}
          >
            {fc.text}
          </span>
        ))}
      </div>
    </>
  );
}
