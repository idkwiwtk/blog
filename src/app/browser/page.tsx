"use client";

import { useEffect, useState } from "react";
import { cn } from "@/shared/lib";
import ContentBox from "@/shared/ui/content/ContentBox";
import ContentWrapper from "@/shared/ui/content/ContentWrapper";
import { detectBrowser, type BrowserInfo } from "@/shared/lib/browserDetection";

const BrowserPage = () => {
  const [browserInfo, setBrowserInfo] = useState<BrowserInfo | null>(null);

  useEffect(() => {
    const info = detectBrowser();
    setBrowserInfo(info);
  }, []);

  const getBrowserIcon = (name: string) => {
    const icons: Record<string, string> = {
      Chrome: "🌐",
      Firefox: "🦊",
      Safari: "🧭",
      Edge: "🌊",
      Opera: "🎭",
      "Internet Explorer": "🌍",
      "Samsung Browser": "📱",
      "Naver Whale": "🐋",
      Unknown: "❓",
    };
    return icons[name] || "🌐";
  };

  if (!browserInfo) {
    return (
      <section>
        <ContentBox>
          <ContentWrapper>
            <div className="flex items-center justify-center min-h-[400px]">
              <p className="text-gray-500">브라우저 정보를 불러오는 중...</p>
            </div>
          </ContentWrapper>
        </ContentBox>
      </section>
    );
  }

  return (
    <section>
      <ContentBox>
        <ContentWrapper>
          <div className="space-y-8">
            {/* 헤더 */}
            <div className="text-center space-y-4 pb-8 border-b">
              <div className="text-6xl">{getBrowserIcon(browserInfo.name)}</div>
              <h1 className="text-3xl font-bold">{browserInfo.name}</h1>
              <p className="text-xl text-gray-600">
                버전 {browserInfo.version}
              </p>
            </div>

            {/* 기본 정보 */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">기본 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem label="브라우저" value={browserInfo.name} />
                <InfoItem label="버전" value={browserInfo.version} />
                <InfoItem label="렌더링 엔진" value={browserInfo.engine} />
                <InfoItem label="엔진 버전" value={browserInfo.engineVersion} />
                <InfoItem label="운영체제" value={browserInfo.os} />
                <InfoItem label="OS 버전" value={browserInfo.osVersion} />
                <InfoItem label="디바이스 타입" value={browserInfo.device} />
                <InfoItem label="언어" value={browserInfo.language} />
                <InfoItem label="플랫폼" value={browserInfo.platform} />
                <InfoItem
                  label="제조사"
                  value={browserInfo.vendor || "Unknown"}
                />
              </div>
            </div>

            {/* 디스플레이 정보 */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">
                디스플레이 정보
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem
                  label="화면 해상도"
                  value={browserInfo.screenResolution}
                />
                <InfoItem
                  label="뷰포트 크기"
                  value={browserInfo.viewportSize}
                />
                <InfoItem
                  label="색상 깊이"
                  value={`${browserInfo.colorDepth} bit`}
                />
                <InfoItem
                  label="픽셀 비율"
                  value={`${browserInfo.pixelRatio}x`}
                />
              </div>
            </div>

            {/* 기능 지원 */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2">기능 지원</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <FeatureItem
                  label="쿠키 활성화"
                  supported={browserInfo.cookiesEnabled}
                />
                <FeatureItem
                  label="온라인 상태"
                  supported={browserInfo.onlineStatus}
                />
                <FeatureItem
                  label="터치 지원"
                  supported={browserInfo.touchSupport}
                />
                <FeatureItem
                  label="WebGL"
                  supported={browserInfo.webglSupport}
                />
                <FeatureItem
                  label="Local Storage"
                  supported={browserInfo.localStorageAvailable}
                />
                <FeatureItem
                  label="Session Storage"
                  supported={browserInfo.sessionStorageAvailable}
                />
                <FeatureItem
                  label="IndexedDB"
                  supported={browserInfo.indexedDBAvailable}
                />
                <FeatureItem
                  label="Web Workers"
                  supported={browserInfo.webWorkersAvailable}
                />
                <FeatureItem
                  label="Service Workers"
                  supported={browserInfo.serviceWorkersAvailable}
                />
                <FeatureItem
                  label="Geolocation"
                  supported={browserInfo.geolocationAvailable}
                />
                <FeatureItem
                  label="Notifications"
                  supported={browserInfo.notificationAvailable}
                />
                <FeatureItem
                  label="Battery API"
                  supported={browserInfo.batteryAPIAvailable}
                />
                <FeatureItem
                  label="WebRTC"
                  supported={browserInfo.webRTCAvailable}
                />
                <FeatureItem
                  label="WebSockets"
                  supported={browserInfo.webSocketsAvailable}
                />
                <FeatureItem
                  label="WebAssembly"
                  supported={browserInfo.webAssemblyAvailable}
                />
              </div>
            </div>

            {/* User Agent */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">
                User Agent
              </h2>
              <div className="p-4 bg-gray-100 rounded-lg">
                <code className="text-sm break-all text-black">
                  {browserInfo.userAgent}
                </code>
              </div>
            </div>

            {/* 웨일 브라우저 전용 기능 */}
            {browserInfo.isWhale && browserInfo.whaleFeatures && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">
                  🐋 Naver Whale 전용 기능
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <FeatureItem
                    label="사이드바 지원"
                    supported={browserInfo.whaleFeatures.sidebar}
                  />
                  <FeatureItem
                    label="듀얼탭 기능"
                    supported={browserInfo.whaleFeatures.dualTab}
                  />
                  <FeatureItem
                    label="스페이스 기능"
                    supported={browserInfo.whaleFeatures.spaceFeature}
                  />
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    네이버 웨일 브라우저가 감지되었습니다! 웨일은 사이드바, 듀얼탭, 
                    스페이스 등의 독특한 기능을 제공하는 한국형 브라우저입니다.
                  </p>
                </div>
              </div>
            )}

            {/* Do Not Track */}
            {browserInfo.doNotTrack && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">
                  추가 정보
                </h2>
                <InfoItem
                  label="Do Not Track"
                  value={
                    browserInfo.doNotTrack === "1" ? "활성화됨" : "비활성화됨"
                  }
                />
              </div>
            )}
          </div>
        </ContentWrapper>
      </ContentBox>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col space-y-1">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const FeatureItem = ({
  label,
  supported,
}: {
  label: string;
  supported: boolean;
}) => (
  <div className="flex items-center space-x-2">
    <span className="text-lg">{supported ? "✅" : "❌"}</span>
    <span
      className={cn("text-sm", supported ? "text-green-700" : "text-red-700")}
    >
      {label}
    </span>
  </div>
);

export default BrowserPage;
