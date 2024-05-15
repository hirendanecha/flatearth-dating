const url = 'https://api.flatearth.dating';
const webUrl = 'https://flatearth.dating/';
const tubeUrl = 'https://tube.flatearth.dating/';

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.flatearth.dating',
  siteKey: '0x4AAAAAAAZb4JlIfSDw1ILo',
  secretKey: '0x4AAAAAAAZb4OkAFVgzEsI0HIa4z79Khh4',
  qrLink: `${webUrl}settings/edit-profile/`,
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
};
