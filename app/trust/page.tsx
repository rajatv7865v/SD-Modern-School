"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Trustee {
  name: string;
  nameHindi: string;
  role: string;
  roleHindi: string;
  designation: string;
  address: string;
  image?: string;
  description: string;
}

export default function TrustPage() {
  const [selectedPage, setSelectedPage] = useState<number | null>(null);

  const trustDeedPages = Array.from({ length: 18 }, (_, i) => ({
    pageNumber: i + 1,
    title: `Trust Deed Page ${i + 1}`,
    image: `/images/trust/trust-deed-page-${String(i + 1).padStart(2, "0")}.jpg`,
    description:
      i === 0
        ? "Official Stamp Paper (₹1000) & Settlor Photograph"
        : i === 1
        ? "Stamp Vendor & Sub-Registrar Endorsement"
        : i === 2
        ? "Declaration of Trust & Board Nominations"
        : i === 3
        ? "Sub-Registrar Registration & Fingerprint Record"
        : i === 4
        ? "Trust Objectives & Educational Directives"
        : i === 5
        ? "Official Registration Entry Book Record"
        : i === 6
        ? "Curriculum, Library & Institutional Regulations"
        : i === 7
        ? "Trustee Code of Conduct & Succession Rules"
        : i === 8
        ? "Board of Trustees Structure & Meeting Quorum"
        : i === 9
        ? "Managing Trustee & Executive Powers"
        : i === 10
        ? "Statutory Compliance & Income Tax Provisions"
        : i === 11
        ? "Accounts, Auditing & Financial Guidelines"
        : i === 12
        ? "Special Affiliation & UP Govt Provisions"
        : i === 13
        ? "Trust Rules, By-laws & Jurisdiction"
        : i === 14
        ? "Staff Appointment & Operational Mandates"
        : i === 15
        ? "Official Seal & Bank Account Operation"
        : i === 16
        ? "Witness Photographs & Official Seals"
        : "Execution, Signatures & Deed Writer Certification",
  }));

  const trustees: Trustee[] = [
    {
      name: "Shri Prakash Chand Chauhan",
      nameHindi: "श्री प्रकाश चन्द चौहान",
      role: "Founder & Chairman / Settlor",
      roleHindi: "व्यवस्थापक / चेयरमैन (प्रबंधक न्यासी)",
      designation: "President, S.D. Modern School & Settlor Trustee",
      address: "Village Gijhore, Near Sector-53, Noida, Gautam Buddha Nagar, U.P.",
      image: "/images/trust/prakash-chand-chauhan.jpg",
      description:
        "Visionary founder and settlor of Parmal Singh Welfare and Educational Trust. Dedicated to providing accessible, high-quality, and value-based education to every child.",
    },
    {
      name: "Shri Narender Chauhan",
      nameHindi: "श्री नरेंदर चौहान",
      role: "Secretary",
      roleHindi: "सचिव (न्यास बोर्ड)",
      designation: "Secretary & Executive Trustee",
      address: "Gijhor, Sector-53, Noida, Gautam Buddha Nagar, U.P.",
      description:
        "Oversees administrative operations, board correspondence, regulatory compliance, and community welfare initiatives of the trust.",
    },
    {
      name: "Smt. Ruby Chauhan",
      nameHindi: "श्रीमती रूबी चौहान",
      role: "Treasurer",
      roleHindi: "कोषाध्यक्ष (न्यास बोर्ड)",
      designation: "Treasurer & Financial Trustee",
      address: "Gijhor, Sector-53, Noida, Gautam Buddha Nagar, U.P.",
      description:
        "Manages financial allocations, scholarship disbursements, accounts auditing, and institutional developmental funding.",
    },
  ];

  const objectives = [
    {
      title: "Universal Quality Education",
      titleHindi: "समान एवं उत्कृष्ट शिक्षा",
      icon: "🎓",
      desc: "Imparting quality schooling from early childhood through middle school without discrimination based on caste, creed, religion, or economic background.",
    },
    {
      title: "Assistance to Needy Students",
      titleHindi: "निःशुल्क छात्रवृत्ति एवं सहायता",
      icon: "🤝",
      desc: "Providing textbooks, stationery, school uniforms, mid-day meals, and merit-cum-means scholarships to meritorious and underprivileged students.",
    },
    {
      title: "Institution Establishment",
      titleHindi: "संस्थान एवं पुस्तकालय स्थापना",
      icon: "🏫",
      desc: "Establishing, modernizing, and administering schools, educational centers, modern science and computer laboratories, and rich student libraries.",
    },
    {
      title: "Women & Youth Skill Empowerment",
      titleHindi: "महिला एवं युवा कौशल विकास",
      icon: "💡",
      desc: "Offering vocational guidance, digital technology orientation, and practical skill development to prepare students for contemporary challenges.",
    },
    {
      title: "Health & Community Welfare",
      titleHindi: "स्वास्थ्य एवं जन कल्याण",
      icon: "🏥",
      desc: "Conducting health check-up camps, relief programs in times of crisis, and providing healthcare awareness to families in rural and suburban areas.",
    },
    {
      title: "Statutory & CBSE Compliance",
      titleHindi: "शासन एवं बोर्ड के नियमों का पालन",
      icon: "📜",
      desc: "Strict adherence to Uttar Pradesh Government orders, CBSE guidelines, Indian Trusts Act, and state educational regulations for ethical governance.",
    },
  ];

  const keyFacts = [
    { label: "Trust Name", value: "Parmal Singh Welfare and Educational Trust" },
    { label: "Hindi Name", value: "परमाल सिंह वेलफेयर एण्ड एजुकेशनल ट्रस्ट" },
    { label: "Registration Act", value: "Indian Trusts Act 1882 (भारतीय रजिस्ट्रेशन न्यास एक्ट)" },
    { label: "Registration No.", value: "Book No. 4, Reg. No. 1199 / 2014" },
    { label: "Registration Date", value: "30 June 2014" },
    { label: "Registering Office", value: "Sub-Registrar (I), Gautam Buddha Nagar, Noida, U.P." },
    { label: "Institution Run", value: "S.D. Modern School, Gijhor, Sector-53, Noida" },
    { label: "Registered Office", value: "Gram Gijhore, Near Sector 53, Noida - 201307" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[48vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/school.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/30 border border-primary-300/40 text-primary-200 text-sm font-semibold tracking-wider uppercase mb-4">
              Registered Educational Trust
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Trust & Society
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
              Parmal Singh Welfare and Educational Trust
            </p>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mt-2 font-serif">
              परमाल सिंह वेलफेयर एण्ड एजुकेशनल ट्रस्ट — Sponsoring Body of S.D. Modern School
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#trust-deed"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Trust Deed
              </a>
              <a
                href="/documents/trust-deed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official Deed (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsoring Trust Overview & Key Facts */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Overview Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider">
                Official Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                About Parmal Singh Welfare and Educational Trust
              </h2>
              <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                <strong>Parmal Singh Welfare and Educational Trust</strong> (
                <em>परमाल सिंह वेलफेयर एण्ड एजुकेशनल ट्रस्ट</em>) was established on{" "}
                <strong>30th June 2014</strong> by <strong>Shri Prakash Chand Chauhan</strong> under the{" "}
                <strong>Indian Trusts Act 1882</strong>, registered with the Sub-Registrar, Gautam Buddha
                Nagar (Noida), Uttar Pradesh.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Trust was founded with the noble commitment to make high-quality, value-centric
                education accessible to children across all strata of society. It operates and manages{" "}
                <strong>S.D. Modern School</strong> at Gijhor, Sector-53, Noida, providing an inclusive
                academic environment, ethical grounding, modern educational resources, and dedicated care
                for every learner.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-600 p-5 rounded-r-lg">
                <h4 className="font-bold text-primary-900 text-base mb-1">
                  Our Founding Philosophy (न्यास संकल्प)
                </h4>
                <p className="text-sm text-primary-800 italic">
                  &ldquo;समाज के सभी बच्चों को बिना किसी वर्ग, धर्म, जाति या पंथ के भेद किए पुख्ता शिक्षा
                  देना एवं राष्ट्र निर्माण हेतु संस्कारी भावी नागरिक तैयार करना।&rdquo;
                </p>
              </div>
            </div>

            {/* Statutory Details Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-primary-950 to-primary-900 text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-gray-800">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-500/30 flex items-center justify-center text-primary-300 font-bold">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Statutory Credentials</h3>
                    <p className="text-xs text-primary-200">Registration & Legal Standing</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <div className="divide-y divide-white/10 text-sm space-y-3">
                {keyFacts.map((fact, idx) => (
                  <div key={idx} className="pt-3 first:pt-0">
                    <span className="block text-xs uppercase tracking-wider text-gray-400 font-medium">
                      {fact.label}
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-white mt-0.5">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <a
                  href="/documents/trust-deed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Complete Deed (7.0 MB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Board of Trustees */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-2">
              Governing Body
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Board of Trustees (न्यास बोर्ड)
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-3 mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              The esteemed trustees guiding S.D. Modern School with vision, integrity, and lifelong dedication
              to education and community enrichment.
            </p>
          </div>

          {/* Chairman Spotlight */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 mb-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-44 h-56 rounded-xl overflow-hidden shadow-md border-4 border-primary-100 bg-gray-100">
                  <Image
                    src={trustees[0].image || "/images/trust/prakash-chand-chauhan.jpg"}
                    alt={trustees[0].name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <span className="mt-3 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wide">
                  Founder &amp; Chairman
                </span>
              </div>
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {trustees[0].name}
                  </h3>
                  <span className="text-lg text-primary-700 font-serif font-medium">
                    ({trustees[0].nameHindi})
                  </span>
                </div>
                <p className="text-primary-600 font-semibold text-sm sm:text-base">
                  {trustees[0].role} / {trustees[0].roleHindi}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {trustees[0].description}
                </p>
                <div className="pt-2 text-xs text-gray-500 space-y-1">
                  <p>
                    <strong>Designation:</strong> {trustees[0].designation}
                  </p>
                  <p>
                    <strong>Address:</strong> {trustees[0].address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Trustees Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trustees.slice(1).map((trustee, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase">
                      {trustee.role}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">Trustee</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{trustee.name}</h4>
                  <p className="text-sm text-primary-600 font-serif font-medium mb-3">
                    {trustee.nameHindi} ({trustee.roleHindi})
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {trustee.description}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3 text-xs text-gray-500">
                  <p>
                    <strong>Address:</strong> {trustee.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Aims & Objectives */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-2">
              Deed Mandate
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Aims &amp; Objectives of the Trust (न्यास के लक्ष्य और उद्देश्य)
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-3 mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              The fundamental objectives outlined in Section 1 of the official Trust Deed governing all
              educational and social initiatives of S.D. Modern School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200/80 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {obj.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{obj.title}</h3>
                <p className="text-xs font-serif text-primary-700 font-semibold mb-3">
                  {obj.titleHindi}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Trust Deed Document Viewer Section */}
      <section id="trust-deed" className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-primary-100 text-primary-800 text-xs font-bold uppercase tracking-wider mb-2">
                Official Document Repository
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Official Registered Trust Deed (न्यास विलेख)
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">
                Browse all 18 registered pages of the Deed of Trust registered on 30 June 2014. Click any
                page to inspect high-resolution scans.
              </p>
            </div>
            <a
              href="/documents/trust-deed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md self-start md:self-auto flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF (18 Pages)
            </a>
          </div>

          {/* Grid of Pages */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {trustDeedPages.map((page) => (
              <div
                key={page.pageNumber}
                onClick={() => setSelectedPage(page.pageNumber)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow transition-opacity">
                      View Page
                    </span>
                  </div>
                  <span className="absolute top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    Pg {page.pageNumber}
                  </span>
                </div>
                <div className="p-2.5 text-center flex-1 flex flex-col justify-center">
                  <span className="text-xs font-bold text-gray-800 line-clamp-1">{page.title}</span>
                  <span className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                    {page.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for Trust Deed */}
      {selectedPage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Trust Deed — Page {selectedPage} of 18
                </h3>
                <p className="text-xs text-gray-500">
                  {trustDeedPages[selectedPage - 1]?.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`/images/trust/trust-deed-page-${String(selectedPage).padStart(2, "0")}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 rounded hover:bg-primary-50 transition-colors"
                >
                  Full Size ↗
                </a>
                <button
                  onClick={() => setSelectedPage(null)}
                  className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body / Image Viewer */}
            <div className="relative flex-1 overflow-auto bg-gray-900/95 p-4 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-2xl h-[70vh]">
                <Image
                  src={`/images/trust/trust-deed-page-${String(selectedPage).padStart(2, "0")}.jpg`}
                  alt={`Trust Deed Page ${selectedPage}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer / Navigation */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <button
                disabled={selectedPage <= 1}
                onClick={() => setSelectedPage((prev) => (prev && prev > 1 ? prev - 1 : 1))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Page
              </button>
              <span className="text-xs text-gray-500 font-medium">
                Page {selectedPage} / 18
              </span>
              <button
                disabled={selectedPage >= 18}
                onClick={() => setSelectedPage((prev) => (prev && prev < 18 ? prev + 1 : 18))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Page →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Explore Related Pages Banner */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Academic Planner &amp; School Governance (2026–27)
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Review the 2026–27 Yearly Planner, Student Strength, Fee Structure, School Management
            Committee (SMC), and Parent Teacher Association (PTA) rosters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academic-planner"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              View Academic Planner &amp; Governance →
            </Link>
            <Link
              href="/about"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              About S.D. Modern School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
