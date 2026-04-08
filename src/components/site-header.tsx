"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation, siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(18,33,49,0.08)] bg-[rgba(250,246,240,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="max-w-[15rem]">
          <div className="font-serif text-2xl tracking-[0.12em] text-[var(--navy)]">BOYING</div>
          <div className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Guangzhou Boying Clothing
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex rounded-full border border-[rgba(18,33,49,0.14)] px-4 py-2 text-sm text-[var(--navy)] lg:hidden"
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
                  active ? "text-[var(--navy)]" : "text-[var(--muted)] hover:text-[var(--navy)]"
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
            className="rounded-full border border-[rgba(18,33,49,0.12)] px-5 py-2 text-sm font-semibold text-[var(--navy)] transition hover:border-[var(--navy)] hover:bg-white/70"
          >
            WhatsApp
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-[rgba(18,33,49,0.08)] px-6 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-[rgba(18,33,49,0.08)] bg-white/60 px-4 py-3 text-sm text-[var(--navy)]"
                onClick={() => setOpen(false)}
              >
                {item.label} / {item.cn}
              </Link>
            ))}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[var(--navy)] px-4 py-3 text-sm font-semibold text-white"
            >
              Start Inquiry
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
