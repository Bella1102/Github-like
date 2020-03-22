const withCss = require('@zeit/next-css')
// const config = require('./config')


if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withCss({
  // publicRuntimeConfig: {
  //   GITHUB_OAUTH_URL,
  //   OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${
  //     config.github.client_id
  //   }&scope=${SCOPE}`,
  // },
})
