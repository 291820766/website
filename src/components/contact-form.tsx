"use client";

import { FormEvent, useState } from "react";

type FormState = {
  loading: boolean;
  success?: string;
  error?: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>({ loading: false });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ loading: true });

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit inquiry.");
      }

      event.currentTarget.reset();
      setState({ loading: false, success: data.message || "Inquiry submitted." });
    } catch (error) {
      setState({
        loading: false,
        error: error instanceof Error ? error.message : "Submission failed.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[var(--navy)]">
          <span>Name</span>
          <input name="name" required className="input-field" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm text-[var(--navy)]">
          <span>Company</span>
          <input name="company" required className="input-field" placeholder="Brand or company" />
        </label>
        <label className="space-y-2 text-sm text-[var(--navy)]">
          <span>Email</span>
          <input type="email" name="email" required className="input-field" placeholder="name@company.com" />
        </label>
        <label className="space-y-2 text-sm text-[var(--navy)]">
          <span>WhatsApp</span>
          <input name="whatsapp" className="input-field" placeholder="+86 / +1 / +44" />
        </label>
        <label className="space-y-2 text-sm text-[var(--navy)] md:col-span-2">
          <span>Interested Products</span>
          <input
            name="products"
            className="input-field"
            placeholder="Down jackets, wool coats, dresses..."
          />
        </label>
        <label className="space-y-2 text-sm text-[var(--navy)] md:col-span-2">
          <span>Inquiry Details / 需求说明</span>
          <textarea
            name="message"
            required
            rows={5}
            className="input-field resize-none"
            placeholder="Tell us your collection, quantity, timeline, and OEM/ODM needs."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          We will use this information only to respond to your manufacturing inquiry.
        </p>
        <button
          type="submit"
          disabled={state.loading}
          className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--navy-soft)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.loading ? "Sending..." : "Send Inquiry"}
        </button>
      </div>

      {state.success ? <p className="mt-4 text-sm text-emerald-700">{state.success}</p> : null}
      {state.error ? <p className="mt-4 text-sm text-rose-700">{state.error}</p> : null}
    </form>
  );
}
