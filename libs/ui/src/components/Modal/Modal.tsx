import * as React from "react";
import {
  Flex,
  Modal as AntdModal,
  ModalFuncProps as AntdModalFuncProps,
  ModalProps as AntdModalProps,
} from "antd";
import { HookAPI } from "antd/es/modal/useModal";

function ModalContent({ children }: { children: React.ReactNode }) {
  return <Flex>{children}</Flex>;
}

function Modal({
  closable = false,
  centered = true,
  okText = "확인",
  cancelText = "취소",
  children,
  ...rest
}: AntdModalProps) {
  return (
    <AntdModal
      {...rest}
      closable={closable}
      centered={centered}
      okText={okText}
      cancelText={cancelText}
    >
      <ModalContent>{children}</ModalContent>
    </AntdModal>
  );
}

export const confirm = (
  modal: HookAPI,
  {
    icon,
    content,
    centered = true,
    okText = "확인",
    cancelText = "취소",
    ...rest
  }: AntdModalFuncProps
) =>
  modal.confirm({
    ...rest,
    icon: icon ?? null,
    content: content ? <ModalContent>{content}</ModalContent> : undefined,
    centered,
    okText,
    cancelText,
  });

export const info = (
  modal: HookAPI,
  {
    icon,
    content,
    centered = true,
    okText = "확인",
    okButtonProps = {},
    ...rest
  }: AntdModalFuncProps
) =>
  modal.info({
    ...rest,
    icon: icon ?? null,
    content: content ? <ModalContent>{content}</ModalContent> : undefined,
    centered,
    okText,
    okButtonProps: {
      type: "primary",
      ...okButtonProps,
    },
  });

export default React.memo(Modal);
