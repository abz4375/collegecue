import ExamNews1 from "../../assets/CollegePredicInfo/ExamNews1.png"
import ExamNews2 from "../../assets/CollegePredicInfo/ExamNews2.png"
import ExamNews3 from "../../assets/CollegePredicInfo/ExamNews3.png"
import ExamNews4 from "../../assets/CollegePredicInfo/ExamNews4.png"
import ExamNews5 from "../../assets/CollegePredicInfo/ExamNews5.png"

import ExamNotification5 from "../../assets/CollegePredicInfo/ExamNotification5.png";
import ExamNotification12 from "../../assets/CollegePredicInfo/ExamNotification12.png";

// Data.js
const exams = [
  { id: 1, name: "JEE" },
  { id: 2, name: "NEET" },
  // Add more exam options as needed
];

const degrees = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Medical" },
  // Add more degree options as needed
];

const reservationCategories = [
  { id: 1, name: "General" },
  { id: 2, name: "SC" },
  { id: 3, name: "ST" },
  { id: 4, name: "OBC" },
  // Add more reservation categories as needed
];

const ExamNewsData = [
  {
    id: 1,
    img: ExamNews1,
    name: "VITEEE 2023 Paper Analysis April 20",
    date: "April 20, 2023",
  },
  {
    id: 2,
    img: ExamNews2,
    name: "CMAT 2023 Exam Date Out",
    date: "April 19, 2023",
  },
  {
    id: 3,
    img: ExamNews3,
    name: "CUET PG 2023 Registration Deadline Extended",
    date: "April 19, 2023",
  },
  {
    id: 4,
    img: ExamNews4,
    name: "ABV IIITM Gwalior JEE Main Cut Off 2018",
    date: "April 19, 2023",
  },
  {
    id: 5,
    img: ExamNews5,
    name: "AP Intermediate 2nd year English Question",
    date: "April 19, 2023",
  },
];

const ExamNotificationData = [
  {
    id: 1,
    name: "CUET PG 2023 registration la...",
    date: "April 19, 2023",
    img: ExamNotification5,
  },

  {
    id: 2,
    name: "NATA 2023 Registration Ongoi...",
    date: "April 19, 2023",
    img: ExamNotification12,
  },

  {
    id: 3,
    name: "CMAT 2023 Exam Date Out; NTA...",
    date: "April 19, 2023",
    img: ExamNotification5,
  },

  {
    id: 4,
    name: "NATA 2023 Admit Card for Tes...",
    date: "April 19, 2023",
    img: ExamNotification12,
  },

  {
    id: 5,
    name: "JEE Main 2023 Session 2 Answ..",
    date: "April 19, 2023",
    img: ExamNotification5,
  },
];



export { exams, degrees, reservationCategories, ExamNotificationData, ExamNewsData };
