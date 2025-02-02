
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/employees"
  },
  {
    "renderMode": 2,
    "route": "/create-employees"
  },
  {
    "renderMode": 2,
    "route": "/update-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/update-employee/*"
  },
  {
    "renderMode": 2,
    "route": "/details-employee/123"
  },
  {
    "renderMode": 0,
    "route": "/details-employee/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/employees",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 4913, hash: '8eeaa650d7dfb278aeefbef21d907ba7ecdbd763dedbcba4877c7932c7892dfe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1012, hash: '304d1d5157715d461650acbb5aab441610dabdbbdaa10b24eda0ec909549a9b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['employees/index.html', {size: 11479, hash: 'c10066fb83f8e0356e27f2a5c5315611efb990893a039dec0c9cc3db2a3ecb3c', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)}], 
['create-employees/index.html', {size: 16977, hash: 'a5432c92ec0dd04a4af2305bc01449ef7f12c3ddf5a0b9f20998583571306d32', text: () => import('./assets-chunks/create-employees_index_html.mjs').then(m => m.default)}], 
['update-employee/123/index.html', {size: 17001, hash: 'da99fd0d48c54b8fad286d29a7c28eb99f81898080b97bfb002f26d3cde60bf1', text: () => import('./assets-chunks/update-employee_123_index_html.mjs').then(m => m.default)}], 
['details-employee/123/index.html', {size: 14157, hash: 'd36110cfbf141f71b783ed7f9019c1f7305f29042c80830f21b2ec22c5309f4e', text: () => import('./assets-chunks/details-employee_123_index_html.mjs').then(m => m.default)}], 
['styles-HWWAQ5UR.css', {size: 231710, hash: 'lm/mL54yJMc', text: () => import('./assets-chunks/styles-HWWAQ5UR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
