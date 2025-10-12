export interface BrowserInfo {
  name: string;
  version: string;
  engine: string;
  engineVersion: string;
  os: string;
  osVersion: string;
  device: string;
  userAgent: string;
  language: string;
  platform: string;
  vendor: string;
  cookiesEnabled: boolean;
  doNotTrack: string | null;
  onlineStatus: boolean;
  screenResolution: string;
  viewportSize: string;
  colorDepth: number;
  pixelRatio: number;
  touchSupport: boolean;
  webglSupport: boolean;
  localStorageAvailable: boolean;
  sessionStorageAvailable: boolean;
  indexedDBAvailable: boolean;
  webWorkersAvailable: boolean;
  serviceWorkersAvailable: boolean;
  geolocationAvailable: boolean;
  notificationAvailable: boolean;
  batteryAPIAvailable: boolean;
  webRTCAvailable: boolean;
  webSocketsAvailable: boolean;
  webAssemblyAvailable: boolean;
  isWhale: boolean;
  whaleFeatures?: {
    sidebar: boolean;
    dualTab: boolean;
    spaceFeature: boolean;
  };
}

export function detectBrowser(): BrowserInfo {
  const ua = navigator.userAgent;
  const vendor = navigator.vendor || '';
  const platform = navigator.platform || '';
  
  // Browser detection
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';
  let engine = 'Unknown';
  let engineVersion = 'Unknown';
  
  // Whale Browser - Chrome보다 먼저 감지해야 함 (Whale도 Chrome 문자열 포함)
  if (/Whale/.test(ua) || /NAVER\(inapp/.test(ua)) {
    browserName = 'Naver Whale';
    // Whale 버전 감지 개선
    const whaleMatch = ua.match(/Whale\/([0-9.]+)/);
    if (whaleMatch) {
      browserVersion = whaleMatch[1];
    } else {
      // NAVER 앱 내장 브라우저인 경우
      const naverMatch = ua.match(/NAVER\(inapp.*?([0-9.]+)/);
      browserVersion = naverMatch ? naverMatch[1] : 'Unknown';
    }
    engine = 'Blink';
    // Chrome 버전으로 엔진 버전 추정
    const chromeMatch = ua.match(/Chrome\/(\d+)/);
    engineVersion = chromeMatch ? chromeMatch[1] : 'Unknown';
  }
  // Samsung Browser - Chrome보다 먼저 감지
  else if (/SamsungBrowser/.test(ua)) {
    browserName = 'Samsung Browser';
    const match = ua.match(/SamsungBrowser\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Blink';
    engineVersion = 'Unknown';
  }
  // Edge detection - Chrome보다 먼저 감지
  else if (/Edg/.test(ua)) {
    browserName = 'Edge';
    const match = ua.match(/Edg\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Blink';
    const engineMatch = ua.match(/Edg\/(\d+)/);
    engineVersion = engineMatch ? engineMatch[1] : 'Unknown';
  }
  // Opera detection - Chrome보다 먼저 감지
  else if (/OPR/.test(ua) || /Opera/.test(ua)) {
    browserName = 'Opera';
    const match = ua.match(/(?:OPR|Opera)\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Blink';
    engineVersion = 'Unknown';
  }
  // Chrome/Chromium detection
  else if (/Chrome/.test(ua) && /Google Inc/.test(vendor)) {
    browserName = 'Chrome';
    const match = ua.match(/Chrome\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Blink';
    const engineMatch = ua.match(/Chrome\/(\d+)/);
    engineVersion = engineMatch ? engineMatch[1] : 'Unknown';
  }
  // Firefox detection
  else if (/Firefox/.test(ua)) {
    browserName = 'Firefox';
    const match = ua.match(/Firefox\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Gecko';
    const engineMatch = ua.match(/Gecko\/(\d+)/);
    engineVersion = engineMatch ? engineMatch[1] : 'Unknown';
  }
  // Safari detection
  else if (/Safari/.test(ua) && /Apple Computer/.test(vendor)) {
    browserName = 'Safari';
    const match = ua.match(/Version\/(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'WebKit';
    const engineMatch = ua.match(/WebKit\/(\d+)/);
    engineVersion = engineMatch ? engineMatch[1] : 'Unknown';
  }
  // IE detection
  else if (/Trident/.test(ua) || /MSIE/.test(ua)) {
    browserName = 'Internet Explorer';
    const match = ua.match(/(?:MSIE |rv:)(\d+\.\d+)/);
    browserVersion = match ? match[1] : 'Unknown';
    engine = 'Trident';
    engineVersion = 'Unknown';
  }
  
  // OS detection
  let os = 'Unknown';
  let osVersion = 'Unknown';
  
  if (/Windows NT/.test(ua)) {
    os = 'Windows';
    const versionMatch = ua.match(/Windows NT (\d+\.\d+)/);
    if (versionMatch) {
      const ntVersion = versionMatch[1];
      osVersion = {
        '10.0': '10/11',
        '6.3': '8.1',
        '6.2': '8',
        '6.1': '7',
        '6.0': 'Vista',
        '5.1': 'XP'
      }[ntVersion] || ntVersion;
    }
  } else if (/Mac OS X/.test(ua)) {
    os = 'macOS';
    const versionMatch = ua.match(/Mac OS X (\d+[._]\d+)/);
    osVersion = versionMatch ? versionMatch[1].replace('_', '.') : 'Unknown';
  } else if (/Android/.test(ua)) {
    os = 'Android';
    const versionMatch = ua.match(/Android (\d+\.\d+)/);
    osVersion = versionMatch ? versionMatch[1] : 'Unknown';
  } else if (/iOS|iPhone|iPad|iPod/.test(ua)) {
    os = 'iOS';
    const versionMatch = ua.match(/OS (\d+_\d+)/);
    osVersion = versionMatch ? versionMatch[1].replace('_', '.') : 'Unknown';
  } else if (/Linux/.test(ua)) {
    os = 'Linux';
    osVersion = 'Unknown';
  }
  
  // Device detection
  let device = 'Desktop';
  if (/Mobile|Android|iPhone|iPad|iPod/.test(ua)) {
    if (/iPad/.test(ua)) {
      device = 'Tablet';
    } else {
      device = 'Mobile';
    }
  } else if (/Tablet/.test(ua)) {
    device = 'Tablet';
  }
  
  // Feature detection functions
  const checkStorageAvailability = (storage: Storage | null): boolean => {
    if (!storage) return false;
    try {
      const test = '__storage_test__';
      storage.setItem(test, test);
      storage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  };
  
  const checkWebGLSupport = (): boolean => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  };
  
  // 웨일 브라우저 확인 및 특유 기능 감지
  const isWhale = browserName === 'Naver Whale';
  let whaleFeatures = undefined;
  
  if (isWhale) {
    // 웨일 브라우저 특유 기능 감지
    whaleFeatures = {
      // 웨일 브라우저는 window.whale 객체를 가질 수 있음
      sidebar: typeof (window as any).whale !== 'undefined',
      dualTab: true, // 웨일은 기본적으로 듀얼탭 지원
      spaceFeature: true, // 웨일 스페이스 기능 지원
    };
  }
  
  return {
    name: browserName,
    version: browserVersion,
    engine,
    engineVersion,
    os,
    osVersion,
    device,
    userAgent: ua,
    language: navigator.language || 'Unknown',
    platform,
    vendor,
    cookiesEnabled: navigator.cookieEnabled || false,
    doNotTrack: (navigator as any).doNotTrack || (window as any).doNotTrack || null,
    onlineStatus: navigator.onLine || false,
    screenResolution: `${screen.width}x${screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    colorDepth: screen.colorDepth || 0,
    pixelRatio: window.devicePixelRatio || 1,
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    webglSupport: checkWebGLSupport(),
    localStorageAvailable: checkStorageAvailability(window.localStorage),
    sessionStorageAvailable: checkStorageAvailability(window.sessionStorage),
    indexedDBAvailable: 'indexedDB' in window,
    webWorkersAvailable: 'Worker' in window,
    serviceWorkersAvailable: 'serviceWorker' in navigator,
    geolocationAvailable: 'geolocation' in navigator,
    notificationAvailable: 'Notification' in window,
    batteryAPIAvailable: 'getBattery' in navigator,
    webRTCAvailable: 'RTCPeerConnection' in window || 'webkitRTCPeerConnection' in window,
    webSocketsAvailable: 'WebSocket' in window,
    webAssemblyAvailable: 'WebAssembly' in window,
    isWhale,
    whaleFeatures,
  };
}