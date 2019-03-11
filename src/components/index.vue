<template>
  <el-container class="index-container">
    <el-header class="index-header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../assets/logo.png" alt>
          </div>
        </el-col>
        <el-col class="header-center" :span="16">
          <div class="grid-content bg-purple-light">电商后台管理系统</div>
        </el-col>
        <el-col :span="4" class="header-right">
          <div class="grid-content bg-purple">
            <el-button type="success" @click="logout">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="index-aside" width="200px">
        <!-- 饿了么的导航 -->
        <el-menu default-active="2" class="el-menu-vertical-demo" router active-text-color="#13ce66">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <!-- index 是匹配的路由地址 -->
            <el-menu-item index="/users">
              <span class="el-icon-menu"></span> 用户列表
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="index-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // beforeCreate的登录判断 删除
  methods: {
    logout() {
      this.$confirm("你确定要退出吗，o(╥﹏╥)o", "提示", {
        confirmButtonText: "残忍退出",
        cancelButtonText: "好心留下",
        type: "warning"
      })
        .then(() => {
          // 确定
          // 删除token
          window.sessionStorage.removeItem("token");
          // 返回登录页
          this.$router.push("/login");
        })
        .catch(() => {
          // 取消
          this.$message({
            type: "info",
            message: "你真好 (* ￣3)(ε￣ *)"
          });
        });
    }
  }
};
</script>

<style>
.index-container {
  height: 100%;
}
.index-header {
  height: 60px;
  background-color: #b3c0d1;
  line-height: 60px;
}
.header-center {
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 700;
}
.header-right {
  text-align: right;
}
.index-aside {
}
.el-main.index-main {
  background-color: #e9eef3;
  padding-top: 0;
}
</style>
