import * as Three from '../../../three/build/three.module.js';
import createMultiPolygonMesh from '../util/createMultiPolygonMesh.js';
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
    if (feature.geometry.type === 'Polygon') {
      feature.geometry.coordinates = [feature.geometry.coordinates];
    }
    huangpuRiverGroup.add(createMultiPolygonMesh(feature.geometry.coordinates));
  });

  // 计算三维模型的包围盒尺寸和中心点坐标
  const { size, center } = getModelBoundingBox(huangpuRiverGroup);
  console.log('size', size);
  console.log('center', center);

  group.add(huangpuRiverGroup);
});

fileLoader.load('./geojson/上海外滩.json', (data) => {
  const shanghaiBundGroup = new Three.Group();
  data.features.forEach((feature) => {
    if (feature.geometry.type === 'Polygon') {
      feature.geometry.coordinates = [feature.geometry.coordinates];
    }
    shanghaiBundGroup.add(createMultiPolygonMesh(feature.geometry.coordinates));
  });

  group.add(shanghaiBundGroup);
});

export default group;
