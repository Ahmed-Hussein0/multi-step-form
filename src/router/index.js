import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form.vue";
import StepInfo from "../components/StepInfo.vue";
import StepPlan from "../components/StepPlan.vue";
import StepAdd from "../components/StepAdd.vue";
import StepTotal from "../components/StepTotal.vue";
import Final from "../components/Final.vue";

const routes = [

  
  {
    path: '/',
    redirect: '/info',
    component: Form,
    children: [
      { path: 'info', component: StepInfo },
      { path: 'plan', component: StepPlan },
      { path: 'add', component: StepAdd },
      { path: 'total', component: StepTotal },
      {path:'submitted',component:Final},

      
    ],
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
