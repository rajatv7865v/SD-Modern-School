"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CBSEAppendixIIPage() {
  const [activePage, setActivePage] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState<number>(1);

  const pages = [
    {
      page: 1,
      title: "Page 1: Part-A General Information",
      desc: "School name, U-DISE Code 09100107513, Parmal Singh Trust, Noida Sec-53 location & Senior Secondary CBSE affiliation proposal",
      image: "/images/certificates/cbse-appendix-ii-page-1.jpg",
    },
    {
      page: 2,
      title: "Page 2: Land, Safety & Staffing",
      desc: "Recognition 4203, 4,100 sq.m. pucca campus, 30-year trust lease, building/fire/water inspection dates & service rules",
      image: "/images/certificates/cbse-appendix-ii-page-2.jpg",
    },
    {
      page: 3,
      title: "Page 3: Bank Salary & Part-B DEO Roster",
      desc: "100% electronic bank transfer salary clearing, signatures of Chairman & Principal, and Part-B DEO verification section",
      image: "/images/certificates/cbse-appendix-ii-page-3.jpg",
    },
    {
      page: 4,
      title: "Page 4: Part-C Land Criteria Verification",
      desc: "District Education Officer land requirement compliance: Noida Municipal limits (4,000 sq.m. required vs. 4,100 sq.m. actual)",
      image: "/images/certificates/cbse-appendix-ii-page-4.jpg",
    },
  ];

  const generalInfo = [
    { label: "1. Name of School", value: "S.D. MODERN SCHOOL" },
    { label: "2. Campus Address", value: "Gijhor, Sector-53, Noida, Gautam Buddh Nagar (U.P.)" },
    { label: "3. U-DISE Code Allotted", value: "09100107513" },
    { label: "4. Name of Trust / Society", value: "Parmal Singh Welfare & Educational Trust, Gijhor, Sec-53, Noida" },
    { label: "5. Trust Registration Status", value: "YES — Duly Registered & Valid as on Date" },
    { label: "6. Proposed Affiliation with CBSE", value: "SENIOR SECONDARY" },
    { label: "7. Detailed Location", value: "Gijhor, Sec-53 (Under Notified Area of Noida Authority), Tehsil Dadri, G.B. Nagar (U.P.)" },
    { label: "8. Affiliated to Other Boards", value: "NO (Independent Institutional Application)" },
    { label: "9. Current Standard / Level Running", value: "Nursery to Class VIII (English Medium)" },
  ];

  const recognitionAndLand = [
    { label: "10. State Govt. Affiliation NOC", value: "Applied / Processing under State Norms" },
    { label: "12. State Govt. Recognition (Class 1–8)", value: "YES — Formally Recognized" },
    { label: "13. Recognition Certificate No. & Date", value: "Letter No. 4203 / Date of Issue: 28/03/2016 (BSA G.B. Nagar)" },
    { label: "14. Single Contiguous Plot Bounded", value: "YES — Single Contiguous Plot with Pucca Boundary Wall" },
    { label: "15. School & Playground Single Compound", value: "YES — Unified Secure Campus Compound" },
    { label: "16. Total Campus Land Area", value: "4,100 sq. meters (Exceeds 4,000 sq.m. Noida Norm)" },
    { label: "17. Legal Possession of Land", value: "TRUST (Parmal Singh Welfare & Educational Trust)" },
    { label: "18. Land Registered Owner / Lessee", value: "Parmal Singh Welfare & Educational Trust" },
    { label: "19. Period of Lease Agreement", value: "30 Years (01-04-2026 to 31-03-2056)" },
    { label: "20. Public Road / Canal / HT Line", value: "NO — Zero Encroachments or High-Tension Hazards" },
  ];

  const safetyAndStaff = [
    { label: "21. Building Safety Inspection", value: "YES — Structurally Safe (Inspection Date: 23-09-2026)" },
    { label: "22. Fire Safety Clearance (NOC)", value: "YES — Declared Safe by Fire Service (Inspection Date: 27-06-2026)" },
    { label: "23. Drinking Water & Sanitation Check", value: "YES — Safe & Hygienic (CMO Inspection Date: 07/08/2026)" },
    { label: "24. Service Rules & Conditions", value: "YES — Well-defined Service Rules as per Government Norms" },
    { label: "25. Govt. Norms Salary Payment", value: "YES — Full Compliance with Appropriate Govt. Scales" },
    { label: "26. Electronic Clearing Salary (ECS/Bank)", value: "YES — 100% Paid Through Bank Electronic Mode (Zero Cash/Cheque)" },
  ];

  const landCriteriaPartC = [
    { col: "Location Category", val: "Point 7: In Municipal Limits of Ghaziabad, NOIDA, Faridabad and Gurugram cities" },
    { col: "CBSE Minimum Requirement", val: "Minimum 4,000 Square Meters" },
    { col: "Actual Land Area of School", val: "4,100 Square Meters in Lawful Trust Possession" },
    { col: "Compliance Verification", val: "VERIFIED & TICKED (Row 7 FULFILLED) [ ✓ ]" },
  ];

  const highlights = [
    {
      icon: "🏛️",
      title: "CBSE Appendix-II Certified",
      desc: "Mandatory official disclosure certifying compliance with CBSE Affiliation Bye-Laws, NDMA 2016, and NCPCR safety standards.",
    },
    {
      icon: "📐",
      title: "4,100 sq.m. Secure Campus",
      desc: "Single contiguous plot enclosed by pucca boundary wall in Noida notified area, exceeding CBSE minimum 4,000 sq.m. limit.",
    },
    {
      icon: "🛡️",
      title: "Tri-Safety Verification",
      desc: "Building Structural Safety (23-09-2026), Fire Safety NOC (27-06-2026), and CMO Drinking Water (07-08-2026) fully verified.",
    },
    {
      icon: "💳",
      title: "100% Bank Salary Clearing",
      desc: "All faculty and staff compensation disbursed exclusively through electronic bank clearing transfer as per statutory norms.",
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
              "url(https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 via-primary-950/85 to-primary-900/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/30 border border-indigo-300/40 text-indigo-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              Mandatory Public Disclosure • CBSE Affiliation Bye-Laws
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              CBSE Appendix-II (DEO Certificate)
            </h1>
            <p className="text-base sm:text-xl font-medium text-indigo-100 max-w-3xl mx-auto">
              Self-Certification &amp; District Education Officer Inspection Report
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              U-DISE: 09100107513 • S.D. Modern School, Gijhor, Sector-53, Noida (Gautam Buddh Nagar)
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Certificate Scan (4 Pages)
              </button>
              <a
                href="/documents/cbse-appendix-ii-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Appendix-II (PDF)
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
                className="p-5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-indigo-300 hover:shadow-sm transition-all"
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
            {/* Left Column: Interactive 4-Page Scanned Document Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Official 4-Page Document
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Page {activePage} of 4
                </span>
              </div>

              {/* Page Selector Tabs */}
              <div className="w-full grid grid-cols-4 gap-1 p-1 bg-gray-100 rounded-xl mb-4 text-xs font-semibold">
                {pages.map((p) => (
                  <button
                    key={p.page}
                    onClick={() => setActivePage(p.page)}
                    className={`py-1.5 rounded-lg transition-all text-center ${
                      activePage === p.page
                        ? "bg-white text-indigo-700 shadow-sm font-bold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Pg {p.page}
                  </button>
                ))}
              </div>

              {/* Scanned Image Display */}
              <div
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="relative w-full aspect-[1/1.38] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={pages[activePage - 1].image}
                  alt={`CBSE Appendix-II - Page ${activePage}`}
                  fill
                  className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-lg shadow transition-opacity flex items-center gap-1.5">
                    <span>🔍</span> Click to Enlarge Page {activePage}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-gray-500 text-center mt-2.5 italic">
                {pages[activePage - 1].desc}
              </p>

              {/* Quick Action Buttons */}
              <div className="w-full mt-4 flex gap-3">
                <button
                  onClick={() => {
                    setModalPage(activePage);
                    setShowModal(true);
                  }}
                  className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition-colors"
                >
                  Inspect Full Size
                </button>
                <a
                  href="/documents/cbse-appendix-ii-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs text-center transition-colors shadow-sm inline-flex items-center justify-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Complete PDF
                </a>
              </div>

              {/* Reference Details */}
              <div className="w-full mt-5 p-3 rounded-lg bg-indigo-50/70 border border-indigo-200 text-indigo-950 text-xs space-y-1">
                <span className="font-semibold block">Statutory Institutional Details:</span>
                <p className="text-[11px] leading-relaxed text-indigo-900">
                  U-DISE Code: <strong>09100107513</strong> • Trust: Parmal Singh Welfare &amp; Educational Trust
                </p>
                <p className="text-[11px] text-gray-600 pt-0.5">
                  Signed by Principal &amp; Chairman, S.D. Modern School, Gijhor, Sector-53, Noida.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Structured Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Mandatory Public Disclosure (SARAS / CBSE Formats)
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Appendix-II Compliance &amp; Verification Data
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  In accordance with the School Safety Policy 2016 issued by NDMA, Manual on Safety and Security of Children in Schools developed by NCPCR, and National Building Code.
                </p>
              </div>

              {/* Section 1: General Information */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Part-A: General Information
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                    <tbody className="divide-y divide-gray-100">
                      {generalInfo.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                          <td className="px-4 py-2 font-medium text-gray-600 w-2/5">{item.label}</td>
                          <td className="px-4 py-2 text-gray-900 font-semibold">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 2: Recognition & Land Details */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Part-A: Recognition &amp; Land Ownership
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                    <tbody className="divide-y divide-gray-100">
                      {recognitionAndLand.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                          <td className="px-4 py-2 font-medium text-gray-600 w-2/5">{item.label}</td>
                          <td className="px-4 py-2 text-gray-900 font-semibold">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: Essential Safety & Staff Salary */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Part-A: Safety Requirements &amp; Staff Compensation
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                    <tbody className="divide-y divide-gray-100">
                      {safetyAndStaff.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                          <td className="px-4 py-2 font-medium text-gray-600 w-2/5">{item.label}</td>
                          <td className="px-4 py-2 text-gray-900 font-semibold">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 4: Part-C Land Criteria Verification */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                  Part-C: District Education Officer Land Verification
                </h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                    <tbody className="divide-y divide-gray-100">
                      {landCriteriaPartC.map((item, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}>
                          <td className="px-4 py-2 font-medium text-gray-600 w-2/5">{item.col}</td>
                          <td className="px-4 py-2 text-gray-900 font-semibold">{item.val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Certificate Modal with 4-Page Switcher */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[94vh] overflow-y-auto p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  CBSE Appendix-II (DEO Certificate) — Page {modalPage} of 4
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  S.D. Modern School, Gijhor, Sector-53, Noida • U-DISE: 09100107513
                </p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-bold transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Page Switcher */}
            <div className="flex gap-2 mb-3">
              {[1, 2, 3, 4].map((pNum) => (
                <button
                  key={pNum}
                  onClick={() => setModalPage(pNum)}
                  className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                    modalPage === pNum
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Page {pNum}
                </button>
              ))}
            </div>

            <div className="relative w-full aspect-[1/1.38] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={pages[modalPage - 1].image}
                alt={`CBSE Appendix-II Page ${modalPage}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-gray-200">
              <a
                href={pages[modalPage - 1].image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-700 hover:underline font-medium inline-flex items-center gap-1"
              >
                Open Page {modalPage} in High Resolution ↗
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href="/documents/cbse-appendix-ii-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
                >
                  Download Complete PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cross Navigation Banner */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Explore All School Safety &amp; Statutory Certifications
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Review our Building Safety, Fire Safety NOC, School Recognition, Water Sanitation certificates, and Governance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/school-recognition-certificate"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              School Recognition (RTE) →
            </Link>
            <Link
              href="/fire-safety-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Fire Safety NOC
            </Link>
            <Link
              href="/building-safety-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Building Safety Certificate
            </Link>
            <Link
              href="/water-sanitation-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Water &amp; Sanitation Certificate
            </Link>
            <Link
              href="/pta-executive-committee"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              PTA Executive Committee
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
