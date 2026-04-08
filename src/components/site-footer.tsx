import Link from "next/link";

import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--navy)] text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="font-serif text-2xl tracking-[0.12em] text-white">BOYING</p>
          <p className="max-w-xl text-sm leading-7 text-stone-300">
            Guangzhou Boying Garment Co Ltd is an OEM ODM garment manufacturer
            in China serving fashion brands, wholesalers, private label buyers,
            and custom buyers with dependable development and production
            support.
          </p>
          <p className="text-sm text-stone-400">
            {"\u5e7f\u5dde\u535a\u9896\u5236\u8863\u6709\u9650\u516c\u53f8 | \u4e13\u6ce8\u5916\u5957\u4e0e\u65f6\u5c1a\u670d\u88c5\u5f00\u53d1\u751f\u4ea7\u7684\u56fd\u9645\u670d\u88c5\u5236\u9020\u5546"}
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
