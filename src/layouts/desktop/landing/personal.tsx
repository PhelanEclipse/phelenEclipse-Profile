import {
  FaFacebookF,
  FaLinkedinIn,
  FaMailBulk,
  FaPhoneAlt,
} from "react-icons/fa";
import { Loader } from "@/components/ui/dataDisplay/loader";
import avatarI from "@/assets/images/avatar.jpg";

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
    <div className="transition-all bg-white duration-[2.5s] overflow-hidden">
      <article className="w-full h-full text-dark">
        <div className="max-w-[1440px] w-full m-auto gap-10 py-20 flex flex-col justify-between items-center h-full">
          <div className="flex flex-col gap-16 items-center w-full h-full">
            <div className="flex flex-col items-center gap-8 justify-between h-full">
              <div className="flex flex-col justify-center items-center gap-8">
                <div
                  style={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  }}
                  className="rounded-full border-[#3e3d3b] relative border-[12px] w-fit"
                >
                  <AvatarProfile />
                </div>
                <section className="flex flex-col items-center gap-6">
                  <div className="button-profile text-nowrap w-fit">
                    <p className="text-8xl font-semibold uppercase tracking-[20px] text-center actual-text">
                      Minh Tan
                    </p>
                    <p className="text-8xl text-nowrap font-semibold uppercase tracking-[20px] text-center hover-text">
                      Minh Tan
                    </p>
                  </div>
                  <p className="text-4xl leading-10 tracking-[20px] text-center uppercase">
                    FRONT-end DEVELOPER
                  </p>
                </section>
              </div>
              <div className="flex gap-16 w-full text-dark">
                <section className="flex flex-col gap-4">
                  <p className="flex gap-6 font-bold uppercase text-3xl">
                    <Loader.NicePanda /> EDUCATION
                  </p>
                  <div className="px-14 border-dark relative flex flex-col gap-4 text-xl">
                    <div className="w-1 h-full absolute top-0 left-3 bg-dark rounded-full" />
                    <p className="font-bold ">
                      Information Technology -{" "}
                      <span className="font-light">Aug 2018 - July 2022</span>
                    </p>
                    <p>
                      <span className="font-bold">TDM University</span> - 06
                      Tran Van On Street, Phu Hoa Ward, Thu Dau Mot
                    </p>
                    <ul className="list-disc px-4">
                      <li className="pb-2">
                        <p>
                          GPA: <span className="font-bold">3.0</span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <span className="font-bold">Software Engineer</span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
                <section className="flex flex-col gap-4">
                  <p className="flex items-center gap-6 font-bold uppercase text-3xl">
                    <Loader.NicePanda /> CONTACTS
                  </p>
                  <div className="px-14 border-dark relative flex flex-col gap-4 text-xl">
                    <div
                      className="w-1 h-full absolute top-0 left-3 bpy-1
py-1
py-1g-dark rounded-full"
                    />
                    <ul className="list-disc px-4">
                      <li className="py-2">
                        <div className="flex items-start gap-2">
                          <FaPhoneAlt /> (+85) 82 75 8423
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-start gap-2">
                          <FaMailBulk />{" "}
                          <a
                            className="underline"
                            href="mailto:phelan.minhtanly@gmail.com"
                          >
                            phelan.minhtanly@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-start gap-2">
                          <FaFacebookF />{" "}
                          <a
                            target="_blank"
                            href="https://m.me/phelan.minhtanly"
                            className="text-base underline"
                            rel="noreferrer"
                          >
                            facebook.phelan.minhtanly
                          </a>
                        </div>
                      </li>
                      <li className="py-1">
                        <div className="flex items-start gap-2">
                          <FaLinkedinIn className="text-lg" />{" "}
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/messaging/thread/minh-tân-lý-223b09326/"
                            className="text-base underline"
                            rel="noreferrer"
                          >
                            linkdedIn.phelan.minhtanly
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
  );
};

export default Personal;
