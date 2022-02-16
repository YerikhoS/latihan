import React from "react";
import OverviewContent from "../components/oragnisms/OverviewContent";
import SideBar from "../components/oragnisms/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
