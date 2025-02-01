import React from "react";
import {
  cssTransition,
  Id,
  toast,
  ToastContainer,
  ToastContainerProps,
} from "react-toastify";
import { containerStyle } from "./toast.css";

const duration = 3000;

export const toastSuccess = (
  message: string,
  id?: Id,
  options: Partial<ToastContainerProps> = {}
) => {
  if (id && toast.isActive(id)) {
    toast.update(id, { autoClose: duration, ...options });
    return;
  }

  toast.success(message, {
    toastId: id,
    autoClose: duration,
    ...options,
  });
};

export const toastError = (
  message: string,
  id?: Id,
  options: Partial<ToastContainerProps> = {}
) => {
  if (id && toast.isActive(id)) {
    toast.update(id, { autoClose: duration, ...options });
    return;
  }

  toast.error(message, {
    toastId: id,
    autoClose: duration,
    ...options,
  });
};

export const toastDismiss = (id?: Id) => {
  if (id) {
    toast.dismiss(id);
  } else {
    toast.dismiss();
  }
};

export const FadeInOut = cssTransition({
  enter: "fade-in",
  exit: "fade-out",
  collapse: false,
});

function Toast({
  position = "bottom-center",
  draggable = false,
  autoClose = duration,
  ...rest
}: ToastContainerProps) {
  return (
    <ToastContainer
      className={containerStyle}
      position={position}
      icon={false}
      autoClose={autoClose}
      closeButton={false}
      draggable={draggable}
      {...rest}
    />
  );
}

export default Toast;
