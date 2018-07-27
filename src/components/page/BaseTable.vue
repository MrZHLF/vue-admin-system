<template>
  <div class="table">
      <div class="crumbs">
        <el-breadcrumb>
          <el-breadcrumb-item>
            <i class="el-icon-tickets">基础表格</i>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
          <div class="handle-box">
            <el-button type="primary" @click="dialogFormVisible = true" class="handle-del mr10">添加</el-button>
						<el-input class="search-input" placeholder="筛选关键词" size="small" v-model="ListSearch"></el-input>
          </div>
          <el-table
					:data="list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          tooltip-effect="dark"
          style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
              label="日期"
              width="120"
							sortable
              prop="date">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
							sortable
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
							sortable
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
									@click="handleEdit(scope.$index, scope.row)"
									>编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteList(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-sizes="[5, 10, 20, 40]"
						:page-size="pagesize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="list.length">
				</el-pagination>
        </div>
      </div> 
			
			<!--编辑弹出框-->
			<el-dialog title="编辑" :visible.sync="editFormVisible"  width="30%">
				<el-form :model="editForm" label-width="50px" ref="addForm">
					<el-form-item label="日期">
						<el-date-picker type="date" placeholder="选择日期" v-model="editForm.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
					</el-form-item>
					<el-form-item label="姓名">
						<el-input v-model="editForm.name"></el-input>
					</el-form-item>
					<el-form-item label="地址">
						<el-input v-model="editForm.address"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="editFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="editSubmit">确 定</el-button>
				</div>
			</el-dialog>
			
      <!-- 添加弹出框 -->
      <el-dialog title="信息添加" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form" label-width="50px">
          <el-form-item label="日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add"  :loading="addLoading">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[], //数据存储
      dialogFormVisible:false,   //添加弹出框
			ListSearch:"",  //搜索
			editFormVisible: false,  //编辑器弹出框
      form:{    //需要添加的字段
        name:"",
        date:"",
        address:""
      },
			editForm:{   //编辑需要的字段
				name:"",
				date:"",
				address:""
			},
			addLoading:false,
			currentPage:1, //初始页
      pagesize:5    //	每页的数据
    }
  },
  created() {
    this.vueTable()
  },
	watch:{
		ListSearch(val) {
			this.list.forEach(val => {
				
			})
		}
	},
  methods:{
		// 初始页currentPage、初始每页数据数pagesize和数据data
		handleSizeChange: function (size) {
        this.pagesize = size;
				console.log(this.pagesize)
    },
    handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
				console.log(this.currentPage)
    },
		// 获取用户列表
		vueTable() {
			this.$http.get("https://wd6176291011jokkcy.wilddogio.com/vuetable.json").then(data => {
				return data.json()
			}).then(data =>{
				let ListArray =[]
				for (let key in data) {
					data[key].id = key
					ListArray.push(data[key])
				}
				this.list = ListArray
			})
		},
		// 显示编辑弹出框
		handleEdit(index, row){
			this.editFormVisible = true;
			this.editForm = Object.assign({}, row);
			console.log(this.editForm)
		},
		// 编辑
		editSubmit(row) {
			if (!this.editForm.name || !this.editForm.address || !this.editForm.date) {
				this.$messageerror('内容不能为空');
			} else {
				let HandleEdit = {
					name: this.form.name,
					address: this.form.address,
					date: this.form.date
				}
				this.$http.post("https://wd6176291011jokkcy.wilddogio.com/vuetable.json",HandleEdit).then(res => {
					this.editFormVisible = false
					this.$message.success('添加成功');
					this.vueTable()
				})
				console.log(HandleEdit)
			}
			
		},
    // 删除
    deleteList(index,row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					this.$http.delete("https://wd6176291011jokkcy.wilddogio.com/vuetable/"+row.id+".json").then(res => {
						this.list.splice(index,1)
						this.vueTable()
						this.$message({
							type: 'success',
							message: '删除成功!'
						})
					})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      // 添加数据
      add() {
        if (!this.form.name || !this.form.address || !this.form.date) {
          this.$message.error('内容不能为空');
        } else {
					let handleAddClick ={
						name: this.form.name,
						address: this.form.address,
						date: this.form.date
					}
					this.$http.post("https://wd6176291011jokkcy.wilddogio.com/vuetable.json",handleAddClick).then(res => {
						this.dialogFormVisible = false;
						this.$message.success('添加成功');
						this.vueTable()
					})
        }
      }
    }
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
	width: 200px;
	margin-left: 50px;
}
.el-table__body-wrapper{
	height: 500px;
}
.crumbs{
  margin-bottom:20px;
}
</style>
