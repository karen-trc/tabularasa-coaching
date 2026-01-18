import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Coaching Services | Tabula Rasa Coaching',
  description: 'Professional coaching services including Executive Coaching, Professional Development, and Personal Transformation with Karen Florence.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trc_service_hero_a.png"
            alt="Coaching Services"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </div>

        {/* Dark overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 lg:pb-6">
            <div className="text-left lg:text-center">
              <p className="text-xl lg:text-2xl text-white mb-4 tracking-wide" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.6)'}}>
                Tabula Rasa Coaching
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
                Coaching Services
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-3xl lg:mx-auto" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
                Tailored coaching services designed to meet you where you are and support you in achieving your goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Organizational/Corporate Coaching */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Organizational/Corporate Coaching
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    My corporate clients include some of the largest companies on the planet, such as Cisco, Cisco Meraki and Ford. By the time an organization offers executive coaching to their leaders, those leaders have already demonstrated excellence as independent contributors and, most likely, as capable managers.
                  </p>
                  <p>
                    Consider what makes a great leader: clear communication, sound decision-making, intrinsic motivation, thoughtful risk assessment, and the ability to inspire others to follow their vision. These attributes share a common foundation: behavior. How a leader shows up, listens to their team, engages authentically, and develops and supports others—all flow from their personal presence and actions. Business decisions, strategy, risk-taking, and forward vision likewise stem from this same source.
                  </p>
                  <p>
                    In my 15 years of international executive leadership coaching, I have witnessed brilliant minds innovating and creating remarkable processes and products. I have also observed how even the most talented leaders can create unintended friction within organizations—not from lack of care for their teams, but from limited awareness of what drives their responses. This is my area of expertise.
                  </p>
                  <p>
                    While hindsight often reveals when we could have handled a situation differently, my work helps clients recognize patterns in real-time, understand the triggers behind their reactions, and cultivate new, more effective ways of responding. This kind of growth and development strengthens both organizations and the people within them, creating the foundation for advancement to the next level.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_corp_a.png"
                    alt="Organizational/Corporate Coaching"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Psychosynthesis Counseling */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_psyco_a.png"
                    alt="Psychosynthesis Counseling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
              <div className="order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Psychosynthesis Counseling
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    Psychosynthesis is a psychology of hope that honors both our personal history and our purposeful future, empowering individuals to reorient their lives toward meaning and values. It has also been described as a psychology of the Self, recognizing that human experience encompasses matters of soul and spirit alongside physical sensations, emotional experiences, thoughts, and mental processes.
                  </p>
                  <p>
                    In weekly, one-hour sessions, I support my clients in exploring life's challenges on all levels to cultivate balance and fulfillment. Through this process, clients can explore what they believe to be true about themselves, the world, and the spiritual dimensions of their experience. Gaining personal insight into their own personality helps clients understand the "why" behind their behavior and opens the door to conscious, well-informed decision-making and life choices.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Transformational Coaching */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-trc-gray-900 mb-6">
                  Personal Transformational Coaching
                </h2>
                <div className="space-y-4 text-lg text-trc-gray-700 leading-relaxed">
                  <p>
                    From the moment we take our first breath, we begin learning how to navigate the world and the circumstances into which we are born. We are all enrolled in Earth School. Our challenge is to learn how to move through our lives and circumstances in ways that allow us to create the lives we want to live.
                  </p>
                  <p>
                    Whether we are born into affluence, poverty, or somewhere in between, everyone faces challenges along the way. The journey of our lives is filled with bends and turns, highs and lows, hurts and joys. We receive the whole wonderful catastrophe whether we like it or not.
                  </p>
                  <p>
                    In personal transformational coaching, we embark on a journey of deep self-examination to transform your relationships, career, health, and spiritual life. You'll become aware of what you believe, how those beliefs influence the way you show up in the world, and whether your beliefs and behaviors enhance or limit the life you want to live.
                  </p>
                  <p>
                    When I work with clients, I offer insights into how we are naturally wired to behave. My belief is that when we understand how our brains work, we can release the self-judgment we carry for so many things. This is a profound journey of self-discovery that will strengthen your confidence, self-awareness, and capacity for wise life decisions.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/trc_service_personal.png"
                    alt="Personal Transformational Coaching"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
            Ready to Begin Your<br />Transformation Journey?
          </h2>
          <p className="text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
            Take the first step toward lasting change. Schedule a free consultation to discover how coaching can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-white text-trc-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
