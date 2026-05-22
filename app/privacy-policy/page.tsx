import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-orange-500 via-orange-400 to-pink-500 opacity-15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-12">
          <div className="rounded-[2rem] border border-orange-500/40 bg-slate-900/80 p-10 shadow-2xl shadow-orange-500/10 backdrop-blur-xl">
            <div className="max-w-3xl space-y-6">
              <p className="inline-flex rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-orange-400">
                Privacy Policy
              </p>

              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                AutoScanora Privacy Policy
              </h1>

              <p className="text-lg leading-8 text-slate-300">
                AutoScanora respects your privacy and is committed to protecting your personal information.
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
                  <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-7">
                  <p>We may collect:</p>
                  <ul className="list-inside list-disc space-y-2 pl-5">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Vehicle-related information</li>
                    <li>Billing details</li>
                    <li>Usage and device information</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">2</span>
                  <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
                </div>
                <div className="space-y-4 text-slate-300 leading-7">
                  <p>We use collected information to:</p>
                  <ul className="list-inside list-disc space-y-2 pl-5">
                    <li>Provide AI vehicle health scan services</li>
                    <li>Improve our platform</li>
                    <li>Process payments</li>
                    <li>Communicate with users</li>
                    <li>Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">3</span>
                  <h2 className="text-2xl font-semibold text-white">Data Security</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We implement reasonable technical and organizational measures to protect user data against unauthorized access, misuse, or disclosure.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">4</span>
                  <h2 className="text-2xl font-semibold text-white">Cookies</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Our website may use cookies and analytics technologies to improve user experience and website performance.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">5</span>
                  <h2 className="text-2xl font-semibold text-white">Third-Party Services</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We may use trusted third-party providers for payment processing, analytics, cloud hosting, and communication services.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">6</span>
                  <h2 className="text-2xl font-semibold text-white">Data Sharing</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We do not sell personal information to third parties. Information may only be shared where legally required or necessary to provide our services.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">7</span>
                  <h2 className="text-2xl font-semibold text-white">User Rights</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  Users may request access, correction, or deletion of their personal information by contacting us.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white">8</span>
                  <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
                </div>
                <p className="text-slate-300 leading-7">
                  We retain information only as long as necessary for operational, legal, and security purposes.
                </p>
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <Card className="rounded-3xl border border-orange-500/40 bg-slate-900/80 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Contact Information</CardTitle>
                <CardDescription className="text-slate-400">Privacy inquiries for AutoScanora.</CardDescription>
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
                  <p className="text-sm uppercase tracking-[0.2em] text-orange-400">Privacy Commitment</p>
                  <p className="mt-2 text-slate-100 leading-7">
                    Your personal data is protected with industry-standard security measures and is never shared without your consent.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-3xl border border-orange-500/30 bg-slate-900/60 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-white">Your Privacy Matters</h3>
              <p className="mt-4 text-slate-300 leading-7">
                We are committed to transparent data practices and give you control over your personal information.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
