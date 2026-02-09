// babel.config.cjs
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], // 适配当前 Node 版本
    ['@babel/preset-react', { runtime: 'automatic' }],       // 适配 React 18/19 (自动引入 React)
    '@babel/preset-typescript',                              // 支持 TS
  ],
};