function handleRequest(method, path) {
  if (method === 'GET' && path === '/health') {
    return { status: 200, body: 'OK' };
  }
  if (method === 'GET' && path === '/version') {
    return { status: 200, body: '1.0.0' };
  }
  return { status: 404, body: 'Not Found' };
}

module.exports = { handleRequest };
