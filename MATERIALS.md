# 后续补充素材

当前已使用已有项目素材，不再使用装饰性示意图或虚构图片。贡献按本人确认的“参与 / 协助”描述；不需要把团队工作声明为独立完成。

## 优先补充

1. RhinoPi X1：实机全景照片；站立、行走或联调视频；测试条件明确的漂移、响应时间、连续运行时长等记录。当前图片是实际 URDF / STL 模型渲染，不是实机照片。
2. 个人信息：专业名称；后续更新的可公开简历 PDF。现有就读时间、奖项和简历已接入网站。
3. K230：端侧运行照片或视频；统一测试集上的检测精度、FPS、定位误差及测试条件。当前单张检测图与相机 RMS 不能替代这些指标。
4. 数学建模：任务完整题目与正式比赛名称；如有官方测试记录或奖项，请提供可核对材料。已有本地 40 次批量运行图表和摘要已使用。

## 更新位置

- 教育、奖项、个人介绍：`src/data/profile.ts`。
- 图文、贡献与指标：`src/data/projects.ts`。
- 图片放 `public/images/projects/`；更新对应 image / secondaryImage 与图注。
- 本地视频放 `public/videos/`，将对应 videoUrl 设置为 `/videos/文件名.mp4`。仅填真实已有的可公开文件。
- 简历放 `public/files/lihaohan-cv.pdf`，将 profile.resumeUrl 设置为 `/files/lihaohan-cv.pdf`。
- 更新后执行 `npm run check` 与 `npm run build`，再检查电脑和手机预览。

网站通过 GitHub Pages 发布，不恢复此前移除的 B 站链接。数学建模源码仓库的访问权限继续保持不变。
