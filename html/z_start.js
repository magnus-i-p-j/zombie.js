var triggerZed = function () {
  zed.init('z_client');
};
if (typeof zed !== 'undefined') {
  window.triggerZed();
  window.triggerZed = false;
}