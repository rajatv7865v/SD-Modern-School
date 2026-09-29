"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState<"smc" | "pta" | "students" | "documents">("smc");
  const [selectedDocPage, setSelectedDocPage] = useState<number | null>(null);

  const studentStrength = [
    { class: "Nursery", count: 21, stage: "Pre-Primary" },
    { class: "L.K.G.", count: 17, stage: "Pre-Primary" },
    { class: "U.K.G.", count: 26, stage: "Pre-Primary" },
    { class: "Class I", count: 13, stage: "Primary" },
    { class: "Class II", count: 19, stage: "Primary" },
    { class: "Class III", count: 15, stage: "Primary" },
    { class: "Class IV", count: 11, stage: "Primary" },
    { class: "Class V", count: 12, stage: "Primary" },
    { class: "Class VI", count: 11, stage: "Middle School" },
    { class: "Class VII", count: 12, stage: "Middle School" },
    { class: "Class VIII", count: 6, stage: "Middle School" },
  ];

  const totalStudents = studentStrength.reduce((acc, curr) => acc + curr.count, 0);

  const smcMembers = [
    {
      sno: 1,
      name: "DIOS",
      address: "G.B. Nagar",
      phone: "-",
      designation: "Nominative Member",
      category: "Government Nominee",
    },
    {
      sno: 2,
      name: "Mr. Prakash Chand Chauhan",
      address: "Gijhor, Noida",
      phone: "9312533753",
      designation: "Chairman",
      category: "Management",
    },
    {
      sno: 3,
      name: "Mr. Pankaj Chauhan",
      address: "Gijhor, Noida",
      phone: "9899515991",
      designation: "Secretary (Principal, S.D. Modern School)",
      category: "Principal / Member Secretary",
    },
    {
      sno: 4,
      name: "Mrs. Pratibha Kulshrestha",
      address: "Sec – 52, Noida",
      phone: "9871793445",
      designation: "Teacher, Member",
      category: "Teacher Representative",
    },
    {
      sno: 5,
      name: "Mrs. Swati Chauhan",
      address: "Sec – 53, Noida",
      phone: "9625723214",
      designation: "Teacher, Member",
      category: "Teacher Representative",
    },
    {
      sno: 6,
      name: "Ms. Diksha Awana",
      address: "Sec – 05, Noida",
      phone: "9818994284",
      designation: "Teacher, Member",
      category: "Teacher Representative",
    },
    {
      sno: 7,
      name: "Mrs. Anita Pati Mishra",
      address: "Sec- 19, Noida",
      phone: "9811525197",
      designation: "Parent, Member",
      category: "Parent Representative",
    },
    {
      sno: 8,
      name: "Mr. Monu Kumar",
      address: "Sec – 53, Noida",
      phone: "9910783155",
      designation: "Parent, Member",
      category: "Parent Representative",
    },
    {
      sno: 9,
      name: "Mrs. Sushmita Chauhan",
      address: "Sec-53, Noida",
      phone: "9711917489",
      designation: "Other School Teacher, Advisor",
      category: "Educationist / Advisor",
    },
    {
      sno: 10,
      name: "Mr. Dev Bhushan Rana",
      address: "R K Modern School, Sec- 55, Noida",
      phone: "-",
      designation: "Other School Principal",
      category: "External Educationist",
    },
    {
      sno: 11,
      name: "Mrs. Sarika Pathak",
      address: "DSR Modern Malhpur, Sikandrabad, Bulandshahar",
      phone: "-",
      designation: "Other School Principal",
      category: "External Educationist",
    },
  ];

  const ptaMembers = [
    {
      sno: 1,
      name: "Mr. Pankaj Chauhan",
      designation: "Chairman",
      representative: "Principal",
      occupation: "Service",
      address: "Gijhor",
      phone: "9899515991",
    },
    {
      sno: 2,
      name: "Mr. Prakash Chand Chauhan",
      designation: "Secretary",
      representative: "Management Committee Chairman",
      occupation: "Business",
      address: "Gijhor",
      phone: "9312533753",
    },
    {
      sno: 3,
      name: "Mrs. Pratibha Kulshrestha",
      designation: "Treasurer",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 52",
      phone: "9871793445",
    },
    {
      sno: 4,
      name: "Mrs. Swati Chauhan",
      designation: "Member",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 53",
      phone: "9625723214",
    },
    {
      sno: 5,
      name: "Ms. Diksha Awana",
      designation: "Member",
      representative: "Teacher",
      occupation: "Service",
      address: "Sec – 05",
      phone: "9818994284",
    },
    {
      sno: 6,
      name: "Mrs. Anita Pati Mishra",
      designation: "Member",
      representative: "Parent",
      occupation: "Associate Professor",
      address: "Sec – 19",
      phone: "9811525197",
    },
    {
      sno: 7,
      name: "Mr. Monu Kumar",
      designation: "Member",
      representative: "Parent",
      occupation: "Service",
      address: "Sec – 53",
      phone: "9910783155",
    },
  ];

  const governanceDocs = [
    { page: 4, title: "Total Number of Students (2026–2027)", img: "/images/planner/academic-page-04.jpg" },
    { page: 6, title: "Parent Teacher Association (PTA) Executive Body", img: "/images/planner/academic-page-06.jpg" },
    { page: 7, title: "School Management Committee (SMC)", img: "/images/planner/academic-page-07.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/80 to-primary-800/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/30 border border-primary-300/40 text-primary-200 text-sm font-semibold tracking-wider uppercase mb-4">
              Governance &amp; Committees
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              School Management &amp; Committees
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
              S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mt-2">
              Official Constitution of School Management Committee (SMC), Parent Teacher Association (PTA), and Student Strength
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#gov-tabs"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                View Committees
              </a>
              <a
                href="/documents/school-academic-governance-2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Official Document (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-700">11 Members</div>
              <div className="text-xs text-purple-900 font-medium mt-1">School Management Committee (SMC)</div>
            </div>
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-700">7 Members</div>
              <div className="text-xs text-sky-900 font-medium mt-1">Parent Teacher Association (PTA)</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">{totalStudents}</div>
              <div className="text-xs text-emerald-900 font-medium mt-1">Enrolled Students (2026–27)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section id="gov-tabs" className="py-8 bg-gray-50 sticky top-[68px] z-30 shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-center gap-3">
            {[
              { id: "smc", label: "Management Committee (SMC)", icon: "🏛️" },
              { id: "pta", label: "PTA Executive Committee", icon: "👨‍👩‍👧‍👦" },
              { id: "students", label: "Student Strength (153)", icon: "👥" },
              { id: "documents", label: "Official Document Scans", icon: "📄" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary-600 text-white shadow-md scale-[1.02]"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Contents */}
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* TAB 1: SMC */}
          {activeTab === "smc" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="pb-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Statutory Governing Body
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    School Management Committee (SMC)
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Constituted in accordance with State Education Department and RTE norms
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDocPage(7)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold hover:bg-primary-100 transition-colors self-start sm:self-auto border border-primary-200"
                >
                  <span>🔍</span> View Signed SMC Scan
                </button>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                      <th className="py-3.5 px-4">S.No.</th>
                      <th className="py-3.5 px-4">Name</th>
                      <th className="py-3.5 px-4">Address</th>
                      <th className="py-3.5 px-4">Designation in SMC</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {smcMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-gray-400">{member.sno}</td>
                        <td className="py-3.5 px-4 font-bold text-gray-900">{member.name}</td>
                        <td className="py-3.5 px-4 text-gray-600 text-xs sm:text-sm">{member.address}</td>
                        <td className="py-3.5 px-4 font-semibold text-primary-700">{member.designation}</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-800 border border-primary-100">
                            {member.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs sm:text-sm text-gray-700">
                          {member.phone !== "-" ? (
                            <a href={`tel:${member.phone}`} className="hover:text-primary-600 hover:underline">
                              {member.phone}
                            </a>
                          ) : (
                            <span className="text-gray-400">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: PTA */}
          {activeTab === "pta" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="pb-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Parent–Teacher Partnership
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    Parent Teacher Association (PTA) Executive Committee
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Dedicated executive body for academic session 2026–2027
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  <button
                    onClick={() => setSelectedDocPage(6)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-semibold hover:bg-primary-100 transition-colors border border-primary-200"
                  >
                    <span>🔍</span> View Signed Scan
                  </button>
                  <Link
                    href="/pta-executive-committee"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Dedicated PTA Page →
                  </Link>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                      <th className="py-3.5 px-4">S.No.</th>
                      <th className="py-3.5 px-4">Name</th>
                      <th className="py-3.5 px-4">Designation</th>
                      <th className="py-3.5 px-4">Representative</th>
                      <th className="py-3.5 px-4">Occupation</th>
                      <th className="py-3.5 px-4">Address</th>
                      <th className="py-3.5 px-4">Phone</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {ptaMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-gray-400">{member.sno}</td>
                        <td className="py-3.5 px-4 font-bold text-gray-900">{member.name}</td>
                        <td className="py-3.5 px-4 font-semibold text-primary-700">{member.designation}</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {member.representative}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-gray-600">{member.occupation}</td>
                        <td className="py-3.5 px-4 text-gray-600">{member.address}</td>
                        <td className="py-3.5 px-4 font-mono text-xs sm:text-sm text-primary-700">
                          <a href={`tel:${member.phone}`} className="hover:underline">
                            {member.phone}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-primary-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-sm">
                    Looking for the full PTA Executive Committee Page?
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Explore member credentials, committee objectives, interactive signed scan viewer, and standalone PDF download.
                  </p>
                </div>
                <Link
                  href="/pta-executive-committee"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition-colors"
                >
                  Visit Dedicated PTA Page →
                </Link>
              </div>
            </div>
          )}

          {/* TAB 3: STUDENT STRENGTH */}
          {activeTab === "students" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Official Student Roster
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    Total Number of Students (2026–2027)
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Class-wise enrollment strength</p>
                </div>
                <div className="bg-primary-50 border border-primary-200 px-5 py-3 rounded-xl text-center">
                  <span className="text-xs text-primary-800 font-semibold block">Total Enrollment</span>
                  <span className="text-3xl font-extrabold text-primary-700">{totalStudents}</span>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                      <th className="py-3.5 px-4 sm:px-6">S.No.</th>
                      <th className="py-3.5 px-4 sm:px-6">Class</th>
                      <th className="py-3.5 px-4 sm:px-6">Stage</th>
                      <th className="py-3.5 px-4 sm:px-6 text-right">No. of Students</th>
                      <th className="py-3.5 px-4 sm:px-6">Percentage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {studentStrength.map((row, idx) => {
                      const pct = Math.round((row.count / totalStudents) * 100);
                      return (
                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-400">{idx + 1}</td>
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900">{row.class}</td>
                          <td className="py-3.5 px-4 sm:px-6">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {row.stage}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-right font-extrabold text-primary-700 text-base">
                            {row.count}
                          </td>
                          <td className="py-3.5 px-4 sm:px-6">
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-gray-100 h-2 rounded-full overflow-hidden">
                                <div
                                  className="bg-primary-600 h-full rounded-full"
                                  style={{ width: `${pct * 2}%` }}
                                />
                              </div>
                              <span className="text-xs text-gray-500 font-medium">{pct}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr className="bg-primary-900 text-white font-bold text-sm">
                      <td className="py-3.5 px-4 sm:px-6" colSpan={3}>
                        Total Number of Students
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-right text-lg text-emerald-300">
                        {totalStudents}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 text-xs text-primary-200">
                        100% Comprehensive Roster
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: OFFICIAL DOCUMENT SCANS */}
          {activeTab === "documents" && (
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Official Scans
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    Governance &amp; Committees Scanned Records
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Click to inspect official signed pages</p>
                </div>
                <a
                  href="/documents/school-academic-governance-2026-27.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md self-start sm:self-auto flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Complete Document (PDF)
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                {governanceDocs.map((doc) => (
                  <div
                    key={doc.page}
                    onClick={() => setSelectedDocPage(doc.page)}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer group flex flex-col"
                  >
                    <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                      <Image
                        src={doc.img}
                        alt={doc.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-md shadow transition-opacity">
                          View Scan
                        </span>
                      </div>
                      <span className="absolute top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        Page {doc.page}
                      </span>
                    </div>
                    <div className="p-3.5 text-center flex-1 flex flex-col justify-center">
                      <span className="text-xs font-bold text-gray-800 line-clamp-2">{doc.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox / Modal */}
      {selectedDocPage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedDocPage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Official Document Scan — Page {selectedDocPage}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={`/images/planner/academic-page-${String(selectedDocPage).padStart(2, "0")}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 hover:text-primary-700 font-semibold px-2 py-1 rounded hover:bg-primary-50 transition-colors"
                >
                  Full Size ↗
                </a>
                <button
                  onClick={() => setSelectedDocPage(null)}
                  className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-auto bg-gray-900/95 p-4 flex items-center justify-center min-h-[500px]">
              <div className="relative w-full max-w-2xl h-[70vh]">
                <Image
                  src={`/images/planner/academic-page-${String(selectedDocPage).padStart(2, "0")}.jpg`}
                  alt={`Page ${selectedDocPage}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <span className="text-xs text-gray-500">Official Document Record</span>
              <button
                onClick={() => setSelectedDocPage(null)}
                className="px-4 py-1.5 rounded-lg bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Banner */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Explore Yearly Planner &amp; Fee Structure
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Access our month-by-month academic calendar and class-wise fee details for session 2026–2027.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academic-planner"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Yearly Academic Planner (2026–27) →
            </Link>
            <Link
              href="/fee-structure"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Fee Structure (2026–27)
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
