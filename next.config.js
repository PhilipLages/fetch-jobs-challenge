/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test/jobs',
        permanent: true,
      }
    ]
  }
}
