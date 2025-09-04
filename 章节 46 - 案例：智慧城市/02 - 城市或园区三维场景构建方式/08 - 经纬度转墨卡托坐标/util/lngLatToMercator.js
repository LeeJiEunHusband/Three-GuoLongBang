// 经纬度转墨卡托坐标
function lngLatToMercator(lng, lat) {
  const x = (lng * 20037508.34) / 180;
  let y = Math.log(Math.tan(((90 + lat) * Math.PI) / 360)) / (Math.PI / 180);
  y = (y * 20037508.34) / 180;
  return { x, y };
}

export default lngLatToMercator;
