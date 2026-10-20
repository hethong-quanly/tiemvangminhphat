import { Link, createFileRoute } from "@tanstack/react-router";
import { articleBySlug, articles } from "@/lib/articles";

export const Route = createFileRoute("/tin-tuc/$slug")({
  head: ({ params }) => {
    const article = articleBySlug(params.slug);
    return {
      meta: [
        { title: article ? `${article.title} — Minh Phát` : "Tin tức — Minh Phát" },
        { name: "description", content: article?.dek ?? "Bài viết của Tiệm Vàng Minh Phát." },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = articleBySlug(slug);

  if (!article) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl">Không thấy bài này</h1>
        <Link to="/tin-tuc" className="mt-4 inline-block text-brass-deep">
          Về trang tin
        </Link>
      </section>
    );
  }

  const more = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <p className="text-xs tracking-widest text-brass-deep">{article.kicker}</p>
        <h1 className="mt-2 font-display text-5xl leading-tight">{article.title}</h1>
        <p className="mt-4 text-sm text-muted">{article.dek}</p>
        <img src={article.image} alt="" className="mt-6 aspect-video w-full rounded-card object-cover" />
        <div className="mt-8 space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading ?? section.paragraphs[0]}>
              {section.heading ? <h2 className="font-display text-3xl">{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <section className="mx-auto max-w-3xl px-4 pb-14 md:px-6">
        <h2 className="font-display text-3xl">Đọc tiếp</h2>
        <ul className="mt-3 space-y-2">
          {more.map((item) => (
            <li key={item.slug}>
              <Link to="/tin-tuc/$slug" params={{ slug: item.slug }} className="text-brass-deep">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
