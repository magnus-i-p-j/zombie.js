var igeClientConfig = {
  include: [
    '../libs/isogenic-map/js/IsogenicMap.js',
    '../libs/isogenic-map/js/TextureMapManager.js'
  ]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
  module.exports = igeClientConfig;
}