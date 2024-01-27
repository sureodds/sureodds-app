"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
// import Button from "./Button";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = ({ onClick }: any) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  // const { handleOpen } = use;

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex z-10 justify-between items-center sticky top-0 lg:px-20 px-4 py-5 bg-gray-100 dark:bg-primary">
      <HiOutlineBars3BottomLeft
        onClick={onClick}
        className="sm:hidden block text-main text-4xl cursor-pointer"
      />
      <div>
        <h1 className="text-lg text-primary font-bold dark:text-gray-100 hidden sm:block">
          Welcome back!, Kay{" "}
        </h1>
        <p className="dark:text-gray-100 text-sm">Start forcasting</p>
      </div>
      <div className="space-x-8 flex items-center">
        <Button
          asChild
          className="dark:bg-main bg-main hover:bg-main/70 dark:hover:bg-main/70 dark:text-gray-100 hover:px-6 transition-all">
          <Link href="/account/add">Add Your Forecast</Link>
        </Button>
        <Button
          asChild
          className="dark:bg-white bg-main hover:bg-main/70 dark:hover:bg-main/70 dark:text-main font-bold hover:px-6 transition-all">
          <Link href="/account/register">Register</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className=" font-bold hover:px-6 transition-all dark:text-gray-100">
          <Link href="/login">Login</Link>
        </Button>

        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-10 h-10 bg-white shadow-lg rounded-xl dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={() =>
            setTheme(resolvedTheme === "light" ? "dark" : "light")
          }>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200">
              {resolvedTheme === "light" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
