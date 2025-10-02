import { isIntoView, observeAnimation } from "@/utils/helper";
import { Fragment, useEffect, type ReactNode } from "react";

interface IWindowProps {
  children: ReactNode;
  animation?: string;
  id: string;
  onScroll?: (isIntoView: boolean) => void;
}

function Window(props: IWindowProps) {
  useEffect(() => {
    const element = document.querySelector(`#${props.id}`);
    window.addEventListener("scroll", () => {
      console.log("element", element);
      if (element) {
        if (props.animation) {
          if (isIntoView(element)) {
            element.classList.add(props.animation);
          } else {
            element.classList.remove(props.animation);
          }
        }
        if (props.onScroll) {
          props.onScroll(isIntoView(element));
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [props]);

  return <Fragment>{props.children}</Fragment>;
}

interface IByElementProps {
  children: ReactNode;
  animation?: string;
  id: string;
  onScroll?: (isIntoView: boolean) => void;
  idElementScroll: string;
}

function ByElement(props: IByElementProps) {
  useEffect(() => {
    const element = document.querySelector(`#${props.id}`);
    const elementScroll = document.querySelector(`#${props.idElementScroll}`);

    if (elementScroll && element) {
      observeAnimation(element, elementScroll, props.animation);
    }
    return () => {};
  }, [props]);

  return <Fragment>{props.children}</Fragment>;
}
export const Scroll = {
  Window,
  ByElement,
};
