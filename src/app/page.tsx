import Link from "next/link";
import type { Metadata } from "next";

import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

const homepageCategories = [
  {
    title: "Down Jackets",
    cn: "\u7fbd\u7ed2\u670d",
    description:
      "Outerwear programs developed for premium winter collections, combining insulation, silhouette, and commercial wearability for international fashion markets.",
    image: "/placeholders/down-jackets.svg",
  },
  {
    title: "Wool Coats",
    cn: "\u7f8a\u6bdb\u5927\u8863",
    description:
      "Tailored woolen overcoats created for elegant womenswear collections with a focus on shape, fabric handfeel, and refined finish.",
    image: "/placeholders/wool-coats.svg",
  },
  {
    title: "Windbreaker Jackets",
    cn: "\u98ce\u8863\u5939\u514b",
    description:
      "Lightweight windbreaker jackets suited to transitional collections, wholesale programs, and practical OEM ODM volume production.",
    image: "/placeholders/windbreakers.svg",
  },
  {
    title: "Fashion Dresses",
    cn: "\u65f6\u5c1a\u8fde\u8863\u88d9",
    description:
      "Fashion dresses and maxidresses designed to complement outerwear assortments and strengthen coordinated seasonal product offerings.",
    image: "/placeholders/dresses.svg",
  },
];

const capabilityItems = [
  {
    title: "Design Development",
    description:
      "We support style interpretation, construction planning, and commercial development for buyers refining a market-ready collection.",
  },
  {
    title: "Sampling",
    description:
      "Structured sample development helps buyers confirm fit, workmanship, silhouette, and styling before bulk production starts.",
  },
  {
    title: "Fabric Sourcing",
    description:
      "Fabric and trim suggestions are aligned with target price, product function, and collection positioning.",
  },
  {
    title: "Private Label Customization",
    description:
      "Labels, hangtags, care labels, packaging, and buyer-specific branding details can be integrated into the manufacturing process.",
  },
  {
    title: "Production and Quality Control",
    description:
      "Bulk production is supported by process control, inspection planning, and practical follow-up throughout the order cycle.",
  },
];

const advantages = [
  "12 years of export experience serving international buyers",
  "About 12,023 square meters of factory floor space",
  "OEM ODM service for fashion brands, wholesalers, and private label buyers",
  "Clear communication suited to international sourcing teams",
  "Fashion-focused product development for womenswear and outerwear programs",
];

export const metadata: Metadata = getMetadata({
  title: "Guangzhou Boying Clothing Co Ltd | OEM ODM Garment Manufacturer in China",
  description:
    "Guangzhou Boying Clothing Co Ltd is an OEM ODM garment manufacturer in China with 12 years of export experience, about 12,023 square meters of factory space, and key products including down jackets, woolen overcoats, windbreaker jackets, and maxidresses.",
});

export default function HomePage() {
  return (
    <div>
      <section className="section py-10 lg:px-8 lg:py-16">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/50 bg-[linear-gradient(135deg,rgba(18,33,49,1)_0%,rgba(18,33,49,0.95)_48%,rgba(36,53,69,0.95)_100%)] px-8 py-10 shadow-[0_40px_140px_rgba(18,33,49,0.24)] lg:px-12 lg:py-14">
          <div className="hero-grid">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                Guangzhou Boying Clothing Co Ltd
              </p>
              <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none text-white md:text-7xl">
                Premium fashion manufacturing for brands that expect elegance, control, and export-ready execution.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                Boying is an OEM ODM garment manufacturer in China specializing
                in down jackets, woolen overcoats, windbreaker jackets, and
                maxidresses for fashion brands, wholesalers, private label
                buyers, and custom buyers worldwide.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">
                {"\u5e7f\u5dde\u535a\u9896\u670d\u88c5\u6709\u9650\u516c\u53f8\u4e13\u6ce8\u5916\u5957\u4e0e\u5973\u88c5\u5f00\u53d1\u751f\u4ea7\uff0c\u4e3a\u5168\u7403\u54c1\u724c\u3001\u6279\u53d1\u5546\u3001\u79c1\u4eba\u54c1\u724c\u4e70\u5bb6\u548c\u5b9a\u5236\u91c7\u8d2d\u5546\u63d0\u4f9b\u7a33\u5b9a\u3001\u4e13\u4e1a\u7684OEM\u4e0eODM\u670d\u52a1\u3002"}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--accent-strong)]"
                >
                  Send Inquiry
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  View Products
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Export Experience</p>
                  <p className="mt-2 text-lg font-semibold text-white">12 Years</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Factory Space</p>
                  <p className="mt-2 text-lg font-semibold text-white">12,023 m²</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Annual Export Revenue</p>
                  <p className="mt-2 text-lg font-semibold text-white">USD 1.2M</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-[var(--accent)]/18 blur-3xl" />
              <div className="absolute -left-8 bottom-8 h-32 w-32 rounded-full bg-white/8 blur-3xl" />
              <PlaceholderImage
                src="/placeholders/hero-fashion.svg"
                alt="Premium showroom or collection placeholder"
                label="Replace with premium showroom, collection, or factory image"
                className="relative z-10 min-h-[500px] border-white/10 bg-white/12"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow={"Company Positioning / \u516c\u53f8\u5b9a\u4f4d"}
              title="A China OEM ODM garment manufacturer built for international sourcing."
              subtitle="Boying presents itself as a dependable manufacturing partner for buyers who need product development capability, export experience, and controlled factory execution."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
                OEM ODM Manufacturing
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                We support fashion brands, wholesalers, private label buyers,
                and custom buyers with OEM production and ODM development in key
                outerwear and womenswear categories.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
                Export Experience
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                With 12 years of export experience and annual export revenue of
                about USD 1.2 million, Boying is positioned to serve
                international B2B orders with practical responsiveness.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
                Factory Capability
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                About 12,023 square meters of factory floor space supports
                sample development, production planning, and quality control for
                outerwear and fashion apparel programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow={"Product Categories / \u4e3b\u8425\u4ea7\u54c1"}
          title="Fashion-driven categories for outerwear-led collection development."
          subtitle="Our main product categories are positioned for global buyers looking for a manufacturing partner in premium outerwear and coordinated apparel."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homepageCategories.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)]"
            >
              <PlaceholderImage
                src={product.image}
                alt={product.title}
                label={`${product.title} / ${product.cn}`}
                className="rounded-none border-0 shadow-none"
              />
              <div className="p-6">
                <h3 className="font-serif text-3xl text-[var(--navy)]">{product.title}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--accent-deep)]">
                  {product.cn}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24">
        <div className="rounded-[2.25rem] border border-[var(--line)] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.05)] lg:p-10">
          <SectionHeading
            eyebrow={"OEM ODM Capability / \u5b9a\u5236\u80fd\u529b"}
            title="Development and manufacturing capability tailored to professional buyers."
            subtitle="Our service model is built around the stages buyers care about most when selecting an apparel manufacturing partner."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {capabilityItems.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(244,237,228,0.6)] px-5 py-5"
              >
                <h3 className="font-serif text-2xl text-[var(--navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="glass-panel rounded-[2rem] border border-white/50 p-8">
            <SectionHeading
              eyebrow={"Why Choose Us / \u4e3a\u4ec0\u4e48\u9009\u62e9\u6211\u4eec"}
              title="Key strengths that matter to global B2B buyers."
              subtitle="Boying is positioned as a fashion-focused manufacturing partner that combines export experience, development support, and production discipline."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {advantages.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white px-6 py-5 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
              >
                <p className="text-sm leading-7 text-[var(--navy)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24">
        <div className="grid gap-8 overflow-hidden rounded-[2.25rem] bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_0.85fr] lg:p-10">
          <div>
            <SectionHeading
              eyebrow={"Factory & Quality / \u5de5\u5382\u4e0e\u8d28\u63a7"}
              title="Production, inspection, and quality consistency built into the process."
              subtitle="Our factory workflow is designed to support clearer production planning, stronger workmanship control, and more consistent bulk order execution for international buyers."
            />
            <div className="mt-8 grid gap-4">
              <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(244,237,228,0.7)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
                Production planning is organized to support timely order
                execution and practical communication during manufacturing.
              </div>
              <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(244,237,228,0.7)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
                Inspection checkpoints are applied across sample development,
                inline production stages, and final shipment review.
              </div>
              <div className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(244,237,228,0.7)] px-5 py-4 text-sm leading-7 text-[var(--navy)]">
                The goal is stable quality consistency that supports repeat
                orders and long-term buyer confidence.
              </div>
            </div>
          </div>

          <PlaceholderImage
            src="/placeholders/factory-qc.svg"
            alt="Factory and quality control placeholder"
            label="Replace with production floor, showroom, or inspection photography"
            className="min-h-[420px]"
          />
        </div>
      </section>

      <section className="section py-18 lg:px-8 lg:py-24 lg:pb-28">
        <div className="rounded-[2.4rem] border border-[var(--line)] bg-[var(--navy)] px-8 py-10 shadow-[0_30px_110px_rgba(18,33,49,0.18)] lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
                Inquiry / \u8be2\u76d8\u5408\u4f5c
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
                Ready to discuss custom development, private label production, or bulk orders?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300">
                Send us your target styles, quantity plan, timeline, and OEM ODM
                requirements. We will help you evaluate the next practical steps
                for development and production.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--accent-strong)]"
                >
                  Send Inquiry
                </Link>
                <a
                  href={siteConfig.alibaba}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/8"
                >
                  Visit Alibaba Store
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/6 px-6 py-5 text-sm text-stone-200"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-stone-400">Email</span>
                <span className="mt-2 block text-base text-white">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/6 px-6 py-5 text-sm text-stone-200"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-stone-400">WhatsApp</span>
                <span className="mt-2 block text-base text-white">{siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.alibaba}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.5rem] border border-white/10 bg-white/6 px-6 py-5 text-sm text-stone-200"
              >
                <span className="block text-xs uppercase tracking-[0.24em] text-stone-400">Alibaba Store</span>
                <span className="mt-2 block text-base text-white">gzboying.en.alibaba.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
