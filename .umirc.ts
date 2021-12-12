import { defineConfig } from 'dumi';

const repo = 'aem-ui';

export default defineConfig({
  title: repo,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  menus: {
    '/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      },
    ],
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/matrixbingo/aem-ui',
    },
  ],
  // more config: https://d.umijs.org/config
});
