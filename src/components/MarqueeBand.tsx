import { marqueeItems } from '../data/marquee';

export default function MarqueeBand() {
  const items = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

  return (
    <div className="marquee py-5 border-y border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--background)/0.4)] backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm md:text-base uppercase tracking-widest text-[hsl(var(--primary)/0.8)] mx-4"
          >
            <span className="text-[hsl(var(--primary))]">▸</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
