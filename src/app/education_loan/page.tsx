import React, { Suspense } from "react";
import EduLoan from "@/components/PagesComponent/Education_loan/Eduloan";
import EmiCalculator from "@/components/PagesComponent/Education_loan/EmiCalculator";
import HeroSection from "@/components/PagesComponent/Education_loan/HeroSection";
import TopLoan from "@/components/PagesComponent/Education_loan/TopLoan";
import Application from "@/components/PagesComponent/Education_loan/Application";
import BankdetailCard from "@/components/Reusable_cards/BankdetailCard";
import BankDetails from "@/components/PagesComponent/Education_loan/BankDetails";
import { Loader } from "lucide-react";

const Page = () => {
  return (
    <div className="overflow-hidden max-w-full mx-auto">
      <HeroSection />
      <div className="max-w-[1480px] mx-auto mb-20">
        <Suspense fallback={<div className=""><Loader></Loader></div>}>
          <BankdetailCard />
        </Suspense>
        <EduLoan />
        <EmiCalculator />
        <Application />
        <TopLoan />
      </div>
      <Suspense fallback={<div className=""><Loader></Loader></div>}>
        <BankDetails />
      </Suspense>
    </div>
  );
};

export default Page;
