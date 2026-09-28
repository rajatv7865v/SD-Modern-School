"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function WaterSanitationCertificatePage() {
  const [showModal, setShowModal] = useState(false);

  const certDetails = [
    { label: "Certificate Title", value: "Safe Drinking Water and Sanitary Condition Certificate" },
    { label: "Certificate No.", value: "NO. 153" },
    { label: "Date of Issue", value: "07 / 08 / 2026" },
    { label: "Issuing Authority", value: "Office of the Chief Medical Officer (CMO), G.B. Nagar" },
    { label: "Authorizing Officer", value: "Dr. Madan Mohan Mani Tripathi (Chief Medical Officer)" },
    { label: "Office Address", value: "CMO Office, Sector-39, Gautam Buddha Nagar, Uttar Pradesh" },
    { label: "Inspection Date", value: "01-08-2026 (Headed by DMO G.B. Nagar)" },
    { label: "Water Test Report Ref.", value: "Report No. UPJN/2025-26/B/210 (Dated: 06-07-2026)" },
    { label: "Certified Institution", value: "S.D. Modern School, Gijhor, Sector-53, Noida, Gautam Buddha Nagar" },
    { label: "Validity", value: "Valid for One Year (Academic Session 2026–2027)" },
  ];

  const highlights = [
    {
      icon: "💧",
      title: "100% Tested Safe Drinking Water",
      desc: "Water samples verified and certified potable and contaminant-free under official lab report UPJN/2025-26/B/210.",
    },
    {
      icon: "🧼",
      title: "Hygienic Sanitation Standards",
      desc: "School maintains top-tier hygienic sanitation across all classrooms, washrooms, and campus premises.",
    },
    {
      icon: "🏛️",
      title: "Government Certified",
      desc: "Inspected and certified by Chief Medical Officer (CMO) Office, Gautam Buddha Nagar as per Central/State norms.",
    },
    {
      icon: "🛡️",
      title: "Student Health & Safety",
      desc: "Dedicated facilities ensuring child health, disease prevention, and clean school environment.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-300/40 text-emerald-200 text-sm font-semibold tracking-wider uppercase mb-4">
              Statutory Health &amp; Hygiene Compliance
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Safe Drinking Water &amp; Sanitary Condition Certificate
            </h1>
            <p className="text-lg sm:text-xl font-medium text-primary-100 max-w-2xl mx-auto">
              Issued by Office of the Chief Medical Officer (CMO), Gautam Buddha Nagar
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl mx-auto mt-2">
              Official Certification for S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Certificate Scan
              </button>
              <a
                href="/documents/safe-drinking-water-and-sanitary-condition-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official Certificate (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Details & Scan Preview */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Certificate Scan Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wider self-start mb-2">
                Official Document Record
              </span>
              <h3 className="font-bold text-gray-900 text-lg self-start mb-4">
                Government Certified Proforma
              </h3>

              <div
                onClick={() => setShowModal(true)}
                className="relative w-full aspect-[1/1.4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src="/images/certificates/safe-drinking-water-sanitation-certificate.jpg"
                  alt="Safe Drinking Water and Sanitary Condition Certificate"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-lg shadow transition-opacity flex items-center gap-1.5">
                    <span>🔍</span> Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="w-full mt-4 flex gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition-colors"
                >
                  Inspect Full Size
                </button>
                <a
                  href="/documents/safe-drinking-water-and-sanitary-condition-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs text-center transition-colors shadow-sm inline-flex items-center justify-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            {/* Right: Detailed Structured Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Verification Breakdown
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Certificate Information &amp; Audit Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Mandatory Public Disclosure &amp; Compliance Information
                </p>
              </div>

              <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 overflow-hidden text-sm">
                {certDetails.map((detail, idx) => (
                  <div key={idx} className="p-3.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-gray-50/80 transition-colors">
                    <span className="text-gray-500 font-medium text-xs sm:w-44 flex-shrink-0">
                      {detail.label}
                    </span>
                    <span className="text-gray-900 font-semibold text-xs sm:text-sm sm:text-right">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Official Statement Quote */}
              <div className="bg-emerald-50/80 border-l-4 border-emerald-600 p-4 rounded-r-xl text-emerald-950 text-xs sm:text-sm space-y-1">
                <span className="font-bold block text-emerald-900">Official Health Inspection Summary:</span>
                <p className="italic leading-relaxed">
                  &ldquo;Certified that the S.D. MODERN SCHOOL has safe drinking water facilities for the
                  students and members of staff of the institution. School is also maintaining the hygienic
                  sanitation condition in the school building &amp; the campus as per norms prescribed by the
                  Central/State/U.T. Govt.&rdquo;
                </p>
                <span className="text-xs font-semibold text-emerald-800 block pt-1">
                  — Dr. Madan Mohan Mani Tripathi, Chief Medical Officer, G.B. Nagar
                </span>
              </div>

              {/* Campus Health & Sanitation Protocols */}
              <div className="p-4 rounded-xl bg-primary-50/60 border border-primary-200 text-xs sm:text-sm text-primary-900 space-y-2">
                <h4 className="font-bold flex items-center gap-1.5 text-primary-950">
                  <span>🛡️</span> On-Campus Clean Water &amp; Sanitation Facilities:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-primary-800 text-xs">
                  <li>Multi-stage commercial RO filtration systems installed across all floors.</li>
                  <li>Daily inspection and maintenance of water coolers and storage tanks.</li>
                  <li>Separate, sanitized washroom complexes for boys, girls, and staff members.</li>
                  <li>Daily sanitization schedule covering all classrooms, corridors, and play zones.</li>
                  <li>Regular water sampling and certified laboratory testing (UPJN).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Safe Drinking Water &amp; Sanitary Condition Certificate
                </h3>
                <p className="text-xs text-gray-500">Certificate No. 153 — S.D. Modern School</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/certificates/safe-drinking-water-sanitation-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 rounded hover:bg-primary-50 transition-colors"
                >
                  Full Size ↗
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-auto bg-gray-900/95 p-4 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-xl h-[70vh]">
                <Image
                  src="/images/certificates/safe-drinking-water-sanitation-certificate.jpg"
                  alt="Safe Drinking Water and Sanitary Condition Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <span className="text-xs text-gray-500">CMO Office Sector-39, G.B. Nagar</span>
              <a
                href="/documents/safe-drinking-water-and-sanitary-condition-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Banner */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Explore School Disclosures &amp; Administration
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Review our Fee Structure, Yearly Academic Planner, and School Management Committee rosters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fee-structure"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Fee Structure (2026–27) →
            </Link>
            <Link
              href="/academic-planner"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Yearly Academic Planner
            </Link>
            <Link
              href="/trust"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Trust &amp; Society
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
