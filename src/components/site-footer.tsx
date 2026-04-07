import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-serif text-2xl tracking-[0.12em] text-white">BOYING</p>
          <p className="max-w-xl text-sm leading-7 text-stone-300">
            Professional OEM ODM clothing manufacturer in Guangzhou, China,
            serving fashion brands, wholesalers, and private label buyers with
            dependable outerwear development and production.
          </p>
          <p className="text-sm text-stone-400">
            广州博颖制衣有限公司 | 专注外套开发与生产的国际服装制造商
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Sitemap
          </p>
          <div className="space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-stone-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contact
          </p>
          <div className="space-y-3 text-sm text-stone-300">
            <p>{siteConfig.location}</p>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-white">
              {siteConfig.email}
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="block hover:text-white">
              WhatsApp: {siteConfig.phone}
            </a>
            <a href={siteConfig.alibaba} target="_blank" rel="noreferrer" className="block hover:text-white">
              Alibaba Store
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
