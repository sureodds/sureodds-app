import React from "react";
import Logo from "./Logo";
import ProfilePhoto from "./ProfilePhoto";
import { NavItem, NavItemContainer } from "./NavItem";
import { RxDashboard, RxActivityLog, RxAvatar, RxGear } from "react-icons/rx";
import { SlWallet } from "react-icons/sl";
import { RiLogoutCircleRLine, RiCloseLine } from "react-icons/ri";

const navItems = [
  {
    label: "SureOdds",
    path: "odds/sureodds",
    icon: <RxDashboard />,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Leaderboard",
    path: "odds/leaderboard",
    icon: <RxActivityLog />,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Wallet",
    path: "odds/wallet",
    icon: <SlWallet />,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Profile",
    path: "odds/profile",
    icon: <RxAvatar />,
    allowedRoles: ["admin"],
  },
  {
    label: "Settings",
    path: "odds/settings",
    icon: <RxGear />,
    allowedRoles: ["user", "admin"],
  },
  // {
  //   label: 'Users',
  //   path: 'users',
  //   // icon: faDoorOpen,
  //   allowedRoles: ['admin'],
  // },
];

const MobileSidenav = ({ handleToggle, toggle }: any) => {
  return (
    <div
      className={`h-screen w-full fixed left-0 top-0 right-0 z-10 transition ease-in-out duration-800 bg-gradient-to-r from-secondary to-transparent transform sm:translate-x-[-100rem] ${
        toggle ? `translate-x-0` : `translate-x-[-100rem]`
      }`}>
      <div
        className={`dark:bg-primary bg-gray-100 h-screen w-72 border-r border-gray-600 transform translate-x-0 sm:relative absolute left-0 transition ease-in-out delay-1000 duration-1000`}>
        <div>
          <div className="px-10 pt-10 mx-auto">
            <Logo />
          </div>
          <div>
            <ProfilePhoto />
          </div>
          <div>
            <NavItemContainer>
              {navItems.map((items, i) => (
                <NavItem key={i} navItem={items} />
              ))}
              <button
                type="button"
                className="px-2 pl-6 cursor-pointer sm:px-6 justify-center sm:justify-start mt-20 flex items-center text-gray-600 dark:text-gray-100 hover:text-main transform hover:translate-x-1 transition ease-in-out duration-100">
                <div className="mr-4">
                  <RiLogoutCircleRLine />
                </div>
                <span className="text-gray-600 dark:text-gray-100">
                  Log out
                </span>
              </button>
            </NavItemContainer>
          </div>
        </div>
      </div>
      <RiCloseLine
        onClick={handleToggle}
        className="text-primary dark:text-white fixed right-[8rem] top-5 text-2xl cursor-pointer"
      />
    </div>
  );
};

export default MobileSidenav;
