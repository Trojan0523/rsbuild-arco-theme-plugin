/*
 * @Author: BuXiongYu
 * @Date: 2025-01-24 20:59:58
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2025-01-27 10:32:29
 * @Description: plugin entry
 */
import type { RsbuildPlugin } from '@rsbuild/core';

export type PluginExampleOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginExample = (
  options: PluginExampleOptions = {},
): RsbuildPlugin => ({
  name: 'rsbuild:arco-theme-plugin-vue',
  pre: ['rsbuild:less'],
  setup (api) {
    console.log('Hello Rsbuild!', options, api.context);
  },
});
