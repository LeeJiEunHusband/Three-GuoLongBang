import * as Three from '../../../three/build/three.module.js';
import getModelSize from '../util/getModelSize.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

// 二维形状：相当于画一条闭合的线
const firstShape = new Three.Shape([
  new Three.Vector2(0, 0),
  new Three.Vector2(60, 0),
  new Three.Vector2(60, 80),
  new Three.Vector2(40, 120),
  new Three.Vector2(-20, 80),
]);
const secondShape = new Three.Shape([
  new Three.Vector2(100, 0),
  new Three.Vector2(160, 0),
  new Three.Vector2(160, 80),
  new Three.Vector2(140, 120),
]);
// 二维平面几何：相当于填充多个多边形的面
const shapeGeometry = new Three.ShapeGeometry([firstShape, secondShape]);
// 漫反射材质
const meshLambertMaterial = new Three.MeshLambertMaterial({
  color: 0x00ffff,
  side: Three.DoubleSide,
});
// 网格对象
const mesh = new Three.Mesh(shapeGeometry, meshLambertMaterial);

// 计算三维模型的包围盒尺寸
console.log('size', getModelSize(mesh));

group.add(mesh);

export default group;
