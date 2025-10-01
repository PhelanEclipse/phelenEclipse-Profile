import { Loader } from "@/components/ui/dataDisplay/loader";
import { Typography } from "@/components/ui/dataDisplay/typography";
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
    <div className="">
      <div className="text-white gap-14 divide-x min-w-fit grid grid-cols-2 relative">
        <section className="py-7 relative flex flex-col gap-2 text-nowrap text-2xl w-full pr-14">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold uppercase gap-3 text-end">
              {props.companyName}
            </p>
          </div>
          <div className="flex items-center justify-end gap-1 uppercase text-[14px]">
            <p className="italic">{props.timeStart}</p>
            <GoDotFill />
            <p className="italic">{props.timeEnd}</p>
          </div>
        </section>
        <div className="absolute m-auto left-0 right-0 top-5 size-14 translate-x-7 rounded-full bg-dark flex items-center justify-center border-dark border-4">
          <Loader.LoudBull />
        </div>
        <article className="py-7">{props.children}</article>
      </div>
    </div>
  );
};

function Work() {
  return (
    <div className="w-full transition-all duration-[2.5s]">
      <article className="max-w-[1440px] w-full m-auto gap-20 h-full flex flex-col items-center justify-between py-20">
        <Typography.Headings className="dark:text-white uppercase text-[92px]">
          My Work Experience
        </Typography.Headings>
        <div className="flex flex-col gap-20 h-full">
          <ProcessWork
            companyName="South Telecom (Intelin branch)"
            timeEnd="The current"
            timeStart="July, 2022"
          >
            <div className="pl-32 flex flex-col gap-6">
              <p className="text-2xl font-bold uppercase -translate-x-5">
                Web developer
              </p>
              <ul className="list-disc flex flex-col gap-4 font-light leading-7">
                <li>
                  <p>
                    Developed a <span className="font-bold">RESTful API</span>{" "}
                    that integrated with a third-party service, allowing for
                    seamless data synchronization and improved performancejs and{" "}
                    <span className="font-bold">Redux</span> that improved user
                    satisfaction{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <span className="font-bold">RESTful API</span> that
                    integrated with a third-party service, allowing for seamless
                    data synchronization and improved performance
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
                      <a href="https://web360.evnhcmc.vn/">evnhcmc (Nextjs)</a>
                    </span>
                    ,{" "}
                    <span className="font-bold">kingSmart (Zalo mini app)</span>
                    ,{" "}
                    <span className="font-bold">
                      Viettel Post (Zalo mini app),{" "}
                    </span>
                    <span className="font-bold">
                      Company Web (Nestjs and EJS) and some outsourcing projects
                      on e-commerce
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
  );
}

export default Work;
