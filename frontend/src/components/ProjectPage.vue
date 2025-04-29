<template>
  <div class="mb-2">
    <button type="button"
      class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
        aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
      </svg>
      <span class="mt-2 block text-sm font-semibold text-gray-900">Create New Projects</span>
    </button>
  </div>

  <ul role="list" class="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
    <li v-for="client in clients" :key="client.id" class="overflow-hidden rounded-xl border border-gray-200">
      <div class="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <img :src="client.imageUrl" :alt="client.name"
          class="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
        <div class="text-sm font-medium leading-6 text-gray-900">{{ client.name }}</div>
        <Menu as="div" class="relative ml-auto">
          <MenuButton class="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
            <span class="sr-only">Open options</span>
            <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <MenuItem v-slot="{ active }">
              <a href="#"
                :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">View<span
                  class="sr-only">, {{ client.name }}</span></a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#"
                :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">Edit<span
                  class="sr-only">, {{ client.name }}</span></a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <dl class="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Last invoice</dt>
          <dd class="text-gray-700">
            <time :datetime="client.lastInvoice.dateTime">{{ client.lastInvoice.date }}</time>
          </dd>
        </div>
        <div class="flex justify-between gap-x-4 py-3">
          <dt class="text-gray-500">Amount</dt>
          <dd class="flex items-start gap-x-2">
            <div class="font-medium text-gray-900">{{ client.lastInvoice.amount }}</div>
            <div
              :class="[statuses[client.lastInvoice.status], 'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset']">
              {{ client.lastInvoice.status }}</div>
          </dd>
        </div>
      </dl>
    </li>
  </ul>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'

const statuses = {
  Done: 'text-green-700 bg-green-50 ring-green-600/20',
  Process: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Pending: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: `https://api.dicebear.com/7.x/initials/svg?seed=Tuple&backgroundColor=5de0e6`,
    lastInvoice: { 
      date: 'December 13, 2022', 
      dateTime: '2022-12-13', 
      amount: '$2,000.00', 
      status: 'Process' 
    }
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: `https://api.dicebear.com/7.x/initials/svg?seed=SavvyCal&backgroundColor=5de0e6`,
    lastInvoice: { 
      date: 'January 22, 2023', 
      dateTime: '2023-01-22', 
      amount: '$14,000.00', 
      status: 'Done' 
    }
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: `https://api.dicebear.com/7.x/initials/svg?seed=Reform&backgroundColor=5de0e6`,
    lastInvoice: { 
      date: 'January 23, 2023', 
      dateTime: '2023-01-23', 
      amount: '$7,600.00', 
      status: 'Pending' 
    }
  }
]
</script>