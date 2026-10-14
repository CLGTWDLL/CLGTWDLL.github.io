export interface Project {
  tags?: string[];
  slug: string;
  name: string;
  englishName: string;
  summary: string;
  contributionSummary: string;
  resultSummary: string;
  featured: boolean;
  github: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  evidence: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    tags: ['URDF / STL', '仿真建模'],
    slug: 'rhinopi-x1', name: '轮腿机器人', englishName: '基于RhinoPi X1', featured: true,
    summary: '基于五杆轮腿机构，开展机器人建模、LQR + VMC 控制仿真与实机联调。',
    contributionSummary: '五连杆机构设计与仿真调参，并进行实机联调',
    resultSummary: '在MuJoCo内部完成模型搭建，并实现了平衡和行走',
    github: 'https://github.com/CLGTWDLL/Wheel_Robot_Pi',
    image: '/images/projects/wheel-legged-demo.gif',
    imageAlt: '基于 RhinoPi X1 的轮腿机器人实机演示动图',
    imageCaption: '基于 RhinoPi X1 的轮腿机器人实机演示。',
    evidence: [],
  },
  {
    tags: ['目标检测', '云台控制', 'STM32', 'K230'],
    slug: 'k230-vision', name: 'K230 视觉与云台联调', englishName: '目标检测与电机控制', featured: false,
    summary: '面向钢球检测与位置反馈，结合 K230 端侧视觉、STM32 云台控制与电机驱动联调。',
    contributionSummary: '参与数据采集、检测部署，以及视觉与云台、电机的接口联调。',
    resultSummary: '通过串口开展视觉输出与云台电机控制联调。',
    github: 'https://github.com/CLGTWDLL/K230-Vision-Gimbal',
    image: '/images/projects/k230-detection.jpg',
    imageAlt: '钢球目标检测框和 Steel_ball 标签',
    imageCaption: 'K230 项目钢球目标检测输出。',
    evidence: [{ label: '标定结果摘要', url: '/evidence/k230-calibration.json' }],
  },
  {
    tags: ['几何定位', '搜索策略', '仿真验证'],
    slug: 'mathematical-modeling', name: '干扰源定位与清除', englishName: '数学建模竞赛B题', featured: false,
    summary: '围绕无线电干扰源定位与清除，在第三题和第四题中研究几何定位、搜索策略与反馈修正，并进行仿真验证。',
    contributionSummary: '参与几何定位、搜索策略、实验复核和论文图表。',
    resultSummary: '采用几何定位、贝叶斯后验更新与覆盖搜索策略，完成第三、第四题的干扰源定位与清除仿真。',
    github: 'https://github.com/CLGTWDLL/Mathtournament',
    image: '/images/projects/modeling-paper-first-page.png',
    imageAlt: '数学建模竞赛 B 题论文第一页的标题与部分摘要',
    imageCaption: '数学建模竞赛 B 题论文首页：标题与部分摘要。',
    evidence: [
      { label: '第三题实验摘要', url: '/evidence/modeling-q3-summary.json' },
      { label: '第四题实验摘要', url: '/evidence/modeling-q4-summary.json' },
    ],
  },
];
