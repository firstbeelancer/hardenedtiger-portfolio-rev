export default function ConsoleLogBreak() {
  return (
    <div className="my-16 md:my-24 px-4 text-center">
      <p className="font-mono text-lg md:text-3xl tracking-tight inline-block">
        <span className="text-[hsl(var(--primary))]">&gt;</span>{' '}
        <span className="text-gradient font-semibold">console.log("I am ready to create");</span>
        <span className="inline-block w-2 h-5 md:h-7 bg-[hsl(var(--primary))] ml-1 align-middle animate-pulse" />
      </p>
    </div>
  );
}
