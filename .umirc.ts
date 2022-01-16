import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  title: 'aem-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  exportStatic: {
    dynamicRoot: true,
  },
  alias: {
    'aem-ui': resolve(__dirname, './packages/aem-ui/src/index.ts'),
    '@ife/hooks': resolve(__dirname, './packages/hooks/src/index.ts'),
  },
  resolve: {
    includes: [
      'docs',
      'packages/hooks/src',
      'packages/aem-ui/src',
    ],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/matrixbingo/aem-ui',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/matrixbingo/aem-ui',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
