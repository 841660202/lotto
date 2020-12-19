const xlsx = require('node-xlsx')
const mkdir = require('./mkdir')
const { cwd } = require('../consts')
const fs = require('fs');
const path = require('path');

function big_lotto_write(data, year, outpath) {
  var allData = [
    {
      name: `${year}`,
      data
    }
  ]
  // console.log(allData)
  //数据进行缓存

  let buffer = xlsx.build(allData);

  // //将缓存的数据写入到相应的Excel文件下
  try {
    let dir = 'big_lotto'
    mkdir(dir)
    fs.writeFileSync(outpath ?? `${cwd}/${dir}/${year}.xlsx`, buffer, function (err) {

      if (err) {
        console.log(err);
        return;
      }

    });
  } catch (error) {
    console.log(error)
  }
}
module.exports = big_lotto_write