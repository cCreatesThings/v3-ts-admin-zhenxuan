<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import { postLoginRequestAPI } from '@/api/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const formData = ref({
  username: 'admin',
  password: '111111'
})
/**
 * ElForm 是 element-plus 的表单组件类。
 * InstanceType<typeof ElForm> 获取 ElForm 实例的类型。
 */
const formEl = ref<InstanceType<typeof ElForm> | null>(null)
const clickBtnLogin = () => {
  formEl.value?.validate(async (isOK) => {
    if (isOK) {
      const res = await postLoginRequestAPI(formData.value)
      console.log(res)
      ElMessage({
        type: 'success',
        message: res.message
      })
      // 1s 之后跳转首页
      setTimeout(() => {
        router.replace('/')
      }, 1000)
    }
  })
}
// 校验规则
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="20">
        <div class="login_form">
          <el-form :model="formData" :rules="rules" ref="formEl">
            <h1>welcome to use !</h1>
            <h2>欢迎使用 !</h2>
            <el-form-item prop="username">
              <el-input v-model="formData.username" :prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="formData.password"
                type="password"
                show-password
                :prefix-icon="Lock"
              />
            </el-form-item>
            <el-button class="login_btn" type="primary" @click="clickBtnLogin">
              登录
            </el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat center;
  background-size: cover;
  .login_form {
    padding: 30px;
    position: relative;
    top: 30vh;
    width: 60%;
    height: 40vh;
    background: url('@/assets/images/login_form.png') no-repeat center;
    background-size: cover;
    .el-form-item {
      margin: 10px 0;
    }

    .login_btn {
      width: 100%;
    }
  }
}
:deep(.el-form-item__error) {
  color: var(--el-color-danger);
  font-size: 12px;
  line-height: 1;
}
:deep(.el-form-item.is-error .el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--el-color-danger) inset;
}
</style>
