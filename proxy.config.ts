export default [
  {
    context: '/api',
    target: 'http://localhost:1338',
    pathRewrite: {'^/api' : ''}
  }
];