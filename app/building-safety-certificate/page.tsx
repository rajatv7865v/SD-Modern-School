"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BuildingSafetyCertificatePage() {
  const [showModal, setShowModal] = useState(false);

  const certDetails = [
    { label: "Certificate Title", value: "Building Safety Certificate (NBC Renewal)" },
    { label: "Annexure Reference", value: "Annexure-D" },
    { label: "Letter / Reference No.", value: "Letter No. 23 /R.E.D/NBC-Certificate- Renewal/2026-27" },
    { label: "Date of Issue", value: "23 / 09 / 2026" },
    { label: "Issuing Department", value: "Office of Assistant Engineer, Rural Engineering Department" },
    { label: "Division / District", value: "Division-Gautam Buddh Nagar, Uttar Pradesh" },
    { label: "Issuing Officer", value: "Ajay Kumar (Assistant Engineer, Rural Engineering Dept.)" },
    { label: "Place of Issue", value: "Vikas Bhawan Surajpur, Gautam Buddh Nagar" },
    { label: "Inspection Date", value: "22 / 09 / 2026 (Conducted by Officers of Rural Engg. Dept.)" },
    { label: "Inspected in Presence of", value: "Mr. Prakash Chauhan (Chairman, S.D. Modern School)" },
    { label: "Certified Institution", value: "S.D. MODERN SCHOOL" },
    { label: "School Address", value: "Gijhore, Sector-53, Noida (U.P.)" },
    { label: "Building Blocks Verified", value: "Block(A) — Ground, First, Second & Third Floor" },
    { label: "Basement Status", value: "---- NIL ---- (No underground/basement structure)" },
    { label: "Compliance Standard", value: "National Building Code Rules 2016 (NBC-2016)" },
    { label: "Government Order Ref.", value: "GO 2232/15-7-2022-1(27)/2022 dated 26 December 2022" },
    { label: "Validity Period", value: "Three (3) Years (Effective from 23/09/2026 to 22/09/2029)" },
    { label: "Copy Dispatched To", value: "Chief Development Officer (CDO), Gautam Buddh Nagar" },
  ];

  const highlights = [
    {
      icon: "🏛️",
      title: "NBC 2016 Compliant",
      desc: "Structure fully complies with National Building Code Rules 2016 for educational institution safety.",
    },
    {
      icon: "🏢",
      title: "4-Level Block(A) Verified",
      desc: "Ground, First, Second, and Third Floors inspected & certified safe. Basement is NIL for optimal evacuation safety.",
    },
    {
      icon: "🧯",
      title: "Fire Safety & Mock Drills",
      desc: "Fresh Fire Department NOC obtained; mandatory fortnightly mock drills conducted and documented year-round.",
    },
    {
      icon: "📜",
      title: "3-Year Official Validity",
      desc: "Formally verified fit for school occupancy for a 3-year term (2026–2029) by Govt. Assistant Engineer.",
    },
  ];

  const floorSpecifications = [
    {
      level: "Ground Floor",
      block: "Block (A)",
      occupancy: "Administrative Offices, Reception, Pre-Primary & Primary Classrooms, Staff Rooms",
      safetyStatus: "Verified & NBC Certified",
    },
    {
      level: "First Floor",
      block: "Block (A)",
      occupancy: "Primary & Middle Classrooms, Library, Computer Laboratory",
      safetyStatus: "Verified & NBC Certified",
    },
    {
      level: "Second Floor",
      block: "Block (A)",
      occupancy: "Middle School Classrooms, Science Laboratory, Activity Hall",
      safetyStatus: "Verified & NBC Certified",
    },
    {
      level: "Third Floor",
      block: "Block (A)",
      occupancy: "Multipurpose Hall, Resource Centre, Indoor Activity Space",
      safetyStatus: "Verified & NBC Certified",
    },
    {
      level: "Basement",
      block: "N/A",
      occupancy: "---- NIL ---- (No basement structure present on campus)",
      safetyStatus: "Fully Compliant with Safety Norms",
    },
  ];

  const complianceConditions = [
    {
      number: "1",
      title: "Fire Safety Certification",
      text: "Fire safety certificate has been obtained freshly from the Department of Fire, Uttar Pradesh, and fire protection equipment is actively maintained.",
    },
    {
      number: "2",
      title: "Fortnightly Mock Drills",
      text: "Fortnightly mock emergency evacuation drills are conducted and recorded systematically throughout the academic year.",
    },
    {
      number: "3",
      title: "Preventive Infrastructure Maintenance",
      text: "Regular scheduled maintenance of building infrastructure, electrical lines, and plumbing networks is taken up continuously.",
    },
    {
      number: "4",
      title: "Govt. Order Compliance",
      text: "All required provisions under Government Order GO 2232/15-7-2022-1(27)/2022 dated 26 December 2022 are fulfilled timely by school management.",
    },
    {
      number: "5",
      title: "Vigilance for Future Civil Works",
      text: "Any future civil maintenance or structural work must strictly be approved and carried out under the vigilance of a competent authority and civil engineer.",
    },
    {
      number: "6",
      title: "Structural Integrity Clause",
      text: "The certificate is valid for the existing approved structure and will not cover unpermitted alterations, modifications, or plumbing additions without prior reassessment.",
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/30 border border-emerald-300/40 text-emerald-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              Annexure-D • Structural &amp; Fire Safety Compliance
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Building Safety Certificate
            </h1>
            <p className="text-base sm:text-xl font-medium text-primary-100 max-w-3xl mx-auto">
              Issued by Office of Assistant Engineer, Rural Engineering Department, Division-Gautam Buddh Nagar
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              National Building Code (NBC-2016) Compliance for S.D. Modern School, Gijhore, Sector-53, Noida (U.P.)
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Certificate Scan
              </button>
              <a
                href="/documents/building-safety-certificate.pdf"
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
                Government Certified Annexure-D
              </h3>

              <div
                onClick={() => setShowModal(true)}
                className="relative w-full aspect-[1/1.4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src="/images/certificates/building-safety-certificate.jpg"
                  alt="Building Safety Certificate - S.D. Modern School"
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
                  href="/documents/building-safety-certificate.pdf"
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

              {/* Quick Summary Note */}
              <div className="w-full mt-5 p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-blue-900 text-xs space-y-1">
                <span className="font-semibold block">Office Reference:</span>
                <p className="text-[11px] leading-relaxed">
                  Letter No. 23 /R.E.D/NBC-Certificate- Renewal/2026-27 dated 23/09/2026. Signed by Assistant Engineer Ajay Kumar, Rural Engineering Department, Gautam Buddh Nagar.
                </p>
              </div>
            </div>

            {/* Right: Detailed Structured Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Verification Breakdown
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Certificate Information &amp; Inspection Audit
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Mandatory Public Disclosure &amp; Structural Compliance Record
                </p>
              </div>

              <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 overflow-hidden text-sm">
                {certDetails.map((detail, idx) => (
                  <div key={idx} className="p-3.5 sm:px-4 sm:py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-gray-50/80 transition-colors">
                    <span className="text-gray-500 font-medium text-xs sm:w-48 flex-shrink-0">
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
                <span className="font-bold block text-emerald-900">Official Government Inspection Endorsement:</span>
                <p className="italic leading-relaxed">
                  &ldquo;The building is owned/occupied by S.D. MODERN SCHOOL Address- Gijhore, Sector-53, Noida (U.P.) has complied with the Building safety requirements in accordance with National Building Code Rules 2016, and verified by the officers concerned of Rural Engineering Department, Division- Gautam Buddh Nagar (U.P.) on 22/09/2026 in the presence of Mr. Prakash Chauhan (Chairman), S.D. MODERN SCHOOL Address- Gijhore, Sector-53, Noida (U.P.) and that the building/premises is fit for occupancy for running school with effect from 23/09/2026 for a period of Three year.&rdquo;
                </p>
                <span className="text-xs font-semibold text-emerald-800 block pt-1">
                  — Ajay Kumar, Assistant Engineer (सहायक अभियन्ता), Rural Engineering Department, Gautam Buddh Nagar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Specifications & Floor Plan Breakdown */}
      <section className="py-12 bg-gray-100/70 border-t border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
              Infrastructure Details
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Building Structure &amp; Floor-wise Specification
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Verified Block(A) layout and occupancy profile certified under National Building Code (NBC-2016)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-semibold">Floor / Level</th>
                    <th className="py-3.5 px-4 font-semibold">Designated Block</th>
                    <th className="py-3.5 px-4 font-semibold">Institutional Utilization</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs sm:text-sm">
                  {floorSpecifications.map((item, idx) => (
                    <tr key={idx} className="hover:bg-primary-50/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-gray-900">{item.level}</td>
                      <td className="py-3.5 px-4 text-gray-700 font-medium">{item.block}</td>
                      <td className="py-3.5 px-4 text-gray-600">{item.occupancy}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.level === "Basement"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                        }`}>
                          {item.level === "Basement" ? "Compliant (NIL)" : "✓ " + item.safetyStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Conditions & Safety Mandates */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
              Statutory Protocols
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Specific Conditions &amp; Compliance Appended
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Mandatory safety mandates outlined in the Building Safety Certificate issued on 23.09.2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceConditions.map((cond, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-primary-600 text-white font-extrabold flex items-center justify-center text-sm mb-4 shadow-sm">
                    {cond.number}
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">{cond.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{cond.text}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 flex items-center text-xs font-medium text-emerald-700">
                  <span className="mr-1.5">✓</span> Strictly Followed &amp; Documented
                </div>
              </div>
            ))}
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
                  Building Safety Certificate (Annexure-D)
                </h3>
                <p className="text-xs text-gray-500">Letter No. 23 /R.E.D/NBC-Certificate- Renewal/2026-27 — S.D. Modern School</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/images/certificates/building-safety-certificate.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 rounded hover:bg-primary-50 transition-colors"
                >
                  Full Size ↗
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close dialog"
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
                  src="/images/certificates/building-safety-certificate.jpg"
                  alt="Building Safety Certificate - S.D. Modern School"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <span className="text-xs text-gray-500">Rural Engineering Department, Gautam Buddh Nagar</span>
              <a
                href="/documents/building-safety-certificate.pdf"
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
            Review our Safe Drinking Water Certificate, Fee Structure, Academic Planner, and SMC Governance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/fire-safety-certificate"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              Fire Safety NOC (2026–31) →
            </Link>
            <Link
              href="/school-recognition-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              School Recognition Certificate (RTE)
            </Link>
            <Link
              href="/cbse-appendix-ii"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              CBSE Appendix-II (DEO)
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
