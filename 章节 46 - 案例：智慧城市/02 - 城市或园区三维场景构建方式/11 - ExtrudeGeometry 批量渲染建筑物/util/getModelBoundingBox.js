import * as Three from '../../../three/build/three.module.js';

// 计算三维模型的包围盒尺寸和中心点坐标
function getModelBoundingBox(object) {
  // 创建包围盒对象，用来计算三维物体的整体范围
  const box3 = new Three.Box3();
  box3.expandByObject(object);

  // 创建三维向量对象，用来存储包围盒的长宽高
  const size = new Three.Vector3();
  box3.getSize(size);

  // 创建三维向量对象，用来存储包围盒的中心点坐标
  const center = new Three.Vector3();
  box3.getCenter(center);

  return {
    size,
    center,
  };
}

export default getModelBoundingBox;
