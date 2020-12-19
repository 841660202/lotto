const cheerio = require('cheerio');
const big_lotto_cherrio_trans = require('./big_lotto_cherrio_trans');
const big_lotto_write = require('./big_lotto_write');
function big_lotto_cheerio(html, year) {
  // 获取网页数据
  // console.log(res)
  const $ = cheerio.load(html, {
    decodeEntities: false,
  })
  let periods = []
  console.log($("head title").text())
  $("#cpdata tr").each((i, trDom) => {
    //     console.log(trDom)Ï
    //    console.log( $(trDom).first())
    // console.log($(trDom).children().first().text())
    let period = {
      no: null,
      fist: [],
      last: []
    }
    //     if (i <= 0) {
    period.no = $(trDom).children().first().text()
    // 实心+空心
    $(trDom).children().each((j, td) => {
      if ($(td).hasClass("chartball01") || $(td).hasClass("chartball20")) {
        period.fist.push($(td).text())
      }
    })
    $(trDom).find(".chartball02").each((j, td) => {
      period.last.push($(td).text())
    })
    //     }
    if (!!period.no) {
      periods.push(period)
    }


  })
  const out = big_lotto_cherrio_trans(periods)
  big_lotto_write(out, year)
}
module.exports = big_lotto_cheerio