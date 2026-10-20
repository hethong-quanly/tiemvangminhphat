import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getMarket, type MarketPayload } from "@/lib/market.functions";

type MarketState = {
  data: MarketPayload | null;
  status: "loading" | "ready" | "error";
};

const MarketContext = createContext<MarketState>({ data: null, status: "loading" });

export function MarketProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MarketState>({ data: null, status: "loading" });

  useEffect(() => {
    let stop = false;
    const load = async () => {
      try {
        const data = await getMarket();
        if (stop) return;
        setState({ data, status: data.spot ? "ready" : "error" });
      } catch {
        if (!stop) setState((prev) => ({ data: prev.data, status: "error" }));
      }
    };
    void load();
    const timer = window.setInterval(() => void load(), 60_000);
    return () => {
      stop = true;
      window.clearInterval(timer);
    };
  }, []);

  return <MarketContext.Provider value={state}>{children}</MarketContext.Provider>;
}

export function useMarket() {
  return useContext(MarketContext);
}
