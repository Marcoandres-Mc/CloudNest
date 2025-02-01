import * as React from "react";
import { Collapse } from '@material-tailwind/react';
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Input,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
 
   type NavItem = {
    label: string;
    icon: React.ElementType;
    };


   
  // nav list component
  const navListItems:NavItem[] = [
    {
      label: "Account",
      icon: UserCircleIcon,
    },
    {
      label: "Blocks",
      icon: CubeTransparentIcon,
    },
    {
      label: "Docs",
      icon: CodeBracketSquareIcon,
    },
  ];
   
  function NavList() {
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 ">
        {navListItems.map(({ label, icon } : NavItem, ) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="font-medium text-blue-gray-500"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              <span className="text-gray-900"> {label}</span>
            </MenuItem>
          </Typography>
        ))}
      </ul>
    );
  }
   
  export function ComplexNavbar() {
   
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false),
      );
    }, []);
   
    return (
      <Navbar className="flex flex-col p-2 m-42 w-64 m-5">
        <div className="flex flex-col relative mx-auto flex  items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <NavList />
          </div>
   
        </div>
      </Navbar>
    );
  }

export default ComplexNavbar;