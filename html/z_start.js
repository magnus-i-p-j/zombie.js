var triggerZed = function () {
  zed.init('z_client');
};
if (zed) {
  window.triggerZed();
  window.triggerZed = false;
}