import React from "react";
import { Button, Result } from "antd";
import NoticeAni from "../../assets/animations/notice.json";
import Lottie from "lottie-light-react";
import { memo } from "react";

type Props = {
  buttonText?: string;
  onClick: () => void;
};

const PageError = ({ buttonText, onClick }: Props) => {
  return (
    <Result
      title="오류가 발생했습니다."
      subTitle="잠시 후 다시 시도해주세요."
      icon={
        <Lottie
          animationData={NoticeAni}
          loop={false}
          style={{
            margin: "0 auto",
            width: "80px",
            height: "80px",
          }}
        />
      }
      extra={<Button onClick={onClick}>{buttonText || "새로 고침"}</Button>}
    />
  );
};

export default memo(PageError);
