# Haohan Li · Research Portfolio

重庆大学国家卓越工程师学院学生李浩涵的个人作品集，展示 RhinoPi X1、K230 视觉与云台联调和数学建模竞赛B题。

公开网站：https://clgtwdll.github.io/

本项目来自个人主页的独立副本，原版继续保留在本地。

## 本地启动

```powershell
npm ci
npm run dev
```

使用 Node.js 24，在项目目录运行上述命令，打开 http://127.0.0.1:4322/ 。原版仍使用 4321，可分别启动并对照。副本有自己的依赖、源码和构建产物。

检查：`npm run check`；构建：`npm run build`；产物：`dist/`。

## 结构

- `src/data/profile.ts`：个人信息、教育、奖项和简历。副本英文名为 Haohan Li。
- `src/data/projects.ts`：三个项目、真实贡献与结果、展示技术标签。
- `src/components/`：共用导航、页脚、项目卡片、SVG 图标、图片和视频组件。
- `src/pages/index.astro`：校园背景 Hero、项目卡片和三栏学术信息。
- `astro.config.mjs`：旧项目目录地址返回首页项目区，三个历史详情地址直接跳转至对应 GitHub 仓库；不再生成重复项目目录或详情内容。
- `public/images/projects/`：原有真实项目图片。
- `public/images/projects/rhinopi-reference.png`：对同一真实 URDF / STL 模型重新取景的静态 MuJoCo 渲染，轮子完整保留；未更改机器人模型或控制程序。
- `public/images/cqu-library.jpg`：用户提供的真实图书馆照片；个人信息区左侧背景通过 CSS 降低对比度、饱和度和透明度，并向右淡出，源照片保持不变。
- `public/images/campus-reference.png`：保留的旧版参考图，当前主页不再使用。
- `public/files/lihaohan-cv.pdf`：原有简历副本。

项目图片、标题和仓库按钮直接打开对应 GitHub 仓库。三个项目仓库均已公开；K230 仓库使用正式名称 `K230-Vision-Gimbal`。页脚的邮件图标与地址合并为一个入口。

## 发布与更新

GitHub Pages 使用 GitHub Actions 构建和发布。`.github/workflows/deploy.yml` 在 `main` 分支收到提交时安装锁定依赖、执行 `astro check`、构建静态页面并发布 `dist/`。第三方 Action 固定到经过核验的提交。

`astro.config.mjs` 的 `site` 为 `https://clgtwdll.github.io`；仓库名为 `CLGTWDLL.github.io`，无需项目子路径。不要直接部署到其他仓库子路径，否则须同时修改所有内部链接与资源路径。

个人信息与项目文字分别在 `src/data/profile.ts`、`src/data/projects.ts`。替换图片或 PDF 后先运行检查、构建及本地预览，再提交至 `main`。

不提交依赖目录、构建产物、环境变量或日志。源码中的参与工作和实验指标只反映已有记录；图片、简历与数据摘要属于个人项目展示素材，不声明额外授权许可。
