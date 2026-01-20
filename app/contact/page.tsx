'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trc-blue-700 via-trc-blue-800 to-trc-blue-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Begin Your Journey</h1>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Take the first step toward discovering your soul's work. We're here to guide you on your transformation path.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-4 text-center">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-trc-gray-600 mb-8 text-center">
              Complete the form below and we'll connect with you within 24 hours to discuss your coaching journey.
            </p>

            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-trc-gray-900 mb-4">Thank You!</h3>
                <p className="text-lg text-trc-gray-600 mb-6">
                  Your message has been received. We'll be in touch with you shortly to schedule your consultation.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-3 bg-trc-blue-600 text-white font-semibold rounded-lg hover:bg-trc-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                    <p className="text-red-700 text-center">{errorMessage}</p>
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Interest *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                  >
                    <option value="">Select an option...</option>
                    <option value="professional-coach-certification">Professional Coach Certification</option>
                    <option value="general-consultation">General Consultation</option>
                    <option value="more-information">More Information</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-trc-gray-900 mb-2">
                    Tell Us About Your Journey
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trc-blue-500 focus:border-transparent transition-all text-trc-gray-900"
                    placeholder="Share your goals, challenges, or what brings you here..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-trc-blue-600 to-trc-blue-700 text-white font-bold rounded-lg hover:from-trc-blue-700 hover:to-trc-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                <p className="text-xs text-trc-gray-500 text-center pt-2">
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-trc-blue-600 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-trc-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  apply.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_coaching_cta.png"
            alt="Contact background"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70 z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Contact us directly via email to schedule your consultation and take the first step toward discovering your soul's work.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg p-5 shadow-md text-center">
              <h3 className="text-base font-semibold text-trc-gray-900 mb-2">Email</h3>
              <a href="mailto:karen@tabularasacoaching.com" className="text-trc-blue-600 hover:underline text-base">
                karen@tabularasacoaching.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
