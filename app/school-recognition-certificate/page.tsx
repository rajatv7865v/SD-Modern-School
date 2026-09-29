"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SchoolRecognitionCertificatePage() {
  const [activePage, setActivePage] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState<number>(1);

  const pages = [
    {
      page: 1,
      title: "Page 1: Recognition Grant Order",
      desc: "RTE Act 2009 Section 18 & Rules 2010 Rule 15(4) approval for Nursery to Class 8 (English Medium)",
      image: "/images/certificates/school-recognition-certificate-page-1.jpg",
    },
    {
      page: 2,
      title: "Page 2: Infrastructure & Safety Norms",
      desc: "School campus (1,000 sq.m), 14 classrooms, play area, sanitized toilets, drinking water & safety",
      image: "/images/certificates/school-recognition-certificate-page-2.jpg",
    },
    {
      page: 3,
      title: "Page 3: Code G.J.H.S-206 & BSA Endorsement",
      desc: "Allotment of Recognition Code G.J.H.S-206, terms & signature of District Basic Education Officer",
      image: "/images/certificates/school-recognition-certificate-page-3.jpg",
    },
  ];

  const certDetails = [
    { label: "Certificate Title", value: "School Recognition Certificate (मान्यता प्रमाण-पत्र)" },
    { label: "Statutory Law / Act", value: "Right to Education (RTE) Act 2009 (Section 18) & UP Rules 2010 (Rule 15(4))" },
    { label: "Letter / Despatch No.", value: "पत्रांक / मान्यता / 4203 / 2015-2016" },
    { label: "Date of Issue", value: "28-03-2016" },
    { label: "Issuing Authority", value: "Office of District Basic Education Officer (जिला बेसिक शिक्षा अधिकारी), Gautam Buddh Nagar" },
    { label: "Allotted Recognition Code", value: "G.J.H.S - 206" },
    { label: "Approved School Name", value: "SD Modern School, Gijhore (एस०डी० मार्डन स्कूल गिझोड)" },
    { label: "Administrative Block", value: "Block Khand - Bisrakh, District Gautam Buddh Nagar" },
    { label: "Authorized Classes", value: "Nursery to Class 8 (नर्सरी से कक्षा 08 तक)" },
    { label: "Medium of Instruction", value: "English Medium (अंग्रेजी माध्यम)" },
    { label: "Application Ref. Date", value: "31-08-2015 (Inspected & Verified by Education Dept.)" },
    { label: "Campus Land Area", value: "1,000 sq. meters (विद्यालय परिसर का क्षेत्रफल)" },
    { label: "Total Built-up Area", value: "4,000 sq. feet (कुल निर्मित क्षेत्रफल)" },
    { label: "Number of Classrooms", value: "14 Instructional Classrooms (कक्षों की संख्या: 14)" },
    { label: "Administrative Rooms", value: "02 Rooms (Headmaster / Office / Store Rooms)" },
    { label: "Playground & Sports", value: "Adequate dedicated open outdoor playground (क्रीडा स्थल)" },
    { label: "Sanitary Facilities", value: "Separate sanitized toilets for boys and girls (उपलब्ध है)" },
    { label: "Potable Drinking Water", value: "Safe drinking water facility verified and active (उपलब्ध है)" },
    { label: "Accessibility & Barrier-Free", value: "Barrier-free access for inclusive education (बाधारहित पहुँच)" },
    { label: "Library & Learning Material", value: "Books, teaching-learning aids & sports equipment available" },
  ];

  const highlights = [
    {
      icon: "📜",
      title: "Official BSA Recognition",
      desc: "Formally granted under Section 18 of RTE Act 2009 by District Basic Education Officer, Gautam Buddh Nagar.",
    },
    {
      icon: "🎓",
      title: "Nursery to Class 8 (English)",
      desc: "Certified English Medium institution for pre-primary, primary, and middle school education.",
    },
    {
      icon: "🏷️",
      title: "Official Code: G.J.H.S-206",
      desc: "Permanent government recognition code allocated for all official and departmental correspondence.",
    },
    {
      icon: "🏫",
      title: "Verified Infrastructure",
      desc: "Comprehensive campus inspection confirmed 14 classrooms, playground, labs, safe water, and separate toilets.",
    },
  ];

  const compliancePoints = [
    {
      number: "1",
      title: "Inclusive RTE Admission Clause",
      text: "Mandatory compliance under Section 12(1)(c) of RTE Act 2009 providing 25% admission quota for children from economically weaker and disadvantaged sections of society.",
    },
    {
      number: "2",
      title: "No Screening or Capitation Fee",
      text: "Strict adherence to non-commercial education; no capitation fee or screening tests for children or parents during admission.",
    },
    {
      number: "3",
      title: "Child-Centric Learning Environment",
      text: "Full enforcement of Section 17 against physical or mental harassment, ensuring an encouraging, safe, and stress-free school environment.",
    },
    {
      number: "4",
      title: "Qualified & Certified Faculty",
      text: "All teachers maintain prescribed academic and professional qualifications under Section 23(1) with ongoing professional development.",
    },
    {
      number: "5",
      title: "Registered Society Non-Profit Trust",
      text: "School is governed through Parmal Singh Welfare and Educational Trust (Reg. under Societies Registration Act 1860) exclusively for education.",
    },
    {
      number: "6",
      title: "Annual Financial Auditing",
      text: "Annual accounts audited by a qualified Chartered Accountant with statements submitted to the District Basic Education Office.",
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
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-primary-950/85 to-primary-900/85" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/30 border border-blue-300/40 text-blue-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
              Government Recognized • Right to Education (RTE) Act 2009
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              School Recognition Certificate
            </h1>
            <p className="text-base sm:text-xl font-medium text-blue-100 max-w-3xl mx-auto">
              कार्यालय जिला बेसिक शिक्षा अधिकारी, गौतमबुद्धनगर • Recognition Code: G.J.H.S - 206
            </p>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto mt-2">
              Approved for Nursery to Class 8 (English Medium) under Section 18 of RTE Act 2009 &amp; Rule 15(4) of UP RTE Rules 2010
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <span>🔍</span> View Certificate Scan (3 Pages)
              </button>
              <a
                href="/documents/school-recognition-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Recognition Order (PDF)
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
                className="p-5 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-blue-300 hover:shadow-sm transition-all"
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
            {/* Left: Certificate Scan Card with Page Switcher */}
            <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Official 3-Page Document
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Page {activePage} of 3
                </span>
              </div>

              {/* Page Selector Tabs */}
              <div className="w-full grid grid-cols-3 gap-1.5 p-1 bg-gray-100 rounded-xl mb-4 text-xs font-semibold">
                {pages.map((p) => (
                  <button
                    key={p.page}
                    onClick={() => setActivePage(p.page)}
                    className={`py-1.5 rounded-lg transition-all text-center ${
                      activePage === p.page
                        ? "bg-white text-blue-700 shadow-sm font-bold"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Page {p.page}
                  </button>
                ))}
              </div>

              {/* Scanned Image Display */}
              <div
                onClick={() => {
                  setModalPage(activePage);
                  setShowModal(true);
                }}
                className="relative w-full aspect-[1/1.42] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shadow-md hover:shadow-xl transition-shadow group"
              >
                <Image
                  src={pages[activePage - 1].image}
                  alt={`School Recognition Certificate - Page ${activePage}`}
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
                  href="/documents/school-recognition-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs text-center transition-colors shadow-sm inline-flex items-center justify-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Complete PDF
                </a>
              </div>

              {/* Document Reference Info */}
              <div className="w-full mt-5 p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-blue-950 text-xs space-y-1">
                <span className="font-semibold block">Office Despatch Reference:</span>
                <p className="text-[11px] font-mono leading-relaxed text-blue-900">
                  पत्रांक / मान्यता / 4203 / 2015-2016 • Date: 28-03-2016
                </p>
                <p className="text-[11px] text-gray-600 pt-1">
                  Issued by District Basic Education Officer, Gautam Buddh Nagar under RTE Act 2009.
                </p>
              </div>
            </div>

            {/* Right: Detailed Structured Information */}
            <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Mandatory Public Disclosure
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mt-1">
                  Official Recognition &amp; Affiliation Data
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  SD Modern School is an authorized English medium educational institution recognized under the Right of Children to Free and Compulsory Education Act, 2009.
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
                        <td className="px-4 py-2.5 font-medium text-gray-600 w-2/5 text-xs sm:text-sm">
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
                  <span className="text-blue-600">●</span>
                  Statutory Principles &amp; RTE Compliance
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

      {/* Enlarged Certificate Modal with Page Switcher */}
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
                  School Recognition Certificate — Page {modalPage} of 3
                </h3>
                <p className="text-xs text-gray-500">
                  District Basic Education Officer, Gautam Buddh Nagar • Code: G.J.H.S-206
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
              {[1, 2, 3].map((pNum) => (
                <button
                  key={pNum}
                  onClick={() => setModalPage(pNum)}
                  className={`px-3 py-1 text-xs rounded-lg font-semibold transition-all ${
                    modalPage === pNum
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Page {pNum}
                </button>
              ))}
            </div>

            <div className="relative w-full aspect-[1/1.42] bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={pages[modalPage - 1].image}
                alt={`School Recognition Certificate Page ${modalPage}`}
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
                className="text-xs text-blue-700 hover:underline font-medium inline-flex items-center gap-1"
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
                  href="/documents/school-recognition-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm inline-flex items-center gap-1"
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
            Review our Fire Safety NOC, Building Safety, Safe Drinking Water certificates, and School Governance.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/fire-safety-certificate"
              className="bg-white text-primary-800 hover:bg-primary-50 px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-md"
            >
              Fire Safety NOC (2026–31) →
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
