import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";

type CardProps = {
  title: string;
  skills: string[];
};

function Card(props: CardProps) {
  return (
    <div className="w-[200px] h-[300px] relative border border-solid border-white/40 rounded-2xl overflow-hidden">
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

      <div className="w-full h-full p-2 flex justify-between absolute inset-0">
        <div className="w-3/5 p-2 pt-3 pb-1.5 flex flex-col rounded-xl backdrop-blur-lg bg-gray-50/10 text-gray-200 font-medium font-mono">
          <span className="text-xl font-medium">Card</span>
          <span className="text-xs text-gray-400">text</span>
          <div className="w-full mt-auto flex items-center justify-center">
            <span className="text-xs text-gray-400">2025</span>
          </div>
        </div>
        <div className="h-full pt-2 flex flex-col items-end text-white/50">
          <span className="text-[10px] leading-[12px]">UIverse</span>
          <span className="text-[10px] leading-[13px]">card</span>
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
    title: "Gold Blood",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Technologies used include: Framework NextJS and MUI.",
    ],
    title: "EVNHCMC",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "The project is developed on a large scale, developed and worked on in Singapore. The project is still being implemented.",
    ],
    title: "E-commerce",
  },
  {
    skills: [
      "Company project",
      "Project development and maintenance",
      "The project is a website introducing the company and some features about consulting and human resources.",
    ],
    title: "Web Company",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Developed in parallel with Viettel Post application for orders. Using components provided by Zalo Mini App.",
    ],
    title: "Viettel Post",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Outsourcing projects involve selling and developing on components provided by zalo mini app.",
    ],
    title: "kingSmart",
  },
  {
    skills: [
      "Outsourcing project",
      "Project development and maintenance",
      "Outsourcing projects involve selling and developing on components provided by zalo mini app.",
    ],
    title: "Cacafly",
  },
  {
    skills: [
      "Project development and maintenance",
      "Cohesive Music is an online platform that allows users to listen to, download, or share songs, albums, and playlists from a variety of genres.",
    ],
    title: "Cohesive Music",
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
