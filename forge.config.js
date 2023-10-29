module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'musicplayer',
        authors: 'sillyangel',
        noMsi: false,
        setupExe: 'musicplayerSetup.exe',
        setupIcon: './icons/icon.ico',
        loadingGif: './icons/loading.gif',
        setupIcon: './icons/icon.ico',
        description: 'A music player made with electron',
        setupMsi: 'musicplayerSetup.msi'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};