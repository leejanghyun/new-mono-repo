import { FullConfig, chromium } from "@playwright/test";

/**
 * e2e 테스트 전 전역으로 설정할 데이터 세팅 (ex. 인증정보)
 */
async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Tracing 시작
    await context.tracing.start({ screenshots: true, snapshots: true });
    await page.waitForLoadState();

    // AccessKey 요청
    const response = await fetch(
      "https://tmap-channel-dev.tmobiapi.com/tmap-channel/etc/auth/authtmap",
      {
        method: "POST",
        headers: {
          Accept: "application/json; charset=utf-8",
          DEV_CODE: "D004",
          Requester: "CLIENT_SSL",
          Client_ReqTime: "20210422181105",
          Client_MDN: "01089184718",
          "Content-Type": "application/json",
          "Network-Type": "WIFI",
        },
        body: JSON.stringify({
          header: {
            reqTime: "20210422180500",
            svcType: 72,
            osType: "AND",
            osVersion: "11",
            deviceId: "ffffffff-8ec9-21b3-v2-test",
            carrier: "SKTelecom",
            modelNo: "SM-G991N",
            appVersion: "8.5.3",
            buildNo: "291149",
            resolution: "QXGA",
            using: "MAIN",
            screenWidth: 1080,
            screenHeight: 2194,
            macAddress: "",
            id: "*",
            loginType: 0,
            loginInfo: "*",
            pushDeviceKey: "",
            appLaunchCount: 1,
          },
          authCode: "86274",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch accessKey: ${response.statusText}`);
    }

    const accessKey = response.headers.get("accesskey"); // 응답 헤더에서 accessKey 추출

    // 스토리지 상태 저장
    await context.storageState({ path: storageState as string });
    await context.tracing.stop({
      path: "./playwright/test-results/setup-trace.zip",
    });

    // 필요 시 accessKey를 전역 환경 변수나 파일로 저장
    process.env.ACCESS_KEY = accessKey as string;
  } catch (error) {
    await context.tracing.stop({
      path: "./playwright/test-results/failed-setup-trace.zip",
    });
    throw error;
  } finally {
    await browser.close();
  }
}

export default globalSetup;
