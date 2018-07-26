<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-row>
            <el-col>
              <el-card shadow="hover">
                <div class="user-info">
                  <img src="../common/img/img.jpg" class="user-avator">
                  <div class="user-info-text">
										<div class="user-info-name">{{username}}</div>
										<div>普通用户</div>
									</div>
                </div>
                <div class="user-info-list">上次登录时间:<span>2018-07-20</span></div>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-card shadow="hover">
								<div slot="header" class="clearfix">
									<span>语言详情</span>
								</div>
								Vue.js
								<el-progress :percentage="60" ></el-progress>
								JavaScript
								<el-progress :percentage="50" color="#8e71c7"></el-progress>
								CSS3
								<el-progress :percentage="60" color="#67c23a"></el-progress>
								HTML5
								<el-progress :percentage="70" color="#f56c6c"></el-progress>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16">
					<el-row :gutter="20" class="mgb20">
							<el-col :span="8">
									<el-card shadow="hover" :body-style="{padding: '0px'}">
											<div class="grid-content grid-con-1">
													<i class="el-icon-view grid-con-icon"></i>
													<div class="grid-cont-right">
															<div class="grid-num">1234</div>
															<div>用户访问量</div>
													</div>
											</div>
									</el-card>
							</el-col>
							<el-col :span="8">
									<el-card shadow="hover" :body-style="{padding: '0px'}">
											<div class="grid-content grid-con-2">
													<i class="el-icon-message grid-con-icon"></i>
													<div class="grid-cont-right">
															<div class="grid-num">321</div>
															<div>系统消息</div>
													</div>
											</div>
									</el-card>
							</el-col>
							<el-col :span="8">
									<el-card shadow="hover" :body-style="{padding: '0px'}">
											<div class="grid-content grid-con-3">
													<i class="el-icon-goods grid-con-icon"></i>
													<div class="grid-cont-right">
															<div class="grid-num">5000</div>
															<div>数量</div>
													</div>
											</div>
									</el-card>
							</el-col>
					</el-row>
				</el-col>
				<el-col :span="16">
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="vue.js" name="1">
							<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
							<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
						</el-collapse-item>
						<el-collapse-item title="反馈 Feedback" name="2">
							<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
							<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
						</el-collapse-item>
						<el-collapse-item title="效率 Efficiency" name="3">
							<div>简化流程：设计简洁直观的操作流程；</div>
							<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
							<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
						</el-collapse-item>
						<el-collapse-item title="可控 Controllability" name="4">
							<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
							<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
						</el-collapse-item>
					</el-collapse>
				</el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
			 activeNames: ['1'],
      username: localStorage.getItem('ms_username')
    }
  },
	methods: {
		handleChange(val) {
			console.log(val);
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row{
	margin: 20px;
}
.user-info{
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	margin-bottom: 20px;
  border-bottom: 2px solid #ccc;
}
.user-info-text {
	flex: 1;
	padding-left: 20px;
}
.user-info-text .user-info-name {
	font-weight: bold;
	font-size: 25px;
}
.user-avator {
	width: 120px;
	height: 120px;
	border-radius: 50%;
}
.user-info-list {
	font-size: 16px;
	color: #212121;
	padding: 20px 0 0 0;
}
.user-info-list span {
	font-size: 14px;
	padding-left: 15px;
}
.el-card {
	border: 1px solid #ebeef5;
	background-color: #fff;
	color: #303133;
	transition: .3s;
}
.grid-content {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	height: 100px;
}
.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 12px;
	color: #999;
}
.grid-con-1 .grid-num {
	color: #2d8cf0;
}
.grid-con-2 .grid-num {
	color: #2d8cf0;
}
.grid-con-3 .grid-num {
	color: #f25e43;
}
.grid-num{
	font-size: 30px;
	font-weight: 700;
}
.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}
.grid-con-1 .grid-con-icon {
	background: #2d8cf0;
}
.grid-con-2 .grid-con-icon{
	background: #64d572;
}
.grid-con-3 .grid-con-icon{
	background: #f25e43;
}
.el-collapse-item >>> .el-collapse-item__header {
	padding-left: 20px;
}
.el-collapse-item >>> .el-collapse-item__wrap >>> .el-collapse-item__content{
	padding-left: 20px !important;
}
</style>
