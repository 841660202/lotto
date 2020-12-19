var glob = require("glob")
var xlsx = require("node-xlsx")
var big_lotto_write = require("./big_lotto_write")
const { cwd } = require('../consts')
/**
 * 合并excel为什么这么处理不直接合并数据，我想试下合并文件，这个或许在文件上传的时候可以搞点事情
 * @param {*} fileName 
 */
function combine_excel(fileName = './out.xlsx') {
  let data = []
  const files = glob.sync(`${cwd}/big_lotto/*.xlsx`, {})
  files.forEach(filePath => {
    const res = readExcel(filePath)
    data = data.concat(res)
  })
  big_lotto_write(data, null, fileName)
}


function readExcel(path) {
  console.log(path)
  let sheetList = xlsx.parse(path)
  let rows = []
  sheetList.forEach((sheet) => {
    sheet.data.forEach((row, index) => {
      rows.push(row)
    })
  })
  return rows
}

module.exports = combine_excel