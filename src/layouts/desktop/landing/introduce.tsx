import { Scroll } from "@/components/ui/animation/scroll";
import { Loader } from "@/components/ui/dataDisplay/loader";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";

function Introduce() {
  return (
    <Scroll.ByElement
      idElementScroll="landingPage"
      id="introduce"
      animation="active-introduce"
    >
      <Box
        id="introduce"
        className="introduce active-introduce relative overflow-hidden"
      >
        <Box className="size-96 ballTop absolute top-20 left-20 rounded-full">
          <div className="content rotate-45">
            <div className="planet">
              <div className="ring"></div>
              <div className="cover-ring"></div>
              <div className="spots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </Box>
        <Box className="containerBallBottom absolute bottom-32 right-16 transition-all duration-1000">
          <Box className="size-40 ballBottom transition-all duration-500 rounded-full">
            <Box className="-rotate-12">
              <Box className="planetIntroduce" />
            </Box>
          </Box>
        </Box>
        <Box className="max-w-[1440px] relative z-10  m-auto text-white flex flex-col items-center justify-between py-20">
          <Box className="w-full text-center flex items-center justify-center">
            <Box className="h-[180px] flex items-end">
              <Typography.Headings
                type="h3"
                className="uppercase text-6xl leading-[80px] text-highlight"
              >
                Hi there, <br />
                <span className="text-[94px] leading-[94px] ">
                  I'm FRONT-end DEVELOPER
                </span>
              </Typography.Headings>
            </Box>
          </Box>
          <Box className="flex items-center justify-center">
            <Loader.Astronaut />
          </Box>
          <Box className="w-full flex flex-col items-center gap-4">
            <Box className="h-[138px] flex items-end">
              <Box className="uppercase flex items-center gap-4 text-experience">
                <Typography.Headings type="h3" className="text-[92px]">
                  04{" "}
                </Typography.Headings>
                <Typography.Paragraphs className="dark:text-white text-[20px]">
                  years <br /> experience
                </Typography.Paragraphs>
              </Box>
            </Box>
            <Box className="h-[64px] flex items-end">
              <Typography.Headings
                type="h3"
                className="uppercase text-description text-[14px] text-center !font-normal leading-8"
              >
                A passionate Frontend Developer with a keen eye for design and a
                love for building interactive, user-friendly web applications.
                <br />I specialize in crafting responsive, high-performance, and
                visually appealing websites using modern web technologies.
              </Typography.Headings>
            </Box>
          </Box>
        </Box>
      </Box>
    </Scroll.ByElement>
  );
}

export default Introduce;
