import * as Three from '../../../three/build/three.module.js';

function createPolygonMesh(coordinates) {
  const points = [];
  coordinates[0].forEach((coordinate) => {
    points.push(new Three.Vector2(...coordinate));
  });

  // 二维形状
  const shape = new Three.Shape(points);

  // 二维平面几何
  const shapeGeometry = new Three.ShapeGeometry(shape);

  // 漫反射材质
  const meshLambertMaterial = new Three.MeshLambertMaterial({
    color: 0x0099ff,
    side: Three.DoubleSide,
  });

  // 网格对象
  const mesh = new Three.Mesh(shapeGeometry, meshLambertMaterial);

  return mesh;
}

export default createPolygonMesh;
