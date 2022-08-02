// mock数据模拟
import Mock from 'mockjs'
//图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock. Random.float产生随机数1ee到]s080之间保留小数最小e位最大e位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8080, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(180, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        videoData: [
          {
            name: '小米',
            value: 2999
          },
          {
            name: '苹果',
            value: 5999
          },
          {
            name: 'vivo',
            value: 1500
          },
          {
            name: 'oppo',
            value: 1999
          },
          {
            name: '魅族',
            value: 2200
          },
          {
            name: '三星',
            value: 4500
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        tableData: [
          {
            name: 'oppo',
            todayBuy: 500,
            monthBuy: 3500,
            totalBuy: 22000
          },
          {
            name: 'vivo',
            todayBuy: 300,
            monthBuy: 2200,
            totalBuy: 24000
          },
          {
            name: '苹果',
            todayBuy: 800,
            monthBuy: 4500,
            totalBuy: 65000
          },
          {
            name: '魅族',
            todayBuy: 350,
            monthBuy: 3000,
            totalBuy: 22000
          },
          {
            name: '小米',
            todayBuy: 1200,
            monthBuy: 6500,
            totalBuy: 45000
          },
          {
            name: '三星',
            todayBuy: 300,
            monthBuy: 2000,
            totalBuy: 34000
          }
        ],
        orderData: {
          data: [
            {
              苹果: 3648,
              vivo: 7865,
              oppo: 6723,
              魅族: 1347,
              小米: 5479,
              三星: 5667
            },
            {
              苹果: 3348,
              vivo: 7865,
              oppo: 3566,
              魅族: 3453,
              小米: 2363,
              三星: 2674
            },
            {
              苹果: 2367,
              vivo: 3723,
              oppo: 3547,
              魅族: 7324,
              小米: 3743,
              三星: 4574
            },
            {
              苹果: 3445,
              vivo: 4572,
              oppo: 2347,
              魅族: 3467,
              小米: 3276,
              三星: 3247
            },
            {
              苹果: 2347,
              vivo: 2347,
              oppo: 5683,
              魅族: 4558,
              小米: 4558,
              三星: 4578
            },
            {
              苹果: 3567,
              vivo: 6835,
              oppo: 3475,
              魅族: 1347,
              小米: 5479,
              三星: 3275
            },
            {
              苹果: 4675,
              vivo: 5467,
              oppo: 5383,
              魅族: 4758,
              小米: 2357,
              三星: 3645
            }
          ],
          date: [
            '20221001',
            '20221002',
            '20221003',
            '20221004',
            '20221005',
            '20221006',
            '20221007'
          ]
        }
      }
    }
  }
}
