import { useEffect, useState } from "react";
import type { DailyPoint } from "@/lib/market.functions";
import { GRAM_PER_LUONG, GRAM_PER_TROY_OZ } from "@/lib/quotes";

type ChartModule = typeof import("recharts");

export function MarketChart({ daily, fx }: { daily: DailyPoint[]; fx: number }) {
  const [charts, setCharts] = useState<ChartModule | null>(null);

  useEffect(() => {
    let stop = false;
    void import("recharts").then((mod) => {
      if (!stop) setCharts(mod);
    });
    return () => {
      stop = true;
    };
  }, []);

  if (daily.length < 2) {
    return <p className="text-sm text-muted">Chưa đủ điểm để vẽ 6 tháng gần đây.</p>;
  }

  const data = daily.map((point) => ({
    label: new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit" }).format(new Date(point.t * 1000)),
    luong: Math.round(((point.c * fx) / GRAM_PER_TROY_OZ) * GRAM_PER_LUONG),
  }));

  if (!charts) {
    return <div className="h-72 rounded-card bg-paper-2" aria-hidden="true" />;
  }

  const { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } = charts;

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--color-line)" vertical={false} />
          <XAxis dataKey="label" tick={{ fill: "var(--color-muted)", fontSize: 11 }} interval={14} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: "var(--color-muted)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={72}
            tickFormatter={(value: number) => `${Math.round(value / 1_000_000)}tr`}
          />
          <Tooltip
            formatter={(value) =>
              [`${new Intl.NumberFormat("vi-VN").format(Number(value))} đ`, "Quy đổi / lượng"]
            }
            contentStyle={{
              background: "var(--color-card)",
              border: "1px solid var(--color-line)",
              borderRadius: 12,
              fontSize: 13,
            }}
          />
          <Area type="monotone" dataKey="luong" stroke="var(--color-brass-deep)" fill="var(--color-brass-soft)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
