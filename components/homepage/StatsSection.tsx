import { JSX } from "preact";
import StatsCount from "@/islands/homepage/StatsCount.tsx";

export default function StatsSection(): JSX.Element {
  return (
    <section class="bg-base-muted py-12 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <StatsCount />
      </div>
    </section>
  );
}
