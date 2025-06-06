<script setup lang="ts">
import FormUserAccounts from "@/components/accountsForm/FormUserAccounts.vue";
import { useAccountsFormStore } from '@/stores/accountsFormStore.ts'

const accounts = useAccountsFormStore()

</script>

<template>
  <div class="accounts-form-container">
    <span class="accounts-form_title">Метки</span>
    <span class="accounts-form_title">Тип записи</span>
    <span class="accounts-form_title">Логин</span>
    <span class="accounts-form_title">Пароль</span>
    <span></span>
      <FormUserAccounts v-for="account in accounts.accountsData" :key="account.id" :formState="account"/>
  </div>
</template>

<style scoped>
.accounts-form-container{
  display: grid;
  padding-top: 2.5rem;
  grid-template-columns: 250px 200px 200px 200px 2rem;
  gap: 1.5rem;
}
.accounts-form_title{
  color: rgb(126, 126, 126);
}
</style>
