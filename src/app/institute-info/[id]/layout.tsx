import Left from "@/components/Auth/Left";
import Loader from "@/components/Loader";
import OrgInfo from "@/components/PagesComponent/InfoPage/OrgInfo";
import ClientButton from "@/components/PagesComponent/Login/ClientButton";
import Link from "next/link";
import React, { Suspense } from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>{children}</>
  );
};

export default layout;
