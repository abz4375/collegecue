import IIMBanReviewCard from "@/components/Reusable_cards/IIMBanReviewCard";
import React from "react";
import AdThumb from "@/assets/IIMBangalore/NavPages/Info/form.png";
import Medal from "@/assets/IIMBangalore/NavPages/Info/medal.png";
import Image from "next/image";

const Info = () => {
  // Sample data for the author and metadata (replace placeholders with actual data)
  const authorData = {
    name: "Akanksha Singh",
    updated: "Updated On - June 9th, 2023 05:30 AM IST",
    bio: "Mr. Rajesh Kumar is the HOD Academics at KMS College of IT and Management and is a Research Scholar at present. He has done B.com, M.Sc (IT), M.tech (IT), MCP, DISM, Pursuing Ph.D and has over 15 years of experience in teaching.",
  };

  // Q&A content
  const qaData = [
    {
      question:
        "Being a Faculty of the KMS College, what are your roles and responsibilities towards the students?",
      answer:
        "Being a faculty of the college, my roles and responsibilities include completing the syllabus within the stipulated time, reporting to the class on time, utilizing classroom assessment techniques, developing test questions in consultation with the course coordinator Evaluates tests (if appropriate, based on the type of test), Prepares and executes Lesson Plan, Completing syllabus within the stipulated time, Maintain attendance record of students, Provides information about job opportunities in their respective field to placement cell, Guide students on career opportunities and Maintain teachers’ handbook.",
    },
    {
      question:
        "How do you tend to establish healthy relations with the students and fellow faculty?",
      answer:
        "I maintain a healthy relationship with the students by Knowing their story, Talking to students (in class and outside of class), explicitly valuing the child over the content, Playing games with them, setting them up for success and assuming the best in every student. With fellow faculty members, I maintain healthy relations by Showing Courtesy and Respect, following the Demonstrate Initiative and updating teachers on Your Plans and Goals.",
    },
    {
      question:
        "How do you try to bring in a practical approach towards subjects and make it industry oriented?",
      answer:
        "I try to bring in a practical approach by making my students visit various sites related to subjects, Giving presentations and video demonstrations, Giving hand-on experiences, By combining theory approaches with practical and Providing projects and case studies.",
    },
    {
      question:
        "How do you strategize the curriculum and how often it gets updated to make it beneficial for the students?",
      answer:
        "I focus on the students rather than on creating the best lesson plan. The ultimate goal should be to do what’s best for the learners. I also make sure to Talk to other experts, teachers, etc., from the industry and consider their inputs and Make use of technology to design the curriculum. I Avoid pre-packaged curriculum and make sure that the curriculum needs to be tailor made for the intended outcome.",
    },
    {
      question:
        "How do you help your student to cope up with the competition being so high in the outside world?",
      answer:
        "I help my students by the following ways: Accentuate the positive, Set expectations and consequences, Introduce competition, Introduce collaboration, Connect to their world, Plug into technology, Get parents involved, and Get students involved.",
    },
    {
      question:
        "Do you have any extracurricular activities/ programs to enhance the skills of the students or expose them to real world challenges?",
      answer:
        "Yes we have some extracurricular activities and programs. Some sports/ games, annual programs, fashion shows, farewell parties, freshers introductions etc. so that students can release their stress and enjoy free time in college. To enhance the skills of the students we organize the different activities like workshops/ seminars/guest lectures/ field trips/industry/quiz contests/ training etc.",
    },
    {
      question:
        "What are the challenges you faced/ are facing to uplift the quality of education of your department?",
      answer:
        "The challenge may be to manage equity and diversity in a technology-mediated market framework of expansion; The curriculum relevance, quality of learning and employment outcomes will continue to be a challenge. Several initiatives and heavy investments made in Internationalisation create challenges.",
    },
    {
      question:
        "When you came to college, what was your vision and how are you trying to achieve the same?",
      answer:
        "I always come on time to the college, I always maintain my punctuality. My vision is to be an honest, empathetic and impactful teacher and to be recognized internationally within my organization. I am committed to growing as a teacher and delivering value-added projects to the students. My mission is to create and lead a dream organization where everyone is playing to their strengths.",
    },
    {
      question:
        "How does the curriculum of your department/college ensure the best practice of the industry?",
      answer:
        "The curriculum of our college is the best in ways including Preparation of Timetable: Class wise, Laboratory-wise, Class room-wise and Individual, Preparation of Schedule of Instruction (Teaching Plan), Attendance Monitoring: (Course-wise, Class-wise, Percentage-wise), Syllabus coverage Monitoring, Continuous Assessment, Internal Examination schedule, result analysis, Upload of tech talk, concept video, open ended experiments, assignments, question bank, definitions and terminology, e-learning/Early Learning Readiness Video lectures, lecture notes, powerpoint presentations, class handouts.",
    },
    {
      question:
        "What are the interventions and approaches you bring in apart from curriculum to train/teach the students?",
      answer:
        "Some of the interventions include Behavioural Interventions, Collaborative Interventions, One-to-One Interventions, Classroom-Based Interventions, Social, Emotional and Wellbeing Interventions, Peer Tutoring and Metacognition and Self-Regulation Homework.",
    },
    {
      question:
        "What valuable advice would you like to the students for them to have a prosperous career ahead?",
      answer:
        "I advise students to Seek internship opportunities, Consider taking part in a work-study program, Grow your skills and knowledge, Get an early start, Keep your skills up-to-date, Stay focused, Find a balance with your personal life.",
    },
  ];

  // Dummy Institute Information
  // Dummy Institute Information for Vedanta IAS Academy
  const instituteInfo = {
    name: "Vedanta IAS Academy",
    established: "Established in 2005",
    location: "Mukherjee Nagar, New Delhi, Delhi 110009, India",
    overview: "Vedanta IAS Academy is a leading coaching institute dedicated to preparing students for UPSC Civil Services Examinations and other competitive exams. With nearly two decades of excellence, the academy has established itself as a trusted name among aspirants aiming to succeed in India’s most prestigious examinations. Founded with a mission to provide quality education and holistic guidance, Vedanta IAS Academy combines expert faculty, innovative teaching methodologies, and comprehensive study resources to empower students. The institute prides itself on its student-centric approach, offering personalized mentorship, regular performance evaluations, and a supportive learning environment. Beyond UPSC preparation, Vedanta extends its expertise to State PCS, SSC, and Banking examinations, catering to a diverse range of career aspirations. Known for its rigorous mock tests, updated study materials, and focus on current affairs, the academy ensures that students are well-equipped to tackle the dynamic nature of competitive exams. Vedanta IAS Academy also emphasizes building analytical skills, time management, and ethical values, preparing candidates not just for exams but for their future roles as administrators and leaders.",
    keyStats: [
      { label: "Success Rate", value: "85%" },
      { label: "Annual Enrollment", value: "2000+ students" },
      { label: "Faculty Strength", value: "50+ mentors" },
      { label: "Selections in UPSC", value: "300+ since inception" },
    ],
    specializations: "UPSC Civil Services, State PCS, SSC, Banking Exams",
    programsOffered: "Classroom Coaching, Online Classes, Test Series, Study Materials",
    contact: {
      email: "contact@vedantaiasacademy.com",
      phone: "+91-98765-43210",
      website: "www.vedantaiasacademy.com",
    },
};

  return (
    <div className="max-w-[1000px] gap-2 sm:p-0.5 flex flex-col md:items-center">
      <div className="flex items-center md:justify-center mb-4 ml-3 ">
        <div>
          <p className="text-xl sm:text-xl sm:text-center font text-left leading-[3rem] tracking-normal inline text-[black]">
            {"Courses: "} &nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="flex md:items-center md:justify-center flex-wrap gap-4">
          <button className="text-black bg-gray-300 shadow-lg  rounded-lg px-4 py-0 h-8 font-semibold hover:bg-blue-100 hover:bg-opacity-80 transition duration-300">
            GMAT Coaching
          </button>
          <button className="text-black bg-gray-300 shadow-lg  rounded-lg px-4 py-0 h-8 font-semibold hover:bg-blue-100 hover:bg-opacity-80 transition duration-300">
            BAT Coaching
          </button>
          <button className="text-black bg-gray-300 shadow-lg  rounded-lg px-4 py-0 h-8 font-semibold hover:bg-blue-100 hover:bg-opacity-80 transition duration-300">
            SAT Coaching
          </button>
        </div>
      </div>
      <div className="flex items-center md:justify-center mb-4 ml-3 md:mr-2">
        <div>
          <p className="text-xl sm:text-xl sm:text-center font text-left leading-[3rem] tracking-normal inline text-[black]">
            {"Program Type: "} &nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
        <div className="flex md:items-center md:justify-center flex-wrap gap-4">
          <button className="text-black bg-gray-300 shadow-lg min-h-8 rounded-lg px-4 py-0  font-semibold hover:bg-blue-100 hover:bg-opacity-80 transition duration-300">
            Regular Classroom Program
          </button>
        </div>
      </div>
      <hr className="mb-4" />
      <div className="w-full ">
        <div className="flex flex-col gap-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
          {/* <h2 className="text-2xl font-bold text-gray-800">{instituteInfo.name}</h2>
          <p className="text-gray-600">{instituteInfo.established}</p>
          <p className="text-gray-700">{instituteInfo.location}</p> */}
          <p className="text-gray-700 mt-2">{instituteInfo.overview}</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4">
            {instituteInfo.keyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* <p className="text-gray-700 mt-2">
            <span className="font-semibold">Specializations:</span> {instituteInfo.specializations}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Programs Offered:</span> {instituteInfo.programsOffered}
          </p> */}
          
          {/* <div className="mt-4">
            <p className="text-gray-700">
              <span className="font-semibold">Contact:</span>
            </p>
            <p className="text-gray-600">Email: {instituteInfo.contact.email}</p>
            <p className="text-gray-600">Phone: {instituteInfo.contact.phone}</p>
            <p className="text-gray-600">
              Website:{' '}
              <a 
                href={instituteInfo.contact.website} 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {instituteInfo.contact.website}
              </a>
            </p>
          </div> */}
        </div>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col gap-5 p-2 md:p-0 sm:w-[82.5vw]">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            {/* Placeholder for author image */}
            <img
              src="https://img.freepik.com/free-vector/mans-flat-style-face_90220-2938.jpg?t=st=1740654905~exp=1740658505~hmac=077489ceb31d57eb57b8c3bd104c8047a222950c43d3896314b1fe4f8fe19b70&w=900"
              alt="Author"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-black">
                {authorData.name}
              </p>
              <div className="flex items-center gap-2">
                {/* Placeholder for verified icon */}
                {/* <img
                  src="/path-to-verified-icon.png"
                  alt="Verified"
                  className="w-4 h-4"
                /> */}
                <p className="text-sm text-gray-500">{authorData.updated}</p>
              </div>
            </div>
          </div>
          <p className="text-base text-gray-700">{authorData.bio}</p>
        </div>

        <hr className="h-[1px] w-full bg-gray-300" />

        {/* Q&A Section */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl sm:text-2xl sm:text-center font-bold text-left leading-[3rem] tracking-normal inline text-black">
            {/* Interview with Mr. Rajesh Kumar */}
          </p>
          <div className="flex flex-col gap-6">
            {qaData.map((item, index) => (
              <div key={index} className="border-none rounded-lg w-full">
                <p className="text-xl font-semibold text-black">
                  {item.question}
                </p>
                <p
                  className="text-base text-gray-700 mt-2"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Advertisement Card Section */}
        <div className="mt-8 max-w-4xl mx-auto  border-2 border-gray-300 mb-8 rounded-xl hover:bg-blue-100 hover:bg-opacity-60 transition-all duration-300 hover:border-blue-100 hover:border-opacity-60 hover:shadow-xl">
          <div className=" rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header section */}
            <div className="p-6 pb-0 flex sm:flex-col-reverse sm:gap-4 justify-between items-center">
              <div className="flex items-center gap-0 ">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                  <Image
                    src={AdThumb}
                    alt="Advertisement thumbnail"
                    className="w-16 object-cover rounded"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Latest Application Forms 2024
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-medium text-blue-500 bg-blue-100 border-blue-500 border rounded-full mr-0 md:mr-0">
                Sponsored
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* Ad content */}
            <div className="p-4 pt-0 flex md:flex-col gap-2">
              {/* Ad 1 */}
              <div className="flex md:flex-col group hover:shadow-sm hover:bg-white p-4 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-blue-100">
                <div className="flex flex-col md:items-center gap-4">
                  <div className="flex items-center flex-shrink-0 w-full md:w-auto">
                    <div className=" bg-white rounded-full overflow-hidden mr-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ae-RHWEL4sUfohHrus_Qo-U8lNanAFoUUw&s"
                        alt="Lovely Professional University"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <h4 className="text-gray-800 font-medium">
                      Lovely Professional University
                    </h4>
                  </div>

                  <div className="flex-grow">
                    <p className="text-sm text-gray-700 font-medium">
                      India&apos;s Top Ranked University with Best Placements
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      3 Cr Highest Package | Admissions Open for 2023
                    </p>
                  </div>

                  <div className="flex-shrink-0 mt-3 md:mt-0">
                    <a
                      href="/login"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-black text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow hover:text-black hover:bg-black hover:bg-opacity-10 hover:border-black hover:border-opacity-10 bg-gray-100 border-[1px] border-gray-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Ad 2 */}
              <div className="flex md:flex-col group hover:shadow-sm hover:bg-white p-4 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-blue-100">
                <div className="flex flex-col md:items-center gap-4">
                  <div className="flex items-center flex-shrink-0 w-full md:w-auto">
                    <div className="overflow-hidden bg-white rounded-full mr-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhmXfPyaILmGVsf8nWdsUyoqLvR6WtS_ZCQ&s"
                        alt="Welingkar Institute"
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <h4 className="text-gray-800 font-medium truncate max-w-xs">
                      Welingkar Institute
                    </h4>
                  </div>

                  <div className="flex-grow">
                    <p className="text-sm text-gray-700 font-medium">
                      1st Ranked Private B-School in Mumbai
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Admissions Open for AY 2023-25
                    </p>
                  </div>

                  <div className="flex-shrink-0 mt-3 md:mt-0">
                    <a
                      href="/login"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-black text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow hover:text-black hover:bg-black hover:bg-opacity-10 hover:border-black hover:border-opacity-10 bg-gray-100 border-[1px] border-gray-300"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Ad 3 */}
              <div className="flex md:flex-col group hover:shadow-sm hover:bg-white p-4 rounded-lg transition-all duration-300 border-2 border-transparent hover:border-blue-100">
                <div className="flex flex-col md:items-center gap-4">
                  <div className="flex items-center flex-shrink-0 w-full md:w-auto">
                    <div className="p-2 bg-white rounded-full overflow-hidden mr-3">
                      <Image
                        src={Medal}
                        alt="Collegecue Review Rewards"
                        className="w-7 h-7 object-cover"
                      />
                    </div>
                    <h4 className="text-gray-800 font-medium">
                      Collegecue Review Rewards
                    </h4>
                  </div>

                  <div className="flex-grow">
                    <p className="text-sm text-gray-700 font-medium">
                      Write a Review & Earn Up To
                    </p>
                    <div className="text-sm font-bold text-blue-600 mt-1">
                      ₹500
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-3 md:mt-0 flex items-center gap-3">
                    <a
                      href="/login"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-black text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow hover:text-black hover:bg-black hover:bg-opacity-10 hover:border-black hover:border-opacity-10 bg-gray-100 border-[1px] border-gray-300"
                    >
                      Avail Now
                    </a>
                    {/* <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-1 rounded">
                      <img
                        src="/api/placeholder/48/48"
                        alt="Card"
                        className="w-12 h-12 object-cover rounded"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
