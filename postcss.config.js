const postCssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postCssPresetEnv({
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
};
