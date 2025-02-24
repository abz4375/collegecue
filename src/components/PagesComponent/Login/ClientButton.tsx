"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  position: number;
  width: number;
  to: string;
}

const tabs: Tab[] = [
  {
    id: "student",
    label: "Student",
    position: 0,
    width: 80,
    to: "/register",
  },
  {
    id: "company",
    label: "Company",
    position: 0,
    width: 90,
    to: "/company-registration",
  },
  {
    id: "university",
    label: "University",
    position: 0,
    width: 100,
    to: "/college-registration",
  },
  {
    id: "consultant",
    label: "Consultant",
    position: 0,
    width: 110,
    to: "/consultant-registration",
  },
];

export default function ClientButton({ login }: { login: boolean }) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [tabMetrics, setTabMetrics] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const currentTab = tabRefs.current[activeIndex];
    if (currentTab) {
      setTabMetrics({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  }, [activeTab]);

  const handleTabClick = (tabId: string, index: number) => {
    setActiveTab(tabId);
    const currentTab = tabRefs.current[index];
    if (currentTab) {
      setTabMetrics({
        width: currentTab.offsetWidth,
        left: currentTab.offsetLeft,
      });
    }
  };

  return (
    <div className="flex border-2 border-black rounded-full bg-blue-950 bg-opacity-15 p-[2px] gap-1 text-[13.75px] font-sans relative">
      <div
        className="absolute top-0 left-0 h-[30px] bg-black rounded-full transition-all duration-300 ease-in-out my-[1.5px]"
        style={{
          width: `${tabMetrics.width}px`,
          transform: `translateX(${tabMetrics.left}px)`,
        }}
      />

      {tabs.map((tab, index) => (
        <Link href={`${!login ? tab.to : ""}`} key={index}>
          <div
            key={tab.id}
            ref={(el) => {
              if (el) tabRefs.current[index] = el;
            }}
            className={`p-[8px] py-[4px] rounded-full relative z-5 transition-all duration-300 ease-in-out cursor-pointer ${
              activeTab === tab.id
                ? "text-white "
                : "hover:bg-blue-950 hover:bg-opacity-[0.155] text-black"
            }`}
            onClick={() => handleTabClick(tab.id, index)}
          >
            {tab.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
