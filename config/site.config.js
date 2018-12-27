const path = require('path');
const fs = require('fs');

const ROOT = process.env.PWD;

const config = {
  // Your website's name, used for favicon meta tags
  site_name: 'Static Site Boilerplate',

  // Your website's description, used for favicon meta tags
  site_description: 'A modern boilerplate for static website development',

  // Your website's URL, used for sitemap
  site_url: 'http://staticsiteboilerplate.com',

  // Source file for favicon generation. 512x512px recommended.
  favicon: path.join(ROOT, '/src/images/favicon.png'),

  // Google Analytics tracking ID
  googleAnalyticsUA: 'UA-XXXXX-Y',

  // Local development URL
  dev_host: 'localhost',

  // Local development port
  port: 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
  package: JSON.parse(
    fs.readFileSync(path.join(ROOT, '/package.json'), { encoding: 'utf-8' }),
  ),
};

module.exports = config;