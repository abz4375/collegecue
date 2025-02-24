import img1 from "../../../assets/Countrycomponent/Australia/topcollegeimage/amico.png";
import img2 from "../../../assets/Countrycomponent/Australia/topcollegeimage/rafiki.png";
import img3 from "../../../assets/Countrycomponent/Australia/topcollegeimage/cuate.png";
import img4 from "../../../assets/Countrycomponent/Australia/topcollegeimage/amico 1.png";
import img5 from "../../../assets/Countrycomponent/Australia/topcollegeimage/pana.png";
import img6 from "../../../assets/Countrycomponent/Australia/topcollegeimage/cuate 1.png";
import img7 from "../../../assets/Countrycomponent/Australia/topcollegeimage/cuate 2.png";
import img8 from "../../../assets/Countrycomponent/Australia/topcollegeimage/pana 1.png";
import img9 from "../../../assets/Countrycomponent/Australia/topcollegeimage/rafiki 1.png";
import topCollegesCardIcon from "../../../assets/Countrycomponent/Australia/topcollegeimage/Group 125.png"
import fc1 from "../../../assets/Countrycomponent/Australia/topcollegeimage/fc1.png";
import fc2 from "../../../assets/Countrycomponent/Australia/topcollegeimage/fc2.png";
import fc3 from "../../../assets/Countrycomponent/Australia/topcollegeimage/fc3.png";
import fc4 from "../../../assets/Countrycomponent/Australia/topcollegeimage/fc4.png";
import p1 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p1.png';
import p2 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p2.png';
import p3 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p3.png';
import p4 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p4.png';
import p5 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p5.png';
import p6 from '../../../assets/Countrycomponent/Australia/topcollegeimage/p6.png';
import exam1 from '../../../assets/Countrycomponent/Australia/exam/exam1.png';
import exam2 from '../../../assets/Countrycomponent/Australia/exam/exam2.png';
import exam3 from '../../../assets/Countrycomponent/Australia/exam/exam3.png';
import exam4 from '../../../assets/Countrycomponent/Australia/exam/exam4.png';
import exam5 from '../../../assets/Countrycomponent/Australia/exam/exam5.png';
import exam6 from '../../../assets/Countrycomponent/Australia/exam/exam6.png';
import art1 from '../../../assets/Countrycomponent/Australia/topcollegeimage/art1.png';
import art2 from '../../../assets/Countrycomponent/Australia/topcollegeimage/art2.png';
import art3 from '../../../assets/Countrycomponent/Australia/topcollegeimage/art3.png';
import art4 from '../../../assets/Countrycomponent/Australia/topcollegeimage/art4.png';
import art5 from '../../../assets/Countrycomponent/Australia/topcollegeimage/art5.png';
import heartIcon from '../../../assets/Countrycomponent/Australia/topcollegeimage/HeartIcon.png';
import City1 from '../../../assets/Countrycomponent/newzealand/c_Auckland.svg';
import City2 from '../../../assets/Countrycomponent/newzealand/c_Christchurch.svg';
import City3 from '../../../assets/Countrycomponent/newzealand/c_Dunedin.svg';
import City4 from '../../../assets/Countrycomponent/newzealand/c_Hamilton.svg';
import City5 from '../../../assets/Countrycomponent/newzealand/c_Lincoln.svg';
import City6 from '../../../assets/Countrycomponent/newzealand/c_Palmerston-North.svg';
import City7 from '../../../assets/Countrycomponent/newzealand/c_Wellington.svg';

const TopPlacesData = [
    {
        id: 1,
        img: City1,
        place: "Auckland"
    },
    {
        id: 2,
        img: City2,
        place: "Christchurch"
    },
    {
        id: 3,
        img: City3,
        place: "Dunedin"
    },
    {
        id: 4,
        img: City4,
        place: "Hamilton"
    },
    {
        id: 5,
        img: City5,
        place: "Lincoln"
    },
    {
        id: 6,
        img: City6,
        place: "Palmerston North"
    },
    {
        id: 7,
        img: City7,
        place: "Wellington"
    },
];

const TopCollegesData = [
    {
        bgColor: "#9EB9FF",
        img: img1,
        icon: topCollegesCardIcon,
        titles: "Diploma",
        contents: "Best Colleges for Data Science and Analytic in.....",
        contents_body: "Check Details of Best colleges for Data Science and Analytics for ranking fees and admission details",
        content_link: "View Colleges"
    },
    { 
        bgColor: "#AD68CE",
        img: img2,
        icon: topCollegesCardIcon,
        titles: "Software",
        contents: "Best Colleges for Nursing in New Zealand",
        contents_body: "Check Details of Best colleges for Nursing for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#DDDF52",
        img: img3,
        icon: topCollegesCardIcon,
        titles: "M.Tech",
        contents: "Best Business School in New Zealand",
        contents_body: "Check Details of Best colleges for Business for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#5F53ED",
        img: img4,
        icon: topCollegesCardIcon,
        titles: "BA",
        contents: "Best College for Computer Science & Engineering .....",
        contents_body: "Check Details of Best colleges for Computer Science & Engineering for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#7FE15D",
        img: img5,
        icon: topCollegesCardIcon,
        titles: "BA",
        contents: "Top US-NEWS Ranked Colleges in New Zealand",
        contents_body: "Check Details of Top US-NEWS ranked Colleges for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#E05C5C",
        img: img6,
        icon: topCollegesCardIcon,
        titles: "BA",
        contents: "Top QS Ranked College in New Zealand",
        contents_body: "Check Details of Top QS ranked Colleges for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#EA5400",
        img: img7,
        icon: topCollegesCardIcon,
        titles: "B.Sc",
        contents: "Best colleges for Law in New Zealand",
        contents_body: "Check Details of Best colleges for Law for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#8368CE",
        img: img8,
        icon: topCollegesCardIcon,
        titles: "BA",
        contents: "Best Aviation Colleges in New Zealand",
        contents_body: "Check Details of Best Aviation colleges for ranking fees and admission details",
        content_link: "View Colleges"
    },
    {
        bgColor: "#B300A1",
        img: img9,
        icon: topCollegesCardIcon,
        titles: "B.Sc",
        contents: "Top CWUR Ranked Colleges in New Zealand",
        contents_body: "Check Details of Top CWUR ranked Colleges for ranking fees and admission details",
        content_link: "View Colleges"
    }
]

const CollegeArticleData = [
    {
        img: art1,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "Study in New Zealand: Complete Guide for Indian Students...",
        contents_body: "New Zealand does not have any federal department or national system of education. It varies with every province of the country. There are more than 10,000 degree programs offered for students to study in New Zealand. At present, New Zealand has the highest number of graduates in the world.",
        content_link: "Read more"
    },
    {
        img: art2,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "Higher Education in New Zealand: Types of Degrees, Colleges/Degrees, A...",
        contents_body: "New Zealand does not have any federal department or national system of education. It varies with every province of the country. There are more than 10,000 degree programs offered for students to study in New Zealand. At present, New Zealand has the highest number of graduates in the world..",
        content_link: "Read more"
    },
    {
        img: art3,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "New Zealand Universities Ranking 2023- Top Universities and Subject.......",
        contents_body: "As per New Zealand universities rankings for 2023, University of Toronto, McGill University and University of British Columbia once again aced and landed a position under 50 World Universities. The QS World University ........",
        content_link: "Read more"
    },
    {
        img: art4,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "Increase in PGWP in New Zealand, Median Earning Rise for International...",
        contents_body: "As per the new Studies from Statistics New Zealand, the number of students attaining PGWP (Post Graduate Work Permit) have remarkably enhanced. With this, the annual median salary turned out to be twice in a decade. It has increased from $14,500 to $26,800 in 2008 and 2018 respectively.",
        content_link: "Read more"
    },
    {
        img: art5,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "New Zealand Immigration Minister Highlights Initiatives to Immigration...",
        contents_body: "New Zealand's Immigration Minister Sean Fraser has revealed intentions to get the immigration system back on track, as he begins the new year by reassessing the actions needed to modernize the immigration and permanent residence procedures.",
        content_link: "Read more"
    },
    {
        img: art5,
        date: "14 Feb 2023",
        icon: heartIcon,
        contents: "New Zealand Still is Top Destination Amongst Prospective Immigrants; K...",
        contents_body: "According to a recent poll performed by World Education Services, New Zealand continues to be the",
        content_link: "Read more"
    },
]

const FCCard = [
    {
        img: fc1,
        id: "1",
        heading: "University of Auckland",
        subheading: "Auckland, North Island",
        btn1: "Admissions",
        btn2: "Placements",
        btn3: "Add to Compare",
        body1: "Courses & Fees : 20,43,000 ",
        body2: "M.S Computer Science - Total Fee",
       rating: 4.0,
        brochure: "Brochure",
        enquire: "Enquire"
    },
    {
        img: fc2,
        id: "2",
        heading: "University of Otago",
        subheading: "Dunedin, South Island",
        btn1: "Admissions",
        btn2: "Placements",
        btn3: "Add to Compare",
        body1: "Courses & Fees : 5,36,550  ",
        body2: "M.S Computer Science -1st Year Fees",
       rating: 4.0,
        brochure: "Brochure",
        enquire: "Enquire"

    },
    {
        img: fc3,
        id: "3",
        heading: "University of Canterbury",
        subheading: "Christchurch, South Island",
        btn1: "Admissions",
        btn2: "Placements",
        btn3: "Add to Compare",
        body1: "Courses & Fees : 19,73,500",
        body2: "M.S Computer Science - Total Fee",
       rating: 4.0,
        brochure: "Brochure",
        enquire: "Enquire"

    },
    {
        img: fc4,
        id: "4",
        heading: "Victoria University of Wellington",
        subheading: "Wellington, North Island",
        btn1: "Admissions",
        btn2: "Placements",
        btn3: "Add to Compare",
        body1: "Courses & Fees : 26,46,700",
        body2: "M.S Data Science and Artificial Intelligence - 1st Year Fees",
       rating: 4.0,
        brochure: "Brochure",
        enquire: "Enquire"

    }
]

const CollegeRankingData = [
    {
        img: p1,
        college: "University of Auckland - UOA",
        ranking: "1 out of 200",
        streams: "Overall"
    },
    {
        img: p2,
        college: "Univeristy of Otago",
        ranking: "1 out of 300",
        streams: "Overall"
    },
    {
        img: p3,
        college: "University of Canterbury",
        ranking: "1 out of 50",
        streams: "Overall"
    },
    {
        img: p4,
        college: "Victoria University of Wellington",
        ranking: "1 out of 50",
        streams: "Overall"
    },
    {
        img: p5,
        college: "Auckland University of Technology - AUT",
        ranking: "1 out of 200",
        streams: "Overall"
    },
    {
        img: p6,
        college: "Massey University",
        ranking: "1 out of 200",
        streams: "Overall"
    },
]

const ApplicationDatesData = [
    {
        img: p1,
        university: "M.S Computer Science, Univeristy of Otago",
        events: "Application Deadline For Autumn Intake",
        start: "--",
        end: "Dec 6, 2023"
    },
    {
        img: p2,
        university: "M.S Management Science and Engineering, Univeristy of Otago",
        events: "Application Deadline For Autumn Intake",
        start: "--",
        end: "Dec 13, 2023"
    },
    {
        img: p3,
        university: "M.S. Computer Science, University of Canterbury",
        events: "Application Deadline For Fall 2024 Intake",
        start: "--",
        end: "Jan 15, 2024"
    },
    {
        img: p4,
        university: "M.S. Business Analytics, University of Canterbury",
        events: "Application Deadline For Fall 2024 Intake",
        start: "--",
        end: "Jan 15, 2024"
    },
    {
        img: p5,
        university: "M.S Statistics and Data Science, Massey University",
        events: "Application Deadline For Fall 2024 Intake",
        start: "--",
        end: "Dec 15, 2023"
    },
    {
        img: p1,
        university: "M.S Engineering and Applied Science, Massey University",
        events: "Application Deadline For Fall Intake",
        start: "--",
        end: "Dec 15, 2023"
    },
]

const ScholarshipData = [
    {
        heading: "Merit-Based",
        title: "QS Scholarships",
        content1: "Yes",
        content2: "Variable Amount",
        content3: "Bachelor",
        content4: "N/A",
        button: "Apply Now"
    },
    {
        heading: "Merit-Based",
        title: "JN Tata Endowment Scholarship",
        content1: "Yes",
        content2: "$1,000,000",
        content3: "Doctorate",
        content4: "N/A",
        button: "Apply Now"
    },
    {
        heading: "Merit-Based",
        title: "VueVille Future Technology Scholarship",
        content1: "Yes",
        content2: "$1,000",
        content3: "Bachelor",
        content4: "1",
        button: "Apply Now"
    },
]

const ExamsData = [
    {
        img: exam1,
        heading: "International English Language Testing System [IELTS]",
        content: "International English Language Testing System(IELTS) is an international standardized test that measures the level... ",
        link: "ielts Registration"
    },
    {
        img: exam2,
        heading: "Test of English as a Foreign Language [TOEFL]",
        content: "Test of English as a Foreign Language (TOEFL) is an international standardized test conducted to assess the level of English.... ",
        link: "toefl Registration"
    },
    {
        img: exam3,
        heading: "Pearson Test of English [PTE]",
        content: "PTE (Pearson Test of English) is an English language proficiency test conducted by Pearson PCL group in association with Edexcel.... ",
        link: "pte Registration"
    },
    {
        img: exam4,
        heading: "Graduate Record Examination [GRE]",
        content: "Graduate Record Examination (GRE) is an international standardized test required for admission into.... ",
        link: "gre Registration"
    },
    {
        img: exam5,
        heading: "Graduate Management Admission Test [GMAT]",
        content: "Graduate Management Admission Test (GMAT) is conducted by GMAC for admission to nearly 5400 management.... ",
        link: "gmat Registration"
    },
    {
        img: exam6,
        heading: "Scholastic Aptitude Test [SAT]",
        content: "SAT is an international standardized test required for admission into most of the colleges in the United States. It is also accepted.... ",
        link: "sat Registration"
    },
]

const NewZealandFAQsData = [
    {
        title: "Ques. How can I get admission in New Zealand university?",
        answer:
          "Our campus has state-of-the-art facilities including modern classrooms, a library, computer labs, sports facilities, student lounges, and a career services center.",
    },
    {
        title: "Ques. What are the requirements to study in New Zealand?",
        answer:
          "Our college maintains a low student-to-faculty ratio of 15:1, ensuring personalized attention and close interaction between students and faculty.",
    },
    {
        title: "Ques. How much does it cost to study in New Zealand?",
        answer:
          "Yes, we offer various scholarships based on academic achievements, extracurricular involvement, and financial need. Our financial aid office can provide more information.",
    },
    {
        title: "Ques. How to apply for New Zealand Student Visa?",
        answer:
          "We provide on-campus housing options including dormitories and apartments. We also assist students in finding off-campus housing if preferred.",
    },
    {
        title: "Ques. Is IELTS required for New Zealand?",
        answer:
          "We have a wide range of extracurricular activities and clubs, such as sports teams, cultural organizations, academic clubs, community service groups, and more.",
    },
]

export { TopPlacesData, 
    TopCollegesData, 
    CollegeArticleData,
    FCCard, 
    CollegeRankingData, 
    ApplicationDatesData, 
    ScholarshipData, 
    ExamsData, 
    NewZealandFAQsData };