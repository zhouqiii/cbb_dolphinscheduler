<template>
  <div class="menu">
    <el-row class="menu_row flex_center">
      <el-col :span="4">
        <div>1111</div>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="this.$route.path"
          router
          mode="horizontal"
          class="menu_vertical"
          @open="handleOpen"
          @close="handleClose"
          background-color="#2d303a"
          text-color="#fff"
          active-text-color="#2d8cf0"
        >
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <template slot="title">
              <i :class="item.icon" style="color:#ffffff"></i>
              <span class="nav_title"> {{ item.navItem }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4">
        <div>22222</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      navList: [
        { name: '/DataStatics', navItem: '首页', icon: 'el-icon-s-home' },
        { name: '/Project', navItem: '项目管理', icon: 'el-icon-document' },
        { name: '/Resource', navItem: '资源中心', icon: 'el-icon-folder' },
        { name: '/Database', navItem: '数据源中心', icon: 'el-icon-coin' },
        { name: '/Monitor', navItem: '监控中心', icon: 'el-icon-monitor' },
        { name: '/Security', navItem: '安全中心', icon: 'el-icon-aim' },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.menu{
  background: @C2D;
  color: @CFF;
  text-align: center;
  .menu_vertical{
    .nav_title{
      font-size: 16px;
    }
  }
}
</style>
