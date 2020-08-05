import { Config } from 'bili'

const config: Config = {
    input: 'src/index.js',
    output: {
        format: [
            'cjs', 'cjs-min', 'esm', 'esm-min', 'umd', 'umd-min',
        ],
        moduleName: 'VueCloudinaryMediaLibrary',
    },
  }
  
  export default config