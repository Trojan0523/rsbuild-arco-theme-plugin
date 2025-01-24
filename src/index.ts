import type { RsbuildPlugin } from '@rsbuild/core';

export type PluginExampleOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginExample = (
  options: PluginExampleOptions = {},
): RsbuildPlugin => ({
  name: 'plugin-example',
  pre: ['plugin-less'],
  setup() {
    console.log('Hello Rsbuild!', options);
  },
});
