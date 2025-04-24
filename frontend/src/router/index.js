import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './../components/LoginPage.vue'
import HomePage from './../components/HomePage.vue'
import CalenderPage from './../components/Calender.vue'

// Mendefinisikan rute untuk aplikasi
const routes = [
  { path: '/', name: 'Login', component: LoginPage }, // Rute untuk halaman login
  { path: '/home', name: 'Home', component: HomePage }, // Rute untuk halaman home
  { path: '/calender', name: 'Calender', component: CalenderPage } // Rute untuk halaman kalender
]

// Membuat router dengan menggunakan mode history dan rute yang telah didefinisikan
const router = createRouter({
  history: createWebHistory(), // Menggunakan HTML5 history mode
  routes // Daftar rute yang sudah didefinisikan
})

export default router
