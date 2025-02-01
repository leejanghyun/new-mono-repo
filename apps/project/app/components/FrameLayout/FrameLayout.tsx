"use client";
import dynamic from "next/dynamic";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";
import { Layout, Modal } from "antd";
import { info, Toast, toastDismiss, toastError } from "@leejangheon/ui";
import { isClient, useMount } from "@leejangheon/utils";
import Header, { HeaderType } from "../Header/Header";
import * as framelayoutStyles from "@/components/FrameLayout/framelayout.css";
import * as styles from "@/styles/global.css";
import { Spin as AntSpin } from "antd";
import "antd/dist/reset.css";

const { Content } = Layout;

const PageError = dynamic(
  () => import("@leejangheon/ui").then((mod) => mod.PageError),
  { ssr: false }
);

const defaultOptions = {
  queries: {
    retry: 0,
    refetchOnWindowFocus: false,
    throwOnError: false,
  },
};

type Props = {
  headerType?: HeaderType;
};

export default function FrameLayout({
  children,
  headerType,
}: PropsWithChildren<Props>) {
  const router = useRouter();
  const [modal, modalContextHolder] = Modal.useModal();
  const [isLoading] = useState(false);
  const queryClient = useRef(
    new QueryClient({
      defaultOptions,
      queryCache: new QueryCache({
        onError: (error) => {
          const { message } = error;

          info(modal, {
            title: "테스트 모달",
            icon: null,
            content: message,
            centered: true,
            okText: "확인",
          });
        },
      }),
    })
  );
  const { current: queryClientRef } = queryClient;

  /**
   * 인터넷 연결 유무 이벤트
   */
  useMount(() => {
    if (!isClient) {
      return () => {};
    }

    const offlineHandler = () => {
      toastError("인터넷 연결이 끊겼습니다.", undefined, { autoClose: false });
    };

    const onlineHandler = () => {
      toastDismiss();
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  });

  return (
    <main style={{ ...styles, height: "100%" }}>
      <QueryClientProvider client={queryClientRef}>
        {/** 페이지 렌더링 오류 시 호출 */}
        <ErrorBoundary
          fallback={
            <PageError
              onClick={() => {
                router.push("/");
              }}
            />
          }
        >
          <Layout className={framelayoutStyles.layoutStyles}>
            <Header type={headerType} />
            <Content className={framelayoutStyles.contentStyles}>
              {children}
            </Content>
          </Layout>
        </ErrorBoundary>
        {/** API 오류 시 모달 팝업  */}
        {modalContextHolder}
        {/** Toast */}
        <Toast />
        <AntSpin
          className={
            isLoading
              ? framelayoutStyles.loadingOverlay
              : framelayoutStyles.hidden
          }
          size="large"
        />
      </QueryClientProvider>
    </main>
  );
}
