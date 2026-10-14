export const profile = {
  name: '李浩涵',
  englishName: 'Haohan Li',
  university: '重庆大学',
  universityEnglish: 'Chongqing University',
  college: '国家卓越工程师学院',
  email: '20244783@stu.cqu.edu.cn',
  github: 'https://github.com/CLGTWDLL',
  interests: ['机器人系统'],
  introduction: '我在重庆大学国家卓越工程师学院学习，研究兴趣是机器人系统。项目经历包括五杆轮腿机构建模与 CAN / IMU 联调、K230 视觉与云台、电机联调，以及数学建模竞赛中的几何定位与搜索策略研究。',
  major: null as string | null,
  educationPeriod: '2024.9 至今' as string | null,
  awards: [
    { name: 'VEX 亚洲公开赛 VEXU 全能奖', year: '2025–2026' },
    { name: 'VEX 亚洲公开赛 VEXU 一等奖', year: '2025–2026' },
    { name: '科创青禾全国 VEX 精英赛 VEXU 一等奖', year: '2026' },
    { name: '国家奖学金', year: '2025–2026 学年' },
    { name: '全国大学生电子设计竞赛重庆赛区省级三等奖', year: '2026' },
    { name: '重庆大学基础机器人训练赛冠军', year: '2024' },
  ] as { name: string; year: string }[],
  // Add your real PDF to public/files/, then set /files/lihaohan-cv.pdf here.
  resumeUrl: '/files/lihaohan-cv.pdf' as string | null,
};
