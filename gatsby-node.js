const path = require(`path`)

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: `/gracias/`,
    component: path.resolve('src/templates/thanks.js')
  })
}
