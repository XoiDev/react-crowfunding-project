import { Button } from "components/button";
import Heading from "components/common/Heading";
import LayoutDashBoard from "layouts/LayoutDashBoard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampCategory from "modules/campaign/parts/CampCategory";
import React, { Fragment } from "react";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create your Campaign
            </h1>
            <p className="mb-2 text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="/" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button type="button" href="/start-campaign" kind="ghost">
          Create campaign
        </Button>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="not">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <div className="mt-10 text-center">
        <Button kind="ghost" className="px-8 mx-auto">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </Button>
      </div>
    </Fragment>
  );
};

export default CampaignPage;
