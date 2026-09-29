"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PTAExecutiveCommitteePage() {
  const [showModal, setShowModal] = useState(false);

  const ptaMembers = [
    {
      sno: 1,
      name: "Mr. Pankaj Chauhan",
      designation: "Chairman",
      representative: "Principal",
      occupation: "Service",
      address: "Gijhor, Noida",
      phone: "9899515991",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      sno: 2,
      name: "Mr. Prakash Chand Chauhan",
      designation: "Secretary",
      representative: "Management Committee Chairman",
      occupation: "Business",
      address: "Gijhor, Noida",
      phone: "9312533753",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    {
      sno: 3,
      name: "Mrs. Pratibha Kulshrestha",
      designation: "Treasurer",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 52, Noida",
      phone: "9871793445",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      sno: 4,
      name: "Mrs. Swati Chauhan",
      designation: "Member",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 53, Noida",
      phone: "9625723214",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      sno: 5,
      name: "Ms. Diksha Awana",
      designation: "Member",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 05, Noida",
      phone: "9818994284",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      sno: 6,
      name: "Mrs. Anita Pati Mishra",
      designation: "Member",
      representative: "Parent",
      occupation: "Associate Professor",
      address: "Sec – 19, Noida",
      phone: "9811525197",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    },
    {
      sno: 7,
      name: "Mr. Monu Kumar",
      designation: "Member",
      representative: "Parent",
      occupation: "Service",
      address: "Sec – 53, Noida",
      phone: "9910783155",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
    },
  ];

  const highlights = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Collaborative Partnership",
      desc: "Equal representation of parents, teachers, and school leadership working hand-in-hand for student welfare.",
    },
    {
      icon: "🛡️",
      title: "Transparent Governance",
      desc: "Regular quarterly meetings and open forums to review curriculum delivery, safety, and school facilities.",
    },
    {
      icon: "📈",
      title: "Holistic Development",
      desc: "Continuous feedback on sports, extracurricular activities, student discipline, and academic progress.",
    },
    {
      icon: "📜",
      title: "Official 2026–27 Constitution",
      desc: "Formally constituted and signed executive body as per statutory education department norms.",
    },
  ];

  const objectives = [
    {
      number: "01",
      title: "Academic & Co-Curricular Enrichment",
      desc: "Reviewing instructional methodology, student assessment patterns, and suggesting improvements in co-curricular programs, library resources, and science activities.",
    },
    {
      number: "02",
      title: "Student Safety & Campus Hygiene",
      desc: "Supervising child safety protocols, drinking water testing, clean sanitization, barrier-free access, and fire evacuation mock drills.",
    },
    {
      number: "03",
      title: "Constructive Parent Feedback",
      desc: "Serving as a direct bridge between parents and the school management for feedback on homework schedules, school transportation, and canteen hygiene.",
    },
    {
      number: "04",
      title: "Community & Cultural Engagement",
      desc: "Organizing parent-inclusive celebrations, Annual Day, Sports Day, health check-up camps, and environmental awareness initiatives.",
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
              "url(https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/30 border border-primary-300/40 text-primary-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              Parent–Teacher Partnership • Academic Session 2026–2027
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Parent Teacher Association (PTA)
            </h1>
            <p className="text-base sm:text-xl font-medium text-primary-100 max-w-3xl mx-auto">
              Executive Committee Constitution — S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              Official executive body uniting parents, educators, and administration for child-centric development
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setShowModal(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Signed PTA Scan
              </button>
              <a
                href="/documents/pta-executive-committee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official PTA Document (PDF)
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

      {/* PTA Member Roster Table & Official Signed Scan */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Scan Preview Card */}
            <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
              <span className="text-xs font-bold text-primary-600 uppercase tracking-wider self-start mb-1">
                Official Document Record
              </span>
              <h3 className="font-bold text-gray-900 text-base self-start mb-4">
                Signed PTA Executive Constitution
              </h3>

              <div
                onClick={() => setShowModal(true)}
                className="relative w-full aspect-[1/1.41] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src="/images/certificates/pta-executive-committee.jpg"
                  alt="Official PTA Executive Committee Constitution Scan"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-lg shadow transition-opacity flex items-center gap-1.5">
                    <span>🔍</span> Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="w-full mt-4 flex gap-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition-colors"
                >
                  Inspect Full Scan
                </button>
                <a
                  href="/documents/pta-executive-committee.pdf"
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

              <div className="w-full mt-5 p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-blue-950 text-xs space-y-1">
                <span className="font-semibold block">Academic Governance Disclosure:</span>
                <p className="text-[11px] leading-relaxed text-blue-900">
                  Published as Part of the Official School Academic Governance Roster for Session 2026–2027.
                </p>
                <Link
                  href="/governance"
                  className="inline-block pt-1 text-[11px] text-primary-700 font-semibold hover:underline"
                >
                  View Full School Management (SMC) &amp; Student Strength →
                </Link>
              </div>
            </div>

            {/* Right Column: Full Table Directory */}
            <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Executive Directory (2026–2027)
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                    Members of the PTA Executive Committee
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Official roster of elected and nominated office-bearers
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-bold border border-primary-200 self-start sm:self-auto">
                  7 Active Members
                </div>
              </div>

              {/* Responsive Members Table */}
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                      <th className="py-3 px-3.5 text-center">#</th>
                      <th className="py-3 px-4">Member Name</th>
                      <th className="py-3 px-4">Designation</th>
                      <th className="py-3 px-4">Representative</th>
                      <th className="py-3 px-4">Occupation</th>
                      <th className="py-3 px-4">Address</th>
                      <th className="py-3 px-4">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                    {ptaMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-primary-50/40 transition-colors">
                        <td className="py-3.5 px-3.5 text-center font-bold text-gray-400">
                          {member.sno}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-gray-900 whitespace-nowrap">
                          {member.name}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-primary-700 whitespace-nowrap">
                          {member.designation}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${member.badgeColor}`}
                          >
                            {member.representative}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-gray-600 whitespace-nowrap">
                          {member.occupation}
                        </td>
                        <td className="py-3.5 px-4 text-gray-600 whitespace-nowrap">
                          {member.address}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-primary-700 whitespace-nowrap">
                          <a
                            href={`tel:${member.phone}`}
                            className="hover:underline font-semibold flex items-center gap-1"
                          >
                            <span>📞</span> {member.phone}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Roles & Key Responsibilities */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
                  <span className="text-primary-600">●</span>
                  Core Functions &amp; Responsibilities of the PTA Body
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {objectives.map((item) => (
                    <div
                      key={item.number}
                      className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/80 text-xs"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-[10px]">
                          {item.number}
                        </span>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[11px]">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Scan Modal */}
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
                  Parent Teacher Association (PTA) Executive Body — Official Scan
                </h3>
                <p className="text-xs text-gray-500">
                  S.D. Modern School, Gijhor, Sector-53, Noida (Academic Session 2026–2027)
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

            <div className="relative w-full aspect-[1/1.42] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/images/certificates/pta-executive-committee.jpg"
                alt="PTA Executive Committee Official Scan"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-4 flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-gray-200">
              <a
                href="/images/certificates/pta-executive-committee.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-700 hover:underline font-medium inline-flex items-center gap-1"
              >
                Open Full Scan in New Tab ↗
              </a>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold"
                >
                  Close
                </button>
                <a
                  href="/documents/pta-executive-committee.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
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
            Explore School Governance, Academics &amp; Disclosures
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Review the complete School Management Committee (SMC), Student Strength, Fee Schedule, and Statutory Certificates.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/governance"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              School Management (SMC) →
            </Link>
            <Link
              href="/fee-structure"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Fee Structure (2026–27)
            </Link>
            <Link
              href="/academic-planner"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Yearly Academic Planner
            </Link>
            <Link
              href="/school-recognition-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              School Recognition Certificate
            </Link>
            <Link
              href="/fire-safety-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Fire Safety NOC
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
