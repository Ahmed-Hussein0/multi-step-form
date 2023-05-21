<template>
    <div class="step">
      <div class="step__mobile">

        <header class="step__header">
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>
        </header>

        <form class="form">

          <div class="selected-plan" v-if="defultStep==1">
            <div class="__textt">
              <div>
                {{ chosenPlan }} <span v-if="defultStep==0">(Monthly)</span>
                <span v-if="defultStep==1">(Yearly)</span>
              </div>
            </div>
            <div class="__pricee" v-if="defultStep==0">
              ${{ getsumadd }}/mo
            </div>
            <div class="__pricee" v-if="defultStep==1">
              ${{ getsumadd }}/yr
            </div>
          </div>

          <div class="selected-plan" v-if="defultStep==0">
            <div class="__textt">
              <div>
                {{ chosenPlan }} <span v-if="defultStep==0">(Monthly)</span>
                <span v-if="defultStep==1">(Yearly)</span>
              </div>
            </div>
            <div class="__pricee" v-if="defultStep==0">
              ${{ getsumadd }}/mo
            </div>
            <div class="__pricee" v-if="defultStep==1">
              ${{ getsumadd }}/yr
            </div>
          </div>
<!-- /////////////////////////////add -->
          <div v-for="item in addplan.adds " :key="item">
          <div class="accessories-item" v-if="item.choice==1">
            <div class="__text">
              {{ item.mainText }}
            </div>
            <div class="__price" v-if="defultStep==0">
              +${{ item.month }}/mo
            </div>
            <div class="__price" v-if="defultStep==1">
              +${{ item.year }}/yr
            </div>
          </div>
        </div>

        </form>
 <div class="total-price">
        <div class="total-pritext ">
          Total 
          <span v-if="defultStep==0">(per month)</span>
          <span v-if="defultStep==1">(per year)</span>
        </div>
        <div v-if="defultStep==0" class="total-pri">+${{ plan2 }}/mo</div>
        <div v-if="defultStep==1" class="total-pri">+${{ plan2 }}/yr</div>
      
      </div>
   

      </div>
      <div class="btns">
        <button class="back" @click="back">Go Back</button>
        <button class="next-stp btn" @click="nextStep">Confirm</button>
      </div>

    </div>
  </template>
  <script>
  import axios from 'axios';
   import {mapGetters} from 'vuex';
  export default {
    data: function () {
      return {
        alladd:[],
        errors:[],
        po:"",
        summ:0,
        bb:"Onlinleservice",
      };
    },
    name: "StepAdd",
    methods:{
        nextStep() {
          this.$router.push('/submitted');
          axios.post('https://646a17d303bb12ac2099b94a.mockapi.io/api/v1/data', {
          
        PersonalData:this.personalInfo,
        plan:this.chosenPlan,
        priceplan:this.getsumadd,
        yearOrmonth:this.po,
        addd:this.alladd,
        totalprice:this.plan2,
        
      })
      .then(response => {console.log(response)})
      .catch(e => {
        this.errors.push(e)
      })
        
          },
          back(){
            this.gg=0;
            this.$router.back();
            this.$store.commit('activeStepminus');

          },
           
    

       },
   
    computed: {
      ...mapGetters(['personalInfo','addplan','defultStep','getPlan','chosenPlan','getsumadd']),
      plan2(){
        if(this.defultStep==0)
        {
          this.po="Monthly";
            this.addplan.adds.forEach((el) => {
          if (el.choice == 1) {
            
            this.alladd+=el.mainText;
           
            this.summ += el.month;
          }
        });
        }
        else
        {
          this.po="Yearly";
            this.addplan.adds.forEach((el) => {
          if (el.choice == 1) {
            this.alladd+=el.mainText;
           
            this.summ += el.year;
          }
        });
        }
        return this.summ+this.getsumadd;
        


      },
    },
  };
  </script>

<style scoped lang="scss">
@import "../scss/global/_colors.scss";

.step {
  padding-bottom: 17px;
}

.form {
  background: $Alabaster;
  border-radius: 8px;
  padding: 20px 25px 13px 20px;
  margin-bottom: 25px;
}

.selected-plan {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid $light-gray;
  margin-bottom: 5px;
}
  .__textt {
    display: flex;
    flex-direction: column;
  }

    div {
      color: $marine-blue;
      font-weight: $bold;
      padding-bottom: 5px;
    }

    a {
      font-size: 14px;
      color: $color-gray;
      font-weight: $medium;
      text-decoration: underline;


      &:hover {
        color: hsl(244, 52%, 64%);
      }
    }
  

  .__pricee {
    color: $marine-blue;
    font-weight: $bold;
  }


.accessories-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

  .__text {
    font-size: 14px;
    color: $color-gray;
    font-weight: $medium;
  }

  .__price {
    font-size: 15px;
    color: $marine-blue;
    font-weight: $regular;
  }


.total-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px 0 20px;
}

.total-pritext {
    font-size: 14px;
    color: $color-gray;
    font-weight: $medium;
  }

.total-pri{
    color: hsl(244, 52%, 64%);
    font-size: 20px;
    font-weight: $bold;
  }


.btn {
  background-color: $purplish-blue;

  &:hover {
    background-color: rgba(107, 100, 206, .7);
  }
}

@media(max-width: 991px) {
  .step {
    padding-bottom: 0;
  }

  .form {
    padding: 20px 17px 8px 15px;
  }

  .selected-plan {
    font-size: 14px;
    padding-bottom: 12px;

    &__text {
      div {
        padding-bottom: 2px;
      }
    }
  }

  .accessories-item {
    padding: 8px 0;
  }

  .total-price {
    padding: 0 15px 0 15px;

    &__price {
      font-size: 17px;
    }
  }

  .step__mobile {
    padding-bottom: 30px;
  }
}
</style>