<script setup lang="ts">
import AccountsForm from "@/pages/AccountsForm/AccountsForm.vue";
import { useAccountsFormStore } from '@/stores/accountsFormStore.ts';
import { QuestionCircleOutlined }from '@ant-design/icons-vue';

const addAccountData = useAccountsFormStore().addAccountData

</script>

<template>
  <main>
    <div>
      <div class="add-accounts-wrapper">
        <h1>Учетные записи</h1>
        <button class="add-accounts" @click="addAccountData"><span class="title-add">+</span></button>
      </div>
      <div class="hint-wrapper">
        <QuestionCircleOutlined class="hint-logo"/>
        <span>Для указания нескольких меток для одной пары логин/пароль используйте разделитель <span class="hint-info_symbol">;</span></span>
      </div>
      <AccountsForm/>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
  justify-content: center;
}
.add-accounts-wrapper{
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.add-accounts{
  background-color: transparent;
  border: 1px solid rgb(218, 218, 218);
  color: rgb(126, 126, 126);
  border-radius: 0.375rem;
  font-size: 2rem;
  font-weight: 100;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  cursor: pointer;
}
.add-accounts:hover{
  box-shadow: -2px -2px 4px rgb(218, 218, 218);
}
.add-accounts:active{
  border: 1px solid rgb(193, 193, 193);
  color: rgb(76, 76, 76);
}
.hint-wrapper{
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  background-color: rgba(191, 202, 230, 0.34);
  padding: 0.125rem 0.25rem;
}
.hint-logo{
  font-size: 1.125rem;
  padding-top: 0.125rem;
  margin-right: 0.5rem;
}
.hint-info_symbol{
  font-size: 1.25rem;
}
</style>
