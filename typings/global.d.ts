declare const __DEV__: boolean;
declare const IMAGE_SERVER: string;
declare const DOWNLOAD_URL: string;
declare const WEIXIN_OAUTH: string;

interface Window {
  _store: any;
  token: any;
}

declare const System: {
  import(modulePath: string): Promise<any>;
};

declare const MtaH5: {
  clickStat(eventId: string, params?: any): void;
};
