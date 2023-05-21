import { createStore } from "vuex";

import getters from "./getters.js";
import mutations from "./mutations.js";


export default createStore({
  state() {
    return {
      alldata: {
        activeStep: 1,
        default: 0,
        sum:0, 
        alladd:"",
        name: null,
        email: null,
        number: null,
        chosenplan: 'Arcade',
        personalInfo: {
          name: '',
          email: '',
          phone: '',
      },
        plan: {
          items: [
              {
                id:1,
                iconadvanced:require("../assets/images/icon-arcade.svg"),
                  'title': 'Arcade',
                  'month': 9,
                  'promotionYear': '2 months free',
                  
              },
              {
                id:2,
                iconadvanced:require("../assets/images/icon-advanced.svg"),
                  'title': 'Advanced',
                  'month': 12,
                  'promotionYear': '2 months free',
                  
              },
              {
                id:3,
                iconadvanced:require("../assets/images/icon-pro.svg"),
                  'title': 'Pro',
                  'month': 15,
                  'promotionYear': '2 months free',
                  
              },
          ],
      },

      add:{
        adds: [
          {
              'mainText': 'Onlinleservice',
              'subText': 'Access to multiplayer games',
              'month': 1,
              'year': 10,
              'choice':0
             
          },
          {
              'mainText': 'Larger storage',
              'subText': 'Extra 1TB of cloud save',
              'month': 2,
              'year': 20,
              'choice':0
             
          },
          {
              'mainText': 'Customizable profile',
              'subText': 'Custom theme on your profile',
              'month': 2,
              'year': 20,
              'choice':0
          },
      ]

      },

      },
     
    };
  },
  
  
  getters,
  mutations,
});

