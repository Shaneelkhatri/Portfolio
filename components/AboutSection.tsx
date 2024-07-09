import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "C++" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Java" },
  { skill: "Photoshop" },
  { skill: "Illustrator" },
  { skill: "InDesign" },
  { skill: "Lightroom" },
  { skill: "Design" },
  { skill: "Web Development" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Shaneel Khatri and I am a{" "}
              <span className="font-bold">highly ambitious</span>,
              <span className="font-bold">self-motivated</span>, and
              <span className="font-bold">driven</span> in Network and Cyber Security.
            </p>
            <br />
            <p>
              I am a fourth-year university student studying towards a Bachelor of Computer and Information Sciences majoring
              in Cyber and Network Security and minoring in software development at Auckland University of Technology. I am
              a self-motivated student seeking for an organization where I can combine my academic knowledge of the
              Computer Sciences with the practical application of my skills and experiences. I am driven person, with a great
              attitude and have the ability to pick up skills quickly. I relish the challenge to be part of a busy team where I can
              positively contribute towards the team&apos;s success while developing my knowledge further. 
            </p>
            <br />
            <p>
              I have a passion for technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <h1 className="text-2xl font-bold mb-4">Reach to Me</h1>
              <div className="flex flex-row space-x-4">
                <Link href="https://github.com/Shaneelkhatri" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src="/gh.png" alt="GitHub" width={32} height={32} />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/shaneel-khatri-b97752a9" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src="/Li.png" alt="LinkedIn" width={32} height={32} />
                  </a>
                </Link>
                <Link href="/shaneelkhatricv.pdf" legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image src="/cv.png" alt="PDF" width={32} height={32} />
                  </a>
                </Link>
              </div>
              <div className="mt-8">
                <h1 className="text-2xl font-bold mb-4">Certificates</h1>
                <ul className="list-disc list-inside">
                  <li>
                    <Link href="/ShaneelKhatri-Networks_and_Int-certificate.pdf" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">
                        Cisco Certificate 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ShaneelKhatri-Routing_and_Swit-certificate.pdf" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">
                        Cisco Certificate 2
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
