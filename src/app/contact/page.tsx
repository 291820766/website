import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "Contact Boying Garment",
  description:
    "Contact Guangzhou Boying Garment Co Ltd for OEM ODM garment manufacturing inquiries, sample development, and bulk order support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section py-14 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[var(--navy)] p-8 text-white shadow-[0_32px_90px_rgba(20,34,51,0.24)]">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--accent)]">
            {"Contact / \u8054\u7cfb\u6211\u4eec"}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none md:text-6xl">
            Tell us what you want to develop, and we will help you move the project forward.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            If you are looking for a professional garment manufacturer for down
            jackets, wool coats, windbreaker jackets, or fashion dresses, send us
            your inquiry with product details, target quantity, timeline, and
            service needs.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            We welcome inquiries from brands, wholesalers, private label clients,
            and custom buyers who need a responsive and trustworthy production
            partner in China.
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            {"\u6b22\u8fce\u54c1\u724c\u65b9\u3001\u6279\u53d1\u5546\u3001\u81ea\u6709\u54c1\u724c\u5ba2\u6237\u548c\u5b9a\u5236\u91c7\u8d2d\u5546\u8054\u7cfb\u6211\u4eec\u3002\u8bf7\u63d0\u4ea4\u60a8\u7684\u4ea7\u54c1\u9700\u6c42\u3001\u6570\u91cf\u3001\u4ea4\u671f\u548c\u5408\u4f5c\u65b9\u5411\u3002"}
          </p>

          <div className="mt-8 space-y-4 text-sm text-stone-200">
            <a href={`mailto:${siteConfig.email}`} className="block rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4">
              Email: {siteConfig.email}
            </a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="block rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4">
              WhatsApp: {siteConfig.phone}
            </a>
            <a href={siteConfig.alibaba} target="_blank" rel="noreferrer" className="block rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4">
              Alibaba Store
            </a>
            <p className="rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4">
              Address: {siteConfig.location}
            </p>
          </div>
        </div>

        <div id="inquiry">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
