import {
  IconCampaign,
  IconDarkmode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "#",
    onClick: () => {},
  },
  {
    icon: <IconDarkmode></IconDarkmode>,
    title: "Light/Dark",
    url: "#",
    onClick: () => {},
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] rounded-lg bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] px-[14px] py-10 flex-col flex-shrink-0 ">
      {sidebarLinks.map((link) => (
        <NavLink
          className={`flex items-center md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8 gap-x-5 text-icon-color last:mt-auto last:shadow-sdprimary`}
          to={link.url}
          key={link.title}
        >
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
