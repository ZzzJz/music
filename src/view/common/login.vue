<template>
  <van-form class="login" @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div>
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>
<script setup lang="ts">
import {ref} from 'vue';
import {login,checkPhone} from "@/api/app";

const username = ref('15682131760');
const password = ref('a347236965');
const onSubmit = (values: object) => {
  console.log('submit', values);
  login({phone: username.value, password: password.value}).then((res) => {
    console.log(res)
  })
};

const check = ()=>{
  checkPhone({phone:username.value}).then((res)=>{
    console.log(res)
  })
}
check()

</script>
<style scope lang="scss">
.login {
  padding-top: 50px;
  padding: 20px;
}
</style>