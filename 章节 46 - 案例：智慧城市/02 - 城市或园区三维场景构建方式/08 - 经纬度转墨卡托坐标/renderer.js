import * as THREE from '../../three/build/three.module.js';

const { devicePixelRatio, innerWidth, innerHeight } = window;

// 创建 WebGL 渲染器
const webGLRenderer = new THREE.WebGLRenderer({
  // 开启抗锯齿
  antialias: true,
});
// 设置 WebGL 渲染器的像素比（解决高分屏模糊的问题）
webGLRenderer.setPixelRatio(devicePixelRatio);
// 设置 WebGL 渲染器的画布大小（与浏览器窗口大小一致）
webGLRenderer.setSize(innerWidth, innerHeight);

// 当窗口大小变化时，重新设置 WebGL 渲染器的画布大小
window.addEventListener('resize', () => {
  webGLRenderer.setSize(innerWidth, innerHeight);
});

export { webGLRenderer };
