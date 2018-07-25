<template>
  <div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>文件上传</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
          <div class="content-title">图片列表缩略图</div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button class="btn" size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <!-- 支持裁剪 -->
          <div class="content-title">支持裁剪</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      fileList2:[
        {
          name:'food.jpeg',
          url:"http://img1.imgtn.bdimg.com/it/u=1532260787,252993782&fm=27&gp=0.jpg"
        }
      ]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.$message.success('删除成功！');
    },
    handlePreview(file) {
      this.$message.success('上传成功！');
      console.log(file);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin: 20px 0;
}
</style>
