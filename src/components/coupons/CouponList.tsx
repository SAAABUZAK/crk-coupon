import couponsData from "../../data/coupons.json";
import type { Coupon } from "../../types/coupon";

import { CouponCard } from "./CouponCard";

export function CouponList() {
  const coupons: Coupon[] = couponsData

  return (
    <section className="w-full">
      <div className="space-y-4">
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>
    </section>
  );
}

