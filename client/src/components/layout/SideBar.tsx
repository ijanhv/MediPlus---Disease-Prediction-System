import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
// {dasborad icon from heroicons}
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navLinks: SidebarLink[] = [
 
  {
    title: "Predict",
    path: "predict",
    icon: "xyz",
  },
  {
    title: "Doctors Near Me",
    path: "doctors-near",
    icon: "xyz",
  },
  {
    title: "Search Tablet",
    path: "tablets",
    icon: "xyz",
  },
  {
    title: "Chatbot",
    path: "chatbot",
    icon: "xyz",
  },
  {
    title: "Symptoms",
    path: "symptom-checker",
    icon: "xyz",
  },
];
const SideBar = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string>("");
  // const [selectedItem, setSelectedItem] = useState<string>(
  //   '/' + router.pathname.split('/')[0]
  // );

  const handleItemClick = (link: SidebarLink) => {
    setSelectedItem(link.title);
    router.push(`/${link.path}`);
  };

  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath === "/doctors-near") {
      setSelectedItem("Doctors Near Me");
    } else if (currentPath === "/predict") {
      setSelectedItem("Predict");
    } else if (currentPath === "/tablets") {
      setSelectedItem("Search Tablet");
    } else if (currentPath === "/profile") {
      setSelectedItem("Profile");
    } else if (currentPath === "/symptom") {
      setSelectedItem("Symptom Checker");
    } else if (currentPath === "/symptom-checker") {
      setSelectedItem("Symptoms");
    } else {
      setSelectedItem("Dashboard");
    }
  }, [router.pathname]);

  console.log(router.pathname);
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      <div className="sm:bg-indigo-700 sm:w-80 pr-6 flex flex-col">
        <div className="flex mx-1">
          <button
            onClick={toggleNavLinks}
            className="sm:hidden text-xl font-semibold"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <h1 className="text-3xl  font-bold sm:mx-10 mx-3 my-4 text-left">
            <span className="sm:text-white ">Medi</span>
            <span className="sm:text-red-300 text-red-500">Plus</span>
          </h1>
        </div>

        <div className="hidden md:block overflow-y-auto mt-2 ">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className={`flex space-x-3 px-3 py-2 cursor-pointer 
        ${
          selectedItem === link.title
            ? "bg-gray-100 text-indigo-800"
            : "text-white"
        }
        hover:bg-white hover:text-indigo-800 m-2`}
              onClick={() => handleItemClick(link)}
            >
              <p className="text-sm text-left font-semibold">{link.title}</p>
            </div>
          ))}
        </div>

        {showNavLinks && (
          <div className="md:hidden overflow-y-auto transition-all max-h-full min-w-full duration-200 bg-slate-200 ease-in-out ">
            {navLinks.map((link) => (
              <div
                key={link.path}
                onClick={() => {
                  // handleLinkNavigation(link);
                  toggleNavLinks();
                }}
                className={`flex  space-x-3 px-3 py-2 cursor-pointer 
              ${
                link.path === selectedItem
                  ? "bg-indigo-800 text-white"
                  : "bg-slate-200"
              }
              hover:bg-indigo-800 hover:text-white m-2`}
              >
                <Link
                  href={`${link.path}`}
                  className="text-sm text-left font-semibold"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
