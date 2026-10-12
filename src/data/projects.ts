export interface Project {
  tags?: string[];
  slug: string;
  name: string;
  englishName: string;
  summary: string;
  contributionSummary: string;
  resultSummary: string;
  overview: string[];
  featured: boolean;
  github: string;
  githubName: string;
  githubPrivate?: boolean;
  image: string;
  imageAlt: string;
  imageCaption: string;
  secondaryImage: string | null;
  secondaryAlt: string;
  secondaryCaption: string;
  videoUrl: string | null;
  contributions: { title: string; description: string }[];
  design: { title: string; description: string }[];
  designNote: string;
  results: { metric: string; value: string; evidence: string }[];
  resultNote: string;
  evidence: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    tags: ['URDF / STL', '仿真建模'],
    slug: 'rhinopi-x1', name: 'RhinoPi X1', englishName: '轮腿机器人', featured: true,
    summary: '基于五杆轮腿机构，开展机器人建模、LQR + VMC 控制仿真与 CAN / IMU 实机联调。',
    contributionSummary: '参与五杆机构模型与 CAN / IMU 实机联调，协助仿真调参。',
    resultSummary: '已建立五杆闭环仿真模型，当前模型总质量约 2.20 kg；实机控制性能仍需统一测试记录。',
    overview: [
      'RhinoPi X1 是一个结合轮式移动与五杆腿机构的轮腿机器人项目。仓库包含机器人模型、控制仿真，以及电机和姿态传感器的通信、诊断与联调代码。',
      '当前工作围绕机构模型、仿真调参和实机通信展开。仿真与实机采用不同的验证环节，模型参数和仿真表现需要结合实机记录进一步核对。',
    ],
    github: 'https://github.com/CLGTWDLL/Wheel_Robot_Pi', githubName: 'CLGTWDLL / Wheel_Robot_Pi',
    image: '/images/projects/rhinopi-reference.png',
    imageAlt: '由 RhinoPi X1 仓库真实 URDF 和 STL 渲染的五杆轮腿机器人模型',
    imageCaption: '仓库 URDF / STL 的 MuJoCo 渲染；仿真模型，非实机照片。',
    secondaryImage: null, secondaryAlt: '', secondaryCaption: '', videoUrl: null,
    contributions: [
      { title: '五杆机构模型', description: '参与五杆腿机构的建模与模型调试，协助核对模型中的机构关系。' },
      { title: 'CAN / IMU 实机联调', description: '参与电机 CAN 通信和 IMU 姿态信息的实机联调，协助排查通信与系统集成问题。' },
      { title: '仿真调参', description: '协助 LQR + VMC 仿真的参数调试与运行观察。' },
    ],
    design: [
      { title: '机构与仿真模型', description: '使用 URDF 和 STL 描述机身、五杆腿机构与轮子；转换为 MuJoCo 模型并加入机构闭环约束。' },
      { title: '控制仿真', description: '围绕 LQR 与 VMC 进行控制仿真和参数调试，结合姿态、腿长与运动状态观察系统响应。' },
      { title: '实机接口', description: '通过 CAN 接入电机控制与状态信息，通过 IMU 获取姿态信息；保留独立通信与诊断程序用于联调。' },
    ],
    designNote: '系统设计描述来自仓库代码；个人贡献仅列出已确认参与的工作。',
    results: [
      { metric: '模型总质量', value: '约 2.20 kg', evidence: '当前 URDF 转换后的 MuJoCo 模型质量求和；属于模型参数。' },
      { metric: '机身网格规模', value: '190,000 → 30,000 个三角面', evidence: 'base_link 的原始与当前 STL 文件记录，用于降低模型网格规模。' },
      { metric: '实机性能', value: '待统一测试', evidence: '尚缺站立漂移、响应时间、连续运行时长等可复核的实机记录。' },
    ],
    resultNote: '模型渲染不代表实机运行结果。历史仿真记录涉及不同模型和调参阶段，暂不作为当前系统的性能结论。',
    evidence: [{ label: '模型与控制源码', url: 'https://github.com/CLGTWDLL/Wheel_Robot_Pi' }],
  },
  {
    tags: ['目标检测', '云台控制', 'STM32', 'K230'],
    slug: 'k230-vision', name: 'K230 视觉与云台联调', englishName: '目标检测与电机控制', featured: false,
    summary: '面向钢球检测与位置反馈，结合 K230 端侧视觉、STM32 云台控制与电机驱动联调。',
    contributionSummary: '参与数据采集、检测部署，以及视觉与云台、电机的接口联调。',
    resultSummary: '相机标定 29 / 30 张成功，总重投影 RMS 为 0.357 px；通过串口开展视觉输出与云台电机控制联调。',
    overview: ['项目围绕视觉识别与云台、电机控制的协同展开：K230 完成钢球检测与位置输出，STM32 侧接收视觉信息并对接云台电机控制。工作重点包括数据采集、端侧部署、相机标定，以及视觉输出、串口通信和电机响应的系统联调。'],
    github: 'https://github.com/CLGTWDLL/Electronic', githubName: 'CLGTWDLL / Electronic',
    image: '/images/projects/k230-detection.jpg', imageAlt: '已有项目输出：钢球周围的检测框和 Steel_ball 标签',
    imageCaption: '已有钢球检测输出；单张示例不代表整体检测精度。',
    secondaryImage: '/images/projects/k230-calibration.jpg', secondaryAlt: '实际采集的相机棋盘格标定图像',
    secondaryCaption: '相机标定输入图像，640 × 640 px。', videoUrl: null,
    contributions: [
      { title: '数据采集', description: '参与目标图像采集，为检测与实验验证提供数据。' },
      { title: '检测部署', description: '参与 K230 上的检测部署与运行调试。' },
      { title: '视觉与云台、电机联调', description: '参与 K230 视觉输出与 STM32 云台控制的串口接口联调，协助核对视觉位置反馈、控制指令与电机响应。' },
    ],
    design: [
      { title: '端侧视觉', description: '在 K230 上执行目标检测与位置输出，为云台控制提供视觉位置反馈。' },
      { title: '标定与几何模型', description: '通过棋盘格标定获得相机参数，结合几何模型检查图像位置与空间位置的关系。' },
      { title: '云台与电机控制', description: '通过串口将视觉信息传递至 STM32 云台控制侧，对接电机驱动程序，并联调视觉反馈与电机响应。' },
    ],
    designNote: '检测图片来自已有项目素材，标定指标来自本地保存的结果文件。',
    results: [
      { metric: '标定成功图像', value: '29 / 30', evidence: '640 × 640 px 输入；棋盘格 11 × 8 个内角点，格长 15 mm。' },
      { metric: '总重投影 RMS', value: '0.35739 px', evidence: 'camera_calibration.json 中记录的总重投影误差。' },
      { metric: '固定轴位置模型', value: '未通过验收', evidence: '已有几何结果将 fixed_line_model_accepted 标记为 false，仍需处理异常点与模型适配问题。' },
    ],
    resultNote: '标定误差不等于目标检测精度或整机定位精度。尚缺统一测试集上的检测指标、端侧 FPS 和完整控制效果记录。',
    evidence: [{ label: '标定结果摘要', url: '/evidence/k230-calibration.json' }],
  },
  {
    tags: ['几何定位', '搜索策略', '仿真验证'],
    slug: 'mathematical-modeling', name: '数学建模竞赛B题', englishName: '干扰源定位与清除', featured: false,
    summary: '围绕无线电干扰源定位与清除，在第三题和第四题中研究几何定位、搜索策略与反馈修正，并进行仿真验证。',
    contributionSummary: '参与几何定位、搜索策略、实验复核和论文图表。',
    resultSummary: '第三题平均虚拟任务时间 3187.65 s；第四题平均虚拟任务时间 6183.91 s。',
    overview: ['围绕无线电干扰源定位与清除问题，建立带测角误差的几何定位模型，并结合搜索、决策与反馈修正进行实验。项目使用本地离线环境开展批量验证，保留运行记录和论文图表。'],
    github: 'https://github.com/CLGTWDLL/Mathtournament', githubName: 'CLGTWDLL / Mathtournament',
    githubPrivate: true,
    image: '/images/projects/modeling-results.png', imageAlt: '问题三的四十次运行统计图：虚拟任务时间与目标数量',
    imageCaption: '问题三：已有 40 次本地运行统计图。',
    secondaryImage: '/images/projects/modeling-trajectory.png', secondaryAlt: '数学建模实验中的实际轨迹与反馈分析图',
    secondaryCaption: '已有实验的轨迹与反馈图；来自本地离线环境。', videoUrl: null,
    contributions: [
      { title: '模型与策略', description: '参与带测角误差的几何定位建模、搜索策略设计及反馈修正。' },
      { title: '实验与论文', description: '参与批量实验结果复核、论文分析和图表整理。' },
    ],
    design: [
      { title: '几何定位', description: '从观测角度与位置关系估计目标位置，并考虑测角误差对定位结果的影响。' },
      { title: '搜索与反馈', description: '结合目标搜索、路径决策与反馈信息修正后续行动。' },
      { title: '批量验证', description: '在本地离线环境中执行多次运行，对任务完成情况、虚拟时间及轨迹进行统计。' },
    ],
    designNote: '第三题与第四题分别采用对应本地实验记录中的平均虚拟任务时间。',
    results: [
      { metric: '第三题虚拟任务时间', value: '平均 3187.65 s', evidence: '取自第三题本地运行记录的 mean_virtual_s。' },
      { metric: '第四题虚拟任务时间', value: '平均 6183.91 s', evidence: '取自第四题动态策略对比记录的 mean_dynamic_virtual_s。' },
    ],
    resultNote: '这些指标来自本地离线环境，未使用官方模拟器；虚拟任务时间不等于程序耗时，也不代表正式比赛成绩。',
    evidence: [
      { label: '第三题实验摘要', url: '/evidence/modeling-q3-summary.json' },
      { label: '第四题实验摘要', url: '/evidence/modeling-q4-summary.json' },
    ],
  },
];
