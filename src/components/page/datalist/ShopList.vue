<template>
  <div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>商家列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
					<el-table
						:data="shopList"
						style="width: 100%">
						<el-table-column type="expand">
							<template slot-scope="props">
								<el-form label-position="left" inline class="demo-table-expand">
									<el-form-item label="商品名称">
										<span>{{ props.row.name }}</span>
									</el-form-item>
									<el-form-item label="店铺地址">
										<span>{{ props.row.address }}</span>
									</el-form-item>
									<el-form-item label="商品Id">
										<span>{{ props.row.id }}</span>
									</el-form-item>
									<el-form-item label="联系电话">
										<span>{{ props.row.phone }}</span>
									</el-form-item>
									<el-form-item label="评分">
										<span>{{ props.row.score}}</span>
									</el-form-item>
									<el-form-item label="店铺销售量">
										<span>{{ props.row.Sale }}</span>
									</el-form-item>
									<el-form-item label="商品分类">
										<span>{{ props.row.classification}}</span>
									</el-form-item>
									<el-form-item label="商品展示">
										<img class="imgs" :src="props.row.imngurl" alt="">
									</el-form-item>
								</el-form>
							</template>
						</el-table-column>
						<el-table-column
							label="店铺名称"
							prop="name">
						</el-table-column>
						<el-table-column
							label="商品地址"
							prop="address">
						</el-table-column>
						<el-table-column
							label="描述"
							prop="desc">
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
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shoplist',
  data () {
		return {
			shopList:[]
		}
  },
	methods:{
		HandleShopList () {
			this.$http.get('http://localhost:3000/shoplist').then(res => {
				this.shopList = res.body
			})
		},
		handleEdit(index,row) {
			console.log(index,row)
		},
		deleteList(index,row) {
			console.log(row.id)
		},
	},
	created() {
		this.HandleShopList()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
	.imgs {
		width: 150px;
		height: 150px;
	}
</style>
