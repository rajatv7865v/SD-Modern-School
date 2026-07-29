import Link from 'next/link';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { homeGalleryPreview } from '@/lib/studentGallery';

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <Carousel />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to S.D Modern School
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are committed to providing quality education and nurturing future leaders through innovative 
              teaching methods and holistic development. Our mission is to create an environment where every 
              student can achieve their full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="bg-primary-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/admissions"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* School Brochure */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-gray-50">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.35) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-600 mb-3">
              Prospectus
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              School Brochure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our brochure cover — front and back pages, sized to match the original layout.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 max-w-7xl mx-auto">
            {[
              { title: 'Front Cover', src: '/images/Front.pdf' },
              { title: 'Back Cover', src: '/images/Back.pdf' },
            ].map((doc) => (
              <article
                key={doc.src}
                className="group relative rounded-2xl bg-white p-3 md:p-4 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.45)] ring-1 ring-gray-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-24px_rgba(15,23,42,0.5)]"
              >
                <div className="mb-3 flex items-center justify-between gap-3 px-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{doc.title}</h3>
                    <p className="text-xs text-gray-500">Landscape brochure page</p>
                  </div>
                  <a
                    href={doc.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </a>
                </div>

                {/* Exact cover ratio: 1368 × 936 */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 ring-1 ring-inset ring-black/5 aspect-[1368/936]">
                  <iframe
                    src={`${doc.src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={`School brochure ${doc.title}`}
                    className="absolute inset-0 h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/40" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Modern Laboratories</h3>
              <p className="text-gray-600 mb-4">
                Well-equipped laboratories with all instruments as per UP Board norms. All setups are always 
                in working order to ease the experimental practice of students.
              </p>
              <Link href="/academics" className="text-primary-600 font-semibold hover:text-primary-700">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hybrid Library</h3>
              <p className="text-gray-600 mb-4">
                Hybrid library with separate sections for juniors, middle classes, and teachers. Holds a rich 
                collection of printed as well as electronic resources.
              </p>
              <Link href="/academics" className="text-primary-600 font-semibold hover:text-primary-700">
                Read More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Transportation</h3>
              <p className="text-gray-600 mb-4">
                Well-managed transportation system. Each bus driver and conductor is well-trained and 
                equipped for any kind of contingency.
              </p>
              <Link href="/about" className="text-primary-600 font-semibold hover:text-primary-700">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">60+</div>
              <div className="text-xl">Expert Faculty</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">1500+</div>
              <div className="text-xl">Active Students</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">10000+</div>
              <div className="text-xl">Successful Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest News</h2>
            <Link href="/news" className="text-primary-600 font-semibold hover:text-primary-700">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Annual Science Fair 2024', date: 'March 20, 2024', category: 'Events' },
              { title: 'New Facilities Inauguration', date: 'March 15, 2024', category: 'Facilities' },
              { title: 'Math Competition Victory', date: 'March 10, 2024', category: 'Achievements' },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <div className="text-sm text-primary-600 font-semibold mb-4">{item.category}</div>
                <Link href="/news" className="text-primary-600 font-semibold hover:text-primary-700 text-sm">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Our <span className="text-primary-600">Photo Gallery</span>
      </h2>
      <div className="w-24 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
      <p className="text-gray-500 mt-4 max-w-xl mx-auto">
        Explore moments captured from our recent events and activities.
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {homeGalleryPreview.map((item, index) => (
        <Link
          key={item}
          href="/gallery"
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          {/* Image */}
          <Image
            src={item}
            alt={`School gallery ${index + 1}`}
            width={400}
            height={300}
            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"></div>

          {/* Hover Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
            <span className="text-white text-lg font-semibold tracking-wide">
             School Moments
            </span>
          </div>
        </Link>
      ))}
    </div>

    {/* Button */}
    <div className="text-center mt-14">
      <Link
        href="/gallery"
        className="inline-block px-10 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
      >
        View All Photos →
      </Link>
    </div>

  </div>
</section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Edu Life Services</h3>
              <p className="text-gray-600">Comprehensive educational support services</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Yoga Classes</h3>
              <p className="text-gray-600">Professional Yoga Classes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">NIOS</h3>
              <p className="text-gray-600">National Institute of Open Schooling programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join S.D Modern School and unlock your potential today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
