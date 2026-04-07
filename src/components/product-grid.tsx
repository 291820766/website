import { sampleProducts } from "@/data/products";

export function ProductGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sampleProducts.map((product) => (
        <article
          key={product.sku}
          className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-deep)]">
                {product.category}
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[var(--navy)]">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{product.cn}</p>
            </div>
            <div className="rounded-full bg-[rgba(216,180,143,0.18)] px-3 py-1 text-xs font-semibold text-[var(--accent-deep)]">
              {product.sku}
            </div>
          </div>

          <dl className="mt-6 grid gap-3 text-sm text-[var(--muted)]">
            <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
              <dt>Fabric</dt>
              <dd className="text-right text-[var(--navy)]">{product.fabric}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
              <dt>MOQ</dt>
              <dd className="text-right text-[var(--navy)]">{product.moq}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-[var(--line)] pb-3">
              <dt>Season</dt>
              <dd className="text-right text-[var(--navy)]">{product.season}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Service</dt>
              <dd className="text-right text-[var(--navy)]">{product.service}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
