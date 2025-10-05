import HoverCard from "@/components/ui/animation/hoverCard";
import { Scroll } from "@/components/ui/animation/scroll";
import Menu from "@/components/ui/dataDisplay/menu";
import MenuItem from "@/components/ui/dataDisplay/menuItem";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";
import { useVisible } from "@/hooks/useVisible";
import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Fragment } from "react/jsx-runtime";

type CardProps = {
  title: string;
  platform: string;
  description: string;
  onClick?: () => void;
  overview?: string;
  role?: string;
  stack?: string;
  href?: string;
  childrenProjects?: { name: string; description: string }[];
};

function Card(props: CardProps) {
  return (
    <div className="w-[300px] cardProjects h-[400px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
      <div className="w-full h-full p-1 absolute bg-purple-400">
        <div className="w-full h-full rounded-xl rounded-tr-[100px] rounded-br-[40px] bg-[#222]"></div>
      </div>

      <div className="w-full h-full flex items-center justify-center relative backdrop-blur-lg rounded-2xl">
        <div
          className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-orange-300 animate-spin"
          style={{
            animationDuration: "12s",
          }}
        ></div>
      </div>

      <div className="w-full h-full p-2 gap-2 flex justify-between absolute inset-0">
        <Box className="p-2 pt-3 pb-1.5 w-full rounded-xl overflow-hidden">
          <HoverCard className="w-full h-full rounded-xl overflow-hidden">
            <div className="w-full h-full flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono p-4">
              <Typography.Headings type="h3">
                <span className="text-xl font-medium uppercase line-clamp-1 w-full">
                  {props.title}
                </span>
              </Typography.Headings>
              <p className="py-4">
                <span className="text-xs text-white">{props.description}</span>
              </p>
              <div className="w-full mt-auto flex items-center justify-center">
                <span className="text-xs text-gray-400 uppercase">
                  {props.platform}
                </span>
              </div>
            </div>
          </HoverCard>
        </Box>
        <div className="h-full pt-2 flex flex-col items-end text-white/50">
          <p className="text-center text-wrap">
            <span className="text-[14px] text-white leading-[12px] uppercase font-medium">
              2025
            </span>
          </p>
          <div
            aria-hidden
            onClick={props.onClick}
            className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30"
          >
            <span className="font-serif text-white/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 12 12"
                className="w-4 h-4"
              >
                <g fill="none">
                  <path
                    d="M4.646 2.146a.5.5 0 0 0 0 .708L7.793 6L4.646 9.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const data: CardProps[] = [
  {
    overview: `Giot Mau Vang (meaning Golden Drop of Blood) is a nationwide platform that connects blood donors, organizations, and hospitals to manage blood donation events efficiently. It helps users register for donation schedules, find nearby donation points, and participate in community events promoting blood donation.`,
    title: "Giot Mau Vang – Blood Donation Management Platform",
    platform: "Website",
    href: "https://giotmauvang.org.vn/",
    stack: "React, JavaScript, RESTful API, Sass, Redux Toolkit",
    role: "Front-end Developer — built responsive and accessible user interfaces, optimized performance, and collaborated with backend APIs to handle registration, event listings, and real-time updates.",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    title: "EVNHCMC",
    platform: "Website",
    overview:
      "Web360 is a public web portal developed for Ho Chi Minh City Power Corporation (EVNHCMC). It provides a 360° view of power services, customer interactions, infrastructure updates, and smart energy insights. Users can access information about their accounts, view service notices, and receive alerts about outages or maintenance.",
    href: "https://web360.evnhcmc.vn/",
    role: "Front-end Developer — responsible for building responsive interfaces, integrating APIs, optimizing UI performance, and ensuring cross-browser and cross-device compatibility.",
    stack:
      "NextJs, RESTful API, Redux Toolkit, Sass, TanStack Query and Motion animation",
    description:
      "A modern information platform for Ho Chi Minh City Power Corporation. I was responsible for developing the front-end interface, ensuring smooth navigation, responsive layouts, and data visualization across modules.",
  },
  {
    title: "Locstoc Commerce Ecosystem (International Project)",
    platform: "Website",
    stack:
      "React, TypeScript, TailwindCSS, Redux Toolkit, RESTful APIs, TanStack, NextJs and React kendo UI",
    overview:
      "Locstoc is an international e-commerce ecosystem that connects brands, retailers, and customers through multiple specialized web platforms. The system includes:",
    childrenProjects: [
      {
        description:
          "customer-facing e-commerce site for product discovery and purchase.",
        name: "O2O Portal",
      },
      {
        description:
          "tools for retailers to manage orders, promotions, and inventory.",
        name: "Retailer Dashboard (LS)",
      },
      {
        description:
          "management interface for brands to oversee campaigns and performance.",
        name: "Brand Platform (LSSS)",
      },
      {
        description:
          "internal management for data analytics, content, and system configuration.",
        name: "Backoffice System",
      },
    ],
    role: "Front-end Developer — built responsive UIs, Vite, integrated RESTful APIs, optimized component reusability, and ensured consistent UX across all 4 platforms.",
    description:
      "Front-end developer for an international e-commerce system with 4 web apps: O2O (customers), Retailer, Brand, and Backoffice. Focused on UI consistency, API integration, and scalability.Tech: React, TypeScript, TailwindCSS, Redux Toolkit",
  },
  {
    title: "IntelIn – Intelligence & Innovation",
    platform: "Website",
    href: "https://intelin.vn/",
    stack: "NestJS, EJS, TypeScript, TailwindCSS, RESTful API",
    overview:
      "IntelIn is a Vietnamese technology company providing smart digital solutions for enterprises in finance, healthcare, and retail. The website serves as the company’s official platform to present its services, technology solutions, and digital transformation initiatives.",
    role: "Full-stack Developer — built and deployed the website using NestJS for API and server-side rendering. Handled backend logic, data fetching, and API architecture to support dynamic content delivery and SEO optimization.",
    description:
      "Front-end developer at a Vietnamese tech company specializing in smart digital solutions for businesses in finance, healthcare, and retail. Contributed to building responsive web interfaces and optimizing user experience for enterprise platforms.",
  },
  {
    title: "Viettel Post Mini App",
    platform: "Zalo Mini App",
    overview:
      "A Zalo Mini App developed for Viettel Post to allow users to track parcels, manage deliveries, and access postal services directly inside Zalo. The project aimed to improve convenience and speed for customers using Viettel Post’s digital ecosystem.",
    role: "Front-end Developer — built and maintained UI components using Zalo Mini App SDK, handled API integration, and optimized layout and animations for smooth performance across mobile devices.",
    stack: "Zalo Mini App SDK, React, TypeScript, ZMP-UI, RESTful API",
    description:
      "Front-end developer for a Zalo Mini App built for Viettel Post, enabling users to track parcels, manage orders, and access delivery services directly within Zalo. Focused on smooth UI/UX and integration with Zalo APIs for real-time updates.",
  },
  {
    title: "kingSmart",
    platform: "Zalo Mini App",
    overview:
      "An e-commerce Zalo Mini App designed to help small businesses and stores sell products, manage orders, and connect with customers directly within the Zalo platform. The app supports product display, shopping cart flow, and payment integration for seamless transactions.",
    role: "Front-end Developer — responsible for building the user interface, integrating with Zalo Mini App SDK, and implementing features like product listing, checkout flow, and API-based data management.",
    stack: "Zalo Mini App SDK, React, TypeScript, ZMP-UI, RESTful API",
    description:
      "Front-end developer for a Zalo Mini App designed for online sales and product management. The app allows users to browse items, manage carts, and complete in-app purchases with seamless UX and responsive design.",
  },
  {
    title: "CacaFly – Landing Page & Event Mini Game",
    platform: "Zalo Mini App",
    overview:
      "A creative marketing project for CacaFly, combining a dynamic landing page and an interactive mini game for event campaigns. The website was designed to increase user engagement through animations, gamification, and responsive layouts.",
    role: "Front-end Developer — built interactive UI using React and CSS animations, integrated event APIs, and optimized performance for smooth gameplay and responsive design across devices.",
    stack: "React, TypeScript, TailwindCSS, CSS Animations, RESTful API",
    description:
      "As a front-end developer, I built a custom landing page for CacaFly to showcase campaigns and engage users. I also developed an interactive mini game module used during their marketing events, with smooth animations, real-time interaction, and integration with backend APIs.",
  },
  {
    title: "CohesiveMusic – Music Streaming Platform",
    overview:
      "A personal full-stack project that allows users to listen to free music online, manage playlists, and explore tracks seamlessly. The system includes:",
    childrenProjects: [
      {
        description:
          "responsive music player with playback, playlists, and search.",
        name: "User Web",
      },
      {
        description: "dashboard for managing songs, artists, and categories.",
        name: "Admin Web",
      },
      {
        description:
          "RESTful APIs handling authentication, storage, and media streaming.",
        name: "Backend Services",
      },
    ],
    role: "ull-stack Developer — built both frontend and backend from scratch, integrated APIs, handled authentication logic, and deployed all services to production environments.",
    platform: "Website",
    stack: "React, TypeScript, ExpressJS, MongoDB, Cloudinary, TailwindCSS",
    href: "https://cohesivemusic.vercel.app/",
    description:
      "A personal full-stack project offering free online music. Includes user & admin web with shared backend services.",
  },
];

function Projects() {
  const { handler, isVisible } = useVisible({
    data: { initialVisible: false },
  });
  const [selectedProject, setSelectedProject] = useState<
    CardProps | undefined
  >();

  return (
    <Fragment>
      <Scroll.ByElement
        idElementScroll="landingPage"
        id="projects"
        animation="projects-active"
      >
        <div
          id="projects"
          className="w-full projects transition-all duration-[2.5s] bg-dark overflow-hidden"
        >
          <article className="max-w-[1440px] w-full m-auto xl:gap-20 lg:gap-10 max-lg:gap-6 h-full flex flex-col items-center xl:py-20 lg:py-10 max-lg:py-6">
            <Box className="xl:h-[138px] lg:h-[96px] max-lg:h-[72px] overflow-hidden flex items-end justify-center">
              <Typography.Headings className="dark:text-white text-project uppercase xl:text-[92px] lg:text-[64px] max-lg:text-[48px]">
                Projects
              </Typography.Headings>
            </Box>
            <Box className="flex flex-wrap gap-20 w-full items-center justify-center">
              {data.map((i) => (
                <Card
                  onClick={() => {
                    setSelectedProject(i);
                    handler.onOpen();
                  }}
                  key={i.title}
                  {...i}
                />
              ))}
            </Box>
          </article>
        </div>
      </Scroll.ByElement>
      <Box
        className={`fixed top-0 left-0 projectsDetails w-full h-full bg-dark/10 backdrop-blur-sm transition-all z-10 duration-500 ${
          isVisible ? "active" : ""
        }`}
      >
        <Box className="h-full w-full flex items-center justify-center">
          <Box className="relative w-[700px] p-2 bg-gradient-to-tr from-purple-500 to-orange-300 rounded-xl">
            <Box
              aria-hidden
              onClick={handler.onClose}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <IoMdClose className="text-2xl" />
            </Box>
            <Box className="text-white z-10 py-2 px-3 rounded-2xl bg-[#222] rounded-tr-[100px] h-full">
              <Box className="flex flex-col gap-4">
                <Typography.Headings type="h3">
                  <span className="text-2xl font-medium uppercase w-full">
                    {selectedProject?.title}
                  </span>
                </Typography.Headings>
                <Box className="flex items-center gap-2 capitalize">
                  {selectedProject?.href && (
                    <a
                      target="_blank"
                      href={selectedProject?.href}
                      className="flex items-center gap-2 lowercase underline hover:underline"
                    >
                      {selectedProject?.platform}: {selectedProject?.href}
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </Box>
              </Box>
              <Box className="h-[400px] overflow-y-auto flex flex-col gap-4 pt-4">
                <Box className="flex flex-col gap-2">
                  <Typography.Headings
                    type="h4"
                    className="bg-gradient-to-tr from-purple-500 to-orange-300 text-transparent bg-clip-text"
                  >
                    <span className="text-lg font-medium uppercase w-full">
                      Overview
                    </span>
                  </Typography.Headings>
                  <Typography.Paragraphs className="text-white text-base leading-6 font-light">
                    {selectedProject?.overview}
                  </Typography.Paragraphs>
                  {selectedProject?.childrenProjects && (
                    <Box>
                      <Menu className="list-disc">
                        {selectedProject?.childrenProjects?.map((i) => (
                          <MenuItem className="font-light" key={i.name}>
                            - <span className="font-medium">{i.name}:</span>{" "}
                            {i.description}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                  )}
                </Box>
                <Box className="flex flex-col gap-2">
                  <Typography.Headings
                    type="h4"
                    className="bg-gradient-to-tr from-purple-500 to-orange-300 text-transparent bg-clip-text"
                  >
                    <span className="text-lg font-medium uppercase w-full">
                      Role
                    </span>
                  </Typography.Headings>
                  <Typography.Paragraphs className="text-white text-base leading-6 font-light">
                    {selectedProject?.role}
                  </Typography.Paragraphs>
                </Box>
                <Box className="flex flex-col gap-2">
                  <Typography.Headings
                    type="h4"
                    className="bg-gradient-to-tr from-purple-500 to-orange-300 text-transparent bg-clip-text"
                  >
                    <span className="text-lg font-medium uppercase w-full">
                      Stacks
                    </span>
                  </Typography.Headings>
                  <Typography.Paragraphs className="text-white text-base leading-6 font-light">
                    {selectedProject?.stack}
                  </Typography.Paragraphs>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Projects;
