<template>
    <div class="sidebar">
        <el-menu
            router
            class="sidebar-el-menu"
            background-color="#545c64"
            text-color="#fff"
            :collapse="collapse"
            active-text-color="#ffd04b">
            <el-menu-item index="dashboard">
                <i class="el-icon-setting"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="table">
                <i class="el-icon-tickets"></i>
                <span slot="title">基础表格</span>
            </el-menu-item>
            <el-menu-item index="tabs">
                <i class="el-icon-message"></i>
                <span slot="title">tab选项卡</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-date"></i>
                    <span slot="title">表单相关</span>
                </template>
                    <el-menu-item-group>
                    <el-menu-item index="form">基本表单</el-menu-item>
                    <el-menu-item index="editor">富文本编辑器</el-menu-item>
                    <el-menu-item index="markdown">markdown编辑器</el-menu-item>
                    <el-menu-item index="upload">文件上传</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
						<el-submenu index="5">
								<template slot="title">
										<i class="el-icon-document"></i>
										<span slot="title">数据管理</span>
								</template>
										<el-menu-item-group>
										<el-menu-item index="userlist">用户列表</el-menu-item>
										<el-menu-item index="shoplist">商家列表</el-menu-item>
										<el-menu-item index="foodlist">食品列表</el-menu-item>
										<el-menu-item index="orderlist">订单列表</el-menu-item>
								</el-menu-item-group>
						</el-submenu>
            <el-menu-item index="charts">
                <i class="el-icon-star-on"></i>
                <span slot="title">schart图表</span>
            </el-menu-item>
            <el-menu-item index="404">
                    <i class="el-icon-error"></i>
                    <span slot="title">404页面</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      collapse:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar{
    display: block;
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    height: 100%;
		background-color: rgb(50, 65, 87);
}
.sidebar-el-menu{
    width: 250px;
}
.sidebar>ul{
    height: 100%;
}
</style>