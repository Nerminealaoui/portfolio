import { Archive, Database, Menu, RefreshCw, Server } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavNav() {
  const [isOpen, setIsOpen] = useState(false);
  const localAdmin = localStorage.getItem("admin");

  const LINKS = [
    {
      id: "Link-1",
      name: "Groups",
      iconLink: Server,
      linkTo: localAdmin ? "/groupe" : "/groups",
    },
    {
      id: "Link-2",
      name: "Servers",
      iconLink: Database,
      linkTo: localAdmin ? "/servers" : "/server",
    },
    {
      id: "Link-3",
      name: "Réplications",
      iconLink: RefreshCw,
      linkTo: "/replications",
    },
    {
      id: "Link-4",
      name: "Backup Details",
      iconLink: Archive,
      linkTo: "/backup",
    },
  ];

  return (
    <nav
      className={`sticky top-0 h-fit bg-gray-200 ${
        isOpen ? "basis-[20%]" : "basis-[5%]"
      } items-center pt-5`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 mx-4 rounded-md border text-gray-700 hover:bg-gray-100 transition cursor-pointer"
      >
        <Menu className="h-6 w-6" />
      </button>
      <div className="mt-4 bg-gray-200 w-[100%]">
        {LINKS.map((link) => {
          const IconLink = link.iconLink;
          return (
            <NavLink
              key={link.id}
              to={link.linkTo}
              className="flex items-center p-6 border-b-2 border-gray-300 rounded-lg hover:bg-gray-300 transition"
            >
              <IconLink className={`w-6 h-6 ${isOpen && "mr-5"}`} />
              {isOpen && link.name}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default NavNav;
