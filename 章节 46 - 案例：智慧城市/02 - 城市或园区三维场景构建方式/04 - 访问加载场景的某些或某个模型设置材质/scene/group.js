import * as Three from '../../../three/build/three.module.js';
import { GLTFLoader } from '../../../three/examples/jsm/loaders/GLTFLoader.js';

// 组（容器）：统一管理多个网格对象
const group = new Three.Group();

const gltfLoader = new GLTFLoader();

gltfLoader.load('./model/上海外滩.glb', (gltf) => {
  console.log('gltf.scene.children', gltf.scene.children);

  // 获取地面对象，并设置地面对象的材质
  const ground = gltf.scene.getObjectByName('地面');
  ground.material = new Three.MeshLambertMaterial({
    color: 0x556b2f,
  });

  // 获取河面对象，并设置河面对象的材质
  const riverSurface = gltf.scene.getObjectByName('河面');
  riverSurface.material = new Three.MeshLambertMaterial({
    color: 0x1e90ff,
  });

  // 获取楼房对象，并递归遍历设置楼房对象的材质
  gltf.scene.getObjectByName('楼房').traverse((object) => {
    if (object.type === 'Mesh') {
      object.material = new Three.MeshLambertMaterial({
        color: 0xa9a9a9,
      });
    }
  });

  // 获取东方明珠对象，并设置东方明珠对象的材质
  const orientalPearl = gltf.scene.getObjectByName('东方明珠');
  orientalPearl.material = new Three.MeshLambertMaterial({
    color: 0xff69b4,
  });

  group.add(gltf.scene);
});

export default group;
