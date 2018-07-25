<template>
  <div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>基础图表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
          <div class="schart-box">
            <div class="content-title">柱状图</div>
            <schart class="schart" canvasId="bar" :data="data1" type="bar" :options="options1"></schart>
          </div>
          <div class="schart-box">
            <div class="content-title">折线图</div>
            <schart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></schart>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {
  name: '',
  data () {
      return {
        data1:[
            {name:'2012',value:1141},
            {name:'2013',value:1499},
            {name:'2014',value:2260},
            {name:'2015',value:1170},
            {name:'2016',value:970},
            {name:'2017',value:1450}
        ],
        data2 : [
            {name:'短袖',value:1200},
            {name:'休闲裤',value:1222},
            {name:'连衣裙',value:1283},
            {name:'外套',value:1314},
            {name:'羽绒服',value:2314}
        ],
        options1: {
            title: '某商店近年营业总额',
            autoWidth: true,   // 设置宽高自适应
            showValue: false,
            bgColor: '#F9EFCC',
            fillColor: '#00887C',
            contentColor: 'rgba(46,199,201,0.3)',
            yEqual: 7
        },
        options2: {
            title: '某商店近年营业总额',
            bgColor: '#D5E4EB',
            titleColor: '#00887C',
            fillColor: 'red',
            contentColor: 'rgba(46,199,201,0.3)'
        },
      }
  },
  components:{
    Schart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.schart-box{
  display: inline-block;
  margin: 20px;
}
.content-title {
  clear: both;
  font-weight: 400;
  line-break: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
.schart {
  width: 500px;
  height: 500px;
}
</style>
