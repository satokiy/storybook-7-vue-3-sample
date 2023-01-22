<script setup lang="ts">
import MyButton from "./MyButton.vue";

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["login", "signUp", "logout"]);
</script>

<template>
  <header>
    <h1>Storybook 7 + Vue 3 + TypeScript サンプル</h1>
    <div class="buttons">
      <template v-if="props.isLoggedIn">
        <MyButton size="small" label="ログアウト" @click="$emit('logout')" />
      </template>
      <template v-else>
        <MyButton size="small" label="ログイン" @click="$emit('login')" />
        <MyButton size="small" label="会員登録" @click="$emit('signUp')" />
      </template>
    </div>
  </header>
</template>

<style scoped>
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 45px;
  background-color: #fff;
}
h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}
button + button {
  margin-left: 10px;
}
@media screen and (max-width: 720px) {
  .buttons {
    display: none;
  }
}
</style>