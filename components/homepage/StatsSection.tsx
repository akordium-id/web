import { JSX } from "preact";
import StatsCount from "@/islands/homepage/StatsCount.tsx";

export default function StatsSection(): JSX.Element {
  return (
    <section className="bg-base-muted py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <StatsCount />
      </div>
    </section>
  );
}
