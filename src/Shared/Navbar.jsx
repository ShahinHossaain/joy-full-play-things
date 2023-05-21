import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaBars } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, auth } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
  };

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-green-200 py-3">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Logo"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
                  <ActiveLink to="/">Home</ActiveLink>
                  <ActiveLink to="/allToys">All Toys</ActiveLink>
                  <ActiveLink to="/myToys">My Toys</ActiveLink>
                  <ActiveLink to="/addToy">Add a Toy</ActiveLink>
                  <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
              </div>
              {user ? (
                <div className="sm:ml-6 z-10 sm:flex sm:items-center">
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } block px-4 py-2 text-sm text-gray-700`}
                                onClick={handleSignOut}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <p className="md:hidden">Shahin</p>
                </div>
              ) : (
                <Link to="/login">
                  <button className="btn">login</button>
                </Link>
              )}
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="bg-gray-800 p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
              <ActiveLink to="/addToy">Add a Toy</ActiveLink>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
