"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "@/Components/Regular/Container";
import UpcomingTab from "@/Components/Pages/ToursAndOpenHouses/UpcomingTab";

const ToursAndOpenHouses = () => {
  const [tab, setTab] = useState("upcoming");

  return (
    <Container className="px-6 md:px-0 min-h-[calc(100vh-95px)] pb-14">
      <div className="my-10">
        <div className="flex justify-between items-center">
          <div className="text-darkGray flex items-center gap-6">
            <p
              onClick={() => setTab("upcoming")}
              className={`${
                tab === "upcoming"
                  ? "text-primary border-b-2 border-primary"
                  : "border-b-2 border-transparent"
              } pb-2 cursor-pointer hover:text-primary`}
            >
              Upcoming
            </p>
            <p
              onClick={() => setTab("past")}
              className={`${
                tab === "past"
                  ? "text-primary border-b-2 border-primary"
                  : "border-b-2 border-transparent"
              } pb-2 cursor-pointer hover:text-primary`}
            >
              Past
            </p>
          </div>
          <Link href="/">
            <button className="text-[15px] text-white bg-primary py-2.5 px-6 rounded-md">
              Explore
            </button>
          </Link>
        </div>
        {tab === "upcoming" && (
          <div className="mt-10">
            <UpcomingTab from={0} to={6} />
          </div>
        )}
        {tab === "past" && (
          <div className="mt-10">
            <UpcomingTab from={0} to={2} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default ToursAndOpenHouses;
