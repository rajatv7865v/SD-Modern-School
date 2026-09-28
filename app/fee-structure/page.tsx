"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FeeStructurePage() {
  const [showModal, setShowModal] = useState(false);

  const feeData = [
    { class: "Nursery", fee: 800, grade: "Pre-Primary", quarterly: 2400 },
    { class: "L.K.G.", fee: 900, grade: "Pre-Primary", quarterly: 2700 },
    { class: "U.K.G.", fee: 900, grade: "Pre-Primary", quarterly: 2700 },
    { class: "Class I", fee: 900, grade: "Primary", quarterly: 2700 },
    { class: "Class II", fee: 900, grade: "Primary", quarterly: 2700 },
    { class: "Class III", fee: 1000, grade: "Primary", quarterly: 3000 },
    { class: "Class IV", fee: 1000, grade: "Primary", quarterly: 3000 },
    { class: "Class V", fee: 1100, grade: "Primary", quarterly: 3300 },
    { class: "Class VI", fee: 1200, grade: "Middle School", quarterly: 3600 },
    { class: "Class VII", fee: 1300, grade: "Middle School", quarterly: 3900 },
    { class: "Class VIII", fee: 1400, grade: "Middle School", quarterly: 4200 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
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
              Academic Session 2026–2027
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Fee Structure
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
              S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mt-2">
              Affordable, transparent, and non-commercial education managed under Parmal Singh Welfare and Educational Trust
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#official-fees"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                View Class-wise Fees
              </a>
              <a
                href="/documents/fee-structure-2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Fee Document (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-primary-50/70 border border-primary-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                ₹
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Affordable Tuition</h4>
                <p className="text-xs text-gray-600 mt-1">Starting from only ₹800/month for Pre-Primary children.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">100% Transparent</h4>
                <p className="text-xs text-gray-600 mt-1">No hidden charges, donation fees, or capitation charges.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                🤝
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Welfare-First Mission</h4>
                <p className="text-xs text-gray-600 mt-1">Operated by Parmal Singh Welfare and Educational Trust.</p>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-purple-50/70 border border-purple-100 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                🎓
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Scholarships &amp; Aid</h4>
                <p className="text-xs text-gray-600 mt-1">Concessions for economically weaker and deserving students.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Fee Structure Section */}
      <section id="official-fees" className="py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Approved Schedule
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Class-wise Fee Schedule (2026–2027)
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Monthly fee schedule applicable for the academic year 2026–2027
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200 px-4 py-2 rounded-xl text-xs font-bold transition-colors self-start sm:self-auto"
              >
                <span>🔍</span> View Official Scanned Document
              </button>
            </div>

            {/* Fee Table */}
            <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                    <th className="py-3.5 px-4 sm:px-6">S.No.</th>
                    <th className="py-3.5 px-4 sm:px-6">Class</th>
                    <th className="py-3.5 px-4 sm:px-6">Educational Stage</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Monthly Fee</th>
                    <th className="py-3.5 px-4 sm:px-6 text-right">Quarterly Equivalent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  {feeData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-400">{idx + 1}</td>
                      <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900 text-base">{item.class}</td>
                      <td className="py-3.5 px-4 sm:px-6">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.grade === "Pre-Primary"
                              ? "bg-sky-50 text-sky-700 border border-sky-100"
                              : item.grade === "Primary"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                              : "bg-purple-50 text-purple-700 border border-purple-100"
                          }`}
                        >
                          {item.grade}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right font-extrabold text-primary-700 text-lg">
                        ₹{item.fee.toLocaleString("en-IN")}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right font-medium text-gray-600">
                        ₹{item.quarterly.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stage Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                <span className="text-xs font-bold text-sky-800 uppercase">Pre-Primary</span>
                <div className="text-xl font-bold text-gray-900 mt-1">₹800 – ₹900</div>
                <p className="text-xs text-gray-600 mt-0.5">Nursery, L.K.G., U.K.G.</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-800 uppercase">Primary School</span>
                <div className="text-xl font-bold text-gray-900 mt-1">₹900 – ₹1,100</div>
                <p className="text-xs text-gray-600 mt-0.5">Classes I to V</p>
              </div>
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100">
                <span className="text-xs font-bold text-purple-800 uppercase">Middle School</span>
                <div className="text-xl font-bold text-gray-900 mt-1">₹1,200 – ₹1,400</div>
                <p className="text-xs text-gray-600 mt-0.5">Classes VI to VIII</p>
              </div>
            </div>

            {/* Official Scanned Record Card */}
            <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden bg-gray-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => setShowModal(true)}
                  className="relative w-20 h-28 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:border-primary-400 transition-colors flex-shrink-0"
                >
                  <Image
                    src="/images/planner/fee-structure.jpg"
                    alt="Fee Structure Scanned Document"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">Original Signed Fee Document</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Official verified notification issued by S.D. Modern School for Session 2026–2027.
                  </p>
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-xs font-semibold text-primary-600 hover:text-primary-700 mt-2 inline-flex items-center gap-1"
                  >
                    Click to view full document scan →
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs font-semibold transition-colors"
                >
                  Preview Scan
                </button>
                <a
                  href="/documents/fee-structure-2026-27.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            {/* Policies & Notes */}
            <div className="mt-8 p-6 bg-primary-50/60 rounded-xl border border-primary-200 text-sm text-primary-950 space-y-3">
              <h4 className="font-bold text-base flex items-center gap-2">
                <span>📋</span> Fee Guidelines &amp; Policies:
              </h4>
              <ul className="list-disc pl-5 space-y-1.5 text-primary-900 text-xs sm:text-sm">
                <li>
                  <strong>Payment Schedule:</strong> Tuition fees are payable on a monthly basis by the 10th of each running month.
                </li>
                <li>
                  <strong>Welfare Mission:</strong> S.D. Modern School strictly follows a welfare-centric educational model under <em>Parmal Singh Welfare and Educational Trust</em>.
                </li>
                <li>
                  <strong>Financial Assistance &amp; Scholarships:</strong> Merit-cum-means assistance and fee concessions are granted to deserving students from economically weaker sections upon formal application.
                </li>
                <li>
                  <strong>Receipts:</strong> Official printed receipts are issued for every fee payment made at the school accounts counter.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scanned Document Modal Lightbox */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Fee Structure (2026–2027) — Official Document Scan
                </h3>
                <p className="text-xs text-gray-500">S.D. Modern School, Gijhor, Sector-53, Noida</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/planner/fee-structure.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 rounded hover:bg-primary-50 transition-colors"
                >
                  Full Size ↗
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="relative flex-1 overflow-auto bg-gray-900/95 p-4 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-xl h-[70vh]">
                <Image
                  src="/images/planner/fee-structure.jpg"
                  alt="Fee Structure Document Scan"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <span className="text-xs text-gray-500">Official document page 5 of 7</span>
              <a
                href="/documents/fee-structure-2026-27.pdf"
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

      {/* Related Academic Pages Navigation Banner */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Explore Academic &amp; School Governance
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Review our 2026–27 Yearly Academic Planner, School Management Committee (SMC), and Parent Teacher Association (PTA) rosters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academic-planner"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Yearly Academic Planner (2026–27) →
            </Link>
            <Link
              href="/governance"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              School Management &amp; Committees (SMC / PTA)
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
