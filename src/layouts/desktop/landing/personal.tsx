import {
  FaFacebookF,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";
import { Loader } from "@/components/ui/dataDisplay/loader";
import avatarI from "@/assets/images/avatar.jpg";
import { Scroll } from "@/components/ui/animation/scroll";
import Box from "@/components/ui/layout/box";

function AvatarProfile() {
  return (
    <div>
      <div className="absolute top-0 left-0">
        <div className="loader-avatar"></div>
      </div>
      <img
        className="size-64 min-w-6size-64 object-cover rounded-full relative"
        src={avatarI}
        alt="avatar"
      />
    </div>
  );
}
const Personal = () => {
  return (
    <Scroll.ByElement
      idElementScroll="landingPage"
      id="personal"
      animation="personal-active"
    >
      <div
        style={{
          background: "radial-gradient(circle at top left, #4facfe, #5f2c82)",
        }}
        id="personal"
        className="transition-all personal duration-[2.5s] overflow-hidden"
      >
        <article className="w-full h-full text-white relative">
          <div className="max-w-[1440px] max-md:max-w-[375px] w-full m-auto gap-10 py-20 max-lg:py-6 lg:py-10 flex flex-col justify-between items-center h-full">
            <div className="flex flex-col gap-16 items-center w-full h-full">
              <div className="flex flex-col items-center gap-8 max-lg:gap-20 lg:gap-14 max-md:gap-10 justify-between h-full">
                <div className="flex flex-col justify-center items-center gap-8">
                  <Box className="size-[280px] rounded-full avatar transition-all duration-[2s]">
                    <div
                      style={{
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                      }}
                      className="rounded-full border-white relative border-[12px] w-fit"
                    >
                      <AvatarProfile />
                    </div>
                  </Box>
                  <section className="flex flex-col items-center gap-6">
                    <Box className="h-[96px] max-md:h-[36px] flex items-end overflow-hidden">
                      <div className="button-profile personal-name text-nowrap w-fit">
                        <p className="text-8xl max-md:text-3xl font-semibold uppercase tracking-[20px] text-center actual-text">
                          Minh Tan
                        </p>
                        <p className="text-8xl max-md:text-3xl text-nowrap font-semibold uppercase tracking-[20px] text-center hover-text">
                          Minh Tan
                        </p>
                      </div>
                    </Box>
                    <Box className="h-[40px] max-lg:h-[32px] flex items-end overflow-hidden">
                      <p className="lg:text-4xl max-lg:text-2xl max-md:text-lg personal-position leading-10 tracking-[20px] max-lg:tracking-[8px] text-center uppercase">
                        FRONT-end DEVELOPER
                      </p>
                    </Box>
                  </section>
                </div>
                <div className="flex xl:flex-row lg:flex-col max-md:flex-col md:flex-col gap-16 w-full text-white">
                  <section className="flex flex-col gap-4">
                    <Box className="flex gap-6 font-bold uppercase text-3xl max-lg:text-2xl">
                      <Loader.NicePanda /> EDUCATION
                    </Box>
                    <div className="px-14 border-white relative flex flex-col gap-4 text-xl max-lg:text-base">
                      <div className="w-1 h-full absolute top-0 left-3 bg-white rounded-full" />
                      <ul className="list-disc px-4 education">
                        <li className="py-2">
                          <p>
                            <span className="font-bold">TDM University</span> -
                            06 Tran Van On Street, Phu Hoa Ward, Thu Dau Mot
                          </p>
                        </li>
                        <li className="py-2">
                          <p className="font-bold ">
                            Information Technology -{" "}
                            <span className="font-light">
                              Aug 2018 - July 2022
                            </span>
                          </p>
                        </li>
                        <li className="py-2">
                          <p>
                            <span className="font-bold">GPA: </span>
                            3.0
                          </p>
                        </li>
                        <li>
                          <p>
                            <span className="font-bold">Bachelor’s Degree in Software Engineering</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <section className="flex flex-col gap-4">
                    <Box className="flex items-center gap-6 font-bold uppercase text-3xl max-lg:text-2xl">
                      <Loader.NicePanda /> CONTACTS
                    </Box>
                    <div className="px-14 border-white relative flex flex-col gap-4 text-xl max-lg:text-base">
                      <div className="w-1 h-full absolute top-0 left-3 bg-white rounded-full" />
                      <ul className="list-disc px-4 text-lg education">
                        <li className="py-2">
                          <div className="flex items-center gap-2">
                            <FaPhoneAlt /> (+85) 82 75 8423
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-2">
                            <FaMailBulk />{" "}
                            <a
                              className="underline"
                              href="mailto:phelan.minhtanly@gmail.com"
                            >
                              g.phelan.minhtanly
                            </a>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center gap-2">
                            <FaFacebookF />{" "}
                            <a
                              target="_blank"
                              href="https://m.me/phelan.minhtanly"
                              className="underline"
                              rel="noreferrer"
                            >
                              f.phelan.minhtanly
                            </a>
                          </div>
                        </li>
                        <li className="py-1">
                          <div className="flex items-center gap-2">
                            <FaLinkedinIn className="text-xl" />{" "}
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/messaging/thread/minh-tân-lý-223b09326/"
                              className="underline"
                              rel="noreferrer"
                            >
                              link.phelan.minhtanly
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Scroll.ByElement>
  );
};

export default Personal;
