import * as Three from '../../../three/build/three.module.js';
import group from './group.js';
import { x, y, z } from '../camera.js';

// 场景
const scene = new Three.Scene();

scene.add(group);

// 平行光：若存在，则场景会出现方向性光照和阴影，物体表面根据光线方向产生明暗变化；若不存在，则缺少方向性光照和阴影效果。
const firstDirectionalLight = new Three.DirectionalLight(0xffffff, 0.8);
firstDirectionalLight.position.set(400, 200, 300);
scene.add(firstDirectionalLight);

const secondDirectionalLight = new Three.DirectionalLight(0xffffff, 0.8);
secondDirectionalLight.position.set(-400, -200, -300);
scene.add(secondDirectionalLight);

// 环境光：若存在，则场景各处均匀受光，物体不会产生阴影或明暗差异；若不存在，则物体阴暗面可能完全黑暗。
const ambientLight = new Three.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// 坐标轴辅助器
const axesHelper = new Three.AxesHelper(250);
// 设置坐标轴辅助器的位置
axesHelper.position.set(x, y, z);
scene.add(axesHelper);

export default scene;
