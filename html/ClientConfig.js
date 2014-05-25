var igeClientConfig = {
  include: [
    '../libs/isogenic-map/js/IsogenicMap.js',
    '../libs/isogenic-map/js/SingleTileLayer.js',
    '../libs/isogenic-map/js/TransitionTileLayer.js',
    'z_start.js'
  ]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') {
  module.exports = igeClientConfig;
}