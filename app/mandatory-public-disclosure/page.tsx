"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MandatoryPublicDisclosurePage() {
  const [activePage, setActivePage] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"general" | "docs" | "academics" | "staff" | "infra">("general");

  const pages = [
    {
      page: 1,
      title: "Page 1: General Info & Trust Registration",
      desc: "SARAS 7.0 Header, School & Principal details, MCA B.Ed qualification, and Trust Deed link",
      image: "/images/certificates/cbse-appendix-ix-page-1.jpg",
    },
    {
      page: 2,
      title: "Page 2: Statutory Compliance Documents & Academic Links",
      desc: "RTE Recognition, Building Safety, Fire NOC, Appendix-II, Water Sanitation, Fee & Planner links",
      image: "/images/certificates/cbse-appendix-ix-page-2.jpg",
    },
    {
      page: 3,
      title: "Page 3: PTA Roster & Staff Summary",
      desc: "PTA members link, Teaching staff distribution (15 teachers, 1.5:1 ratio), Special Educator & Counsellor",
      image: "/images/certificates/cbse-appendix-ix-page-3.jpg",
    },
    {
      page: 4,
      title: "Page 4: Infrastructure & Faculty Roster (1–10)",
      desc: "4,100 sq.m campus, 22 classrooms, 6 labs, toilets, YouTube inspection tour & Faculty profiles 1–10",
      image: "/images/certificates/cbse-appendix-ix-page-4.jpg",
    },
    {
      page: 5,
      title: "Page 5: Faculty Roster (11–18) & Endorsement",
      desc: "Remaining staff profiles 11–18, NTT educators, official stamps & signatures of President and Principal",
      image: "/images/certificates/cbse-appendix-ix-page-5.jpg",
    },
  ];

  const generalInfo = [
    { no: "1", field: "NAME OF THE SCHOOL", value: "S D MODERN SCHOOL" },
    { no: "2", field: "AFFILIATION NO. (IF APPLICABLE)", value: "Applied for CBSE Senior Secondary Affiliation" },
    { no: "3", field: "SCHOOL CODE (IF APPLICABLE)", value: "New Affiliation Processing" },
    { no: "4", field: "COMPLETE ADDRESS WITH PIN CODE", value: "GIJHORE SECTOR 53, NOIDA DADRI, GAUTAM BUDDH NAGAR, UTTAR PRADESH - 201307" },
    { no: "5", field: "PRINCIPAL NAME", value: "Mr. PANKAJ CHAUHAN" },
    { no: "6", field: "PRINCIPAL QUALIFICATION", value: "MCA, B.ED" },
    { no: "7", field: "SCHOOL EMAIL ID", value: "sdmodernnoida@gmail.com" },
    { no: "8", field: "CONTACT DETAILS (LANDLINE/MOBILE)", value: "8448776603 / 084487 76603" },
  ];

  const docLinks = [
    {
      no: "1",
      title: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION",
      status: "Fresh Application under CBSE SARAS 7.0",
      href: "/cbse-appendix-ii",
      linkText: "View Appendix-II DEO Verification →",
    },
    {
      no: "2",
      title: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL",
      status: "Parmal Singh Welfare & Educational Trust (Reg. 2014)",
      href: "/documents/trust-deed.pdf",
      linkText: "Download Registered Trust Deed (PDF) →",
    },
    {
      no: "3",
      title: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED BY STATE GOVT.",
      status: "State Education Department Processing",
      href: "/school-recognition-certificate",
      linkText: "View Recognition Order →",
    },
    {
      no: "4",
      title: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009",
      status: "Order No. 4203 / 28-03-2016 (Nursery to Class 8 English Medium)",
      href: "/school-recognition-certificate",
      linkText: "View School Recognition Certificate →",
    },
    {
      no: "5",
      title: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER NBC",
      status: "NBC-2016 Compliant • Valid 23-09-2026 to 22-09-2029 (Rural Engg. Dept.)",
      href: "/building-safety-certificate",
      linkText: "View Building Safety Certificate →",
    },
    {
      no: "6",
      title: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY COMPETENT AUTHORITY",
      status: "CFO Gautam Buddh Nagar • Valid 27-06-2026 to 26-06-2031 (5 Years)",
      href: "/fire-safety-certificate",
      linkText: "View Fire Safety Certificate (NOC) →",
    },
    {
      no: "7",
      title: "COPY OF THE SELF CERTIFICATION SUBMITTED BY THE SCHOOL FOR AFFILIATION",
      status: "Appendix-II Self-Certification & DEO Inspection Certificate",
      href: "/cbse-appendix-ii",
      linkText: "View CBSE Appendix-II (DEO) →",
    },
    {
      no: "8",
      title: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
      status: "CMO Office Certificate No. 153 & Potable Water Lab Report (2026–27)",
      href: "/water-sanitation-certificate",
      linkText: "View Water & Sanitation Certificate →",
    },
  ];

  const academicLinks = [
    {
      no: "1",
      title: "FEE STRUCTURE OF THE SCHOOL",
      desc: "Official class-wise monthly tuition & admission schedule approved for Session 2026–2027",
      href: "/fee-structure",
      linkText: "View Fee Structure (2026–27) →",
    },
    {
      no: "2",
      title: "ANNUAL ACADEMIC CALENDER",
      desc: "Month-by-month calendar of examinations, institutional events, celebrations & holidays",
      href: "/academic-planner",
      linkText: "View Yearly Academic Planner →",
    },
    {
      no: "3",
      title: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
      desc: "Complete constitution of School Management Committee with officer designations & contacts",
      href: "/governance",
      linkText: "View SMC Governance Roster →",
    },
    {
      no: "4",
      title: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
      desc: "Elected and nominated parent and teacher office-bearers for Session 2026–2027",
      href: "/pta-executive-committee",
      linkText: "View PTA Executive Committee →",
    },
    {
      no: "5",
      title: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION",
      desc: "School currently operating from Nursery to Class 8th; fresh CBSE Board examination batch pending",
      href: "#",
      linkText: "Applicable upon first Board Cohort",
    },
  ];

  const staffSummary = [
    { field: "PRINCIPAL", value: "Mr. PANKAJ CHAUHAN" },
    { field: "TOTAL NO. OF TEACHERS", value: "15" },
    { field: "POST GRADUATE TEACHERS (PGT)", value: "0" },
    { field: "TRAINED GRADUATE TEACHERS (TGT)", value: "5" },
    { field: "PRIMARY TEACHERS (PRT)", value: "10" },
    { field: "TEACHERS SECTION RATIO", value: "1.5 : 1" },
    { field: "DETAILS OF SPECIAL EDUCATOR", value: "BANDNA, M.A. (Psychology)" },
    { field: "DETAILS OF COUNSELLOR & WELLNESS TEACHER", value: "SHIVANI CHAUHAN, B.Pharma" },
  ];

  const facultyMembers = [
    { sNo: 1, name: "PANKAJ CHAUHAN", designation: "PRINCIPAL", qualification: "BCA, MCA, B.ED." },
    { sNo: 2, name: "PRATIBHA KULSHRESHTHA", designation: "LIBRARIAN", qualification: "B.SC, B.LIB, M.A., M.LIB" },
    { sNo: 3, name: "DIKSHA AWANA", designation: "TGT", qualification: "M.COM., B.ED." },
    { sNo: 4, name: "ANJU", designation: "TGT", qualification: "B.A., B.ED." },
    { sNo: 5, name: "SWATI CHAUHAN", designation: "TGT", qualification: "B.A., M.A., B.ED." },
    { sNo: 6, name: "NAMRATA", designation: "NTT", qualification: "B.A., M.A." },
    { sNo: 7, name: "BANDANA", designation: "COUNSELOR", qualification: "B.A., M.A. (Psychology), B.ED." },
    { sNo: 8, name: "SHIVANI CHAUHAN", designation: "WELLNESS", qualification: "B.Pharma" },
    { sNo: 9, name: "DEEPAK CHAUHAN", designation: "PHYSICAL EDUCATION", qualification: "B.P.ED." },
    { sNo: 10, name: "SHOBHNA", designation: "TGT", qualification: "B.SC., M.SC." },
    { sNo: 11, name: "JAYA CHAUHAN", designation: "TGT", qualification: "B.COM., M.COM., B.ED." },
    { sNo: 12, name: "PRIYANKA SINGH", designation: "PRT", qualification: "B.A., B.ED." },
    { sNo: 13, name: "VIJETA CHAUHAN", designation: "TGT", qualification: "B.COM., M.COM., B.ED." },
    { sNo: 14, name: "RENU LOHIA", designation: "FINE ART", qualification: "BFA, MFA" },
    { sNo: 15, name: "PRITY MAURYA", designation: "NTT", qualification: "B.A., M.A., ADCA" },
    { sNo: 16, name: "SUPRIYA KUMARI", designation: "NTT", qualification: "B.A., M.A." },
    { sNo: 17, name: "RENU", designation: "NTT", qualification: "B.A., M.A., DTP" },
    { sNo: 18, name: "USHA", designation: "NTT", qualification: "B.A." },
  ];

  const infrastructureData = [
    { field: "1. TOTAL CAMPUS AREA OF THE SCHOOL", value: "4,100 Sq. Meters" },
    { field: "2. NO. AND SIZE OF CLASSROOMS", value: "22 Classrooms (47 Sq. Meters each)" },
    { field: "3. NO. AND SIZE OF LABORATORIES (INCL. COMPUTER LABS)", value: "6 Laboratories (57 Sq. Meters each)" },
    { field: "4. INTERNET FACILITY", value: "YES — High-speed Campus Broadband Connectivity" },
    { field: "5. NO. OF GIRLS TOILETS", value: "8 Separate Sanitized Toilets" },
    { field: "6. NO. OF BOYS TOILETS", value: "8 Separate Sanitized Toilets" },
    {
      field: "7. YOUTUBE VIDEO OF CAMPUS INSPECTION & INFRASTRUCTURE",
      value: "https://youtu.be/5UDYEidVAg4?si=krVHmckXjrUqHxE6",
      isVideoLink: true,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[400px] max-h-[580px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-primary-950/85 to-primary-900/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/30 border border-teal-300/40 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              SARAS 7.0 • APPENDIX - IX • CBSE MANDATORY DISCLOSURE
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Mandatory Disclosure Details SDMS
            </h1>
            <p className="text-base sm:text-xl font-medium text-teal-100 max-w-3xl mx-auto">
              S.D. MODERN SCHOOL, GIJHOR, SECTOR-53, NOIDA (U.P.)
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              Official Central Board of Secondary Education (CBSE) Comprehensive Institutional Compliance
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Official SARAS Scan (5 Pages)
              </button>
              <a
                href="/documents/cbse-appendix-ix-mandatory-public-disclosure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Appendix-IX (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80">
              <div className="text-2xl font-extrabold text-teal-700">4,100 m²</div>
              <div className="text-xs text-gray-600 font-medium mt-0.5">Total Campus Area</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80">
              <div className="text-2xl font-extrabold text-primary-700">22 Classrooms</div>
              <div className="text-xs text-gray-600 font-medium mt-0.5">47 m² Average Size</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80">
              <div className="text-2xl font-extrabold text-purple-700">6 Laboratories</div>
              <div className="text-xs text-gray-600 font-medium mt-0.5">57 m² Science &amp; Computer</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-200/80">
              <div className="text-2xl font-extrabold text-emerald-700">1.5 : 1</div>
              <div className="text-xs text-gray-600 font-medium mt-0.5">Teacher-Section Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive 5-Page Scanned Document Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                  Official 5-Page SARAS Record
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                  Page {activePage} of 5
                </span>
              </div>

              {/* Page Selector Tabs */}
              <div className="w-full grid grid-cols-5 gap-1 p-1 bg-gray-100 rounded-xl mb-4 text-xs font-semibold">
                {pages.map((p) => (
                  <button
                    key={p.page}
                    onClick={() => setActivePage(p.page)}
                    className={`py-1.5 rounded-lg transition-all text-center ${
                      activePage === p.page
                        ? "bg-white text-teal-700 shadow-sm font-bold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    P{p.page}
                  </button>
                ))}
              </div>

              {/* Scanned Image Display */}
              <div
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="relative w-full aspect-[1/1.4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={pages[activePage - 1].image}
                  alt={`CBSE Appendix-IX - Page ${activePage}`}
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
                  href="/documents/cbse-appendix-ix-mandatory-public-disclosure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs text-center transition-colors shadow-sm inline-flex items-center justify-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>

              {/* Endorsement Note */}
              <div className="w-full mt-5 p-3 rounded-lg bg-teal-50/70 border border-teal-200 text-teal-950 text-xs space-y-1">
                <span className="font-semibold block">Signed &amp; Attested:</span>
                <p className="text-[11px] leading-relaxed text-teal-900">
                  Duly verified and signed with official stamps by the <strong>President</strong> and <strong>Principal</strong> of S.D. Modern School, Gijhor, Sector-53, Noida.
                </p>
              </div>
            </div>

            {/* Right Column: Tabbed Data Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-1.5 p-1 bg-gray-100 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "general" ? "bg-white text-teal-700 shadow-sm font-bold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  A. General Info
                </button>
                <button
                  onClick={() => setActiveTab("docs")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "docs" ? "bg-white text-teal-700 shadow-sm font-bold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  B. Documents &amp; Certificates
                </button>
                <button
                  onClick={() => setActiveTab("academics")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "academics" ? "bg-white text-teal-700 shadow-sm font-bold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  C. Academics &amp; Results
                </button>
                <button
                  onClick={() => setActiveTab("staff")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "staff" ? "bg-white text-teal-700 shadow-sm font-bold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  D &amp; F. Staff &amp; Teachers
                </button>
                <button
                  onClick={() => setActiveTab("infra")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeTab === "infra" ? "bg-white text-teal-700 shadow-sm font-bold" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  E. Infrastructure
                </button>
              </div>

              {/* TAB A: GENERAL INFORMATION */}
              {activeTab === "general" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Appendix-IX • Section A</span>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">General Information</h2>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                      <tbody className="divide-y divide-gray-100">
                        {generalInfo.map((row) => (
                          <tr key={row.no} className="hover:bg-gray-50/70 transition-colors">
                            <td className="px-4 py-3 font-semibold text-gray-500 w-1/3 text-xs">{row.field}</td>
                            <td className="px-4 py-3 font-bold text-gray-900">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB B: DOCUMENTS AND INFORMATION */}
              {activeTab === "docs" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Appendix-IX • Section B</span>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">Documents &amp; Statutory Approvals</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Direct links to certified scans on the official school website</p>
                  </div>
                  <div className="space-y-3">
                    {docLinks.map((item) => (
                      <div
                        key={item.no}
                        className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-teal-300 hover:bg-teal-50/30 transition-all text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-gray-900 block">{item.no}. {item.title}</span>
                          <span className="text-gray-500 text-[11px] block mt-0.5">{item.status}</span>
                        </div>
                        {item.href.startsWith("http") || item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            target={item.href.endsWith(".pdf") ? "_blank" : "_self"}
                            rel={item.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900 text-xs whitespace-nowrap pt-1 sm:pt-0"
                          >
                            {item.linkText}
                          </Link>
                        ) : (
                          <span className="text-gray-400 text-xs italic">{item.linkText}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB C: RESULT AND ACADEMICS */}
              {activeTab === "academics" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Appendix-IX • Section C</span>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">Result &amp; Academics Disclosures</h2>
                  </div>
                  <div className="space-y-3">
                    {academicLinks.map((item) => (
                      <div
                        key={item.no}
                        className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 hover:border-teal-300 hover:bg-teal-50/30 transition-all text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-bold text-gray-900 block">{item.no}. {item.title}</span>
                          <span className="text-gray-500 text-[11px] block mt-0.5">{item.desc}</span>
                        </div>
                        {item.href !== "#" ? (
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1 font-bold text-teal-700 hover:text-teal-900 text-xs whitespace-nowrap pt-1 sm:pt-0"
                          >
                            {item.linkText}
                          </Link>
                        ) : (
                          <span className="text-gray-400 text-xs italic">{item.linkText}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB D & F: STAFF & TEACHER DETAILS */}
              {activeTab === "staff" && (
                <div className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Appendix-IX • Section D &amp; F</span>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">Teaching Faculty &amp; Staff Strength</h2>
                  </div>

                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {staffSummary.map((s, idx) => (
                      <div key={idx} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                        <span className="text-[10px] text-gray-500 uppercase font-semibold block">{s.field}</span>
                        <span className="font-bold text-gray-900 mt-0.5 block">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Faculty Table */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-700 uppercase mb-2">Complete Teacher Details (18 Educators)</h3>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 max-h-[360px] overflow-y-auto">
                      <table className="min-w-full divide-y divide-gray-200 text-xs">
                        <thead className="bg-gray-100 sticky top-0 z-10 text-gray-700">
                          <tr>
                            <th className="px-3 py-2 text-left font-bold">#</th>
                            <th className="px-3 py-2 text-left font-bold">Teacher Name</th>
                            <th className="px-3 py-2 text-left font-bold">Designation</th>
                            <th className="px-3 py-2 text-left font-bold">Qualification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                          {facultyMembers.map((t) => (
                            <tr key={t.sNo} className="hover:bg-teal-50/40 transition-colors">
                              <td className="px-3 py-2 font-bold text-gray-400">{t.sNo}</td>
                              <td className="px-3 py-2 font-bold text-gray-900 whitespace-nowrap">{t.name}</td>
                              <td className="px-3 py-2 font-semibold text-teal-700 whitespace-nowrap">{t.designation}</td>
                              <td className="px-3 py-2 text-gray-600 whitespace-nowrap">{t.qualification}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB E: SCHOOL INFRASTRUCTURE */}
              {activeTab === "infra" && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">Appendix-IX • Section E</span>
                    <h2 className="text-xl font-bold text-gray-900 mt-0.5">Campus Infrastructure Details</h2>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm">
                      <tbody className="divide-y divide-gray-100">
                        {infrastructureData.map((item, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                            <td className="px-4 py-3 font-semibold text-gray-600 w-2/5 text-xs">{item.field}</td>
                            <td className="px-4 py-3 font-bold text-gray-900">
                              {item.isVideoLink ? (
                                <a
                                  href={item.value}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-sm"
                                >
                                  <span>▶</span> Watch Infrastructure Video on YouTube
                                </a>
                              ) : (
                                item.value
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* YouTube Inspection Embed Banner */}
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Official Infrastructure Video Tour</h4>
                      <p className="text-xs text-gray-600 mt-0.5">
                        Watch the comprehensive video covering classrooms, laboratories, playgrounds, and security facilities.
                      </p>
                    </div>
                    <a
                      href="https://youtu.be/5UDYEidVAg4?si=krVHmckXjrUqHxE6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs whitespace-nowrap shadow-sm transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>▶</span> Play Video (YouTube)
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Certificate Modal with 5-Page Switcher */}
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
                  SARAS 7.0: Mandatory Public Disclosure (Appendix-IX) — Page {modalPage} of 5
                </h3>
                <p className="text-xs text-gray-500 font-mono">
                  S.D. Modern School, Gijhor, Sector-53, Noida
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
              {[1, 2, 3, 4, 5].map((pNum) => (
                <button
                  key={pNum}
                  onClick={() => setModalPage(pNum)}
                  className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                    modalPage === pNum
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Page {pNum}
                </button>
              ))}
            </div>

            <div className="relative w-full aspect-[1/1.4] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={pages[modalPage - 1].image}
                alt={`SARAS Appendix-IX Page ${modalPage}`}
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
                className="text-xs text-teal-700 hover:underline font-medium inline-flex items-center gap-1"
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
                  href="/documents/cbse-appendix-ix-mandatory-public-disclosure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
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
            Review individual certifications: CBSE Appendix-II, Building Safety, Fire Safety NOC, School Recognition, and Governance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/cbse-appendix-ii"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              CBSE Appendix-II (DEO) →
            </Link>
            <Link
              href="/school-recognition-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              School Recognition (RTE)
            </Link>
            <Link
              href="/building-safety-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Building Safety Certificate
            </Link>
            <Link
              href="/fire-safety-certificate"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-5 py-2 rounded-lg font-semibold text-sm transition-all"
            >
              Fire Safety NOC
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
