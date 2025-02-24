"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../Searchbars/SearchBar";
import logo from "../../assets/Navbar-logos/collegecue.png";
import logo1 from "../../assets/Navbar-logos/student1.png";
import logo2 from "../../assets/Navbar-logos/employer.png";
import choosecourse from "../../assets/Navbar-logos/course.png";
import news from "../../assets/Navbar-logos/news.png";
import educationloan from "../../assets/Navbar-logos/educationloan.png";
import qanda from "../../assets/Navbar-logos/qna.png";
import testseries from "../../assets/Navbar-logos/testseries.png";
import coursefinder from "../../assets/Navbar-logos/coursefinder.png";
import review from "../../assets/Navbar-logos/reviews.png";
import writeareview from "../../assets/Navbar-logos/writeareview.png";
import institute from "../../assets/Navbar-logos/institute.png";
import collegepredictor from "../../assets/Navbar-logos/collegepredictor.png";
import practicequestion from "../../assets/Navbar-logos/practicequestion.png";
import scholarship from "../../assets/Navbar-logos/fellowship.png";
import job from "../../assets/Navbar-logos/joboffer.png";
import Topnews from "../../assets/Navbar-logos/6.png";
import { MdOutlineMenu } from "react-icons/md";
import Newsdata from "./NewData";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import {
  FaBusinessTime,
  FaHandshake,
  FaUsers,
  FaComments,
  FaStar,
  FaEnvelope,
  FaHandsHelping,
} from "react-icons/fa";

type ItemId = any;

const Navbar: React.FC = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [mobiledropdown, setMobiledropdown] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [expandedItems, setExpandedItems] = useState<ItemId[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMediumScreen, setIsMediumScreen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    handleScreenOverflow(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width > 300 && width <= 640);
      setIsMediumScreen(width > 640 && width <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleScreenOverflow(false);
    };
  }, []);

  const toggleExpandedItem = (itemId: ItemId): void => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter((id) => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const isExpanded = (itemId: ItemId): boolean => {
    return expandedItems.includes(itemId);
  };

  interface MenuItem {
    label: string;
    link: string;
  }

  const menuItems = [
    { label: "Our Stories", link: "/option1", icon: <FaBusinessTime /> },
    { label: "Clientele", link: "/option2", icon: <FaHandshake /> },
    { label: "Client Case Studies", link: "/option3", icon: <FaUsers /> },
    { label: "Partners", link: "/option3", icon: <FaHandsHelping /> },
    { label: "Testimonials", link: "/option3", icon: <FaComments /> },
    { label: "Be a Part of Us", link: "/option3", icon: <FaStar /> },
    { label: "Contact Us", link: "/option3", icon: <FaEnvelope /> },
    { label: "Partner with Us", link: "/option3", icon: <FaHandsHelping /> },
  ];

  const dropdownItems = [
    { label: "Top Courses", link: "/choose-courses", logo: choosecourse },
    { label: "Reviews", link: "/review", logo: review },
    { label: "News", link: "/news", logo: news },
    { label: "Write A Review", link: "/write-review", logo: writeareview },
    { label: "Education Loan", link: "/education_loan", logo: educationloan },
    { label: "Institutes", link: "/institutes", logo: institute },
    { label: "Q&A", link: "/q&a", logo: qanda },
    {
      label: "College Predictor",
      link: "/collegepredictor",
      logo: collegepredictor,
    },
    { label: "Test Series", link: "/testseries", logo: testseries },
    {
      label: "Practice Questions",
      link: "/practice-questions",
      logo: practicequestion,
    },
    { label: "Course Finder", link: "/course-finder", logo: coursefinder },
    { label: "Scholarships", link: "/scholarship", logo: scholarship },
    { label: "Job Portal", link: "/jobportal", logo: job },
  ];

  const mobiledropdownItems = [
    { label: "Top Colleges & Universities", link: "/topcollege" },
    { label: "Admission 2024", link: "/admission2024" },
    { label: "Exams", link: "/exam" },
    { label: "Study Abroad", link: "/studyAbroad" },
    { label: "Top Courses", link: "/choose-courses", logo: choosecourse },
    { label: "Reviews", link: "/review", logo: review },
    { label: "News", link: "/news", logo: news },
    { label: "Write A Review", link: "/write-review", logo: writeareview },
    { label: "Education Loan", link: "/education_loan", logo: educationloan },
    { label: "Institutes", link: "/institutes", logo: institute },
    { label: "Q&A", link: "/q&a", logo: qanda },
    {
      label: "College Predictor",
      link: "/collegepredictor",
      logo: collegepredictor,
    },
    { label: "Test Series", link: "/testseries", logo: testseries },
    {
      label: "Practice Questions",
      link: "/practice-questions",
      logo: practicequestion,
    },
    { label: "Course Finder", link: "/course-finder", logo: coursefinder },
    { label: "Scholarships", link: "/scholarship", logo: scholarship },
    { label: "Job Portal", link: "/jobportal", logo: job },
  ];

  const handleMobileView = () => {
    setMobiledropdown(!mobiledropdown);
    handleScreenOverflow(!mobiledropdown);
  };

  const handleScreenOverflow = (state: boolean) => {
    document.body.style.overflow = state ? "hidden" : "auto";
  };

  const handleExploreClick = () => {
    setToggleDropdown((prevState) => !prevState);
  };

  const handleNotificationClick = () => {
    setOpenNotification((prevState) => !prevState);
  };

  return (
    <div className="flex">
      <nav className="flex items-center bg-white justify-center w-full mx-auto h-[64px] px-6 fixed top-0 left-0 z-10">
        <div className="flex items-center space-x-4">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="CollegeCue"
              className="h-12 w-auto filter invert sm:h-auto md:h-auto"
            />
          </Link>
        </div>
        <div className="flex items-center lg:items-center mr-3 lg:mr-0 md:w-full left-0 px-4 sm:hidden md:hidden">
          <div className="">
            <SearchBar />
          </div>
        </div>
        <div className="flex lg:w-auto items-center justify-center xl:ml-3 lg:ml-2 lg:text-sm">
          <ul className="flex text-black text-sm space-x-2 lg:space-x-2 items-center md:hidden">
            <Link
              href="/topcollege"
              className="px-3 py-1 border border-transparent rounded-full transition-all duration-300
              focus:ring-2 focus:ring-blue-500 focus:text-blue-600
              hover:bg-gray-100"
            >
              Top Colleges & Universities
            </Link>
            <Link
              href="/admission2024"
              className="px-3 py-1 border border-transparent rounded-full transition-all duration-300
              focus:ring-2 focus:ring-blue-500 focus:text-blue-600
              hover:bg-gray-100"
            >
              Admission 2024
            </Link>
            <Link
              href="/exam"
              className="px-3 py-1 border border-transparent rounded-full transition-all duration-300
              focus:ring-2 focus:ring-blue-500 focus:text-blue-600
              hover:bg-gray-100"
            >
              Exams
            </Link>
            <Link
              href="/studyAbroad"
              className="px-3 py-1 border border-transparent rounded-full transition-all duration-300
              focus:ring-2 focus:ring-blue-500 focus:text-blue-600
              hover:bg-gray-100"
            >
              Study Abroad
            </Link>
            <div className="flex items-center lg:items-center mr-20 lg:mr-0 relative">
              <button
                className="flex items-center gap-2 px-3 py-1 border border-transparent rounded-full transition-all duration-300
               focus:ring-2 focus:ring-blue-500 focus:text-blue-600
               hover:bg-gray-100"
                onClick={handleExploreClick}
              >
                <span>More</span>
                <BsChevronDown className="text-lg mt-1" />
              </button>
              {toggleDropdown && (
                <ul
                  className="absolute top-full left-0 mt-3 w-48 bg-white shadow-lg rounded-lg z-10
                        transition-all duration-300 ease-in-out transform opacity-100 btn btn-secondary dropdown-toggle"
                >
                  {dropdownItems.map((item, index) => (
                    <li className="dropdown-item" key={index}>
                      <Link
                        href={item.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        </div>
        <div className="flex items-center space-x-2 mr-3 ml-1 relative md:hidden">
          <button
            className="ml-4 lg:ml-2 text-black navmd:hidden"
            onClick={handleNotificationClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <MdOutlineNotificationsActive className="w-6 h-6 text-black" />
            ) : (
              <svg
                className="w-6 h-6 text-black"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"
                ></path>
              </svg>
            )}
          </button>
          {openNotification && (
            <div
              className="w-[400px] h-auto rounded-2xl absolute border-[5px] border-gray-200 right-0
            mt-[47rem] mr-[4rem] origin-top-right bg-gray-300 shadow-lg ring-1 ring-black ring-opacity-5
            focus:outline-none z-[1000] transition-all duration-1000"
            >
              <div className="flex flex-col gap-3 py-8 px-10 justify-between rounded-2xl bg-white relative">
                <button
                  onClick={() => setOpenNotification(false)}
                  className="absolute top-4 right-7 text-black rounded-full text-lg
                   hover:text-stone-900 transition duration-200"
                >
                  ✕
                </button>
                <div className="text-bold font-medium">Notification</div>
                <div>
                  {Newsdata.map((item) => (
                    <div
                      key={item.id}
                      className="flex w-full border border-gray-300 justify-center flex-col p-3 items-center"
                    >
                      <div className="flex items-center justify-center flex-row gap-4 md:flex-col">
                        <Image
                          src={item.avatar}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full bg-orange-400"
                        />
                        <p className="text-base flex-wrap text-[#002D62] font-bold">
                          {item.heading}
                        </p>
                      </div>
                      <p
                        className={`text-xs pt-2 font-sm break-words overflow-hidden ${
                          isExpanded(item.id) ? "max-h-none" : "max-h-[3.6rem]"
                        } custom-text-color`}
                      >
                        {item.Answer}
                      </p>
                      <div className="flex justify-between flex-row items-center w-full gap-14 md:flex-col">
                        <p className="text-[13px] pt-4 text-gray font-medium overflow-hidden">
                          {item.date}
                        </p>
                        <button
                          onClick={() => toggleExpandedItem(item.id)}
                          className="border border-transparent border-blue-500 text-blue-500 px-2 py-1 rounded-full mt-3 hover:bg-blue-500 hover:text-white transition"
                        >
                          Readmore
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-1 md:mr-5 sm:mr-6 navmd:hidden">
          <div className="w-[1px] h-12 bg-gray-300"></div>
          <Link href={"/login"}>
            <button
              className="ml-2 mr-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600
              hover:text-black-600 transition-colors duration-300 h-[40px] w-[80px] sm:ml-[-20px] sm:w-[px] sm:h-[33px] sm:text-xs"
            >
              Login
            </button>
          </Link>
          <div className="w-[1px] h-12 bg-gray-300"></div>
        </div>
        <div className="flex gap-4 ml-2 navmd:hidden">
          <Link href="/host">
            <button className="px-3 py-1 border border-blue-400 rounded-full flex items-center gap-1 hover:bg-blue-100">
              <GoPlus className="text-lg" />
              <span>Host</span>
            </button>
          </Link>
          <button
            className="px-3 py-1 border border-blue-400 rounded-full flex items-center hover:bg-blue-100"
            onClick={toggleMenu}
          >
            <HiMiniShoppingBag className="text-lg  mr-2 mb-1" />
            <span>Business</span>
          </button>
          <div
            className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transition-transform duration-300
              ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } z-50 overflow-y-hidden`}
          >
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Business Menu</h2>
              <IoCloseCircleOutline
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              <a
                href="/employers"
                target="_blank"
                className="bg-blue-100 p-6 rounded-lg shadow-md w-40 h-40 flex flex-col justify-center items-center transform transition-all duration-300 hover:bg-blue-800 hover:bg-opacity-30 hover:shadow-lg"
              >
                <Image
                  src={logo2}
                  alt="Employers Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="font-semibold text-md text-center text-blue-800">
                  For Employers
                </h3>
                {/* <p className="text-gray-600 text-sm text-center mt-2">
                  Expand your business.
                </p> */}
              </a>
              <a
                href="/college"
                target="_blank"
                className="bg-green-100 p-6 rounded-lg shadow-md w-40 h-40 flex flex-col justify-center items-center transform transition-all duration-300 hover:bg-green-800 hover:bg-opacity-30 hover:shadow-lg"
              >
                <Image
                  src={logo1}
                  alt="College Icon"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="font-semibold text-xl text-center text-green-800">
                  For College
                </h3>
                {/* <p className="text-gray-600 text-sm text-center mt-2">
                  Boost sales.
                </p> */}
              </a>
            </div>
            <hr className="mt-3" />
            <div className="overflow-y-scroll p-4 h-[52%]">
              <ul className="">
                {menuItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    <Link
                      href={item.link}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                      onClick={toggleMenu}
                    >
                      <span className="mr-6">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sticky bottom-0 bg-white p-4 border-t">
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 bg-gray-50 border-gray-300 border-2 rounded-full transition">
                Host opportunity
              </button>
            </div>
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
        {isSmallScreen && (
          <div className="flex items-center justify-end mr-5 px-4">
            <SearchBar />
          </div>
        )}
        {isMediumScreen && (
          <div className="flex items-center justify-end mr-5 px-4">
            <SearchBar />
          </div>
        )}
        <div className="flex justify-start">
          <button
            className="hidden md:block"
            onClick={handleMobileView}
            onDoubleClick={() => setMobiledropdown(false)}
          >
            <MdOutlineMenu className="text-black-600 text-2xl" />
          </button>
          {mobiledropdown && (
            <div className="flex">
              <div
                className={`fixed top-0 left-0 h-full w-full z-[1000] bg-black bg-opacity-50 transition-opacity duration-300 ${
                  mobiledropdown
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div
                  className={`fixed top-0 left-0 h-full w-[300px] z-50 shadow-lg
                                   transform transition-transform duration-300 ${
                                     mobiledropdown
                                       ? "translate-x-0"
                                       : "-translate-x-full"
                                   }
                                bg-white overflow-y-scroll`}
                >
                  <div className="flex flex-col items-start gap-2 p-4 w-full">
                    <div className="flex w-full justify-between items-center">
                      <div
                        className="ml-4 bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-600
                          hover:text-black-600 transition-colors duration-300 h-[40px] w-[80px] text-lg"
                        onClick={() => (
                          setMobiledropdown(false), handleScreenOverflow(false)
                        )}
                      >
                        Login
                      </div>
                      <button
                        onClick={() => (
                          setMobiledropdown(false), handleScreenOverflow(false)
                        )}
                      >
                        <IoCloseCircleOutline className="text-2xl text-blue-900" />
                      </button>
                    </div>
                    {mobiledropdownItems.map((item, index) => (
                      <Link href={item.link} key={index}>
                        <p
                          className="text-[20px] text-start mt-4 text-gray-700 text-sm hover:text-blue-400"
                          onClick={() => (
                            setMobiledropdown(false),
                            handleScreenOverflow(false)
                          )}
                        >
                          {item.label}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="w-full opacity-65 bg-black"></div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
