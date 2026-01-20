'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jon L.",
      title: "Business-First Cybersecurity & Risk Leader | Bridging Security & Innovation | ex-BMS | ex-Marriott | ex-KPMG",
      quote: "Karen was the first career coach I worked with, and she made a real difference in my career journey. After being with the same company for over 15 years, I had forgotten how to interview and even how to obtain leads. Karen helped me get out of my shell and guided me towards a career change that I had wanted for a long time but had been unsuccessful in achieving on my own. She really helped me look inside myself to find the candidate I knew was there and that companies were looking for. Karen's expertise, encouragement, and genuine support were invaluable. I highly recommend Karen to anyone looking to make a significant career change and rediscover their professional potential."
    },
    {
      name: "Rana G.",
      title: "Sales Vendor Manager at Uber | Driving BPO Performance | CX Excellence | Cost Efficiency | Expert in Vendor & Stakeholder Management | Multilingual Professional",
      quote: "Before I met Karen and we started our sessions I was in a quite grim space. I had high anxiety before and during my interviews that was impeding my progress. It also affected my perception of my professional achievements which in return didn't help my interview preparation. From the very first session I had an amazing experience with a lot of guidance. Karen was able to shine the light on what needs to be worked on, but also she inspired me to go on personal discovery journey to understand the reason behind my anxiety. I was supported along the way on every step and not only I gained confidence I also secured two job offers and both for my dream position I worked towards for several years. It took Karen a month to turnaround the outcome for me and she equipped me with life lasting tools to continue growing. Highly recommend Karen as her approach is personal and tailored to current needs and circumstances."
    },
    {
      name: "Marc K.",
      title: "Founding Partner of Sapiens Advisors",
      quote: "Karen has helped me immeasurably. She is a great coach. My consulting practice has tripled within 6 months of starting to work with her. Just as importantly, if not more importantly, she has been instrumental in helping me explore and realize what I really want to do and what type of life I want to lead."
    },
    {
      name: "Demiss K.",
      title: "Vice Chairman of the board of directors at SHEMU Group of companies",
      quote: "I had no idea what life coaching was all about. However, after meeting Karen and worked with her, not only have learned what it was but benefited greatly in finding my purpose in life. I still seek her guidance time to time after taking an active role playing the game that she had vividly helped me see…"
    },
    {
      name: "María L.",
      title: "Founder & CEO Ronin PR",
      quote: "Karen helped me to improve my company development by strengthening my skills through her coaching. She understands the problem from deep inside, doesn't matter if it's a personal matter that is affecting the decision making or it has to do with an operational process inside the business. She guided me through a path of clarification to understand objectively the circumstances that were affecting my business."
    },
    {
      name: "Dennis H.",
      title: "President Teamster Local 773",
      quote: "I have known Karen personally for years. When she spoke to me about a coaching session, I was skeptical. After one session, I was a believer. She focused my attention on my goals, and showed me a clear path to achieve them. Above all, she made think about the direction my life was taking. Karen is a great communicator and motivator and would be a valuable resource to anyone looking for an executive coach."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Same style as Contact page */}
      <section className="bg-gradient-to-br from-trc-blue-700 via-trc-blue-800 to-trc-blue-900 text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl lg:text-2xl text-white mb-4 tracking-wide">
            Tabula Rasa Coaching
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">Question the Unquestionable</h1>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            Professional 1:1 coaching with Karen Florence, CPC, CPRWC
          </p>
        </div>
      </section>

      {/* My Approach Section - Light orange background like Career Coaching card */}
      <section id="about" className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-orange-100/50 border-t-4 border-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            My Approach
          </h2>
          <div className="space-y-5 text-base lg:text-lg text-gray-700 leading-relaxed">
            <p>
              I believe in the resiliency of the human spirit. Human Beings can rise above the circumstances of their birth and overcome great trauma and hardship to become whole and resourceful contributors to our planet. Why some people soar because of their experiences and others get stuck for a lifetime has been the prevailing area of study of my life's journey, and informs the work I do with my clients.
            </p>
            <p>
              The question is not "What is wrong with me?", the question is "What happened to me? And how has that shaped my life?". The answer to this question influences every day of your life, both personally and professionally.
            </p>
            <p>
              The behavior we are experiencing today is always linked back to an experience in our past. My work is to help my clients discover that link, re-examine the beliefs that they have created, and evaluate if this behavior enhances their lives or creates a barrier to the life they want to live today.
            </p>
            <p className="font-semibold text-gray-900">
              I create a warm, safe, non-judgmental space to explore these important questions.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Services Section */}
      <section id="services" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6">
              Coaching Services
            </h2>
            <p className="text-xl text-trc-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tailored coaching services designed to meet you where you are and support you in achieving your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Executive Coaching */}
            <div className="bg-gradient-to-br from-trc-blue-50 to-trc-blue-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-trc-blue-100">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-blue-500 to-trc-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Executive Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Leadership development and effectiveness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Executive presence and influence</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Organizational coaching and team development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Strategic thinking and decision-making</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-trc-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Managing complex workplace dynamics</span>
                </li>
              </ul>
            </div>

            {/* Career Coaching */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100">
              <div className="w-20 h-20 bg-gradient-to-br from-trc-gold-500 to-trc-gold-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Career Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Career transitions and reinvention</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Professional advancement strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Job search and interview preparation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Personal branding and networking</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Career clarity and goal setting</span>
                </li>
              </ul>
            </div>

            {/* Personal Coaching */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-trc-gray-900 mb-4 text-center">
                Personal Transformation Coaching
              </h3>
              <ul className="space-y-2.5 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Life transitions and major changes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Recovery and wellness coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Personal growth and fulfillment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Work-life balance and integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-trc-gray-700">Building resilience and self-awareness</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-trc-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-trc-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Slider */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-trc-gray-900 mb-6">
              Recent Testimonials
            </h2>
          </div>

          {/* Testimonial Slider - One Card at a Time */}
          <div className="relative mb-20">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-trc-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-trc-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Single Card Container */}
            <div className="overflow-hidden">
              {/* Sliding Cards - One at a time */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white border-2 border-trc-blue-200 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-lg h-[520px] sm:h-[480px] lg:h-[420px] flex flex-col relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 left-5 sm:left-8">
                        <svg className="w-10 h-10 sm:w-12 sm:h-12 text-trc-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      {/* Quote Text */}
                      <p className="text-sm sm:text-lg text-trc-gray-700 leading-relaxed font-light italic mt-5 sm:mt-6 flex-grow overflow-y-auto">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      {/* Author Info */}
                      <div className="pt-4 sm:pt-6 border-t-2 border-trc-gray-200 mt-3 sm:mt-4">
                        <p className="text-lg font-bold text-trc-gray-900">{testimonial.name}</p>
                        <p className="text-sm sm:text-base text-trc-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-trc-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Client Organizations */}
          <div className="text-center overflow-x-auto">
            <p className="text-sm font-semibold text-trc-gray-500 uppercase tracking-wide mb-12">
              Trusted by Professionals From
            </p>
            <div className="flex justify-center items-center gap-x-12 lg:gap-x-16 min-w-max mx-auto px-4">
              <Image
                src="/images/Cisco-logo-4.png"
                alt="Cisco"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/bbdo_worldwide_logo.jpeg"
                alt="BBDO Worldwide"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/ford-logo.jpeg"
                alt="Ford"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/samsara_logo.png"
                alt="Samsara"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/Verkada-Logo-300x91.png"
                alt="Verkada"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/disney-channel-logo.png"
                alt="Disney Channel"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/statefarm_logo.png"
                alt="State Farm"
                width={160}
                height={64}
                className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_coaching_cta.png"
            alt="Coaching session background"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)', whiteSpace: 'normal', wordBreak: 'normal'}}>
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-8 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
              Take the first step toward lasting change. Schedule a free consultation to discover
              how coaching can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-trc-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-lg"
            >
              Book a Free Sample Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
