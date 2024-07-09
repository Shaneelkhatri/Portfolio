import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "BlackJack",
    description:
      "Blackjack game is made using Java including the Apache Derby database and is fully playable with a currency system.",
    image: "/blackjack.png",
    githubLink: "https://github.com/Shaneelkhatri/BlackJack-Game",
    
  },
  {
    name: "Status Posting System",
    description:
      "This system was made using SQL Database, PHP, HTML and CSS and it allows you to post status's and look at any of them by searching it up.",
    image: "/statusform.png",
    githubLink: "https://github.com/Shaneelkhatri/Status-Posting-System",
  },
  {
    name: "Taxi Booking",
    description:
      "This taxi booking allows customers to enter their details with all the pickup and drop off information with date and time to be stored in the sql database. To which the drivers can assign themselves taxis from their side.",
    image: "/taxibooking.png",
    githubLink: "https://github.com/Shaneelkhatri/Taxi-Booking",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  {project.githubLink && (
                    <Link href={project.githubLink} legacyBehavior>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-500 underline"
                      >
                        View on GitHub
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
