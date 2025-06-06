import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { FormState } from '@/pages/AccountsForm/types.ts'
import { v4 as uuidv4 } from 'uuid'

export const useAccountsFormStore = defineStore('accountsFormStore', () => {
  const accountsData = ref<FormState[]>([])
  const addAccountData = () => {
    accountsData.value.push({
      id: uuidv4(),
      tags: [],
      userName: '',
      password: '',
      typeRecord: 'Локальная'
    })
  }
  const saveAccount = (state: FormState) => {
    accountsData.value.forEach((item) => {
      if (item.id === state.id) {
        return state
      }
    })
  }
  const deleteAccount = (id: string) => {
    accountsData.value = accountsData.value.filter(account => account.id !== id)
  }
  return {
    accountsData,
    addAccountData,
    deleteAccount,
    saveAccount
  }
})
