"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Copyright, Menu } from "lucide-react";
export default function App() {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <div className="flex flex-col">
      <h3 className="mt-8 absolute right-10 lg:left-20  ">
        <span className="font-bold">Tailwind </span>CSS
      </h3>

      <div className="block lg:hidden">
        <DropdownMenu onOpenChange={handleOpenChange}>
          <DropdownMenuTrigger
            className={`flex items-center gap-1 mt-10 ml-10 px-3 py-2 rounded-lg transition-all duration-300 ${
              open ? "bg-gray-100" : "bg-white hover:bg-gray-50 "
            }`}
          >
            <Menu className="w-6 h-6 transition-all duration-300" />
            <ChevronDown
              className={`w-4 h-4 mt-0.5 transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="absolute z-[9999] bg-white shadow-lg border border-gray-200 rounded-md w-55 p-5">
            <DropdownMenuItem onClick={() => setOpen(false)}>
              About
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(false)}>
              Blog
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(false)}>
              Contact
            </DropdownMenuItem>

            <DropdownMenuSeparator className="bg-gray-200 w-44 mx-auto my-2" />

            <DropdownMenuItem onClick={() => setOpen(false)}>
              Action
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(false)}>
              Another action
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(false)}>
              Dropdown Submenu
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(false)}>
              404 page
            </DropdownMenuItem>

            <div className="flex flex-row my-5 ">
              <DropdownMenuItem>
                <Button
                  variant="outline"
                  className="border-gray-300 "
                  onClick={() => setOpen(false)}
                >
                  Log in
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  className="bg-black text-white  "
                  onClick={() => setOpen(false)}
                >
                  Sign up
                </Button>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav className="hidden lg:block relative z-50 mt-8">
        <ul className="flex flex-row gap-4 md:gap-10 justify-center text-sm md:text-base">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Features <ChevronDown className="w-4 h-4 mt-0.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute z-[9999] bg-white shadow-lg border border-gray-200 rounded-md w-48">
                <DropdownMenuItem>Action</DropdownMenuItem>
                <DropdownMenuItem>Another action</DropdownMenuItem>
                <DropdownMenuItem>Dropdown Submenu</DropdownMenuItem>
                <DropdownMenuItem>404 page</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className=" hidden lg:block flex gap-3 flex-col md:flex-row  absolute top-4 md:top-8 right-5 md:right-15">
        <Button variant="outline" className="w-full md:w-auto border-gray-300">
          Log in
        </Button>
        <Button className="bg-black text-white w-full md:w-auto ml-3">
          Sign up
        </Button>
      </div>

      <div className="flex flex-col-reverse lg:flex-row  gap-8 mt-10 px-4 md:px-8 lg:px-20">
        <div className="flex flex-col items-start lg:items-start ml-10">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-4 ">
            <span className="block whitespace-nowrap">Scalable Apps</span>
            <span className="block whitespace-nowrap">with frameworks</span>
          </h1>

          <p className="text-gray-700 mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            voluptate et neque earum iste hic consequatur nulla deserunt
            architecto numquam!
          </p>

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button className="bg-black text-white w-full md:w-auto">
              Download for Free
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 w-full md:w-auto"
            >
              Github Repo
            </Button>
          </div>
        </div>

        <img
          src="/images/hero-source.svg"
          alt="Hero"
          className="w-150 md:self-center lg:w-90 object-contain mb-20  lg:mb-0 flex  xl:w-120  lg:absolute lg:right-15 lg:top-20"
        />
      </div>
      <div className="  mx-10 sm:mx-15  lg:ml-30 mt-30 ">
        <h3 className="text-3xl md:text-4xl font-semibold  ">
          Everything you need to start a website
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10 md:px-8 lg:px-20">
        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">
            Performance Optimization
          </h2>
          <p className="text-gray-600 text-sm">
            Enhancing React apps by minimizing re-renders, lazy loading
            components, and utilizing memoization techniques for improved
            performance and speed.
          </p>
        </section>

        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">Redux State Management</h2>
          <p className="text-gray-600 text-sm">
            Efficiently manage complex application state using Redux Toolkit,
            providing simplified syntax and best practices for developers.
          </p>
        </section>

        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">
            Tailwind Responsive Design
          </h2>
          <p className="text-gray-600 text-sm">
            Create responsive web interfaces effortlessly using Tailwind CSS
            utility classes, ensuring a consistent experience across all device
            sizes.
          </p>
        </section>

        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">
            Vite Production Deployment
          </h2>
          <p className="text-gray-600 text-sm">
            Streamline the deployment process of Vite-based projects to
            production environments with optimized build configurations and
            deployment strategies.
          </p>
        </section>

        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">
            React Library Integration
          </h2>
          <p className="text-gray-600 text-sm">
            Seamlessly add functionality to React applications by integrating
            third-party libraries, ensuring smooth interactions and enhanced
            capabilities.
          </p>
        </section>

        <section className="p-6 hover:shadow-xl/30 rounded-lg">
          <h2 className="font-semibold text-xl mb-2">
            React App Authentication
          </h2>
          <p className="text-gray-600 text-sm">
            Secure React applications with robust authentication mechanisms,
            using libraries like Firebase, Auth0, or custom JWT-based solutions.
          </p>
        </section>
      </div>

      <h5 className="text-center mt-16 text-lg font-semibold">
        Works with your technologies
      </h5>
      <ul className="flex flex-wrap justify-center gap-8 mt-6">
        <li>
          <img
            src="/images/js.png"
            alt="JS"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
        <li>
          <img
            src="/images/ts.png"
            alt="TS"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
        <li>
          <img
            src="/images/react.png"
            alt="React"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
        <li>
          <img
            src="/images/redux.png"
            alt="Redux"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
        <li>
          <img
            src="/images/tailwind.png"
            alt="Tailwind"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
        <li>
          <img
            src="/images/nextjs.png"
            alt="NextJS"
            className="w-12 md:w-16 hover:scale-110 transition"
          />
        </li>
      </ul>

      <div className="bg-black  max-w-220 lg:w-220 py-20 mx-10 mt-16 rounded-lg flex flex-col items-center self-center text-center gap-4 p-8">
        <h1 className="text-4xl md:text-6xl text-white">
          Build faster websites
        </h1>
        <p className="text-white mt-4 md:mt-8">
          Pull content from anywhere and serve it fast with Astro's next-gen
          island architecture
        </p>
        <Button className="bg-white mt-6 px-6 py-2">Get Started</Button>
      </div>

      <h3 className="flex items-center justify-center gap-2 mt-16">
        Copyright <Copyright /> 2024. All rights reserved
      </h3>
      <p className="text-center mt-2 mb-20 text-sm">Made by Web3Templates</p>
    </div>
  );
}
