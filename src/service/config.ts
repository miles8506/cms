let BASE_URL = '';
let BASE_NAME = '';
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http:123.0.0.1:3000/development';
  BASE_NAME = 'aaa';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http:123.0.0.1:3000/production';
  BASE_NAME = 'bbb';
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = 'http:123.0.0.1:3000/test';
  BASE_NAME = 'ccc';
}

export { BASE_URL, BASE_NAME };
