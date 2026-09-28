import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More - S.D Modern School",
  description: "Privacy Policy, Terms and Conditions, and other links.",
};

export default function More() {
  return (
    <div className="pb-24 lg:pb-0">
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              More
            </h1>
            <p className="text-gray-600 mb-8">
              Legal and other information
            </p>
            <div className="space-y-4">
              <Link
                href="/trust"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">Trust &amp; Society</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Parmal Singh Welfare and Educational Trust &amp; Deed</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/academic-planner"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">Yearly Academic Planner (2026–27)</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Month-by-month exams, holidays, and activities</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/fee-structure"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">Fee Structure (2026–27)</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Class-wise monthly fee schedule &amp; payment info</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/governance"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">School Management &amp; Committees</span>
                  <span className="block text-sm text-gray-500 mt-0.5">SMC, PTA Executive Committee &amp; Student Strength</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/building-safety-certificate"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">Building Safety Certificate</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Rural Engineering Dept. Annexure-D (NBC-2016 Compliant)</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/water-sanitation-certificate"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div className="text-left min-w-0 flex-1">
                  <span className="block font-semibold text-gray-800">Safe Drinking Water &amp; Sanitation Certificate</span>
                  <span className="block text-sm text-gray-500 mt-0.5">CMO Office G.B. Nagar Certificate No. 153 &amp; Lab Report</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/privacy-policy"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <div className="text-left min-w-0">
                  <span className="block font-semibold text-gray-800">Privacy Policy</span>
                  <span className="block text-sm text-gray-500 mt-0.5">How we collect and use your information</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/terms"
                className="flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/50 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                <div className="text-left min-w-0">
                  <span className="block font-semibold text-gray-800">Terms and Conditions</span>
                  <span className="block text-sm text-gray-500 mt-0.5">Rules for using our website</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
