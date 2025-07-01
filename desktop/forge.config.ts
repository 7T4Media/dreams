
import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { MakerDMG } from '@electron-forge/maker-dmg';
import { VitePlugin } from '@electron-forge/plugin-vite';

const config: ForgeConfig = {
  packagerConfig: {
    name: '1DreamUnited',
    executableName: '1dreamunited',
    icon: './assets/icon',
    extraResource: ['./assets'],
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      name: '1DreamUnited',
      setupExe: '1DreamUnited-Setup.exe',
      setupIcon: './assets/icon.ico',
    }),
    new MakerZIP({}, ['darwin']),
    new MakerDMG({
      name: '1DreamUnited',
      icon: './assets/icon.icns',
      background: './assets/dmg-background.png',
    }),
    new MakerRpm({
      options: {
        name: '1dreamunited',
        productName: '1DreamUnited',
        genericName: 'Music Platform',
        description: 'AI-driven global music ecosystem platform',
        categories: ['Audio', 'Music'],
        icon: './assets/icon.png',
      },
    }),
    new MakerDeb({
      options: {
        name: '1dreamunited',
        productName: '1DreamUnited',
        genericName: 'Music Platform',
        description: 'AI-driven global music ecosystem platform',
        categories: ['Audio', 'Music'],
        icon: './assets/icon.png',
      },
    }),
  ],
  plugins: [
    new VitePlugin({
      build: [
        {
          entry: 'main.ts',
          config: 'vite.main.config.ts',
        },
        {
          entry: 'preload.ts',
          config: 'vite.preload.config.ts',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.ts',
        },
      ],
    }),
  ],
};

export default config;
