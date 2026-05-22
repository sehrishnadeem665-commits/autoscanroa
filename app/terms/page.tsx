import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12">
          <div className="rounded-[2rem] border border-orange-500/40 bg-slate-900/80 p-10 shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                Terms & Conditions
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                AutoScanora Terms of Use
              </h1>

              <p className="text-lg leading-8 text-slate-300">
                These Terms and Conditions govern your use of AutoScanora and our digital AI vehicle health scan services.
                By accessing or using our services, you agree to comply with these terms.
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
            <Card className="overflow-hidden border-orange-500/30 bg-slate-900/60">
              <CardHeader>
                <CardTitle className="text-orange-400">1. Company Information</CardTitle>
                <CardDescription className="text-slate-400">Business details for AutoScanora and NEXLIFY LABS LTD.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="rounded-3xl bg-orange-500/10 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-orange-400">Business Name</p>
                  <p className="mt-3 text-2xl font-semibold text-white">NEXLIFY LABS LTD</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-800/50 p-5 shadow-sm border border-slate-700">
                    <p className="text-sm text-slate-400">Website</p>
                    <p className="mt-2 text-lg font-semibold text-white">autoscanora.com</p>
                  </div>
                  <div className="rounded-3xl bg-slate-800/50 p-5 shadow-sm border border-slate-700">
                    <p className="text-sm text-slate-400">Contact email</p>
                    <p className="mt-2 text-lg font-semibold text-white">info@autoscanora.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section className="space-y-8">
              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">2</span>
                  <h2 className="text-2xl font-semibold text-white">Services</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  AutoScanora provides AI-powered vehicle diagnostic and health scan services through digital technologies and automated analysis tools.
                  These services are intended for informational and monitoring purposes only and should not replace professional mechanical inspections or certified automotive advice.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">3</span>
                  <h2 className="text-2xl font-semibold text-white">User Responsibilities</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-7">
                  <p>Users agree to:</p>
                  <ul className="list-inside list-disc space-y-2 pl-5">
                    <li>Provide accurate information</li>
                    <li>Use the platform lawfully</li>
                    <li>Not misuse, reverse engineer, or disrupt the platform</li>
                    <li>Not engage in fraudulent or harmful activity</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">4</span>
                  <h2 className="text-2xl font-semibold text-white">Payments</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  All payments for services are processed securely through approved payment providers.
                  Prices and service availability may change without prior notice.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">5</span>
                  <h2 className="text-2xl font-semibold text-white">Refund Policy</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Refund requests are handled according to our Refund Policy.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">6</span>
                  <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  All website content, branding, software, AI systems, logos, graphics, and materials are owned by NEXLIFY LABS LTD and may not be copied or reproduced without permission.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">7</span>
                  <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
                </div>
                <div className="space-y-3 text-slate-300 leading-7">
                  <p>AutoScanora and NEXLIFY LABS LTD are not liable for:</p>
                  <ul className="list-inside list-disc space-y-2 pl-5">
                    <li>Vehicle damage</li>
                    <li>Financial losses</li>
                    <li>Service interruptions</li>
                    <li>Diagnostic inaccuracies</li>
                    <li>Third-party misuse</li>
                  </ul>
                  <p>Users utilize our services at their own discretion and risk.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">8</span>
                  <h2 className="text-2xl font-semibold text-white">Account Suspension</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We reserve the right to suspend or terminate access to users involved in fraud, abuse, illegal activities, or violations of these Terms.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">9</span>
                  <h2 className="text-2xl font-semibold text-white">Privacy</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Your use of our services is also governed by our Privacy Policy.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">10</span>
                  <h2 className="text-2xl font-semibold text-white">Governing Law</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  These Terms shall be governed by the laws applicable to NEXLIFY LABS LTD’s registered jurisdiction.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <Card className="rounded-3xl border border-slate-200 bg-slate-950 text-white shadow-2xl">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Support and legal inquiries for AutoScanora.</CardDescription>
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
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">Guidance</p>
                  <p className="mt-2 text-slate-100 leading-7">
                    AutoScanora delivers helpful vehicle insights, but professional inspections remain the best way to confirm mechanical condition.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white">Why these Terms matter</h3>
              <p className="mt-4 text-slate-300 leading-7">
                These terms protect both you and AutoScanora by setting expectations for how our AI vehicle health scan service is used,
                how payments are handled, and how liability is limited.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}