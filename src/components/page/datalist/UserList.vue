<template>
  <div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
					<el-table style="width: 100%;"
					:data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
					>
						<el-table-column type="index" width="50">	
						</el-table-column>
						<el-table-column label="日期" prop="date" width="180">	
						</el-table-column>
						<el-table-column label="用户姓名" prop="name" width="180">	
						</el-table-column>
						<el-table-column label="邮箱" prop="email" width="180">	
						</el-table-column>
						<el-table-column label="地址" prop="address" width="200">	
						</el-table-column>	
					</el-table>
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-sizes="[5, 10, 20, 40]"
							:page-size="pagesize"
							layout="total, sizes, prev, pager, next, jumper"
							:total="userList.length">
					</el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userlist',
  data () {
      return {
				currentPage:1, //初始页
				pagesize:10,    //	每页的数据
				userList: []
      }
  },
	created() {
		this.handleUserList()
	},
	methods: {
		// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
				this.pagesize = size;
				console.log(this.pagesize)
		},
		handleCurrentChange: function(currentPage){
				this.currentPage = currentPage;
				console.log(this.currentPage)
		},
		handleUserList() {
			this.$http.get('http://localhost:3000/userList').then(res => {
				this.userList = res.body
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
