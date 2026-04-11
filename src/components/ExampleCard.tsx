type ExampleCardProps = {
  title: string;
  description: string;
};

export function ExampleCard({ title, description }: ExampleCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="text-lg font-cookierun font-bold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="mt-2 font-cookierun font-normal text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
}
