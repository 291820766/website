import Link from "next/link";
import type { Metadata } from "next";

import { PlaceholderImage } from "@/components/placeholder-image";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { productCategories } from "@/data/products";
import { companyFacts, qualityPoints, strengths, workflow } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "OEM ODM Clothing Manufacturer in China | Guangzhou Boying Garment",
  description:
    "Guangzhou Boying Garment Co Ltd is a professional OEM ODM garment manufacturer specializing in down jackets, wool coats, windbreaker jackets, and fashion dresses for global B2B buyers.",
});

export default function HomePage() {
  return (
    <div>
      <section className="section py-10 lg:px-8 lg:py-16">
        <div className="hero-grid overflow-hidden rounded-[2rem] border border-white/45 bg-[var(--navy)] px-8 py-10 shadow-[0_35px_120px_rgba(20,34,51,0.28)] lg:px-12 lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--accent)]">
              Guangzhou Boying Garment Co Ltd
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none text-white md:text-7xl">
              Premium OEM and ODM garment manufacturing for global fashion buyers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              We help brands, wholesalers, private label clients, and custom
              buyers develop and produce commercially strong outerwear and
              fashion apparel with reliable factory execution in China.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-400">
              {"\u5e7f\u5dde\u535a\u9896\u5236\u8863\u6709\u9650\u516c\u53f8\u4e13\u6ce8\u4e8e\u5916\u5957\u4e0e\u65f6\u5c1a\u670d\u88c5\u5f00\u53d1\u751f\u4ea7\uff0c\u4e3a\u5168\u7403\u5ba2\u6237\u63d0\u4f9b\u4e13\u4e1a\u3001\u7a33\u5b9a\u3001\u53ef\u4fe1\u8d56\u7684OEM\u4e0eODM\u5236\u9020\u670d\u52a1\u3002"}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact#inquiry"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--accent-strong)]"
              >
                Send Your Inquiry
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/8"
              >
                View Product Categories
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {companyFacts.map((fact) => (
                <div key={fact.label} className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[var(--accent)]/40 blur-3xl" />
            <PlaceholderImage
              src="/placeholders/hero-fashion.svg"
              alt="Outerwear manufacturer visual placeholder"
              label="Replace with premium showroom, collection, or factory image"
              className="relative z-10 min-h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="section py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={"Product Categories / \u6838\u5fc3\u4ea7\u54c1"}
          title="Core categories developed for outerwear-led fashion collections."
          subtitle="Our main product focus includes down jackets, wool coats, windbreaker jackets, and fashion dresses for export business, private label development, and volume production."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((product) => (
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

      <section className="section py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[2rem] border border-white/50 p-8">
            <SectionHeading
              eyebrow={"Why Boying / \u4e3a\u4ec0\u4e48\u9009\u62e9\u535a\u9896"}
              title="A professional and trustworthy factory partner for international apparel sourcing."
              subtitle="Our positioning is built around product focus, dependable execution, responsive communication, and a presentation style that supports serious B2B buyer evaluation."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
                  {item.cn}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-[var(--navy)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow={"Sample Styles / \u6837\u54c1\u793a\u4f8b"}
            title="Sample product presentation for brands, buyers, and private label sourcing teams."
            subtitle="This section shows how Boying can present product information clearly for quotations, development discussions, and range planning."
          />
          <Link
            href="/products"
            className="hidden rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-white lg:inline-flex"
          >
            Explore More Products
          </Link>
        </div>
        <ProductGrid />
      </section>

      <section className="section py-16 lg:px-8">
        <SectionHeading
          eyebrow={"OEM ODM Workflow / \u5408\u4f5c\u6d41\u7a0b"}
          title="A clear workflow designed for efficient buyer communication and dependable production."
          subtitle="From requirement confirmation to shipment, our process is structured to reduce misunderstanding, improve approval speed, and support repeat orders."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
            >
              <p className="text-sm font-semibold tracking-[0.25em] text-[var(--accent-deep)]">
                {item.step}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-[var(--navy)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
                {item.cn}
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section py-16 lg:px-8 lg:pb-24">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_0.85fr] lg:p-10">
          <div>
            <SectionHeading
              eyebrow={"Factory & Quality / \u5de5\u5382\u4e0e\u54c1\u8d28"}
              title="Factory discipline and quality control that support long-term buyer confidence."
              subtitle="For global B2B buyers, consistent workmanship and process control matter as much as product design. Our quality checkpoints are built to support stable bulk production."
            />
            <div className="mt-8 grid gap-4">
              {qualityPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.25rem] border border-[var(--line)] bg-[rgba(246,240,232,0.72)] px-5 py-4 text-sm text-[var(--navy)]"
                >
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/factory-quality-control"
                className="rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-soft)]"
              >
                Learn About Factory Strength
              </Link>
              <Link
                href="/contact#inquiry"
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--navy)] transition hover:bg-stone-50"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          <PlaceholderImage
            src="/placeholders/factory-qc.svg"
            alt="Factory and quality control placeholder"
            label="Replace with workshop, inspection, sampling, or production-line photography"
            className="min-h-[420px]"
          />
        </div>
      </section>
    </div>
  );
}
