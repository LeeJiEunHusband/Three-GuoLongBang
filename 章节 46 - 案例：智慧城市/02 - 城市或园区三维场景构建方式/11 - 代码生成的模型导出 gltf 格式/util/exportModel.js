import { GLTFExporter } from '../../../three/examples/jsm/exporters/GLTFExporter.js';

function exportModel(input, fileName) {
  const gltfExporter = new GLTFExporter();

  const options = {
    trs: false,
    onlyVisible: true,
    truncateDrawRange: true,
    binary: true,
    forceIndices: false,
    forcePowerOfTwoTextures: false,
  };

  gltfExporter.parse(
    input,
    (result) => {
      if (result instanceof ArrayBuffer) {
        saveFile(
          new Blob([result], { type: 'application/octet-stream' }),
          fileName + '.glb'
        );
      } else {
        saveFile(
          new Blob([JSON.stringify(result, null, 2)], { type: 'text/plain' }),
          fileName + '.gltf'
        );
      }
    },
    options
  );
}

function saveFile(blob, filename) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // 触发下载
  link.click();

  // 释放内存
  URL.revokeObjectURL(link.href);
}

export default exportModel;
