<template>
  <div>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 20px">
        <el-card shadow="hover">
          <div class="user">
            <img :src="userImg" />
            <div class="userInfo">
              <p class="name">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="loginInfo">
            <p>上次登录的时间: <span>2021-7-15</span></p>
            <p>上次登录的地点: <span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; height: 460px" shadow="hover">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
            <!-- <el-table-column prop="name" label="日期"> </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买">
            </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买">
            </el-table-column>
            <el-table-column prop="totalBuy" label="总购买"> </el-table-column> -->
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="16">
        <div class="countNum">
          <el-card
            v-for="item in countData"
            :key="item.name"
            shadow="hover"
            :body-style="{
              display: 'flex',
              padding: 0,
              height: '75px',
              width: '250px'
            }"
          >
            <i
              class="icon"
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="num">￥{{ item.value }}</p>
              <p class="txt">{{ item.name }}</p>
            </div></el-card
          >
        </div>
        <el-card style="height: 265px" shadow="hover">
          <div style="height: 265px" ref="echarts"></div>
        </el-card>
        <div class="graph">
          <el-card style="height: 240px; width: 400px" shadow="hover">
            <div style="height: 240px" ref="userEcharts"></div>
          </el-card>
          <el-card style="height: 240px; width: 400px" shadow="hover">
            <div style="height: 240px" ref="videoEcharts"></div
          ></el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from '../../../api/data'
import * as echarts from 'echarts'
// import axios from 'axios'

// import Echart from '../../components/Echarts.vue'

export default {
  name: 'Home',
  // components: {
  //   Echart
  // },
  data() {
    return {
      userImg: require('../../assets/images/user.png'),
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 200,
          totalBuy: 800
        }
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今目支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今目收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今目未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 210,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ]
    }
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data
      // console.log(code, data)
      if (code === 20000) {
        this.tableData = data.tableData
        const order = data.orderData
        const xData = order.date
        const keyArray = Object.keys(order.data[0])
        const series = []
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })
        //折线图
        const option = {
          xAxis: {
            data: xData
          },
          yAxis: {},
          legend: {
            data: keyArray
          },
          series
        }
        const E = echarts.init(this.$refs.echarts)
        E.setOption(option)

        //用户图(柱状图)
        const userOption = {
          legend: {
            //图例文字颜色
            textStyle: {
              color: '#333'
            }
          },
          grid: {
            left: '20%'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category', //类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisLable: {
              interval: 0,
              color: '#333'
            }
          },
          yAxis: [
            {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#17b3a3'
                }
              }
            }
          ],
          color: ['#2ec7c9', '#b6a2de'],
          series: [
            {
              name: '新增用户',
              data: data.userData.map((item) => item.new),
              type: 'bar'
            },
            {
              name: '活跃用户',
              data: data.userData.map((item) => item.active),
              type: 'bar'
            }
          ]
        }

        const userE = echarts.init(this.$refs.userEcharts)
        userE.setOption(userOption)

        //饼状图
        const videoOption = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: data.videoData,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }

        const videoE = echarts.init(this.$refs.videoEcharts)
        videoE.setOption(videoOption)
      }
    })
  }
}
</script>

<style lang="less" scoped>
.home {
  margin-top: -20px;
  .user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #999;
    padding-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 30px;
    }
    .userInfo {
      .name {
        font-size: 24px;
        margin-bottom: -10px;
      }
      .access {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .loginInfo {
    font-size: 12px;
    color: #999;
    p span {
      margin-left: 50px;
    }
  }
  .countNum {
    display: flex;
    height: 200px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .icon {
      text-align: center;
      font-size: 18px;
      line-height: 75px;
      width: 75px;
      height: 75px;
      color: #fff;
    }
    .detail {
      font-size: 16px;
      padding-left: 20px;
      .num {
        font-size: 18px;
      }
      .txt {
        font-size: 12px;
        color: #999;
        margin-top: -20px;
      }
    }
  }
  .graph {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
}
</style>
