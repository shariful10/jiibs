import React from "react";
import PrioritiesButton from "../Regular/Inputs/PrioritiesButton";

const Priorities = ({ priorities, setPriorities }) => {
  return (
    <div className="">
      <p className="text-xl text-primary font-semibold uppercase">
        MY PRIORITIES
      </p>
      <h2 className="text-3xl font-semibold text-blackText my-2">
        Choose What Matters Most For You
      </h2>
      <p className="text-text-darkGray">
        These help us recommend and sort properties{" "}
      </p>
      <div className="flex flex-wrap gap-6 mt-10">
        <PrioritiesButton
          title="high ceiling"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="outdoor space"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="work space"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="pool"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="gym"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="big house"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="kitchen"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="high-end appliances"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="24-7 doorman"
          setPriorities={setPriorities}
          priorities={priorities}
        />
        <PrioritiesButton
          title="in-unit washer/dryer"
          setPriorities={setPriorities}
          priorities={priorities}
        />
      </div>
    </div>
  );
};

export default Priorities;
