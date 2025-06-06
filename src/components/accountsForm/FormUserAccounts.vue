<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FormState } from '@/pages/AccountsForm/types.ts'
import { DeleteOutlined }from '@ant-design/icons-vue';
import { useAccountsFormStore } from '@/stores/accountsFormStore.ts'

const accountsStore = useAccountsFormStore()

const props = defineProps<{
  formState: FormState
}>()
const errorValidateUserName = ref(false)
const errorValidatePassword = ref(false)
const displayPassword = computed(() => props.formState.typeRecord === 'LDAP')
const accountTags = computed({
  get() {
    return props.formState.tags.map(el => el.text).join(';')
  },
  set(newValue) {
    props.formState.tags = newValue.split(';').map(el => {return {text: el}})
  }
})

const validateFormName = () => {
  if (!props.formState.userName) {
    errorValidateUserName.value = true
  } else {
    errorValidateUserName.value = false
    updateAccount()
  }
};

const validateFormPassword = () => {
  if (!props.formState.password && !displayPassword.value) {
    errorValidatePassword.value = true
    return
  } else {
    errorValidatePassword.value = false
    updateAccount()
  }
};

const updateAccount = () => {
  if (displayPassword.value && props.formState.userName) {
    props.formState.password = null
    accountsStore.saveAccount(props.formState)
  }
  if (props.formState.userName && props.formState.password) accountsStore.saveAccount(props.formState)
}
</script>

<template>
  <a-form
    autocomplete="off"
  >
    <a-form-item
      name="tags"
      autocomplete="off"
    >
      <a-input
        v-model:value="accountTags"
        @blur="updateAccount"
      />
    </a-form-item>
  </a-form>

  <a-form-item>
    <a-select v-model:value="formState.typeRecord">
      <a-select-option value="Локальная">
        Локальная
      </a-select-option>
      <a-select-option value="LDAP" @click="updateAccount">
        LDAP
      </a-select-option>
    </a-select>
  </a-form-item>
  <a-form
    autocomplete="off"
    :class="{'expansion-field': displayPassword}">
    <a-form-item
      name="username"
    >
      <a-input
        v-model:value="formState.userName"
        @blur="validateFormName"
        :class="{'field-error': errorValidateUserName}"
      />
    </a-form-item>
  </a-form>

  <a-form-item
    v-if="!displayPassword"
    name="password"
  >
    <a-input-password
      v-model:value="formState.password"
      @blur="validateFormPassword"
      :class="{'field-error': errorValidatePassword}"
    />
  </a-form-item>
  <button class="delete-account" @click="accountsStore.deleteAccount(formState.id)"><DeleteOutlined /></button>
</template>

<style scoped>
.expansion-field{
  grid-column-start: 3;
  grid-column-end: 5;
}

.field-error {
  border: 1px solid red
}

.delete-account{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}
</style>
