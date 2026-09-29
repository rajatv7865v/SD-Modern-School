"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FireSafetyCertificatePage() {
  const [showModal, setShowModal] = useState(false);

  const certDetails = [
    { label: "Certificate Title", value: "Fire Safety Certificate (Completion NOC) / अग्नि सुरक्षा प्रमाणपत्र" },
    { label: "Document Format", value: "प्रारूप-छ (संलग्नक-6) — पूर्णता अनापत्ति प्रमाणपत्र" },
    { label: "UID / Reference Number", value: "UPFS/2026/201640/GBN/GAUTAM BUDDH NAGAR/39789/CFO" },
    { label: "Application Date", value: "01-06-2026" },
    { label: "Date of Issue", value: "27-06-2026" },
    { label: "Issuing Department", value: "Fire Service | Uttar Pradesh (उत्तर प्रदेश अग्निशमन सेवा)" },
    { label: "Issuing Authority", value: "Chief Fire Officer (मुख्य अग्निशमन अधिकारी), Gautam Buddh Nagar" },
    { label: "Authorized Signatory", value: "Pradeep Kumar (Digitally Signed)" },
    { label: "Certified Institution", value: "M/s SD MODERN SCHOOL" },
    { label: "Campus Address", value: "Village-Ghijhore, Sector-53, Noida, Tehsil-Dadri, Gautam Buddh Nagar" },
    { label: "Plot Area", value: "4,100 sq. mt." },
    { label: "Total Covered Area", value: "1,770 sq. mt." },
    { label: "Blocks & Floors", value: "1 Block — 4 Floors (तलों की संख्या: 4)" },
    { label: "Basement Status", value: "0 (No underground / basement levels)" },
    { label: "Building Height", value: "14.07 meters" },
    { label: "Occupancy Category", value: "Educational (शैक्षिक) under NBC-2016" },
    { label: "Joint Inspection Date", value: "23-06-2026 (with school representative Shri Prakash Chand Chauhan)" },
    { label: "Applicable Act & Rules", value: "NBC-2016 & U.P. Fire and Emergency Services Act-2022 / Rules-2024" },
    { label: "Validity Period", value: "5 Years (Valid from 27-06-2026 to 26-06-2031)" },
  ];

  const highlights = [
    {
      icon: "🚒",
      title: "UP Fire Service Certified",
      desc: "Official Completion NOC issued by Chief Fire Officer (CFO), Gautam Buddh Nagar, Fire Service Uttar Pradesh.",
    },
    {
      icon: "🛡️",
      title: "5-Year Validity (2026–2031)",
      desc: "Full statutory compliance under NBC-2016 & UP Fire Services Act-2022, valid continuously for 5 years.",
    },
    {
      icon: "🧯",
      title: "Complete Fire Protection",
      desc: "Installed firefighting systems inspected on-site and verified 100% operational according to Bureau of Indian Standards (BIS).",
    },
    {
      icon: "🏫",
      title: "Safe Multi-Floor Campus",
      desc: "Inspection verified 4-level academic block (14.07m height, 4,100 sq.m plot, zero basement) with wide evacuation corridors.",
    },
  ];

  const compliancePoints = [
    {
      number: "1",
      title: "Semi-Annual Operational Certification",
      text: "The school submits operational fitness certificates for all firefighting and suppression systems to the Fire Department in January and July of every academic year through certified agencies.",
    },
    {
      number: "2",
      title: "Annual Maintenance Contract (AMC)",
      text: "Annual Maintenance Contract (AMC) and periodic servicing of all fire extinguishers, hose reels, alarms, and emergency equipment are executed through authorized fire safety technical firms.",
    },
    {
      number: "3",
      title: "Electrical Safety Compliance",
      text: "Mandatory statutory electrical safety verification and certification from the Directorate of Electrical Safety is maintained to safeguard against electrical hazards.",
    },
    {
      number: "4",
      title: "Continuous System Readiness",
      text: "Fire hose reels, alarm break points, emergency signage, and water storage tanks remain charged and operational 24x7 across all 4 floors of the school building.",
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
              "url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-primary-950/85 to-primary-900/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/30 border border-red-300/40 text-red-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              UP Fire Service • Statutory Safety Clearance
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Fire Safety Certificate (NOC)
            </h1>
            <p className="text-base sm:text-xl font-medium text-red-100 max-w-3xl mx-auto">
              Issued by Office of Chief Fire Officer (CFO), Gautam Buddh Nagar • Fire Service Uttar Pradesh
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              National Building Code (NBC-2016) &amp; U.P. Fire and Emergency Services Act-2022 Compliant (5-Year Term: 2026–2031)
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Certificate Scan
              </button>
              <a
                href="/documents/fire-safety-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Fire Safety NOC (PDF)
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
                className="p-5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-red-300 hover:shadow-sm transition-all"
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
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider self-start mb-2">
                Official Government Document
              </span>
              <h3 className="font-bold text-gray-900 text-lg self-start mb-4">
                UP Fire Service Completion NOC
              </h3>

              <div
                onClick={() => setShowModal(true)}
                className="relative w-full aspect-[1/1.35] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src="/images/certificates/fire-safety-certificate.jpg"
                  alt="Fire Safety Certificate - S.D. Modern School"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
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
                  href="/documents/fire-safety-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold text-xs text-center transition-colors shadow-sm inline-flex items-center justify-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>

              {/* Quick Summary Note */}
              <div className="w-full mt-5 p-3 rounded-lg bg-red-50/70 border border-red-200 text-red-950 text-xs space-y-1">
                <span className="font-semibold block">Official UID Reference:</span>
                <p className="text-[11px] font-mono break-all leading-relaxed text-red-800">
                  UPFS/2026/201640/GBN/GAUTAM BUDDH NAGAR/39789/CFO
                </p>
                <p className="text-[11px] text-gray-600 pt-1">
                  Digitally signed by Pradeep Kumar, Chief Fire Officer, Gautam Buddh Nagar.
                </p>
              </div>
            </div>

            {/* Right: Detailed Structured Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Mandatory Public Disclosure
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Fire &amp; Emergency Safety Credentials
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Official verification from the Fire Service Department, Government of Uttar Pradesh, certifying structural and equipment readiness.
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {certDetails.map((item, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/70"}
                      >
                        <td className="px-4 py-2.5 font-medium text-gray-600 w-1/3 text-xs sm:text-sm">
                          {item.label}
                        </td>
                        <td className="px-4 py-2.5 text-gray-900 font-semibold text-xs sm:text-sm">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Statutory Compliance Guidelines */}
              <div className="pt-2">
                <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                  <span className="text-red-600">●</span>
                  Statutory Fire Safety Protocols Maintained on Campus
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {compliancePoints.map((item) => (
                    <div
                      key={item.number}
                      className="p-3.5 rounded-lg bg-gray-50 border border-gray-200/80 text-xs"
                    >
                      <span className="font-bold text-gray-900 block mb-1">
                        {item.number}. {item.title}
                      </span>
                      <p className="text-gray-600 leading-relaxed text-[11px]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Certificate Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  Fire Safety Certificate (Completion NOC) — Uttar Pradesh Fire Service
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  UID: UPFS/2026/201640/GBN/GAUTAM BUDDH NAGAR/39789/CFO
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

            <div className="relative w-full aspect-[1/1.4] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/certificates/fire-safety-certificate.jpg"
                alt="Fire Safety Certificate Full Preview"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-gray-200">
              <a
                href="/images/certificates/fire-safety-certificate.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-700 hover:underline font-medium inline-flex items-center gap-1"
              >
                Open High-Resolution Image in New Tab ↗
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href="/documents/fire-safety-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
                >
                  Download PDF
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
            Review our Building Safety, School Recognition, Safe Drinking Water certificates, and Academic disclosures.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/building-safety-certificate"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              Building Safety Certificate →
            </Link>
            <Link
              href="/school-recognition-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              School Recognition Certificate (RTE)
            </Link>
            <Link
              href="/water-sanitation-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Water &amp; Sanitation Certificate
            </Link>
            <Link
              href="/governance"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              SMC &amp; Committees
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
