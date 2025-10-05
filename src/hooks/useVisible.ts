import { useState } from "react";

type UseVisibleProps = {
  data?: {
    initialVisible?: boolean;
    isVisible?: boolean;
  },
  handler?: {
    onOpen?: () => void;
    onClose?: () => void;
    onSetVisible?: (visible: boolean) => void;
  }
};

export const useVisible = (props: UseVisibleProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(props.data?.isVisible ?? false);

  return {
    isVisible,
    handler: {
      onOpen: () => {
        setIsVisible(true);
        props.handler?.onOpen && props.handler.onOpen();
      },
      onClose: () => {
        setIsVisible(false);
        props.handler?.onClose && props.handler.onClose();
      },
      onSetVisible: (visible: boolean) => {
        setIsVisible(visible);
        props.handler?.onSetVisible && props.handler.onSetVisible(visible);
      }
    }
  };
};
