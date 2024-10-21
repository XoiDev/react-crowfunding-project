import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import LayoutDashBoard from "layouts/LayoutDashBoard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/Campaignitem";
import Campaignitem from "modules/campaign/Campaignitem";
import React from "react";
import { v4 } from "uuid";

const DashboardPage = () => {
  return (
    <LayoutDashBoard>
      <Heading number={4}>Your campaign</Heading>
      <CampaignFeature></CampaignFeature>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <Campaignitem key={v4}></Campaignitem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </LayoutDashBoard>
  );
};

export default DashboardPage;
