import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12">
          <div className="rounded-[2rem] border border-orange-500/40 bg-slate-900/80 p-10 shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                Refund Policy
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                AutoScanora Refund Policy
              </h1>

              <p className="text-lg leading-8 text-slate-300">
                At AutoScanora, customer satisfaction is important to us. Review our refund terms below.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-400">Effective Date: May 22, 2026</span>
                <span className="inline-flex items-center rounded-full bg-orange-500/20 px-4 py-2 text-sm font-medium text-orange-300">
                  NEXLIFY LABS LTD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-8">
            <section className="space-y-8">
              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">1</span>
                  <h2 className="text-2xl font-semibold text-white">Digital Services</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  AutoScanora provides digital AI-powered vehicle diagnostic and scanning services. Due to the nature of digital services, completed scans and delivered reports may be non-refundable once successfully processed.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">2</span>
                  <h2 className="text-2xl font-semibold text-white">Eligibility for Refunds</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-7">
                  <p>Refunds may be considered in cases of:</p>
                  <ul className="list-inside list-disc space-y-2 pl-5">
                    <li>Duplicate payments</li>
                    <li>Technical failure preventing service delivery</li>
                    <li>Incorrect charges</li>
                    <li>Failure to provide purchased service</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">3</span>
                  <h2 className="text-2xl font-semibold text-white">Refund Request Period</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Customers may request refunds within 7 days of purchase.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">4</span>
                  <h2 className="text-2xl font-semibold text-white">Processing Time</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Approved refunds are generally processed within 5–10 business days depending on the payment provider.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">5</span>
                  <h2 className="text-2xl font-semibold text-white">Abuse & Fraud</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We reserve the right to refuse refunds in cases involving abuse, fraudulent activity, chargeback misuse, or violation of our Terms.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <Card className="rounded-3xl border border-orange-500/40 bg-slate-900/80 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-slate-400">Refund requests and support for AutoScanora.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-3xl bg-slate-900 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Email</p>
                  <p className="mt-2 text-lg font-semibold">info@autoscanora.com</p>
                </div>
                <div className="rounded-3xl bg-slate-900 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Website</p>
                  <p className="mt-2 text-lg font-semibold">autoscanora.com</p>
                </div>
                <div className="rounded-3xl bg-orange-500/10 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">Support</p>
                  <p className="mt-2 text-slate-100 leading-7">
                    Contact our support team for refund inquiries, and we'll respond promptly with a resolution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white">Our Commitment</h3>
              <p className="mt-4 text-slate-300 leading-7">
                We're committed to fair refund practices and ensuring your satisfaction with AutoScanora services.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
