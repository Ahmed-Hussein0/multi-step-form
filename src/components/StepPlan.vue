<template>
    <div class="step">
      <div  class="step__mobile">
        <div class="step__header">
          <h2 >Select your plan</h2>
            <p>
              You have the option of monthly or yearly billing.
            </p>
        </div>
        
        <form>
        


          <div class="radios">
          <label class="custom-radio" v-for="plann in getPlan.items" :key="plann.id" 
          :class="{ 'active' : plann.title===chosenPlan}">
          <img :src="plann.iconadvanced" alt="arcadr">
            <input  type="radio" :value="plann.title"  v-model="plan">
        
            <div>
            <span class="title">{{ plann.title }}</span>
            <div>
            <span class="price" v-if="gg==0">${{ plann.month }}/mo</span>
             </div>
            <div v-if="gg==1">
            <span class="price">${{ plann.month*10}}/yr</span>
            <span class="infopromotion">{{ plann.promotionYear }}</span>
          </div>
          </div>


          </label>
        </div>
        <label class="switch">
          <span :class="{ 'active' : gg==0}">Monthly</span>
          <input type="checkbox" true-value="1" false-value="0"  v-model="gg">
          <span class="slider"></span>
          <span :class="{ 'active' : gg==1}">Yearly</span>
        </label>
        </form>
      </div>
     
        <div class="btns">
          <button class="back" type="button" @click="back">GO Back</button>
          <button class="next-stp" type="submit" @click="nextStep">Next step</button>
        </div>
      </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    data(){
      return{
        plan:'',
        gg:0,
    }
},
    name: 'StepPlan',
    watch:{
      
      plan()
      {
        this.$store.commit('setFirstPlan',{ plan:this.plan});
      }
      
      },
      methods:{
      
      
        nextStep() {
          if(this.chosenPlan !== '')
        {
          this.$router.push('/add');
          this.$store.commit('activeStepPlus');
          this.$store.commit('changetoyearplan',{ choicce:this.gg});
     

        }
         

           
          },
          back(){
            
            this.$router.back();
            this.$store.commit('activeStepminus');

          }

       },
      
       
  
   
    computed: {
    ...mapGetters(['getPlan','defultStep','chosenPlan']),
    

  },
   
    
  
}
  </script>



<style scoped lang="scss">
@import "../scss/global/_colors.scss";


  .radios {
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 30px;
  }

  .custom-radio {
    min-height: 160px;
    width: calc(calc(100% - 40px) / 3);
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid $light-gray;
    border-radius: 10px;
    cursor: pointer;

    &.active {
      border-color: $marine-blue;
      background-color: $Alabaster;
    }
    &:hover{
      border-color: $marine-blue;
    }

    input {
     
      height: 0;
      width: 0;
      visibility: hidden;
     
    }

    img {
      margin-bottom: 42px;
      width: 50px;

     
    }

    .title {
      
      display: inline-flex;
      color: $marine-blue;
      font-size: 16px;
      font-weight: $medium;
      margin-bottom: 2px;
     
    }

    .price {
      display: inline-flex;
      color: $color-gray;
      font-size: 14px;
    }

    .infopromotion {
      display: inline-flex;
      color: $marine-blue;
      font-size: 12px;
      margin-top: 9px;
    }
  }

  .switch{
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $Alabaster;
    border-radius: 10px;

    input {
      height: 0;
      width: 0;
      visibility: hidden;

      &:checked+.slider:before {
        -webkit-transform: translateX(17px);
        -ms-transform: translateX(17px);
        transform: translateX(17px);
      }
    }

    .slider {
      position: relative;
      display: inline-block;
      width: 38px;
      height: 20px;
      background-color: $marine-blue;
      border-radius: 20px;
      transition: .4s;
      margin: 0 24px;
      cursor: pointer;

      &:before {
        position: absolute;
        content: "";
        height: 12px;
        width: 12px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        border-radius: 100%;
        -webkit-transition: .4s;
        transition: .4s;
      }
    }

    span {
      font-size: 15px;
      color: $color-gray;
      font-weight: $medium;
      letter-spacing: -0.02em;

      &.active {
        color: $marine-blue;
      }
    }
  }

  @media(max-width: 977px) {
    .radios {
      flex-direction: column;
      gap: 10px;
      margin-bottom: 23px;
    }

    .custom-radio {
      min-height: 79px;
      width: 100%;
      flex-direction: row;
      padding: 15px 10px;

      img {
        margin-bottom: 0;
        margin-right: 15px;
      }
     
    }
    .step__mobile {
      padding-bottom: 30px;
    }
  }
</style>