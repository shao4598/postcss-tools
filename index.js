const postcss = require('postcss')
const postcssPluginNamespace = require('postcss-plugin-namespace')
const fs = require('fs')

const fileName = 'bootstrap-cosmo'

var css = fs.readFileSync(`src/${fileName}.css`, 'utf8').toString();
var out = postcss()
          .use(postcssPluginNamespace('custom-element-light'))
          .process(css, { from: `src/${fileName}.css`, to: `dist/${fileName}.css` })
          .then(result => {
            fs.writeFile(`dist/${fileName}.css`, result.css, () => true)
            if ( result.map ) {
              fs.writeFile(`dist/${fileName}.css.map`, result.map.toString(), () => true)
            }
          })