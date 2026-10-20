import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/frame";

export const Route = createFileRoute("/tin-tuc")({
  component: NewsLayout,
});

function NewsLayout() {
  return (
    <SiteFrame>
      <Outlet />
    </SiteFrame>
  );
}
