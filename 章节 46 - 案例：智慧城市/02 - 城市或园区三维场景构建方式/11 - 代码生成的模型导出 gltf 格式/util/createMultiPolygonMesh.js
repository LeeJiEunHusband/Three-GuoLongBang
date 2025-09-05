import * as Three from '../../../three/build/three.module.js';
import lngLatToMercator from './lngLatToMercator.js';

function createMultiPolygonMesh(coordinatesList, height) {
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

  let geometry;
  if (height && height > 0) {
    // 二维平面拉伸几何体：将一个或多个二维形状（Shape）沿着 Z 轴方向拉伸成三维几何体
    geometry = new Three.ExtrudeGeometry(shapes, {
      // 拉伸的深度（沿 Z 轴的厚度）
      depth: height,
      // 是否启用斜角（倒角），用于让边缘更平滑
      bevelEnabled: false,
    });
  } else {
    // 二维平面几何：相当于填充多个多边形的面
    geometry = new Three.ShapeGeometry(shapes);
  }

  // 漫反射材质
  const meshLambertMaterial = new Three.MeshLambertMaterial({
    color: 0x0099ff,
    side: Three.DoubleSide,
  });
  // 网格对象
  const mesh = new Three.Mesh(geometry, meshLambertMaterial);

  return mesh;
}

export default createMultiPolygonMesh;
