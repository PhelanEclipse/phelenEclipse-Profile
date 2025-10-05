import { Scroll } from "@/components/ui/animation/scroll";
import { Loader } from "@/components/ui/dataDisplay/loader";
import { Typography } from "@/components/ui/dataDisplay/typography";
import Box from "@/components/ui/layout/box";
import type { ReactNode } from "react";
import { GoDotFill } from "react-icons/go";

type ProcessWorkProps = {
  children: ReactNode;
  timeStart: string;
  timeEnd: string;
  companyName: string;
};

const ProcessWork = (props: ProcessWorkProps) => {
  return (
    <div className="lg:px-10">
      <div className="text-white xl:gap-14 lg:gap-0 xl:divide-x min-w-fit grid xl:grid-cols-2 lg:grid-cols-1 relative">
        <section className="xl:py-7 lg:py-10 max-lg:py-10 company transition-all duration-[2s] relative flex flex-col gap-2 text-nowrap text-2xl w-full xl:pr-14 lg:pr-0 lg:border-b max-lg:border-b xl:border-none">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold uppercase gap-3 xl:text-end lg:text-start">
              {props.companyName}
            </p>
          </div>
          <div className="flex items-center xl:justify-end lg:justify-start gap-1 uppercase text-[14px]">
            <p className="italic">{props.timeStart}</p>
            <GoDotFill />
            <p className="italic">{props.timeEnd}</p>
          </div>
        </section>
        <div className="absolute xl:m-auto left-0 right-0 xl:top-5 lg:top-[120px] max-lg:top-[120px] size-14 translate-x-7 rounded-full bg-dark flex items-center justify-center border-dark border-4">
          <Loader.LoudBull />
        </div>
        <article className="xl:py-7 lg:py-10 max-lg:pt-10">
          {props.children}
        </article>
      </div>
    </div>
  );
};

function Astronaut() {
  return (
    <Box>
      <div className="box-of-star1">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star2">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star3">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div className="box-of-star4">
        <div className="star star-position1"></div>
        <div className="star star-position2"></div>
        <div className="star star-position3"></div>
        <div className="star star-position4"></div>
        <div className="star star-position5"></div>
        <div className="star star-position6"></div>
        <div className="star star-position7"></div>
      </div>
      <div data-js="astro" className="astronaut">
        <div className="head"></div>
        <div className="arm arm-left"></div>
        <div className="arm arm-right"></div>
        <div className="body">
          <div className="panel"></div>
        </div>
        <div className="leg leg-left"></div>
        <div className="leg leg-right"></div>
        <div className="schoolbag"></div>
      </div>
    </Box>
  );
}
function Work() {
  return (
    <Scroll.ByElement
      idElementScroll="landingPage"
      id="experiences"
      animation="experiences-active"
    >
      <div
        id="experiences"
        className="w-full overflow-hidden transition-all relative experiences duration-[2.5s]"
      >
        <div className="evn">
          <div className="space-environment">
            <div className="stars-container">
              <div className="stars stars-near"></div>
              <div className="stars stars-mid"></div>
              <div className="stars stars-far"></div>
            </div>

            <div className="planets">
              <div className="planet planet-1">
                <div className="planet-ring"></div>
                <div className="planet-crater"></div>
              </div>
              <div className="planet planet-2">
                <div className="planet-atmosphere"></div>
              </div>
            </div>

            <div className="meteors">
              <div className="meteor meteor-1"></div>
              <div className="meteor meteor-2"></div>
              <div className="meteor meteor-3"></div>
            </div>

            <div className="orbit-paths">
              <div className="orbit-path path-1"></div>
              <div className="orbit-path path-2"></div>
              <div className="orbit-path path-3"></div>
            </div>
          </div>
        </div>
        <Box className="containerBallBottom absolute bottom-40 left-40 transition-all duration-1000 lg:opacity-0 xl:opacity-100 max-lg:opacity-0">
          <Box className="size-80 ballBottom transition-all duration-500 rounded-full scale-125">
            <Astronaut />
          </Box>
        </Box>
        <article className="max-w-[1440px] w-full m-auto xl:gap-20 lg:gap-0 h-full flex flex-col items-center justify-between xl:py-20 lg:py-10 max-lg:py-10 relative z-10">
          <Box className="xl:h-[138px] lg:h-[96px] max-lg:h-[72px] flex items-end max-lg:m-auto max-lg:w-[768px] max-lg:px-10">
            <Box className="text-work overflow-hidden">
              <Typography.Headings className="dark:text-white uppercase transition-all duration-1000 xl:text-[92px] lg:text-[64px] max-lg:text-[48px]">
                My Work Experience
              </Typography.Headings>
            </Box>
          </Box>
          <div className="flex flex-col gap-20 h-full max-lg:max-w-[768px] max-lg:px-10">
            <ProcessWork
              companyName="South Telecom (Intelin branch)"
              timeEnd="The current"
              timeStart="July, 2022"
            >
              <div className="xl:pl-32 lg:pl-0 position duration-[2s] transition-all flex flex-col gap-6">
                <p className="text-2xl font-bold uppercase xl:-translate-x-5">
                  Web developer
                </p>
                <ul className="list-disc flex flex-col gap-4 font-light leading-7 lg:pl-5 xl:pl-0">
                  <li>
                    <p>
                      Developed a <span className="font-bold">RESTful API</span>{" "}
                      that integrated with a third-party service, allowing for
                      seamless data synchronization and improved performancejs
                      and <span className="font-bold">Redux</span> that improved
                      user satisfaction{" "}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-bold">RESTful API</span> that
                      integrated with a third-party service, allowing for
                      seamless data synchronization and improved performance
                    </p>
                  </li>
                  <li>
                    <p>
                      Designed and implemented a web application that was
                      compatible with multiple browsers and devices with minimal
                      errors
                    </p>
                  </li>
                  <li>
                    <p>
                      Professional in creating animation with{" "}
                      <span className="font-bold">CSS (BEM)</span>, using many{" "}
                      <span className="font-bold">UI libraries</span> such as{" "}
                      <span className="font-bold">
                        tailwind, Mui, React kendo ...
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Get exposure to professional projects that are trusted by
                      many people such as{" "}
                      <span className="font-bold underline">
                        <a href="https://giotmauvang.org.vn/">
                          giotmauvang (ReactJS)
                        </a>
                      </span>
                      ,{" "}
                      <span className="font-bold underline">
                        <a href="https://web360.evnhcmc.vn/">
                          evnhcmc (Nextjs)
                        </a>
                      </span>
                      ,{" "}
                      <span className="font-bold">
                        kingSmart (Zalo mini app)
                      </span>
                      ,{" "}
                      <span className="font-bold">
                        Viettel Post (Zalo mini app),{" "}
                      </span>
                      <span className="font-bold">
                        Company Web (Nestjs and EJS) and some outsourcing
                        projects on e-commerce
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Under tireless dedication was recognized as{" "}
                      <span className="font-bold">
                        employee of the year (2024)
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </ProcessWork>
          </div>
        </article>
      </div>
    </Scroll.ByElement>
  );
}

export default Work;
