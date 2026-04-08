import type { Metadata } from "next";

import { PlaceholderImage } from "@/components/placeholder-image";
import { ProductGrid } from "@/components/product-grid";
import { SectionHeading } from "@/components/section-heading";
import { productCategories } from "@/data/products";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "Product Categories | Boying Garment",
  description:
    "Explore Guangzhou Boying Garment Co Ltd's main product categories including down jackets, wool coats, windbreaker jackets, and fashion dresses.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="section py-14 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow={"Products / \u4ea7\u54c1\u4e2d\u5fc3"}
        title="Main product categories for fashion brands, wholesalers, and private label buyers."
        subtitle="Our product range is built around categories with strong global demand, balancing fashion direction, manufacturing practicality, and commercial potential for export business."
      />

      <div className="mt-10 grid gap-8">
        {productCategories.map((product, index) => (
          <section
            key={product.title}
            className="grid gap-6 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <PlaceholderImage
                src={product.image}
                alt={product.title}
                label={`Replace with ${product.title.toLowerCase()} collection photography`}
                className="min-h-[340px]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-deep)]">
                {product.cn}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-[var(--navy)]">{product.title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                {product.description}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                Suitable for OEM production, ODM development, and private label
                customization with buyer-specific requirements for fabric,
                trims, labels, packaging, and target market positioning.
              </p>
            </div>
          </section>
        ))}
      </div>

      <section className="mt-14">
        <SectionHeading
          eyebrow={"Sample Product Data / \u6837\u54c1\u6570\u636e"}
          title="A sample presentation format that supports faster buyer evaluation."
          subtitle="These sample SKUs show how product information can be organized clearly for quotation discussions, development review, and sourcing communication."
        />
        <div className="mt-10">
          <ProductGrid />
        </div>
      </section>
    </div>
  );
}
