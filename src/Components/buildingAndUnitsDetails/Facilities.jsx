import React from "react";
import FacilitiesCard from "./components/FacilitiesCard";
import classIcons from "@/assets/icons/classicsIcons.png";
import marketIcons from "@/assets/icons/marketStoreIcons.png";
import plateIcons from "@/assets/icons/plateIcons.png";

export default function Facilities() {
  return (
    <div className="space-y-4">
      <FacilitiesCard
        icons={plateIcons}
        title="Dining & Drinking"
        paragraph="Includes Michelin starred restaurant Crown Shy as well as fine dining experiences on 63rd floor, terrace and bar on the 64th floor."
      />
      <FacilitiesCard
        icons={classIcons}
        title="world class amenities"
        paragraph="NYSC's 22,000-square-foot Elite Club offers a full roster of daily classes, a turf track, and Pilates and yoga studios."
      />
      <FacilitiesCard
        icons={marketIcons}
        title="In-Building Groceries & Market"
        paragraph="City Acres, a gourmet grocer and curated food hall, is at your door step."
      />
    </div>
  );
}
