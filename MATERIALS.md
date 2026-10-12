# 展示素材与结果来源

使用本人提供的图书馆照片和实际项目素材。个人贡献按本人确认的“参与 / 协助”描述。

## 当前素材

1. 校园背景：`public/images/cqu-library.jpg`，真实图书馆照片，以 CSS 降低对比度和饱和度、渐隐处理。
2. RhinoPi X1：`public/images/projects/rhinopi-reference.png`，项目 URDF / STL 的 MuJoCo 模型渲染。
3. K230：`public/images/projects/k230-detection.jpg`，钢球目标检测输出；标定摘要为 `public/evidence/k230-calibration.json`。
4. 数学建模：`public/images/projects/modeling-results.png`，第三题本地离线仿真实验统计；第三题、第四题摘要分别保存于 `public/evidence/`。
5. 简历：`public/files/lihaohan-cv.pdf`；教育信息和六项奖项已由本人确认。

## 更新位置

- 教育、奖项、个人介绍：`src/data/profile.ts`。
- 图文、贡献与指标：`src/data/projects.ts`。
- 图片放 `public/images/projects/`；更新对应 image 与图注。
- 简历放 `public/files/lihaohan-cv.pdf`，将 profile.resumeUrl 设置为 `/files/lihaohan-cv.pdf`。
- 更新后执行 `npm run check` 与 `npm run build`，再检查电脑和手机预览。

网站通过 GitHub Pages 发布；项目入口直接链接公开 GitHub 仓库，历史详情地址也跳转到仓库。
