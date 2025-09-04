import * as Three from '../../../three/build/three.module.js';
import lngLatToMercator from './lngLatToMercator.js';

function createMultiPolygonMesh(coordinatesList) {
  const shapes = [];
  coordinatesList.forEach((coordinates) => {
    const points = [];
    coordinates[0].forEach((coordinate) => {
      // 经纬度转墨卡托坐标
      const { x, y } = lngLatToMercator(...coordinate);
      points.push(new Three.Vector2(x, y));
    });

    // 二维形状：相当于画一条闭合的线
    const shape = new Three.Shape(points);
    shapes.push(shape);
  });

  // 二维平面几何：相当于填充多个多边形的面
  const shapeGeometry = new Three.ShapeGeometry(shapes);
  // 漫反射材质
  const meshLambertMaterial = new Three.MeshLambertMaterial({
    color: 0x0099ff,
    side: Three.DoubleSide,
  });
  // 网格对象
  const mesh = new Three.Mesh(shapeGeometry, meshLambertMaterial);

  return mesh;
}

export default createMultiPolygonMesh;
