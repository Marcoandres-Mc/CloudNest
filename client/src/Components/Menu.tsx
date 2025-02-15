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
import { useState } from "react";
import { Link } from "react-router-dom";

 
   type NavItem = {
    label: string;
    icon?: React.ElementType;
    url: string;
    };


   
  // nav list component
  const navListItems:NavItem[] = [
    {
      label:"Documentos",
      icon: CubeTransparentIcon,
      url: "/home/documentos"
    },
    {
      label:"Favoritos",
      icon: UserCircleIcon,
      url: "/home/favoritos"
    },
    {
      label:"Fotos",
      icon: CodeBracketSquareIcon,
      url: "/home/fotos"
    },
    {
      label:"Papelera",
      icon: Square3Stack3DIcon,
      url: "/home/papelera"
    }
  ]

  
   
  function NavList() {
    const [elementos, setElementos] = useState<NavItem[]>(navListItems);
    return (
      <ul className="mt-2 mb-4 flex flex-col gap-2 ">
        <Button variant="outlined" className="mb-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          Subir Archivo
          <input
            id="file-upload"
            type="file"
            className="hidden"
          />
        </label>
      </Button>
        {elementos.map(({ label, icon, url } : NavItem, ) => (
          <Link to={url}>
            <Typography
              key={label}
              as="a"
              href="#"
              variant="small"
              color="gray"
              className="font-medium text-blue-gray-500"
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <div>

              </div>
                {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                <span className="text-gray-900"> {label}</span>
              </MenuItem>
            </Typography>
          </Link>
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
      <Navbar className="flex flex-col p-2 m-42 w-48 m-5">
        <div className="flex flex-col relative mx-auto flex  items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <NavList />
          </div>
   
        </div>
      </Navbar>
    );
  }

export default ComplexNavbar;