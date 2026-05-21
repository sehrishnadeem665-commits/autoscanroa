'use client';

import { motion } from 'framer-motion';
import { Brain, Shield, Target, Users, Globe, Cpu, ChartBar as BarChart3 } from 'lucide-react';

const VALUES = [
              { icon: Brain, title: 'Powered by AI', desc: 'Advanced machine learning converts vehicle images into meaningful condition insights in seconds.' },
  { icon: Shield, title: 'Trusted Accuracy', desc: 'Our analysis is designed for reliability, consistency, and continuous improvement with every scan.' },
  { icon: Target, title: 'Actionable Reports', desc: 'Each report highlights the most important issues and the next repair or maintenance steps to take.' },
  { icon: Users, title: 'Driver-First Design', desc: 'Built with input from car experts and everyday drivers who want clear, practical inspection results.' },
];

const TEAM = [
  { name: 'Dr. Sarah Mitchell', role: 'Chief AI Officer', desc: 'Former Tesla AI researcher with 10+ years in computer vision and automotive intelligence.' },
  { name: 'James Hartley', role: 'Head of Automotive', desc: 'Brings 20 years of hands-on experience in vehicle engineering and professional inspections.' },
  { name: 'Dr. Wei Zhang', role: 'Lead ML Engineer', desc: 'Specialises in deep learning models for image-based vehicle condition assessment.' },
  { name: 'Emma Richardson', role: 'Product Director', desc: 'Previously led product strategy for large-scale enterprise vehicle software platforms.' },
];

const METRICS = [
  { value: '50K+', label: 'Scans Completed' },
  { value: '95%', label: 'Model Accuracy' },
  { value: '2M+', label: 'Photos Analysed' },
  { value: '4.9/5', label: 'Average User Score' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-slate-100">
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_20%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-800 mb-6">
              <Globe className="w-4 h-4 text-orange-300" />
              <span className="text-sm text-orange-200 font-medium">Who We Are</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
              Trusted Vehicle Checks with <span className="gradient-text">Smart AI</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              AutoScanora turns everyday vehicle photos into fast, reliable condition reports using advanced AI and expert inspection insight.
              We make it easier for drivers, buyers, and sellers to understand a car's condition and take the right next step.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-24">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="text-3xl font-bold text-orange-200">{m.value}</div>
                <div className="text-sm text-slate-400 mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">What We <span className="gradient-text">Stand For</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl glass border border-slate-800 shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:shadow-[0_24px_90px_rgba(14,165,233,0.18)] transition-all card-shine">
                <div className="w-10 h-10 rounded-lg bg-slate-900/80 border border-orange-400/20 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400">{v.desc}</p>
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>
    </div>
  );
}
