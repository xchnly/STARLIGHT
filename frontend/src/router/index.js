// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import HomePage from '../components/HomePage.vue'
import Dashboard from '../components/DashboardPage.vue'
import Team from '../components/TeamPage.vue'
import Projects from '../components/ProjectPage.vue'
import Calendar from '../components/Calendar.vue'
import Reports from '../components/ReportsPage.vue'

const routes = [
  { 
    path: '/', 
    name: 'Login', 
    component: LoginPage,
  },
  { 
    path: '/home', 
    component: HomePage,
    redirect: '/home/dashboard',
    children: [
      { 
        path: '', 
        name: 'Dashboard',
        component: Dashboard 
      },
      { 
        path: 'team', 
        name: 'Team',
        component: Team 
      },
      { 
        path: 'projects', 
        name: 'Projects',
        component: Projects 
      },
      { 
        path: 'calendar', 
        name: 'Calendar',
        component: Calendar 
      },
      { 
        path: 'reports', 
        name: 'Reports',
        component: Reports 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router