import { ExampleCard } from "@/components/ExampleCard";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-6 py-16 dark:bg-zinc-950">
      <main className="w-full max-w-lg space-y-8 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Next.js + TypeScript
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            App Router, Tailwind CSS, ESLint, and Prettier are configured. The
            card below is imported with the{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">
              @/*
            </code>{" "}
            alias.
          </p>
        </div>
        <ExampleCard
          title="Example component"
          description="This file lives in src/components/ExampleCard.tsx and is loaded from src/app/page.tsx via @/components/ExampleCard."
        />
      </main>
    </div>
  );
}
