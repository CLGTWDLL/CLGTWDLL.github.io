import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clgtwdll.github.io',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/projects/': '/#projects',
    '/projects/rhinopi-x1/': 'https://github.com/CLGTWDLL/Wheel_Robot_Pi',
    '/projects/k230-vision/': 'https://github.com/CLGTWDLL/K230-Vision-Gimbal',
    '/projects/mathematical-modeling/': 'https://github.com/CLGTWDLL/Mathtournament',
  },
  devToolbar: { enabled: false },
});
