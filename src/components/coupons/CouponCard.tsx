import type { Coupon } from "@/types/coupon";

function formatExpirationDate(expirationDate: string) {
  const date = new Date(expirationDate);
  if (Number.isNaN(date.getTime())) return expirationDate;

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
}

type CouponCardProps = {
  coupon: Pick<Coupon, "code" | "expirationDate">;
};

export function CouponCard({ coupon }: CouponCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <code className="block font-mono text-lg font-bold tracking-wider text-zinc-900 dark:text-zinc-50">
        {coupon.code}
      </code>
      <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        Expires {formatExpirationDate(coupon.expirationDate)}
      </p>
    </article>
  );
}

