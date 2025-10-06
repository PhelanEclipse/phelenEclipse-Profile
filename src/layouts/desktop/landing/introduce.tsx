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
        <Box className="xl:size-96 lg:size-40 ballTop absolute xl:top-20 lg:top-0 xl:left-20 lg:left-0 rounded-full max-lg:opacity-0">
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
        <Box className="containerBallBottom absolute xl:bottom-32 xl:right-16 lg:bottom-32 lg:right-0 transition-all duration-1000 max-lg:opacity-0">
          <Box className="xl:size-40 lg:size-32 ballBottom transition-all duration-500 rounded-full">
            <Box className="-rotate-12">
              <Box className="planetIntroduce" />
            </Box>
          </Box>
        </Box>
        <Box className="max-w-[1440px] relative z-10  m-auto text-white flex flex-col items-center justify-between xl:py-20 lg:py-10 max-lg:py-6">
          <Box className="w-full text-center flex items-center justify-center">
            <Box className="xl:h-[180px] lg:h-[165px] md:h-[84px] max-md:h-[84px] flex flex-col justify-end">
              <Box className="text-highlight flex flex-col">
                <Typography.Headings
                  type="h3"
                  className="uppercase xl:text-[60px] lg:text-[64px] leading-[60px] text-center max-lg:text-[48px]"
                >
                  Hi there,
                </Typography.Headings>
                <Typography.Headings
                  type="h3"
                  className="uppercase xl:text-[94px] lg:text-[64px] text-highlight"
                >
                  I'm FRONT-end DEVELOPER
                </Typography.Headings>
              </Box>
            </Box>
          </Box>
          <Box className="flex items-center justify-center">
            <Loader.Astronaut />
          </Box>
          <Box className="w-full flex flex-col items-center gap-4">
            <Box className="lg:h-[138px] md:h-[72px] max-md:h-[72px] flex items-end">
              <Box className="uppercase flex items-center gap-4 text-experience">
                <Typography.Headings
                  type="h3"
                  className="lg:text-[92px] max-lg:text-[48px] max-md:text-[48px]"
                >
                  04{" "}
                </Typography.Headings>
                <Typography.Paragraphs className="dark:text-white text-[20px]">
                  years <br /> experience
                </Typography.Paragraphs>
              </Box>
            </Box>
            <Box className="xl:h-[64px] md:h-[128px] max-md:h-[192px] max-lg:w-[768px] md:px-10 flex items-end max-md:w-[375px]">
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
