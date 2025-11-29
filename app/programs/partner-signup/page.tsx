'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const labelStyle = {
  fontFamily: 'var(--font-mono)',
  letterSpacing: '0.08em',
};

type FormState = {
  company: string;
  contact: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  program: string;
  volume: string;
  interests: string;
  challenges: string;
  success: string;
};

const initialState: FormState = {
  company: '',
  contact: '',
  role: '',
  email: '',
  phone: '',
  location: '',
  program: '',
  volume: '',
  interests: '',
  challenges: '',
  success: '',
};

export default function PartnerSignupPage() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData(initialState);
  };

  return (
    <div className="bg-[var(--white)] text-[var(--black)]">
      {/* Hero */}
      <section className="pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 glow-subtle" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="divider mb-8" />
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)] mb-4" style={labelStyle}>
              Programs · Partner Application
            </p>
            <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              Partner Sign-Up
            </h1>
            <p className="lead max-w-3xl">
              Share your goals for animal feed or biomass collaborations. MartinSupplies &amp; Co will review and respond with next steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-white border border-[var(--gray-200)] shadow-sm p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center max-w-xl mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--yellow)] flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h2 className="text-3xl mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  Thank you
                </h2>
                <p className="text-[var(--gray-600)] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                  Our team at MartinSupplies &amp; Co will review your submission and reach out with next steps.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-[var(--gray-500)] hover:text-[var(--black)] transition-colors"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  { label: 'Company Name *', name: 'company', type: 'text', placeholder: 'Company or organization' },
                  { label: 'Contact Person *', name: 'contact', type: 'text', placeholder: 'Full name' },
                  { label: 'Role / Title *', name: 'role', type: 'text', placeholder: 'e.g., Procurement Director' },
                  { label: 'Email *', name: 'email', type: 'email', placeholder: 'name@company.com' },
                  { label: 'Phone / WhatsApp', name: 'phone', type: 'text', placeholder: '+1 713 555 0123' },
                  { label: 'Country & City *', name: 'location', type: 'text', placeholder: 'Houston, United States' },
                ].map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={(formData as Record<string, string>)[field.name]}
                      onChange={handleChange}
                      required={field.label.includes('*')}
                      placeholder={field.placeholder}
                      suppressHydrationWarning={field.type === 'email'}
                      className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    />
                  </div>
                ))}

                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] focus:outline-none focus:border-[var(--black)] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Select a program</option>
                    <option value="animal-feed">Animal Feed Program</option>
                    <option value="biomass">Biomass & Energy Program</option>
                    <option value="both">Interested in both</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                    Expected Annual Volume or Scale
                  </label>
                  <input
                    type="text"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="e.g., 4 containers / year, 500 tons, pilot phase"
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="lg:col-span-2 flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                    Products or Residues of Interest *
                  </label>
                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="Corn, soy, cassava peels, Penja pepper husks, etc."
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="lg:col-span-2 flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                    Current Challenges
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Share supply gaps, quality needs, logistic constraints, etc."
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="lg:col-span-2 flex flex-col">
                  <label className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)] mb-2" style={labelStyle}>
                    What would a successful partnership look like for you?
                  </label>
                  <textarea
                    name="success"
                    value={formData.success}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your KPIs, quality benchmarks, and collaboration expectations."
                    className="w-full px-4 py-3 border border-[var(--gray-200)] bg-white text-[var(--black)] placeholder-[var(--gray-400)] focus:outline-none focus:border-[var(--black)] transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>

                <div className="lg:col-span-2 flex justify-end">
                  <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
                    {isSubmitting ? 'Submitting...' : 'Submit application'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

