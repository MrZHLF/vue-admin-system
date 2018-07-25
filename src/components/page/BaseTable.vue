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
          </div>
          <el-table
          height="400"
          :data="list"
          tooltip-effect="dark"
          style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column
              label="日期"
              width="120"
              prop="date">
              <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="deleteList(scope.$index,scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div> 
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
          <el-button type="primary" @click="add">确 定</el-button>
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
      form:{    //需要添加的字段
        name:"",
        date:"",
        address:""
      }
    }
  },
  mounted() {
    this.vueTable()
  },
  methods:{
		vueTable() {
			this.$http.get("https://wd6176291011jokkcy.wilddogio.com/vuetable.json").then(res => {
				this.list = res.body
				console.log(res)
			})
		},
    // 删除
    deleteList(index,row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.list.splice(index,1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
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
          return 
        } else {
					let handleAddClick ={
						name: this.form.name,
						address: this.form.address,
						date: this.form.date
					}
					this.$http.post("https://wd6176291011jokkcy.wilddogio.com/vuetable.json",handleAddClick).then(res => {
						this.dialogFormVisible = false;
						this.$message.success('添加成功');
					})
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table__body-wrapper {
		overflow: auto;
}
.crumbs{
  margin-bottom:20px;
}
</style>
