# PQ Design

基于 React 18 + TypeScript 的轻量级 UI 组件库，样式使用 Sass，类名统一使用 `pq-` 前缀。

## 技术栈

- React 18
- TypeScript
- Vite
- Sass
- Storybook（组件文档与演示）
- Jest（单元测试）

## 组件列表

| 组件 | 说明 |
|------|------|
| Button | 按钮，支持多种类型与尺寸 |
| Input | 输入框 |
| Menu | 菜单 |
| Upload | 文件上传（支持点击与拖拽） |
| Form | 表单与校验（基于 async-validator） |
| AutoComplete | 自动完成（支持同步/异步建议、键盘导航） |
| Progress | 进度条 |
| Icon | 图标（基于 Font Awesome） |

## 本地开发

```bash
# 安装依赖
npm install

# 启动 Vite 开发
npm run dev

# 启动 Storybook（查看组件文档与示例）
npm run storybook

# 构建
npm run build

# 运行测试
npm run test
```

## 项目结构

```
src/
├── components/     # 各组件（Button、Input、Menu、Upload、Form、AutoComplete 等）
├── hooks/          # 自定义 Hooks（如 useDebounce、useClickOutside）
├── styles/         # 全局样式与变量
└── stories/        # Storybook 文档（含 Introduction 介绍页）
```

## 使用说明

组件库当前为项目内使用。在业务项目中按需从对应组件路径引入即可，例如：

```tsx
import { Button } from './components/Button/button'
import { Upload } from './components/Upload/upload'
```

更多用法与 API 请在本仓库根目录运行 `npm run storybook` 查看各组件的文档与示例。
