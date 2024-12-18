import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "components/button";
import DashboardFund from "./DashboardFund";
import { Link } from "react-router-dom";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/" className="inline-block">
          {" "}
          <img srcSet="/logo.png 2x" alt="logo" />
        </Link>
        <div className=" max-w-[458px w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10 ">
        <DashboardFund></DashboardFund>
        <Button type="button" href="/start-campaign" kind="secondary">
          Start a campaign
        </Button>

        <img
          srcSet="/logo.png 2x"
          alt="avatar"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
