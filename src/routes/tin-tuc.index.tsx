import { Link, createFileRoute } from "@tanstack/react-router";
import { LiveBrief } from "@/components/site/live-brief";
import { useMarket } from "@/components/site/market-context";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/tin-tuc/")({
  head: () => ({
    meta: [
      { title: "Tin vàng, bạc, kim cương — Minh Phát" },
      {
        name: "description",
        content: "Bản tin giá tự cập nhật và bài Minh Phát viết về vàng, bạc, kim cương, kèm tin báo chí.",
      },
    ],
  }),
  component: News,
});

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(date);
}

function News() {
  const { data } = useMarket();
  const headlines = data?.headlines ?? [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs tracking-widest text-brass-deep">THỊ TRƯỜNG</p>
      <h1 className="mt-2 font-display text-5xl">Vàng, bạc và kim cương</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Bản tin đầu trang tự viết từ giá thế giới. Bên dưới là bài của tiệm, rồi các tít báo đang chạy — bấm để đọc
        tại nguồn, Minh Phát không đăng lại nguyên văn.
      </p>
      <div className="mt-8">
        <LiveBrief />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to="/tin-tuc/$slug"
            params={{ slug: article.slug }}
            className="grid overflow-hidden rounded-card border border-line bg-card sm:grid-cols-5"
          >
            <img src={article.image} alt="" className="h-40 w-full object-cover sm:col-span-2 sm:h-full" />
            <div className="p-4 sm:col-span-3">
              <p className="text-xs text-brass-deep">
                {article.kicker} · {article.minutes} phút
              </p>
              <h2 className="mt-1 font-display text-3xl leading-tight">{article.title}</h2>
              <p className="mt-2 text-sm text-muted">{article.dek}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 font-display text-4xl">Báo chí đang đưa</h2>
      {headlines.length === 0 ? (
        <p className="mt-4 text-sm text-muted">Chưa tải được dòng tin báo. Bản tin giá phía trên vẫn chạy độc lập.</p>
      ) : (
        <ul className="mt-4 divide-y divide-line rounded-card border border-line bg-card">
          {headlines.map((item) => (
            <li key={item.link}>
              <a href={item.link} target="_blank" rel="noreferrer" className="block px-4 py-4">
                <p className="text-xs text-muted">
                  {item.source}
                  {formatWhen(item.publishedAt) ? ` · ${formatWhen(item.publishedAt)}` : ""}
                </p>
                <p className="mt-1 font-medium">{item.title}</p>
                {item.summary ? <p className="mt-1 line-clamp-2 text-sm text-muted">{item.summary}</p> : null}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
