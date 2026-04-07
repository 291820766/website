"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,16,26,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="max-w-[15rem]">
          <div className="font-serif text-2xl tracking-[0.12em] text-white">BOYING</div>
          <div className="text-xs uppercase tracking-[0.24em] text-stone-300">
            Guangzhou Boying Garment
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
                  active ? "text-white" : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-[var(--navy)] transition hover:bg-[var(--accent-strong)]"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-white/10 px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-stone-100"
                onClick={() => setOpen(false)}
              >
                {item.label} / {item.cn}
              </Link>
            ))}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[var(--navy)]"
            >
              Start Inquiry
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
