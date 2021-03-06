import '@babel/polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import svgSpriteLoader from 'helpers/svg-sprite-loader'
import App from 'Components/App'
import RouteBasic from 'Components/Routes/Basic'
import RouteMenuBubble from 'Components/Routes/MenuBubble'
import RouteLinks from 'Components/Routes/Links'
import RouteImages from 'Components/Routes/Images'
import RouteHidingMenuBar from 'Components/Routes/HidingMenuBar'
import RouteTodoList from 'Components/Routes/TodoList'
import RouteMarkdownShortcuts from 'Components/Routes/MarkdownShortcuts'
import RouteReadOnly from 'Components/Routes/ReadOnly'
import RouteEmbeds from 'Components/Routes/Embeds'
import RouteExport from 'Components/Routes/Export'

const __svg__ = { path: './assets/images/icons/*.svg', name: 'assets/images/[hash].sprite.svg' }
svgSpriteLoader(__svg__.filename)

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: RouteBasic,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/Basic',
    },
  },
  {
    path: '/menu-bubble',
    component: RouteMenuBubble,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/MenuBubble',
    },
  },
  {
    path: '/links',
    component: RouteLinks,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/Links',
    },
  },
  {
    path: '/images',
    component: RouteImages,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/Images',
    },
  },
  {
    path: '/hiding-menu-bar',
    component: RouteHidingMenuBar,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/HidingMenuBar',
    },
  },
  {
    path: '/todo-list',
    component: RouteTodoList,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/TodoList',
    },
  },
  {
    path: '/markdown-shortcuts',
    component: RouteMarkdownShortcuts,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/MarkdownShortcuts',
    },
  },
  {
    path: '/read-only',
    component: RouteReadOnly,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/ReadOnly',
    },
  },
  {
    path: '/embeds',
    component: RouteEmbeds,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/Embeds',
    },
  },
  {
    path: '/export',
    component: RouteExport,
    meta: {
      githubUrl: 'https://github.com/heyscrumpy/tiptap/tree/master/examples/Components/Routes/Export',
    },
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
