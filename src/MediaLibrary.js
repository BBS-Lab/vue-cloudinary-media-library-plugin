const addScript = () => {
  const script = document.createElement('script');
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
export const MediaLibrary = function MediaLibrary() {
  this.widget = null;
  this.callbak = null;

  addScript();

  this.init = (options) => {
    if (this.widget !== null) {
      return;
    }

    // eslint-disable-next-line  no-undef
    this.widget = cloudinary.createMediaLibrary(options, {
      insertHandler: (data) => {
        if (this.callback !== null) {
          this.callback(data);
        }
      },
    });
  };

  this.show = (callback) => {
    if (this.widget !== null) {
      this.callback = callback;
      this.widget.show();
    }
  };

  return this;
};

export default { MediaLibrary };
