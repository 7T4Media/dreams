
declare global {
  interface Window {
    electronAPI: {
      getAppVersion: () => Promise<string>;
      showMessageBox: (options: any) => Promise<any>;
      platform: string;
      versions: {
        node: string;
        chrome: string;
        electron: string;
      };
    };
  }
}

export {};
