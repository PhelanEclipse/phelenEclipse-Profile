import HoverCard from "@/components/ui/animation/hoverCard";
import { Scroll } from "@/components/ui/animation/scroll";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";
import type React from "react";
import { DiGhostSmall } from "react-icons/di";
import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJira,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiVite,
  SiWebpack,
} from "react-icons/si";

type CardProps = {
  title: string;
  icon: React.ReactNode;
};

function Card(props: CardProps) {
  return (
    <HoverCard className="rounded-lg overflow-hidden cursor-pointer">
      <Box className="flex flex-col bg-white/20 text-white backdrop-blur-sm gap-3 size-36 items-center justify-center">
        {props.icon}
        <Typography.Paragraphs className="text-white font-medium">
          {props.title}
        </Typography.Paragraphs>
      </Box>
    </HoverCard>
  );
}

const dataFront: CardProps[] = [
  {
    icon: <FaReact className="text-6xl" />,
    title: "React",
  },
  {
    icon: <DiGhostSmall className="text-6xl" />,
    title: "Kendo React",
  },
  {
    icon: <RiTailwindCssFill className="text-6xl" />,
    title: "Tailwind CSS",
  },
  {
    icon: <RiNextjsLine className="text-6xl" />,
    title: "Nextjs",
  },
  {
    icon: <IoLogoJavascript className="text-6xl" />,
    title: "JavaScript",
  },
  {
    icon: <FaHtml5 className="text-6xl" />,
    title: "HTML",
  },
  {
    icon: <FaCss3 className="text-6xl" />,
    title: "CSS – BEM",
  },
  {
    icon: <SiMui className="text-6xl" />,
    title: "MUI",
  },
];
const dataExtend: CardProps[] = [
  {
    icon: <FaDocker className="text-6xl" />,
    title: "Docker",
  },
  {
    icon: <SiVite className="text-6xl" />,
    title: "Vite",
  },
  {
    icon: <SiExpress className="text-6xl" />,
    title: "Express",
  },
  {
    icon: <SiNestjs className="text-6xl" />,
    title: "NestJs",
  },
  {
    icon: <SiMongodb className="text-6xl" />,
    title: "Mongodb",
  },
  {
    icon: <SiWebpack className="text-6xl" />,
    title: "Webpack",
  },
  {
    icon: <FaGithub className="text-6xl" />,
    title: "Github",
  },
  {
    icon: <FaJira className="text-6xl" />,
    title: "Jira",
  },
];

function Skill() {
  return (
    <Scroll.ByElement
      idElementScroll="landingPage"
      id="skill"
      animation="skill-active"
    >
      <div
        id="skill"
        style={{
          background: "radial-gradient(circle at top left, #4facfe, #5f2c82)",
        }}
        className="w-full skill experiences transition-all duration-[2.5s] bg-white overflow-hidden relative"
      >
        <article className="max-w-[1440px] w-full m-auto gap-20 h-full flex flex-col items-center py-20 overflow-hidden">
          <Box className="h-[138px] flex items-end">
            <Box className="text-skill overflow-hidden">
              <Typography.Headings className="dark:text-white uppercase text-[92px]">
                Skills
              </Typography.Headings>
            </Box>
          </Box>
          <Box className="marquee-content">
            {[...dataFront, ...dataFront].map((i) => {
              return <Card key={i.title} {...i} />;
            })}
          </Box>
          <Box className="marquee-content-left">
            {[...dataExtend, ...dataExtend].map((i) => {
              return <Card key={i.title} {...i} />;
            })}
          </Box>
        </article>
      </div>
    </Scroll.ByElement>
  );
}

export default Skill;
