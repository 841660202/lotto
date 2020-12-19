const mkdirp = require('mkdirp')
function mkdir(dir) {
  const absolutePath = process.cwd()
  // console.log(absolutePath)
  const made = mkdirp.sync(`${absolutePath}/${dir}`)
  console.log(`made directories, starting with ${made}`)
}
module.exports = mkdir