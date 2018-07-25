<template>
    <div class="wrapper">
        <app-header></app-header>
        <sider-list></sider-list>
        <!-- 内容显示区域 -->
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
export default {

  name: 'HelloWorld',
  data () {
    return {
      collapse:false
    }
  },
  created() {
      
  },
  components: {
      "app-header":Header,
      "sider-list":Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.wrapper{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.content-collapse {
    left: 56px;
}
.content-box{
    position: absolute;
    left: 250px;
    right: 0;
    top:70px;
    bottom: 0;
    /* overflow: hidden; */
    overflow-y: scroll;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}
.content {
    width: auto;
    padding: 40px;
}
</style>