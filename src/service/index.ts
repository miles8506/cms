import axios from 'axios';

axios
  .all([
    axios
      .post(
        '/post',
        {
          data: {
            name: 'miles',
            age: 40
          }
        },
        {
          baseURL: 'http://httpbin.org',
          timeout: 3000
        }
      )
      .then((res) => {
        console.log(res);
      }),
    axios
      .request({
        method: 'get',
        url: '/get',
        timeout: 4000,
        baseURL: 'http://httpbin.org'
      })
      .then((res) => {
        console.log(res);
      })
  ])
  .then((res) => {
    console.log(res);
  });

axios.interceptors.request.use(
  (config) => {
    console.log('請求成功');
    return config;
  },
  (config) => {
    console.log('請求失敗');
    return config;
  }
);

axios.interceptors.response.use(
  (res) => {
    console.log('響應成功');
    return res.data;
  },
  (res) => {
    console.log('響應失敗');
    return res.data;
  }
);
