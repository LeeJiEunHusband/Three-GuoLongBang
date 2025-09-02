import * as Three from '../../../three/build/three.module.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

// 长方体几何体
const boxGeometry = new Three.BoxGeometry(50, 50, 50);
// 漫反射材质：若受光照，则表面有明暗变化但无高光；若无光源，则显得暗淡或黑色。
const meshLambertMaterial = new Three.MeshLambertMaterial({ color: 0x0000ff });
// 网格对象
const mesh = new Three.Mesh(boxGeometry, meshLambertMaterial);

group.add(mesh);

export default group;
