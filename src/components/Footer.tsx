import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Tabula Rasa Coaching</h3>
            <p className="text-white leading-relaxed">
              Tabula Rasa Coaching Training Academy (TRC Training Academy), spearheaded by the experienced and acclaimed Karen Florence, a certified professional coach (CPC), certified professional recovery and wellness coach (CPRWC), and Psychosynthesis Counselor (PC). Discover a transformative journey in our comprehensive coach training programs, empowering you to excel in the art of coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-white/90 hover:text-white transition-colors">
                  About Karen
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-white/90 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-white/90 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-white/90">
              <li>
                <a href="mailto:karen@tabularasacoaching.com" className="hover:text-white transition-colors">
                  karen@tabularasacoaching.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Tabula Rasa Coaching. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Professional coaching services with Karen Florence, CPC, CPRWC
          </p>
        </div>
      </div>
    </footer>
  );
}
