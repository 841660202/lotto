const cheerio = require('cheerio');
// [
//   {
//     no: '2020126',
//     fist: [ '01', '04', '09', '22', '28' ],
//     last: [ '04', '12' ]
//   },
//   {
//     no: '2020127',
//     fist: [ '01', '04', '17', '18', '26' ],
//     last: [ '03', '10' ]
//   },
//   {
//     no: '2020128',
//     fist: [ '09', '12', '13', '26', '33' ],
//     last: [ '04', '10' ]
//   }
// ]
function big_lotto_cherrio_trans(inData) {
  const result = inData.map(item => {
    return [item.no, ...item.fist, ...item.last, `${item.fist.join(',')},${item.last.join(',')}`]
  })

  return result
}
module.exports = big_lotto_cherrio_trans