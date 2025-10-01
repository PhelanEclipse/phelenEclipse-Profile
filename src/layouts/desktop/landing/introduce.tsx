import { Loader } from "@/components/ui/dataDisplay/loader";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";

function Introduce() {
  return (
    <Box className="max-w-[1440px] m-auto text-white flex flex-col items-center justify-between py-20">
      <Box className="w-full text-center">
        <Typography.Headings
          type="h3"
          className="uppercase text-6xl leading-[80px]"
        >
          Hi there, <br />
          <span className="text-[94px] leading-[94px] ">
            I'm FRONT-end DEVELOPER
          </span>
        </Typography.Headings>
      </Box>
      <Box className="flex items-center justify-center">
        <Loader.Astronaut />
      </Box>
      <Box className="w-full flex flex-col items-center gap-4">
        <Box className="uppercase flex items-center gap-4">
          <Typography.Headings type="h3" className="text-[92px]">
            04{" "}
          </Typography.Headings>
          <Typography.Paragraphs className="dark:text-white text-[20px]">
            years <br /> experience
          </Typography.Paragraphs>
        </Box>
        <Typography.Headings
          type="h3"
          className="uppercase text-[14px] text-center !font-normal leading-8"
        >
          A passionate Frontend Developer with a keen eye for design and a love
          for building interactive, user-friendly web applications.
          <br />I specialize in crafting responsive, high-performance, and
          visually appealing websites using modern web technologies.
        </Typography.Headings>
      </Box>
    </Box>
  );
}

export default Introduce;
