import HoverCard from "@/components/ui/animation/hoverCard";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";

type CardProps = {
  title: string;
  skills: string[];
  platform: string;
  description: string;
};

function Card(props: CardProps) {
  return (
    <div className="w-[300px] h-[400px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
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
                <span className="text-xl font-medium uppercase">
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
          <div className="w-8 h-8 mt-auto flex items-center justify-center rounded-full backdrop-blur-lg bg-gray-50/20 cursor-pointer transition-all duration-300 hover:bg-gray-50/30">
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
    skills: [
      "Community project",
      "Participate in bug fixing and new feature development",
      "Technologies used include: ReactJs, styled components and MUI.",
    ],
    title: "giotmauvang",
    platform: "web",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Technologies used include: Framework NextJS and MUI.",
    ],
    title: "EVNHCMC",
    platform: "web",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "The project is developed on a large scale, developed and worked on in Singapore. The project is still being implemented.",
    ],
    title: "E-commerce",
    platform: "web",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Company project",
      "Project development and maintenance",
      "The project is a website introducing the company and some features about consulting and human resources.",
    ],
    title: "Web Company",
    platform: "web",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Developed in parallel with Viettel Post application for orders. Using components provided by Zalo Mini App.",
    ],
    title: "Viettel Post",
    platform: "Zalo Mini App",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Outsourcing projects involve selling and developing on components provided by zalo mini app.",
    ],
    title: "kingSmart",
    platform: "Zalo Mini App",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Outsourcing projects involve selling and developing on components provided by zalo mini app.",
    ],
    title: "Cacafly",
    platform: "Zalo Mini App",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
  {
    skills: [
      "Project development and maintenance",
      "Cohesive Music is an online platform that allows users to listen to, download, or share songs, albums, and playlists from a variety of genres.",
    ],
    title: "Cohesive Music",
    platform: "web",
    description:
      "Giot Mau Vang is a non-profit platform dedicated to promoting voluntary blood donation in Vietnam, connecting donors, hospitals, and communities to save lives.",
  },
];

function Projects() {
  return (
    <div className="w-full transition-all duration-[2.5s] bg-dark overflow-hidden">
      <article className="max-w-[1440px] w-full m-auto gap-20 h-full flex flex-col items-center py-20">
        <Typography.Headings className="dark:text-white uppercase text-[92px]">
          Projects
        </Typography.Headings>
        <Box className="flex flex-wrap gap-20 w-full items-center justify-center">
          {data.map((i) => (
            <Card key={i.title} {...i} />
          ))}
        </Box>
      </article>
    </div>
  );
}

export default Projects;
