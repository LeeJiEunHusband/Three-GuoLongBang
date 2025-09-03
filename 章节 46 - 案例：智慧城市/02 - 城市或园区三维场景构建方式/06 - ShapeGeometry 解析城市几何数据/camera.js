import * as THREE from '../../three/build/three.module.js';

// 透视相机
const perspectiveCamera = new THREE.PerspectiveCamera(
  // 视野角度：相机的垂直视野角度
  // 若 fov 大，则视野广，画面显得小；若 fov 小，则视野窄，画面显得大。
  30,
  // 宽高比：画面宽度与高度的比例
  // 若 aspect 正确，则画面不变形；若 aspect 错误，则画面会被拉伸或压扁。
  window.innerWidth / window.innerHeight,
  // 近裁剪面：相机前方多近的距离开始渲染
  // 若物体靠近相机距离小于 near，则不会显示；若大于 near，则正常显示。
  0.01,
  // 远裁剪面：相机前方多远的距离渲染结束
  // 若物体距离相机超过 far，则不会显示；若小于 far，则正常显示。
  3000
);

// 包围盒的中心点坐标
const x = 121.49;
const y = 31.23;
const z = 0;

// 偏移量
const offset = 0.02;

perspectiveCamera.position.set(x + offset, y + offset, z + offset);
perspectiveCamera.lookAt(x, y, z);

// 当窗口大小变化时，重新设置透视相机的宽高比和投影矩阵
window.addEventListener('resize', () => {
  perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
  // 需要手动调用 updateProjectionMatrix 函数
  perspectiveCamera.updateProjectionMatrix();
});

export { perspectiveCamera, x, y, z };
