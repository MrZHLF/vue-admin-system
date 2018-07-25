<template>
  <div class="deit">
    <div class="crumbs">
      <el-breadcrumb separator="/">
            <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
            <el-breadcrumb-item>编辑器</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="cantainer">
          <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
          <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: '',
      editorOption: {
          placeholder: '请编辑相关内容'
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
      onEditorChange({ editor, html, text }) {
          this.content = text;
      },
      submit(){
          console.log(this.content);
          this.$message.success('提交成功！');
          this.content=""
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cantainer{
  padding: 30px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px #ddd solid;
  margin-top: 20px;
}
.ql-container {
  /* min-height: 400px; */
}
.editor-btn{
    margin-top: 20px;
}
</style>
