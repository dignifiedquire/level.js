// Karma configuration
// Generated on Thu Mar 23 2017 13:39:42 GMT+0100 (CET)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'tap'],
    files: [
      'test/test.js'
    ],
    exclude: [],
    preprocessors: {
      'test/*.js': ['browserify']
    },
    reporters: ['tape'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    browserify: {
      debug: true
    }
  })
}
