## 📚 文档

- 中文文档：[链接](https://juejin.cn/post/7089377403717287972)
- 手摸手教程：[链接](https://juejin.cn/column/7207659644487139387)

## 📺 在线预览

| 位置         | 账号            | 链接                                            |
| ------------ | --------------- | ----------------------------------------------- |
| github-pages | admin 或 editor | [链接](https://un-pany.github.io/v3-admin-vite) |

## 功能

- **用户管理**：登录、登出演示
- **权限管理**：页面级权限（动态路由）、按钮级权限（指令权限、权限函数）、路由守卫
- **多环境**：开发环境（development）、预发布环境（staging）、正式环境（production）
- **多主题**：普通、黑暗、深蓝, 三种主题模式
- **多布局**：左侧、顶部、混合, 三种布局模式
- **错误页面**: 403、404
- **Dashboard**：根据不同用户显示不同的 Dashboard 页面
- **其他内置功能**：SVG、动态侧边栏、动态面包屑、标签页快捷导航、Screenfull 全屏、自适应收缩侧边栏、Hook（Composables）

## 🚀 开发

```bash
# 配置
1. node 版本 18.x 或 20+
2. pnpm 版本 8.x 或最新版

# 克隆项目
git clone https://github.com/liukj98/knowledge_admin_v3.git

# 进入项目目录
cd knowledge_admin_v3

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## ✔️ 预览

```bash
# 预览预发布环境
pnpm preview:stage

# 预览正式环境
pnpm preview:prod
```

## 📦️ 多环境打包

```bash
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```

## 🔧 代码检查

```bash
# 代码格式化
pnpm lint

# 单元测试
pnpm test
```

## Git 提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `workflow` 工作流改进
- `ci` 持续集成相关
- `types` 类型定义文件更改
- `wip` 开发中

## 项目预览图

![preview1.png](./src/assets/docs/preview1.png)
![preview2.png](./src/assets/docs/preview2.png)
![preview3.png](./src/assets/docs/preview3.png)
