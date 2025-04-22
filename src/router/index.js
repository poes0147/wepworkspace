import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/Ect/dashboard',
    children: [
      {
        path: '/Ect/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/Etc/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/Ect/theme/typography',
      },
      {
        path: '/Ect/theme/colors',
        name: 'Colors',
        component: () => import('@/views/Etc/theme/Colors.vue'),
      },
      {
        path: '/Ect/theme/typography',
        name: 'Typography',
        component: () => import('@/views/Etc/theme/Typography.vue'),
      },
      {
        path: '/Ect/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Ect/base/breadcrumbs',
        children: [
          {
            path: '/Ect/base/accordion',
            name: 'Accordion',
            component: () => import('@/views/Etc/base/Accordion.vue'),
          },
          {
            path: '/Ect/base/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/Etc/base/Breadcrumbs.vue'),
          },
          {
            path: '/Ect/base/cards',
            name: 'Cards',
            component: () => import('@/views/Etc/base/Cards.vue'),
          },
          {
            path: 'Ect/base/carousels',
            name: 'Carousels',
            component: () => import('@/views/Etc/base/Carousels.vue'),
          },
          {
            path: '/Ect/base/collapses',
            name: 'Collapses',
            component: () => import('@/views/Etc/base/Collapses.vue'),
          },
          {
            path: '/Ect/base/list-groups',
            name: 'List Groups',
            component: () => import('@/views/Etc/base/ListGroups.vue'),
          },
          {
            path: '/Ect/base/navs',
            name: 'Navs',
            component: () => import('@/views/Etc/base/Navs.vue'),
          },
          {
            path: '/Ect/base/paginations',
            name: 'Paginations',
            component: () => import('@/views/Etc/base/Paginations.vue'),
          },
          {
            path: '/Ect/base/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/Etc/base/Placeholders.vue'),
          },
          {
            path: '/Ect/base/popovers',
            name: 'Popovers',
            component: () => import('@/views/Etc/base/Popovers.vue'),
          },
          {
            path: '/Ect/base/progress',
            name: 'Progress',
            component: () => import('@/views/Etc/base/Progress.vue'),
          },
          {
            path: '/Ect/base/spinners',
            name: 'Spinners',
            component: () => import('@/views/Etc/base/Spinners.vue'),
          },
          {
            path: '/Ect/base/tables',
            name: 'Tables',
            component: () => import('@/views/Etc/base/Tables.vue'),
          },
          {
            path: '/Ect/base/tabs',
            name: 'Tabs',
            component: () => import('@/views/Etc/base/Tabs.vue'),
          },
          {
            path: '/Ect/base/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/Etc/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/Ect/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Ect/buttons/standard-buttons',
        children: [
          {
            path: '/Ect/buttons/standard-buttons',
            name: 'Button Component',
            component: () => import('@/views/Etc/buttons/Buttons.vue'),
          },
          {
            path: '/Ect/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/Etc/buttons/Dropdowns.vue'),
          },
          {
            path: '/Ect/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/Etc/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/Ect/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Ect/forms/form-control',
        children: [
          {
            path: '/Ect/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/Etc/forms/FormControl.vue'),
          },
          {
            path: '/Ect/forms/select',
            name: 'Select',
            component: () => import('@/views/Etc/forms/Select.vue'),
          },
          {
            path: '/Ect/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/Etc/forms/ChecksRadios.vue'),
          },
          {
            path: '/Ect/forms/range',
            name: 'Range',
            component: () => import('@/views/Etc/forms/Range.vue'),
          },
          {
            path: '/Ect/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/Etc/forms/InputGroup.vue'),
          },
          {
            path: '/Ect/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/Etc/forms/FloatingLabels.vue'),
          },
          {
            path: '/Ect/forms/layout',
            name: 'Layout',
            component: () => import('@/views/Etc/forms/Layout.vue'),
          },
          {
            path: '/Ect/forms/validation',
            name: 'Validation',
            component: () => import('@/views/Etc/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/Ect/charts',
        name: 'Charts',
        component: () => import('@/views/Etc/charts/Charts.vue'),
      },
      {
        path: '/Ect/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Ect/icons/coreui-icons',
        children: [
          {
            path: '/Ect/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/Etc/icons/CoreUIIcons.vue'),
          },
          {
            path: '/Ect/icons/brands',
            name: 'Brands',
            component: () => import('@/views/Etc/icons/Brands.vue'),
          },
          {
            path: '/Ect/icons/flags',
            name: 'Flags',
            component: () => import('@/views/Etc/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/Ect/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/Ect/notifications/alerts',
        children: [
          {
            path: '/Ect/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/Etc/notifications/Alerts.vue'),
          },
          {
            path: '/Ect/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/Etc/notifications/Badges.vue'),
          },
          {
            path: '/Ect/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/Etc/notifications/Modals.vue'),
          },
          {
            path: '/Ect/notifications/toasts',
            name: 'Toasts',
            component: () => import('@/views/Etc/notifications/Toasts.vue'),
          },
        ],
      },
      {
        path: '/Ect/widgets',
        name: 'Widgets',
        component: () => import('@/views/Etc/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/Etc/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/Etc/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Etc/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Etc/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
