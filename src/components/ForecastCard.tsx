import React, { useState } from "react";
import iconImg from "/public/icon _Bet9ja_.png";
import teamImg from "/public/icon _Manchester United_.png";
import ProfileImage from "/public/profile-photo.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdLockOutline } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";

const ForecastCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full shadow-lg border dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
      <div className="card-header flex items-center p-6 justify-between">
        <div className="text-left">
          <div className="flex items-center justify-center relative sm:h-10 sm:w-10 w-16 h-16 mr-auto">
            <Image
              src={ProfileImage}
              alt={`Profile Photo`}
              fill
              className="rounded-full border-2 border-main object-cover"
            />
          </div>
          <p className="text-xs text-primary dark:text-white mt-2">
            @JamesRollings
          </p>
          <p className="text-xs flex items-center text-primary font-bold dark:text-white mt-2">
            <SlBadge className="mr-1" /> VIP
          </p>
          <p className="text-sm text-primary dark:text-white mt-1">
            WR: <span className="text-main">89%</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-800 dark:text-gray-100 mb-6 ">
            Forecast Info
          </p>
          <p className="text-xs text-gray-800 dark:text-gray-100 mb-3 font-semibold ">
            345 copies
          </p>
          <button className="text-xs text-yellow p-2 font-semibold rounded-md border border-yellow ">
            Unlock Prediction
          </button>
        </div>
        <div className="space-y-2 text-right">
          <Image src={iconImg} alt="booking-image" className="ml-auto" />
          <p className="text-sm text-gray-500 dark:text-gray-100">BDH7###</p>
          <p className="text-sm text-gray-500 dark:text-gray-100">
            Odds: <span className="text-main font-semibold">11.00</span>{" "}
          </p>
        </div>
      </div>
      <div className="relative">
        <hr className="divided-y dark:border-gray-600" />
        <MdLockOutline className="absolute text-xl top-[-0.7rem] text-gray-600 dark:text-gray-200 right-[46%] " />
      </div>
      <div className="card-body p-6">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <Image
              src={teamImg}
              alt="team-logo"
              width="40"
              height="100"
              className="mx-auto"
            />
            <p className="text-xs mt-2 dark:text-gray-100">Man Utd</p>
          </div>
          <div className="text-center">
            <p className="text-xs dark:text-gray-100 font-semibold">Games</p>
            <p className="text-sm mt-2 dark:text-gray-100 font-semibold">VS</p>
            <p className="text-xs mt-2 dark:text-gray-100 font-semibold text-main">
              *****
            </p>
            <button
              onClick={toggleCollapse}
              className="text-xs dark:text-gray-100 mx-auto mt-2 text-center">
              <p>{isOpen ? "See less" : "See more"}</p>{" "}
              <MdKeyboardArrowDown
                className={`transform mx-auto transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div className="text-center">
            <Image
              src={teamImg}
              alt="team-logo"
              width="40"
              height="100"
              className="mx-auto"
            />
            <p className="text-xs mt-2 dark:text-gray-100">Man Utd</p>
          </div>
        </div>
        <div className="mb-4 mx-auto">
          {isOpen && (
            <div className="flex items-center justify-between">
              <div className="text-center">
                <Image
                  src={teamImg}
                  alt="team-logo"
                  width="40"
                  height="100"
                  className="mx-auto"
                />
                <p className="text-xs mt-2 dark:text-gray-100">Man Utd</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold dark:text-gray-100">
                  Games
                </p>
                <p className="text-sm mt-2 font-semibold dark:text-gray-100">
                  VS
                </p>
                <p className="text-xs mt-2 font-semibold text-main dark:text-gray-100">
                  *****
                </p>
              </div>
              <div className="text-center">
                <Image
                  src={teamImg}
                  alt="team-logo"
                  width="40"
                  height="100"
                  className="mx-auto"
                />
                <p className="text-xs mt-2 dark:text-gray-100">Man Utd</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="card-footer flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2">
        <div className="likes">
          <button className="bg-white dark:bg-gray-600 flex items-center p-2 rounded-lg">
            <IoIosHeartEmpty className="text-xl mr-2 text-main dark:text-gray-100 " />{" "}
            <span className="text-xs dark:text-gray-100">456 Likes</span>
          </button>
        </div>
        <div className="posted text-center">
          <p className="text-xs dark:text-gray-100">Posted at</p>
          <p className="text-xs dark:text-gray-100">4 minuites ago</p>
        </div>
        <div className="follow">
          <button className="bg-white dark:bg-gray-600 flex items-center p-2 rounded-lg">
            <CiBookmark className="text-xl mr-2 text-main dark:text-gray-100" />{" "}
            <span className="text-xs dark:text-gray-100">Follow</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
