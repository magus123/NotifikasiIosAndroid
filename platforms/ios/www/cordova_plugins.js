cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-firebasex.FirebasePlugin",
      "file": "plugins/cordova-plugin-firebasex/www/firebase.js",
      "pluginId": "cordova-plugin-firebasex",
      "clobbers": [
        "FirebasePlugin"
      ]
    },
    {
      "id": "cordova-plugin-hello-c.helloc",
      "file": "plugins/cordova-plugin-hello-c/www/helloc.js",
      "pluginId": "cordova-plugin-hello-c",
      "clobbers": [
        "helloc"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-custom-config": "5.1.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-dialogs": "1.3.2-dev",
    "cordova-plugin-enable-multidex": "0.2.0",
    "cordova-plugin-firebasex": "11.0.3",
    "cordova-plugin-hello-c": "1.1.1",
    "cordova-plugin-whitelist": "1.3.4"
  };
});