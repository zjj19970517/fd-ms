<template>
  <div class="login-page">
    <!-- Slide Image -->
    <div class="login-panel__slide">
      <div class="login-panel__logo">Meils</div>
      <logo />
      <img
        class="login-panel__slide-image"
        src="https://meils.oss-cn-beijing.aliyuncs.com/login-banner.426fb77f.png"
        alt=""
      />
    </div>
    <div class="login-panel__main">
      <!-- Login Form -->
      <div class="login-panel__form">
        <el-form
          ref="loginForm"
          :model="loginFormModel"
          :rules="loginFormRules"
          label-width="0px"
        >
          <div class="title-container">
            <h3 class="title">欢迎登录 Meils 的空间</h3>
            <h4 class="sub-title">项目名：fd-ms</h4>
          </div>
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon="user" />
            </span>
            <el-input
              type="text"
              size="small"
              name="username"
              v-model="loginFormModel.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon
                icon="https://meils.oss-cn-beijing.aliyuncs.com/password.svg"
              />
            </span>
            <el-input
              :type="passwordType"
              name="password"
              v-model="loginFormModel.password"
              size="small"
            />
            <span class="svg-container no-padding">
              <svg-icon
                :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
                @click="handleChangePasswordType"
              />
            </span>
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          class="login-panel__form-btn"
          @click="handleLogin"
        >
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import { ElNotification } from "element-plus";
import type { ElForm } from "element-plus";
import { useRouter } from "vue-router";

import Logo from "../../components/Logo.vue";
import { LoginFormRules } from "./formRules";

type ElFormInstance = InstanceType<typeof ElForm>;

const store = useStore();
const router = useRouter();

const passwordType = ref("password");
const handleChangePasswordType = () => {
  if (passwordType.value === "password") {
    passwordType.value = "text";
  } else {
    passwordType.value = "password";
  }
};

const loginFormRules = reactive(LoginFormRules);

const loginFormModel = reactive({
  username: "",
  password: "",
});

const loginForm = ref<ElFormInstance>();
// 登录操作
const handleLogin = () => {
  loginForm.value &&
    loginForm.value.validate((isValid) => {
      if (!isValid) return;
      loginAction();
    });
};

const loginAction = async (): Promise<void> => {
  try {
    const loginRes = await store.dispatch("user/login", loginFormModel);
    if (loginRes) {
      ElNotification({
        title: "通知",
        type: "success",
        message: "登录成功",
      });
      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      ElNotification({
        title: "通知",
        type: "error",
        message: "登录失败",
      });
    }
  } catch (e) {
    console.error("Failed to login", e);
    ElNotification({
      title: "通知",
      type: "error",
      message: "登录失败",
    });
  }
};
</script>

<style lang="scss" scoped>
@import "style.scss";
</style>
