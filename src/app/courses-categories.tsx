"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import { TypographyProps } from "@material-tailwind/react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

// Define types for categories
// Updated Category interface

interface Category {
  img: string;
  icon: ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
}

// Categories with icons
const CATEGORIES: Category[] = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon, // No cast needed if interface is updated
    title: "Original Ideas",
    desc: "Ignite innovation and unlock new possibilities with our creative idea catalysts and transformative concepts.",
  },
  {
    img: "/image/blogs/blog-12.png",
    icon: PuzzlePieceIcon,
    title: "Man Power Requirement",
    desc: "Unlock Your Potential with Our Manpower Requirement Services",
  },
  {
    img: "/image/blogs/blog-10.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Company Franchise",
    desc: "Join the Journey to Unlock Unlimited Growth with Our Extraordinary Franchise Opportunities",
  },
  {
    img: "/image/blogs/blog-17.png",
    icon: MicrophoneIcon,
    title: "Remote and Cloud Services",
    desc: "Seamless Connectivity, Limitless Possibilities to Embrace the Power of Remote and Cloud Services",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        {/* Explicitly specifying TypographyProps if needed */}
        <Typography variant="h2" color="blue-gray" className="my-3">
          What We Do
        </Typography>
        {/* Optional Subtitle (uncomment if needed) */}
        {/* <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </Typography> */}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            {/* <Typography color="white" className="text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography> */}
            <Typography variant="h4" className="mt-9" color="white">
              Got a New Project ?
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Contact us for the seamless services
            </Typography>
            <a href="#contact">
            <Button size="sm" color="white">
              Contact Now
            </Button>
            </a>
            
          </CardBody>
        </Card>

        {/* Category Cards Section */}
        <div className="col-span-1 flex flex-col gap-6 lg:col-span-2">
          {CATEGORIES.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
