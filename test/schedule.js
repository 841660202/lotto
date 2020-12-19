const schedule = require('../utils/schedule')
// 任务源
const tasks = [
  { task: 'hello/5s', corn: '5 * * * * *' },
  { task: 'hello/10s', corn: '10 * * * * *' },
  { task: 'hello/20-25s', corn: '20-25 * * * * *' },
  { task: 'hello/30s' },
]
// 批量启动定时器
tasks.forEach(element => {
  schedule(element.task, element.corn)
});
