<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<script setup>

import { ref } from 'vue'

const inputValue = ref('CMIM-')
const showPassword = ref(false)

const addPrefix = () => {
  // Ambil hanya digit (angka) dari input, buang huruf atau karakter lainnya
  const digits = inputValue.value.replace(/\D/g, '')
  inputValue.value = 'CMIM-' + digits
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-48 w-auto" src="./../assets/Icon/STARLIGHT_ICON_7.svg" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <!-- Badge Number -->
                <div>
                    <label for="badgeNumber" class="block text-sm font-medium leading-6 text-gray-900">Badge
                        Number</label>
                    <div class="mt-2">
                        <input id="badgeNumber" name="badgeNumber" type="text" v-model="inputValue" @input="addPrefix"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="CMIM..." />
                    </div>
                </div>

                <!-- Password -->
                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-[#004aad] hover:text-[#5de0e6]">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2 relative">
                        <input id="password" name="password" :type="showPassword ? 'text' : 'password'"
                            autocomplete="current-password" required
                            class="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter your password" />
                        <button type="button" @click="togglePassword"
                            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none"
                            tabindex="-1">
                            <!-- Eye icon (show) -->
                            <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                            </svg>
                            <!-- Eye icon (hide) -->
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.965 9.965 0 012.122-3.33M6.18 6.18A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.964 9.964 0 01-1.68 2.858M15 12a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3L3 3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Submit Button -->
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-[#004aad] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5de0e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-warna2 hover:text-warna1">Request an account</a>
            </p>
        </div>
    </div>
</template>