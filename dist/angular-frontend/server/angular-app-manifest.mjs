
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
['index.csr.html', {size: 4913, hash: 'cd2ee4a4a82975d9223f79d012727240f704e964c5817780214b0fda9acafd2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1012, hash: '72b8df2f03aa3dd1d6eadab196797bcefd52db26ba4383527e4b6ad1ca7615fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['employees/index.html', {size: 11479, hash: '22427341bdf440a23db51958c045e27872137037afc122d8ca2230805eea00d4', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)}], 
['create-employees/index.html', {size: 16977, hash: '8df31afd6f52c3a7613a7326f355169eed475a5b3c345562a8f62cb7b933ccab', text: () => import('./assets-chunks/create-employees_index_html.mjs').then(m => m.default)}], 
['update-employee/123/index.html', {size: 17001, hash: 'e343bcfbb2fda38bf3dac084244679436653303b298a5fdcc0240d2e147c17f6', text: () => import('./assets-chunks/update-employee_123_index_html.mjs').then(m => m.default)}], 
['details-employee/123/index.html', {size: 14157, hash: '8a921b53d82e566b8355836f4f819904b4784a771becc7754f00ec03a798dda3', text: () => import('./assets-chunks/details-employee_123_index_html.mjs').then(m => m.default)}], 
['styles-HWWAQ5UR.css', {size: 231710, hash: 'lm/mL54yJMc', text: () => import('./assets-chunks/styles-HWWAQ5UR_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
