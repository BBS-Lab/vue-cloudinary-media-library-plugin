import { MediaLibrary } from './MediaLibrary';

const VueCloudinaryMediaLibrary = {
  install(Vue) {
    const mediaLibrary = new MediaLibrary();
    // eslint-disable-next-line no-param-reassign, no-multi-assign
    Vue.cloudinaryMediaLibrary = Vue.prototype.$cloudinaryMediaLibrary = mediaLibrary;
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.VueCloudinaryMediaLibrary = VueCloudinaryMediaLibrary;
}

export default VueCloudinaryMediaLibrary;
