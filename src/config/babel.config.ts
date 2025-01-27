export default {
  presets: [
    ['@babel/preset-env'],
    [
      require.resolve('@babel/preset-typescript'),
      {
        allExtensions: true,
        isTSX: true,
      },
    ]
  ],
  plugins: [
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-transform-modules-commonjs'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@vue/babel-plugin-jsx'),
  ],
}
