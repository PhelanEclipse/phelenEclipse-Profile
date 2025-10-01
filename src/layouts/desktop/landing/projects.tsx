import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";

type CardProps = {
  title: string;
  skills: string[];
};

function Card(props: CardProps) {
  return (
    <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-white group">
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-[#6554b3] transition-all duration-500"></div>
      <div className="absolute flex text-xl items-end justify-end overflow-hidden peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-[#6554b3] transition-all duration-500">
        <div className="w-60 min-w-60 h-80 flex flex-col justify-center px-6 gap-4 dark:text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Typography.Headings type="h4" className="dark:text-white !text-2xl">
            {props.title}
          </Typography.Headings>
          <ul className="list-disc text-sm list-inside leading-6">
            {props.skills.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        <Typography.Headings type="h4" className="dark:text-dark">
          {props.title}
        </Typography.Headings>
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
