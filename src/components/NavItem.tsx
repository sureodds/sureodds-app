"use client";
import classNames from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({ navItem, onClick }: any) => {
  const pathname = usePathname();
  // const isActive = router.asPath === href;
  const isCurrentRoute = pathname === `/${navItem.path}`;
  const classes = classNames({
    "px-6 sm:px-6 justify-start py-3 flex": true,
    "text-gray-600 dark:text-gray-100 hover:text-main transform hover:translate-x-1 transition ease-in-out duration-100":
      !isCurrentRoute,
    "border-l-8 border-main dark:bg-gradient-to-r from-linearMain to-transparent dark:text-gray-100 text-gray-600 shadow-md":
      isCurrentRoute,
  });
  return (
    <NextLink href={navItem.path} className={classes} onClick={onClick}>
      <div className="flex items-center">
        <div className="mr-3 sm:mr-4">
          <div className="text-xl">{navItem.icon}</div>
        </div>
        <span className="block sm:text-md text-sm">{navItem.label}</span>
      </div>
    </NextLink>
  );
};

const NavItemContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-10">{children}</div>
);

export { NavItem, NavItemContainer };
