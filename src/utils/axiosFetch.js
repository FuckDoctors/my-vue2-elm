import axios from 'axios';

import {
  baseUrl,
} from '../config/env';

// ES6的import和export参考这个资料
// http://blog.csdn.net/kittyjie/article/details/50642558

// 使用这种export default时，不能使用import {fetch, fetch2}，不识别fetch，没指定名字。
// 可以这样import，import {default as fetch} from xxx，
// 或者使用import fetch, {fetch2} from xxx。
export default (url = '', data = {}, type = 'GET', options = {}) => {
  const reqType = type.toUpperCase();
  const reqUrl = `${baseUrl}${url}`;

  let p = null;

  if (reqType === 'GET') {
    const requestConfig = {
      params: { ...data },
    };
    const config = Object.assign(requestConfig, options);
    p = axios.get(reqUrl, config);
  } else {
    const requestConfig = {
      url,
      method: type,
      data,
    };

    const config = Object.assign(requestConfig, options);
    p = axios(config);
  }

  return p;
};

// 使用这种export时，使用import {fetch, fetch2}时说找不到fetch。
// 使用import fetch, {fetch2} from xxx。
// export default function fetch(url = '', data = {}, type = 'GET') {
//   const reqType = type.toUpperCase();
//   const reqUrl = `${baseUrl}${url}`;

//   let p = null;

//   if (reqType === 'GET') {
//     p = axios.get(reqUrl, {
//       params: { ...data },
//     });
//   } else {
//     const requestConfig = {
//       url,
//       method: type,
//       data,
//     };

//     p = axios(requestConfig);
//   }

//   return p;
// }

export function fetch2(url = '', data = {}, type = 'GET', success = () => {}, error = () => {}) {
  const reqType = type.toUpperCase();
  const reqUrl = `${baseUrl}${url}`;

  if (reqType === 'GET') {
    axios.get(reqUrl, {
      params: { ...data },
    })
    .then((response) => { success(response); })
    .catch((err) => { error(err); });
  } else {
    const requestConfig = {
      url,
      method: type,
      data,
    };

    axios(requestConfig)
    .then((response) => { success(response); })
    .catch((err) => { error(err); });
  }
}
