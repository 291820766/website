import type { Metadata } from "next";

import { PlaceholderImage } from "@/components/placeholder-image";
import { SectionHeading } from "@/components/section-heading";
import { qualityPoints } from "@/data/site";
import { getMetadata } from "@/lib/metadata";

export const metadata: Metadata = getMetadata({
  title: "Factory Quality Control | Boying Garment",
  description:
    "Review Guangzhou Boying Garment Co Ltd's factory capability and quality control process for OEM ODM garment production.",
  path: "/factory-quality-control",
});

const factoryBlocks = [
  {
    title: "Sample Development",
    cn: "样衣开发",
    description:
      "Pattern review, sample making, and workmanship validation help buyers approve styles more efficiently before bulk production starts.",
    image: "/placeholders/sample-room.svg",
  },
  {
    title: "Production Management",
    cn: "生产管理",
    description:
      "Production planning and line control help keep timelines clearer, workmanship more stable, and communication more practical during execution.",
    image: "/placeholders/production-floor.svg",
  },
  {
    title: "Final Inspection",
    cn: "尾查与出货",
    description:
      "Finished goods are checked for appearance, measurement, and packing consistency before shipment to better match buyer expectations.",
    image: "/placeholders/final-inspection.svg",
  },
];

export default function FactoryPage() {
  return (
    <div className="section py-14 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow={"Factory Quality Control / \u5de5\u5382\u4e0e\u8d28\u63a7"}
        title="Factory management and quality control designed for reliable export production."
        subtitle="Global buyers need more than product ideas. They need a manufacturing partner that can control quality, manage production carefully, and communicate clearly throughout the order process."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {factoryBlocks.map((block) => (
          <article
            key={block.title}
            className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
          >
            <PlaceholderImage
              src={block.image}
              alt={block.title}
              label={`Replace with ${block.title.toLowerCase()} photography`}
              className="rounded-none border-0 shadow-none"
            />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-deep)]">
                {block.cn}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--navy)]">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{block.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border border-[var(--line)] bg-[rgba(255,255,255,0.82)] p-8">
        <h2 className="font-serif text-4xl text-[var(--navy)]">Quality Control Checklist</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
          These checkpoints show the type of control global B2B buyers expect
          from a professional garment manufacturer handling export orders and
          repeat production programs.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {qualityPoints.map((point) => (
            <div key={point} className="rounded-[1.25rem] border border-[var(--line)] bg-white px-5 py-4 text-sm leading-7 text-[var(--navy)]">
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
