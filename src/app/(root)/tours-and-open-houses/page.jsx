"use client";
import Link from "next/link";
import React, { useState } from "react";
import Container from "@/Components/Regular/Container";
import UpcomingTab from "@/Components/Pages/ToursAndOpenHouses/UpcomingTab";

const ToursAndOpenHouses = () => {
  const [tab, setTab] = useState("upcoming");

  return (
    <Container>
      <div className="my-10 p-5 md:p-0">
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
          <Link href="#">
            <button className="text-white bg-primary py-2 px-4 rounded-md">
              Explore
            </button>
          </Link>
        </div>
        {tab === "upcoming" && (
          <div className="mt-10">
            <UpcomingTab />
          </div>
        )}
        {tab === "past" && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center">Coming soon</h2>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ToursAndOpenHouses;
