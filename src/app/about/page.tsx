import type { Metadata } from "next";

import { PlaceholderImage } from "@/components/placeholder-image";
import { strengths } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "About Guangzhou Boying Garment Co Ltd",
  description:
    "Learn about Guangzhou Boying Garment Co Ltd, an OEM ODM garment manufacturer in China serving brands, wholesalers, private label clients, and custom buyers.",
  path: "/about",
});

const factoryStrengths = [
  "Focused experience in outerwear development and production for export business.",
  "Support for both OEM manufacturing and ODM product development programs.",
  "Factory-based coordination covering sampling, production planning, inspection, and shipment follow-up.",
  "Professional communication suited to overseas buyers managing timelines, fit comments, and order approvals.",
];

export default function AboutPage() {
  return (
    <div className="section py-14 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent-deep)]">
            {"About Us / \u5173\u4e8e\u6211\u4eec"}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--navy)] md:text-6xl">
            A garment manufacturer focused on reliable development, quality production, and long-term buyer cooperation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Guangzhou Boying Garment Co Ltd is an OEM and ODM garment
            manufacturer based in Guangzhou, China. We specialize in the
            development and production of down jackets, wool coats, windbreaker
            jackets, and fashion dresses for international buyers.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            We work with fashion brands, wholesalers, private label clients, and
            custom buyers who need a supplier that understands product details,
            communicates clearly, and delivers with consistent factory
            management.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
            {"\u5e7f\u5dde\u535a\u9896\u5236\u8863\u6709\u9650\u516c\u53f8\u4f4d\u4e8e\u4e2d\u56fd\u5e7f\u5dde\uff0c\u4e13\u6ce8\u7fbd\u7ed2\u670d\u3001\u7f8a\u6bdb\u5927\u8863\u3001\u98ce\u8863\u5939\u514b\u548c\u65f6\u5c1a\u8fde\u8863\u88d9\u7684\u5f00\u53d1\u4e0e\u751f\u4ea7\uff0c\u4e3a\u6d77\u5916\u5ba2\u6237\u63d0\u4f9b\u4e13\u4e1a\u7684OEM\u4e0eODM\u670d\u52a1\u3002"}
          </p>
        </div>

        <PlaceholderImage
          src="/placeholders/about-showroom.svg"
          alt="Showroom placeholder"
          label="Replace with showroom, team, or factory exterior image"
          className="min-h-[460px]"
        />
      </div>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {strengths.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
              {item.cn}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--navy)]">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 rounded-[2rem] border border-[var(--line)] bg-[var(--navy)] p-8 text-white lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            {"Factory Strength / \u5de5\u5382\u5b9e\u529b"}
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Built to support overseas buyers who need both product capability and dependable execution.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
            Our factory strength is not only about production capacity. It is
            about managing sampling, controlling workmanship, keeping approvals
            clear, and helping buyers move orders forward with confidence.
          </p>
        </div>
        <div className="grid gap-4">
          {factoryStrengths.map((item) => (
            <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-stone-200">
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
