import * as Three from '../../../three/build/three.module.js';
import getModelSize from '../util/getModelSize.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

// 二维形状
const shape = new Three.Shape([
  new Three.Vector2(0, 0),
  new Three.Vector2(60, 0),
  new Three.Vector2(60, 80),
  new Three.Vector2(40, 120),
  new Three.Vector2(-20, 80),
]);

// 二维平面几何
const shapeGeometry = new Three.ShapeGeometry(shape);

// 漫反射材质
const meshLambertMaterial = new Three.MeshLambertMaterial({
  color: 0x00ffff,
  side: Three.DoubleSide,
});

// 网格对象
const mesh = new Three.Mesh(shapeGeometry, meshLambertMaterial);

console.log('size', getModelSize(mesh));

group.add(mesh);

export default group;
