import React from "react";
import Image from "next/image";
import ProfileImage from "/public/profile-photo.jpg";

interface ProfilePhotoTypes {
  imgUrl?: string;
  username?: string;
}

const ProfilePhoto = ({ imgUrl, username }: ProfilePhotoTypes) => {
  return (
    <>
      <div className="sm:mt-16 mt-10 flex items-center justify-center relative sm:h-20 sm:w-20 w-16 h-16 mx-auto">
        <Image
          src={imgUrl ? imgUrl : ProfileImage}
          alt={username ? username : `Profile Photo`}
          fill
          className="rounded-full border-4 border-main object-cover"
        />
      </div>
      <div>
        <p className="text-center text-sm text-primary dark:text-white mt-1">
          @JamesRollings
        </p>
        <div className="grid grid-cols-2 mt-4 items-center">
          <div className="w-full text-center">
            <div className="flex items-center justify-center">
              {/* <p className="text-sm mr-2 text-primary dark:text-white">Icon</p> */}
              <p className="text-sm text-primary dark:text-white">Golden</p>
            </div>
            <p className="text-xs text-gray-600 dark:text-white mt-2">Level</p>
          </div>
          <div className="border-l border-gray-500 w-full text-center">
            <div className="flex items-center justify-center ">
              {/* <p className="text-sm mr-2 text-primary dark:text-white">Icon</p> */}
              <p className="text-sm font-bold text-primary dark:text-white">89%</p>
            </div>
            <p className="text-xs text-gray-600 dark:text-white mt-2">
              Win Rate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePhoto;
