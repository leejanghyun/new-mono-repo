"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";
import { FrameLayout, HeaderType } from "./components";

export default function Home() {
  const router = useRouter();

  return (
    <FrameLayout headerType={HeaderType.Default}>
      <Button
        onClick={() => {
          router.push("/blog");
        }}
      >
        이동
      </Button>
    </FrameLayout>
  );
}
