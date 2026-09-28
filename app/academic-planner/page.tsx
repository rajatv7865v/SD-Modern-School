"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AcademicPlannerPage() {
  const [selectedDocPage, setSelectedDocPage] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  const plannerData = [
    {
      month: "April 2026",
      key: "april",
      events: [
        { date: "01 Apr, Wed", title: "New Academic Session Begins", type: "session" },
        { date: "06 Apr, Mon", title: "Orientation Program for Parents (I to V)", type: "activity" },
        { date: "08 Apr, Wed", title: "Drawing Competition on 'Save Water Save Earth'", type: "competition" },
        { date: "13 Apr, Mon", title: "Baisakhi & Ambedkar Jayanti Special Assembly", type: "assembly" },
        { date: "14 Apr, Tue", title: "Ambedkar Jayanti", type: "holiday" },
        { date: "22 Apr, Wed", title: "World Earth Day — Poster Making & Special Assembly", type: "assembly" },
        { date: "25 Apr, Sat", title: "Fourth Saturday Holiday", type: "holiday" },
      ],
    },
    {
      month: "May 2026",
      key: "may",
      events: [
        { date: "01 May, Fri", title: "Buddha Purnima & Labour Day Special Assembly", type: "assembly" },
        { date: "09 May, Sat", title: "Mother's Day Celebration", type: "celebration" },
        { date: "11 May – 16 May", title: "Periodic Test I (PT-I) Exam Dates", type: "exam" },
        { date: "20 May, Wed", title: "PTM & Result Declaration for PT-I", type: "ptm" },
        { date: "21 May – 30 June", title: "Summer Vacation Commences", type: "holiday" },
      ],
    },
    {
      month: "June 2026",
      key: "june",
      events: [
        { date: "Full Month", title: "Summer Break Continuation", type: "holiday" },
        { date: "05 June, Fri", title: "World Environment Day — Poster Making", type: "activity" },
        { date: "21 June, Sun", title: "International Yoga Day", type: "celebration" },
      ],
    },
    {
      month: "July 2026",
      key: "july",
      events: [
        { date: "01 July, Wed", title: "Academic Classes Resume — Regular Mode", type: "session" },
        { date: "11 July, Sat", title: "World Population Day Special Assembly", type: "assembly" },
        { date: "30 July, Thu", title: "“Ek Ped Maa Ke Naam” Plantation Drive", type: "activity" },
      ],
    },
    {
      month: "August 2026",
      key: "august",
      events: [
        { date: "06 Aug – 13 Aug", title: "Periodic Test II (PT-II) Exam Dates", type: "exam" },
        { date: "11 Aug, Tue", title: "Jal Abhishek (Shivratri)", type: "holiday" },
        { date: "14 Aug, Fri", title: "Independence Day Celebration", type: "celebration" },
        { date: "15 Aug, Sat", title: "Independence Day — Holiday + Flag Hoisting", type: "celebration" },
        { date: "22 Aug, Sat", title: "PT–II Result Declaration (PTM)", type: "ptm" },
        { date: "24 Aug, Mon", title: "Rakhi Making Competition", type: "competition" },
        { date: "25 Aug, Tue", title: "Teachers Training Program", type: "activity" },
        { date: "26 Aug, Wed", title: "Id-e-Milad", type: "holiday" },
        { date: "28 Aug, Fri", title: "Raksha Bandhan", type: "holiday" },
      ],
    },
    {
      month: "September 2026",
      key: "september",
      events: [
        { date: "03 Sep, Thu", title: "Janmashtami Celebration", type: "celebration" },
        { date: "04 Sep, Fri", title: "Janmashtami Holiday", type: "holiday" },
        { date: "05 Sep, Sat", title: "Teacher's Day Celebration", type: "celebration" },
        { date: "08 Sep, Tue", title: "International Literacy Day Activities", type: "activity" },
        { date: "09 Sep, Wed", title: "Guru Dronacharya Mela (Dankaur)", type: "holiday" },
        { date: "14 Sep, Mon", title: "Ganesh Chaturthi Celebration", type: "celebration" },
        { date: "18 Sep, Fri", title: "Educational Trip — Kiran Nadar Museum of Art", type: "trip" },
        { date: "22 Sep – 03 Oct", title: "Half-Yearly Examinations", type: "exam" },
        { date: "23 Sep, Wed", title: "“MERE SAPNO KA BHARAT” — Poster Making", type: "competition" },
      ],
    },
    {
      month: "October 2026",
      key: "october",
      events: [
        { date: "01 Oct, Thu", title: "Special Assembly: Mahatma Gandhi Jayanti", type: "assembly" },
        { date: "02 Oct, Fri", title: "Mahatma Gandhi Jayanti Holiday", type: "holiday" },
        { date: "10 Oct, Sat", title: "PTM & Half-Yearly Result Declaration", type: "ptm" },
        { date: "18 Oct, Fri", title: "Special Assembly: Dussehra", type: "assembly" },
        { date: "19 – 20 Oct", title: "Ram Navami & Dussehra Holidays", type: "holiday" },
        { date: "07 Nov, Sat", title: "Diya Making Competition", type: "competition" },
        { date: "08 – 11 Nov", title: "Diwali Festive Break", type: "holiday" },
        { date: "14 Nov, Sat", title: "Children's Day Celebration", type: "celebration" },
      ],
    },
    {
      month: "November 2026",
      key: "november",
      events: [
        { date: "21 Nov, Sat", title: "Best Out of Waste — House Activity", type: "activity" },
        { date: "23 – 28 Nov", title: "Periodic Test III (PT-III) Exam Dates", type: "exam" },
        { date: "24 Nov, Tue", title: "Guru Nanak Jayanti Holiday", type: "holiday" },
      ],
    },
    {
      month: "December 2026",
      key: "december",
      events: [
        { date: "05 Dec, Sat", title: "Educational Trip (Tentative)", type: "trip" },
        { date: "10 Dec, Thu", title: "Human Rights Day Awareness Program", type: "activity" },
        { date: "12 Dec, Sat", title: "PTM & PT-III Result Declaration", type: "ptm" },
        { date: "24 Dec, Thu", title: "Christmas Day Celebration", type: "celebration" },
        { date: "25 Dec, Fri", title: "Christmas Day Holiday", type: "holiday" },
      ],
    },
    {
      month: "January 2027",
      key: "january",
      events: [
        { date: "01 – 07 Jan", title: "Winter Break (Tentative)", type: "holiday" },
        { date: "08 Jan, Thu", title: "School Reopens after Winter Break", type: "session" },
        { date: "13 Jan, Wed", title: "Lohri Celebration", type: "celebration" },
        { date: "14 Jan, Thu", title: "Makar Sankranti", type: "holiday" },
        { date: "15 Jan, Fri", title: "Guru Gobind Singh Jayanti", type: "holiday" },
        { date: "23 Jan, Sat", title: "Netaji Jayanti — Special Assembly", type: "assembly" },
        { date: "25 Jan, Mon", title: "Patriotic Song & Dance Competition (House Activity)", type: "competition" },
        { date: "26 Jan, Tue", title: "Republic Day — Flag Unfurling & Celebration", type: "celebration" },
        { date: "30 Jan, Sat", title: "Non-Flammable Culinary / Science Activity", type: "activity" },
      ],
    },
    {
      month: "February 2027",
      key: "february",
      events: [
        { date: "06 Feb – 13 Feb", title: "Periodic Test IV (PT-IV) Exam Dates", type: "exam" },
        { date: "11 Feb, Sat", title: "Basant Panchami Celebration", type: "celebration" },
        { date: "15 – 25 Feb", title: "Revision & Remedial Support Classes", type: "session" },
        { date: "20 Feb, Sat", title: "PTM & PT-IV Result Declaration", type: "ptm" },
      ],
    },
    {
      month: "March 2027",
      key: "march",
      events: [
        { date: "09 Mar – 20 Mar", title: "Annual Examinations (Tentative)", type: "exam" },
        { date: "29 Mar, Mon", title: "Annual Result Declaration (Tentative)", type: "ptm" },
        { date: "30 Mar, Wed", title: "Staff Meeting & New Academic Session Planning", type: "session" },
      ],
    },
  ];

  const plannerScans = [
    { page: 1, title: "Yearly Planner (April – July 2026)", img: "/images/planner/academic-page-01.jpg" },
    { page: 2, title: "Yearly Planner (August – October 2026)", img: "/images/planner/academic-page-02.jpg" },
    { page: 3, title: "Yearly Planner (November 2026 – March 2027)", img: "/images/planner/academic-page-03.jpg" },
  ];

  const getBadgeClass = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-rose-100 text-rose-800 border-rose-200";
      case "holiday":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "ptm":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "celebration":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "competition":
        return "bg-sky-100 text-sky-800 border-sky-200";
      case "assembly":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "trip":
        return "bg-teal-100 text-teal-800 border-teal-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredMonths = plannerData
    .map((m) => {
      if (selectedMonth !== "all" && m.key !== selectedMonth) return null;
      const filteredEvents =
        selectedType === "all"
          ? m.events
          : m.events.filter((e) => e.type === selectedType);
      return filteredEvents.length > 0 ? { ...m, events: filteredEvents } : null;
    })
    .filter(Boolean) as typeof plannerData;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1920&h=1080&fit=crop&auto=format)",
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
              Yearly Academic Planner
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
              S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mt-2">
              Comprehensive month-by-month schedule of examinations, academic events, holidays, assemblies, and competitions
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#planner-timeline"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                View Academic Calendar
              </a>
              <a
                href="/documents/yearly-planner-2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Planner (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Jump Links Bar */}
      <section className="py-4 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-semibold text-gray-800">Quick Navigation:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/fee-structure"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold text-xs hover:bg-emerald-100 transition-colors"
              >
                <span>💳</span> Fee Structure (2026–27) →
              </Link>
              <Link
                href="/governance"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 font-semibold text-xs hover:bg-purple-100 transition-colors"
              >
                <span>🏛️</span> SMC &amp; PTA Committees →
              </Link>
              <Link
                href="/trust"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 border border-sky-200 font-semibold text-xs hover:bg-sky-100 transition-colors"
              >
                <span>📜</span> Trust &amp; Society →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Planner Section */}
      <section id="planner-timeline" className="py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            {/* Header + Filter Row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Academic Calendar 2026–2027
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Yearly Activity &amp; Examination Schedule
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  All dates and occasions planned from April 2026 to March 2027
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <label htmlFor="month-select" className="text-xs font-semibold text-gray-500 uppercase">
                    Month:
                  </label>
                  <select
                    id="month-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Months</option>
                    {plannerData.map((m) => (
                      <option key={m.key} value={m.key}>
                        {m.month}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="type-select" className="text-xs font-semibold text-gray-500 uppercase">
                    Category:
                  </label>
                  <select
                    id="type-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">All Activities</option>
                    <option value="exam">Exams Only</option>
                    <option value="holiday">Holidays Only</option>
                    <option value="ptm">PTMs &amp; Results</option>
                    <option value="celebration">Celebrations</option>
                    <option value="competition">Competitions</option>
                    <option value="assembly">Assemblies</option>
                    <option value="trip">Educational Trips</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Badges Legend */}
            <div className="flex flex-wrap items-center gap-2 py-4 border-b border-gray-100 text-xs font-medium">
              <span className="text-gray-500 font-semibold mr-1">Activity Tags:</span>
              <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">Exams</span>
              <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Holidays</span>
              <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">PTM &amp; Results</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">Celebrations</span>
              <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">Competitions</span>
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">Special Assembly</span>
              <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">Educational Trip</span>
            </div>

            {/* Month Timeline */}
            <div className="space-y-6 mt-6">
              {filteredMonths.map((m, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-primary-50/70 px-5 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-primary-900">{m.month}</h3>
                    <span className="text-xs font-medium text-primary-700 bg-primary-100 px-2.5 py-0.5 rounded-full">
                      {m.events.length} Scheduled Events
                    </span>
                  </div>
                  <div className="divide-y divide-gray-100 bg-white">
                    {m.events.map((evt, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-4 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-gray-50/80 transition-colors"
                      >
                        <div className="flex items-start sm:items-center gap-3">
                          <span className="font-semibold text-sm text-gray-800 sm:w-48 flex-shrink-0">
                            {evt.date}
                          </span>
                          <span className="text-sm sm:text-base text-gray-700">
                            {evt.title}
                          </span>
                        </div>
                        <span
                          className={`self-start sm:self-auto text-xs px-2.5 py-1 rounded-full border font-medium capitalize flex-shrink-0 ${getBadgeClass(
                            evt.type
                          )}`}
                        >
                          {evt.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Scanned Planner Documents */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                  Original Records
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Official Signed Planner Document Scans
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Click any scanned page to view in high resolution
                </p>
              </div>
              <a
                href="/documents/yearly-planner-2026-27.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md self-start sm:self-auto flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Yearly Planner (PDF)
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {plannerScans.map((doc) => (
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
        </div>
      </section>

      {/* Lightbox Modal */}
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
                Yearly Planner Scan — Page {selectedDocPage} of 3
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
                  alt={`Planner Page ${selectedDocPage}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <button
                disabled={selectedDocPage <= 1}
                onClick={() => setSelectedDocPage((prev) => (prev && prev > 1 ? prev - 1 : 1))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Page
              </button>
              <span className="text-xs text-gray-500 font-medium">Page {selectedDocPage} / 3</span>
              <button
                disabled={selectedDocPage >= 3}
                onClick={() => setSelectedDocPage((prev) => (prev && prev < 3 ? prev + 1 : 3))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Page →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Cross-Links */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Looking for Fee Structure or Committee Details?
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Explore dedicated separate pages for our official 2026–2027 fee schedule and the School Management Committee (SMC) &amp; PTA roster.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/fee-structure"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Fee Structure (2026–27) →
            </Link>
            <Link
              href="/governance"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              School Committees (SMC / PTA)
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
