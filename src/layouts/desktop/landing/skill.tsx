import { Scroll } from "@/components/ui/animation/scroll";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";
import type React from "react";
import { DiGhostSmall } from "react-icons/di";
import { FaCss3, FaDocker, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMui, SiNestjs, SiVite } from "react-icons/si";

type CardProps = {
  title: string;
  icon: React.ReactNode;
};

function Card(props: CardProps) {
  return (
    <div className="cardSkills">
      <div className="text-dark relative z-10 flex flex-col items-center justify-center gap-4">
        <div className="text-6xl">{props.icon}</div>
        <Typography.Paragraphs>{props.title}</Typography.Paragraphs>
      </div>
      <div className="bg"></div>
      <div className="blob"></div>
    </div>
  );
}

const data: CardProps[] = [
  {
    icon: <FaReact className="text-6xl" />,
    title: "React",
  },
  {
    icon: <RiNextjsLine className="text-6xl" />,
    title: "Nextjs",
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
  {
    icon: <DiGhostSmall className="text-6xl" />,
    title: "Kendo React",
  },
  {
    icon: <RiTailwindCssFill className="text-6xl" />,
    title: "Tailwind CSS",
  },
  {
    icon: <FaDocker className="text-6xl" />,
    title: "Docker",
  },
  {
    icon: <SiVite className="text-6xl" />,
    title: "Vite",
  },
];

function Skill() {
  return (
    <Scroll.ByElement
      idElementScroll="landingPage"
      id="skill"
      animation="personal-active"
    >
      <div
        id="skill"
        className="w-full experiences transition-all duration-[2.5s] bg-white overflow-hidden relative"
      >
        <article className="max-w-[1440px] w-full m-auto gap-20 h-full flex flex-col items-center py-20">
          <Typography.Headings className="dark:text-dark uppercase text-[92px]">
            Skills
          </Typography.Headings>
          <Box className="flex flex-wrap gap-20 w-full">
            {data.map((i) => {
              return <Card key={i.title} {...i} />;
            })}
          </Box>
        </article>
      </div>
    </Scroll.ByElement>
  );
}

export default Skill;
