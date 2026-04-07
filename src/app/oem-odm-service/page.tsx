import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { workflow } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "OEM ODM Service | Boying Garment",
  description:
    "Discover Guangzhou Boying Garment Co Ltd's OEM and ODM service workflow for brands, wholesalers, private label clients, and custom buyers.",
  path: "/oem-odm-service",
});

const capabilities = [
  "OEM production based on your tech pack, approved sample, size chart, and branding requirements.",
  "ODM support with style development, material suggestions, trim selection, and commercial product adaptation.",
  "Private label customization including labels, hangtags, care labels, packaging, and buyer-specific finishing details.",
  "Structured project communication covering sample comments, lead time coordination, order approval, and shipment follow-up.",
];

export default function ServicePage() {
  return (
    <div className="section py-14 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow={"OEM ODM Service / OEM ODM\u670d\u52a1"}
        title="A clear and practical development process for global apparel buyers."
        subtitle="Our service model is designed for buyers who need reliable execution, transparent communication, and a factory partner that can move efficiently from idea to bulk production."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--navy)] p-8 text-white">
          <h2 className="font-serif text-4xl">Service Scope</h2>
          <div className="mt-6 space-y-4">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4 text-sm leading-7 text-stone-200">
                {capability}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-stone-300">
            {"\u6211\u4eec\u65e2\u652f\u6301OEM\u6765\u6837\u6765\u7a3f\u751f\u4ea7\uff0c\u4e5f\u652f\u6301ODM\u5f00\u53d1\u670d\u52a1\uff0c\u5e2e\u52a9\u5ba2\u6237\u66f4\u9ad8\u6548\u5730\u63a8\u8fdb\u4ea7\u54c1\u5f00\u53d1\u4e0e\u5927\u8d27\u6267\u884c\u3002"}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workflow.map((item) => (
            <article
              key={item.step}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-semibold tracking-[0.25em] text-[var(--accent-deep)]">
                {item.step}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-[var(--navy)]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {item.cn}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="mt-14 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.05)]">
        <h2 className="font-serif text-4xl text-[var(--navy)]">How We Work with Buyers</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(246,240,232,0.72)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
            We confirm product details early to reduce revisions later and help
            buyers evaluate feasibility, cost level, and production direction.
          </div>
          <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(246,240,232,0.72)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
            We manage the workflow in a practical way, so approvals, comments,
            and production updates remain clear throughout the project.
          </div>
          <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(246,240,232,0.72)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
            Whether the buyer is building a new private label line or scaling an
            established collection, our process is designed to support repeatable
            production and stable quality.
          </div>
          <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(246,240,232,0.72)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
            {"\u901a\u8fc7\u6e05\u6670\u7684\u6c9f\u901a\u3001\u89c4\u8303\u7684\u6253\u6837\u6d41\u7a0b\u548c\u7a33\u5b9a\u7684\u5927\u8d27\u7ba1\u7406\uff0c\u6211\u4eec\u5e2e\u52a9\u5ba2\u6237\u66f4\u5b89\u5fc3\u5730\u63a8\u8fdb\u5408\u4f5c\u3002"}
          </div>
        </div>
      </section>
    </div>
  );
}
