// 引入 WebGL 渲染器
import { webGLRenderer } from './renderer.js';
// 引入场景对象
import scene from './scene/index.js';
// 引入透视相机
import { perspectiveCamera } from './camera.js';
import { OrbitControls } from '../../three/examples/jsm/controls/OrbitControls.js';

// 控制器：旋转、缩放、平移相机
new OrbitControls(perspectiveCamera, webGLRenderer.domElement);

// 渲染函数
function render() {
  // WebGL 渲染器渲染场景和相机
  webGLRenderer.render(scene, perspectiveCamera);

  // 循环渲染
  requestAnimationFrame(render);

  // 打印透视相机位置，方便调试透视相机位置
  // console.log('perspectiveCamera.position', perspectiveCamera.position);
}

// 执行第一次渲染
render();

export { webGLRenderer };
