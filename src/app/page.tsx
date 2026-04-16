import { CouponList } from "@components/coupons/CouponList";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center px-6 py-10">
      <main className="w-full max-w-[430px] space-y-6">
        <header className="space-y-1 text-center">
          <h1 className="font-cookierun text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Available Coupons
          </h1>
          <p className="font-cookierun text-sm text-zinc-600 dark:text-zinc-400">
            Copy a code to apply it at checkout.
          </p>
        </header>

        <CouponList />
      </main>
    </div>
  );
}
