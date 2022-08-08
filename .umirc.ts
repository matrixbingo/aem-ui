import { defineConfig } from 'dumi';
import { nav } from './config';

export default defineConfig({
  title: '通用公共组件',
  favicon: '/logo.jpg',
  logo: '/logo.jpg',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: nav,
});
