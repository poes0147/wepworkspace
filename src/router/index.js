import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/Etc/dashboard',
    children: [
      {
        path: 'Etc/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Etc/dashboard/Dashboard.vue'),
      },
      {
        path: 'Etc/theme/colors',
        name: 'Colors',
        component: () => import('@/views/Etc/theme/Colors.vue'),
      },
      {
        path: 'Etc/theme/typography',
        name: 'Typography',
        component: () => import('@/views/Etc/theme/Typography.vue'),
      },
      {
        path: 'Etc/base',
        name: 'Base',
        component: { render: () => h(resolveComponent('router-view')) },
        redirect: '/Etc/base/breadcrumbs',
        children: [
          { path: 'breadcrumbs', name: 'Breadcrumbs', component: () => import('@/views/Etc/base/Breadcrumbs.vue') },
          { path: 'accordion', name: 'Accordion', component: () => import('@/views/Etc/base/Accordion.vue') },
          { path: 'cards', name: 'Cards', component: () => import('@/views/Etc/base/Cards.vue') },
          { path: 'carousels', name: 'Carousels', component: () => import('@/views/Etc/base/Carousels.vue') },
          { path: 'collapses', name: 'Collapses', component: () => import('@/views/Etc/base/Collapses.vue') },
          { path: 'list-groups', name: 'List Groups', component: () => import('@/views/Etc/base/ListGroups.vue') },
          { path: 'navs', name: 'Navs', component: () => import('@/views/Etc/base/Navs.vue') },
          { path: 'paginations', name: 'Paginations', component: () => import('@/views/Etc/base/Paginations.vue') },
          { path: 'placeholders', name: 'Placeholders', component: () => import('@/views/Etc/base/Placeholders.vue') },
          { path: 'popovers', name: 'Popovers', component: () => import('@/views/Etc/base/Popovers.vue') },
          { path: 'progress', name: 'Progress', component: () => import('@/views/Etc/base/Progress.vue') },
          { path: 'spinners', name: 'Spinners', component: () => import('@/views/Etc/base/Spinners.vue') },
          { path: 'tables', name: 'Tables', component: () => import('@/views/Etc/base/Tables.vue') },
          { path: 'tabs', name: 'Tabs', component: () => import('@/views/Etc/base/Tabs.vue') },
          { path: 'tooltips', name: 'Tooltips', component: () => import('@/views/Etc/base/Tooltips.vue') },
        ],
      },
      {
        path: 'Etc/forms',
        name: 'Forms',
        component: { render: () => h(resolveComponent('router-view')) },
        redirect: '/Etc/forms/form-control',
        children: [
          { path: 'form-control', name: 'Form Control', component: () => import('@/views/Etc/forms/FormControl.vue') },
          { path: 'select', name: 'Select', component: () => import('@/views/Etc/forms/Select.vue') },
          { path: 'checks-radios', name: 'Checks & Radios', component: () => import('@/views/Etc/forms/ChecksRadios.vue') },
          { path: 'range', name: 'Range', component: () => import('@/views/Etc/forms/Range.vue') },
          { path: 'input-group', name: 'Input Group', component: () => import('@/views/Etc/forms/InputGroup.vue') },
          { path: 'floating-labels', name: 'Floating Labels', component: () => import('@/views/Etc/forms/FloatingLabels.vue') },
          { path: 'layout', name: 'Layout', component: () => import('@/views/Etc/forms/Layout.vue') },
          { path: 'validation', name: 'Validation', component: () => import('@/views/Etc/forms/Validation.vue') },
        ],
      },
      {
        path: 'Etc/widgets',
        name: 'Widgets',
        component: () => import('@/views/Etc/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/pages',
    name: 'Pages',
    component: { render: () => h(resolveComponent('router-view')) },
    children: [
      { path: '404', name: 'Page404', component: () => import('@/views/Etc/pages/Page404') },
      { path: '500', name: 'Page500', component: () => import('@/views/Etc/pages/Page500') },
      { path: 'login', name: 'Login', component: () => import('@/views/Etc/pages/Login') },
      { path: 'register', name: 'Register', component: () => import('@/views/Etc/pages/Register') },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
