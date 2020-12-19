const big_lotto_cherrio = require('./utils/big_lotto_cherrio');
const schedule = require('./utils/schedule');
const combine_excel = require('./utils/combine_excel');
const axios = require('axios');
// const url = 'https://match.lottery.sina.com.cn/lotto/pc_zst/index?lottoType=dlt&actionType=chzs&year=2009'
// const url = 'https://match.lottery.sina.com.cn/lotto/pc_zst/index?lottoType=dlt&actionType=chzs&sqi=2020126&eqi=2020128'
let years = [];
const start = 2007;
const end = 2020;

// 大乐透爬取任务
async function big_lotto_task() {
  for (let index = start; index <= end; index++) {
    const baseUrl = 'https://match.lottery.sina.com.cn/lotto/pc_zst/index?lottoType=dlt&actionType=chzs&year='
    const url = `${baseUrl}${index}`
    await getHtml(url, index)
  }
  // 合并excels
  combine_excel()
}
// 爬取返回
async function getHtml(url, year) {
  try {
    const res = await axios.get(url)
    big_lotto_cherrio(res.data, year)
  } catch (error) {
    console.log(error)
  }
}
// 任务调度
console.log('这个时间可以改改的')
schedule(big_lotto_task)
// big_lotto_task()
