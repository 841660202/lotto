const n_schedule = require('node-schedule');

// *  *  *  *  *  *
// ┬ ┬ ┬ ┬ ┬ ┬
// │ │ │ │ │  |
// │ │ │ │ │ └ day of week (0 - 7) (0 or 7 is Sun)
// │ │ │ │ └───── month (1 - 12)
// │ │ │ └────────── day of month (1 - 31)
// │ │ └─────────────── hour (0 - 23)
// │ └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)
function schedule(task, corn = '30 * * * * *') {
  //每分钟的第30秒定时执行一次:
  n_schedule.scheduleJob(corn, () => {
    switch (typeof task) {
      case 'string':
        console.log('log: ' + task);
        break;

      case 'function':
        task()
        break;

      default:
        break;
    }

  });
}
module.exports = schedule