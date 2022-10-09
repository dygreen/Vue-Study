import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';
import Author from './components/Author.vue';
import Comment from './components/Comment.vue';

const routes = [ // 위에다가 쓸 수록 우선순위가 높아진다!
  {
    path: "/detail/:id(\\d+)", // 파라미터 업그레이드 가능: 소괄호 안에 정규식 입력 가능 ('*' 입력하면 반복)
    component: Detail,
    children: [ // nested routes 만드는 법
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  { // 404 page
    path: "/:anything(.*)",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;