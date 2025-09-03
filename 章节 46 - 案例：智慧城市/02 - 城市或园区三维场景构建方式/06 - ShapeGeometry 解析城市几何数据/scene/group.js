import * as Three from '../../../three/build/three.module.js';
import createPolygonMesh from '../util/createPolygonMesh.js';
import getModelBoundingBox from '../util/getModelBoundingBox.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

// 创建通用文件加载器
const fileLoader = new Three.FileLoader();

// 设置通用文件加载器的响应类型
fileLoader.setResponseType('json');

// 加载 GeoJSON 数据
fileLoader.load('./geojson/黄浦江.json', (data) => {
  const huangpuRiverGroup = new Three.Group();
  data.features.forEach((feature) => {
    huangpuRiverGroup.add(createPolygonMesh(feature.geometry.coordinates));
  });

  const { size, center } = getModelBoundingBox(huangpuRiverGroup);
  console.log('size', size);
  console.log('center', center);

  group.add(huangpuRiverGroup);
});

export default group;
