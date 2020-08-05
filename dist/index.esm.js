var addScript = function addScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://media-library.cloudinary.com/global/all.js';
  document.head.appendChild(script);
};
/**
 * Core instance of media library
 *
 * @returns {MediaLibrary}
 * @constructor
 */


var MediaLibrary = function MediaLibrary() {
  var _this = this;

  this.widget = null;
  this.callbak = null;
  addScript();

  this.init = function (options) {
    if (_this.widget !== null) {
      return;
    } // eslint-disable-next-line  no-undef


    _this.widget = cloudinary.createMediaLibrary(options, {
      insertHandler: function insertHandler(data) {
        if (_this.callback !== null) {
          _this.callback(data);
        }
      }
    });
  };

  this.show = function (callback) {
    if (_this.widget !== null) {
      _this.callback = callback;

      _this.widget.show();
    }
  };

  return this;
};

var VueCloudinaryMediaLibrary = {
  install: function install(Vue) {
    var mediaLibrary = new MediaLibrary(); // eslint-disable-next-line no-param-reassign, no-multi-assign

    Vue.cloudinaryMediaLibrary = Vue.prototype.$cloudinaryMediaLibrary = mediaLibrary;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.VueCloudinaryMediaLibrary = VueCloudinaryMediaLibrary;
}

export default VueCloudinaryMediaLibrary;
