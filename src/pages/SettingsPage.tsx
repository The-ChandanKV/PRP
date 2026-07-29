import React from "react";
import PageHeader from "../components/PageHeader";
import SettingsSideNav from "../components/SettingsSideNav";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";

export default function SettingsPage() {
  return (
    <div className="text-on-surface min-h-screen relative overflow-x-hidden flex flex-col">
      <PageHeader />
      <div className="flex max-w-[1440px] mx-auto w-full flex-1">
        <SettingsSideNav />
        <main className="flex-grow pt-24 pb-xl px-sm md:px-lg max-w-container-max mx-auto w-full z-10">
          <div className="max-w-3xl mx-auto space-y-[48px]">
            <Section1 />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
