import * as Three from '../../../three/build/three.module.js';
import { GLTFLoader } from '../../../three/examples/jsm/loaders/GLTFLoader.js';
import getModelSize from '../util/getModelSize.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

// 创建 GLTF 模型加载器
const gltfLoader = new GLTFLoader();

// 加载 GLTF 模型
gltfLoader.load('./model/上海外滩.glb', (gltf) => {
  console.log('size', getModelSize(gltf.scene));

  group.add(gltf.scene);
});

export default group;
