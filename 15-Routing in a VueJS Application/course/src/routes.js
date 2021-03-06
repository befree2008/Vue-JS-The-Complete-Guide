import User from './component/user/User.vue';
import Home from './component/Home.vue';
import UserStart from './component/user/UserStart.vue';
import UserDetail from './component/user/UserDetail.vue';
import UserEdit from './component/user/UserEdit.vue';

export const routes = [
  {path: '', component: Home},
  {path: '/user', component: User, children :[
    {path:'', component: UserStart},
    {path:':id', component: UserDetail},
    {path:':id/edit', component: UserEdit},
  ]},

  {path:'*', redirect: '/'},
  
];
