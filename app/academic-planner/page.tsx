"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TabType = "planner" | "students" | "fees" | "smc" | "pta" | "documents";

export default function AcademicPlannerPage() {
  const [activeTab, setActiveTab] = useState<TabType>("planner");
  const [selectedDocPage, setSelectedDocPage] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

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
        { date: "15 Aug, Sat", title: "Independence Day — Flag Hoisting Ceremony", type: "celebration" },
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

  const feeStructure = [
    { class: "Nursery", fee: 800, grade: "Pre-Primary" },
    { class: "L.K.G.", fee: 900, grade: "Pre-Primary" },
    { class: "U.K.G.", fee: 900, grade: "Pre-Primary" },
    { class: "Class I", fee: 900, grade: "Primary" },
    { class: "Class II", fee: 900, grade: "Primary" },
    { class: "Class III", fee: 1000, grade: "Primary" },
    { class: "Class IV", fee: 1000, grade: "Primary" },
    { class: "Class V", fee: 1100, grade: "Primary" },
    { class: "Class VI", fee: 1200, grade: "Middle School" },
    { class: "Class VII", fee: 1300, grade: "Middle School" },
    { class: "Class VIII", fee: 1400, grade: "Middle School" },
  ];

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

  const documentPages = [
    { page: 1, title: "Yearly Planner (April – July 2026)", img: "/images/planner/academic-page-01.jpg" },
    { page: 2, title: "Yearly Planner (August – October 2026)", img: "/images/planner/academic-page-02.jpg" },
    { page: 3, title: "Yearly Planner (November 2026 – March 2027)", img: "/images/planner/academic-page-03.jpg" },
    { page: 4, title: "Total Number of Students (2026 – 2027)", img: "/images/planner/academic-page-04.jpg" },
    { page: 5, title: "Fee Structure (2026 – 2027)", img: "/images/planner/academic-page-05.jpg" },
    { page: 6, title: "PTA Executive Committee (2026 – 2027)", img: "/images/planner/academic-page-06.jpg" },
    { page: 7, title: "School Management Committee (SMC)", img: "/images/planner/academic-page-07.jpg" },
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

  const filteredMonths =
    selectedMonth === "all"
      ? plannerData
      : plannerData.filter((m) => m.key === selectedMonth);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[48vh] min-h-[380px] max-h-[560px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/school2.jpeg)",
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
              Academic Planner &amp; Governance
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-primary-100 max-w-3xl mx-auto">
              S.D. Modern School, Gijhor, Sector-53, Noida
            </p>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto mt-2">
              Official Yearly Planner, Student Strength, Fee Structure, SMC &amp; PTA Executive Committees
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#tabs-section"
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                Explore Information
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

      {/* Quick Overview Counter Badges */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-primary-50 border border-primary-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-primary-700">2026–27</div>
              <div className="text-xs text-primary-900 font-medium mt-1">Academic Session</div>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">{totalStudents}</div>
              <div className="text-xs text-emerald-900 font-medium mt-1">Total Enrolled Students</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-700">11 Members</div>
              <div className="text-xs text-purple-900 font-medium mt-1">School Management (SMC)</div>
            </div>
            <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-700">7 Members</div>
              <div className="text-xs text-sky-900 font-medium mt-1">PTA Executive Body</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section id="tabs-section" className="py-8 bg-gray-50 sticky top-[68px] z-30 shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-1">
            {[
              { id: "planner", label: "Yearly Planner (2026–27)", icon: "📅" },
              { id: "students", label: "Student Strength", icon: "👥" },
              { id: "fees", label: "Fee Structure", icon: "💳" },
              { id: "smc", label: "Management Committee (SMC)", icon: "🏛️" },
              { id: "pta", label: "PTA Committee", icon: "👨‍👩‍👧‍👦" },
              { id: "documents", label: "Official Document Scans", icon: "📄" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
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

      {/* Main Tab Content Area */}
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* TAB 1: YEARLY PLANNER */}
          {activeTab === "planner" && (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                      Yearly Academic Planner (2026–27)
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      Comprehensive schedule of exams, festivities, assemblies, holidays, and workshops
                    </p>
                  </div>
                  {/* Month Filter */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="month-filter" className="text-xs font-semibold text-gray-500 uppercase">
                      Filter:
                    </label>
                    <select
                      id="month-filter"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="all">All Months (Apr 2026 – Mar 2027)</option>
                      {plannerData.map((m) => (
                        <option key={m.key} value={m.key}>
                          {m.month}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Legend Badges */}
                <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-gray-100 text-xs font-medium">
                  <span className="text-gray-500 font-semibold mr-1">Activity Key:</span>
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">Exams / Assessments</span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">Holidays &amp; Vacations</span>
                  <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">PTM &amp; Results</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">Celebrations</span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">Competitions</span>
                  <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">Special Assembly</span>
                  <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">Educational Trip</span>
                </div>

                {/* Timeline Grid */}
                <div className="space-y-8 mt-6">
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
            </div>
          )}

          {/* TAB 2: STUDENT STRENGTH */}
          {activeTab === "students" && (
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                      Official Enrollment Roster
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      Total Number of Students (2026–2027)
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      S.D. Modern School, Gijhor, Sector-53, Noida
                    </p>
                  </div>
                  <div className="bg-primary-50 border border-primary-200 px-5 py-3 rounded-xl text-center">
                    <span className="text-xs text-primary-800 font-semibold block">Total Students</span>
                    <span className="text-3xl font-extrabold text-primary-700">{totalStudents}</span>
                  </div>
                </div>

                {/* Stage Breakdown summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-center">
                    <div className="text-xs font-bold text-sky-800 uppercase tracking-wide">Pre-Primary (Nur – UKG)</div>
                    <div className="text-2xl font-black text-sky-700 mt-1">64 Students</div>
                    <div className="text-xs text-sky-600 mt-0.5">3 Classes</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center">
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Primary (Class I – V)</div>
                    <div className="text-2xl font-black text-emerald-700 mt-1">70 Students</div>
                    <div className="text-xs text-emerald-600 mt-0.5">5 Classes</div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 text-center">
                    <div className="text-xs font-bold text-purple-800 uppercase tracking-wide">Middle School (VI – VIII)</div>
                    <div className="text-2xl font-black text-purple-700 mt-1">29 Students</div>
                    <div className="text-xs text-purple-600 mt-0.5">3 Classes</div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                        <th className="py-3.5 px-4 sm:px-6">S.No.</th>
                        <th className="py-3.5 px-4 sm:px-6">Class</th>
                        <th className="py-3.5 px-4 sm:px-6">Educational Stage</th>
                        <th className="py-3.5 px-4 sm:px-6 text-right">No. of Students</th>
                        <th className="py-3.5 px-4 sm:px-6">Proportion</th>
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
                          Total Enrolled Students
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
            </div>
          )}

          {/* TAB 3: FEE STRUCTURE */}
          {activeTab === "fees" && (
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                      Transparent &amp; Affordable Tuition
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      Fee Structure (2026–2027)
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Official monthly fee approved by Parmal Singh Welfare and Educational Trust
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-xs font-semibold">
                    <span>✓</span> Verified Regulatory Schedule
                  </div>
                </div>

                {/* Fee Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                        <th className="py-3.5 px-4 sm:px-6">S.No.</th>
                        <th className="py-3.5 px-4 sm:px-6">Class</th>
                        <th className="py-3.5 px-4 sm:px-6">Category</th>
                        <th className="py-3.5 px-4 sm:px-6 text-right">Monthly Fee (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {feeStructure.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-400">{idx + 1}</td>
                          <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900 text-base">{row.class}</td>
                          <td className="py-3.5 px-4 sm:px-6">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {row.grade}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 sm:px-6 text-right font-extrabold text-primary-700 text-lg">
                            ₹{row.fee.toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Important Notes */}
                <div className="mt-8 p-5 bg-primary-50/60 rounded-xl border border-primary-200 text-sm text-primary-900 space-y-2">
                  <h4 className="font-bold flex items-center gap-2">
                    <span>📌</span> Important Information Regarding Fee Payments:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-primary-800 text-xs sm:text-sm">
                    <li>School fees are payable monthly as per the schedule stipulated by the school administration.</li>
                    <li>S.D. Modern School operates on a strictly non-commercial, welfare-first philosophy under Parmal Singh Welfare and Educational Trust.</li>
                    <li>Scholarships, fee concessions, and aid are provided to economically underprivileged and deserving students as per trust guidelines.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCHOOL MANAGEMENT COMMITTEE (SMC) */}
          {activeTab === "smc" && (
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="pb-6 border-b border-gray-100">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Statutory Governance Body
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    School Management Committee (SMC)
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Constitution of the School Management Committee as per RTE / State Education department guidelines
                  </p>
                </div>

                {/* SMC Table */}
                <div className="overflow-x-auto rounded-xl border border-gray-200 mt-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wider font-semibold border-b border-gray-200">
                        <th className="py-3.5 px-4">S.No.</th>
                        <th className="py-3.5 px-4">Name</th>
                        <th className="py-3.5 px-4">Address</th>
                        <th className="py-3.5 px-4">Designation in SMC</th>
                        <th className="py-3.5 px-4">Representation Category</th>
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
            </div>
          )}

          {/* TAB 5: PARENT TEACHER ASSOCIATION (PTA) */}
          {activeTab === "pta" && (
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="pb-6 border-b border-gray-100">
                  <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                    Parent–Teacher Partnership
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                    Parent Teacher Association Executive Committee (2026–27)
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Promoting constructive collaboration between parents, teachers, and school leadership
                  </p>
                </div>

                {/* PTA Table */}
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
              </div>
            </div>
          )}

          {/* TAB 6: OFFICIAL SCANNED DOCUMENTS */}
          {activeTab === "documents" && (
            <div className="space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">
                      Official Scanned Records
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                      Original Document Gallery (2026–2027)
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Scanned records of Yearly Planner, Student Strength, Fee Structure, PTA &amp; SMC
                    </p>
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

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                  {documentPages.map((doc) => (
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
                            View Page
                          </span>
                        </div>
                        <span className="absolute top-2 left-2 bg-black/70 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                          Page {doc.page}
                        </span>
                      </div>
                      <div className="p-3 text-center flex-1 flex flex-col justify-center">
                        <span className="text-xs font-bold text-gray-800 line-clamp-2">{doc.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox / Modal for Document Scans */}
      {selectedDocPage !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedDocPage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-200 bg-gray-50">
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                  {documentPages[selectedDocPage - 1]?.title}
                </h3>
                <p className="text-xs text-gray-500">Page {selectedDocPage} of 7</p>
              </div>
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
                  src={`/images/planner/academic-page-${String(selectedDocPage).padStart(2, "0")}.jpg`}
                  alt={`Document Page ${selectedDocPage}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Modal Footer / Navigation */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-200 bg-gray-50 text-sm">
              <button
                disabled={selectedDocPage <= 1}
                onClick={() => setSelectedDocPage((prev) => (prev && prev > 1 ? prev - 1 : 1))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Previous Page
              </button>
              <span className="text-xs text-gray-500 font-medium">
                Page {selectedDocPage} / 7
              </span>
              <button
                disabled={selectedDocPage >= 7}
                onClick={() => setSelectedDocPage((prev) => (prev && prev < 7 ? prev + 1 : 7))}
                className="px-4 py-1.5 rounded-lg border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next Page →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Link to Trust & Society */}
      <section className="py-12 bg-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Sponsoring Body &amp; Trust Information
          </h2>
          <p className="text-primary-100 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Learn about Parmal Singh Welfare and Educational Trust, read the 18-page registered Trust Deed,
            and explore the founding mission of S.D. Modern School.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/trust"
              className="bg-white text-primary-800 hover:bg-primary-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg"
            >
              Explore Trust &amp; Society →
            </Link>
            <Link
              href="/admissions"
              className="bg-primary-700/80 hover:bg-primary-700 text-white border border-primary-500 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
