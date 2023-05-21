<template>
    <div class="step">
      <div  class="step__mobile">
   <header class="step__header">
       <h2>Personal info</h2>
       <p>Please provide your name, email address, and phone number.</p>
    </header>
<form>
    <div class="label">
      <label for="name">Nmae</label>
      <p class="error" v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</p>
      <input type="text" id="name" placeholder="e.g. Ahmed Hussein"  v-model="name">
    </div>

    <div class="label">
      <label for="email">Email Address</label>
      <p class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</p>
      <input type="text" id="email" placeholder="ahmedhussein@lorm.com"  v-model="email">

    </div>
    
    <div class="label">
      <label for="number">Phone Number</label>
      <p class="error" v-if="v$.number.$error">{{ v$.number.$errors[0].$message }}</p>
      <input type="text" id="number" placeholder="e.g. +1 234 567 890"  v-model="number">

    </div>
  </form>
  </div>

  <div class="btns">
    <button class="next-stp" @click="nextStep">
      Next Step
    </button>
  </div>

</div>
  </template>

  <script>
  import {mapGetters} from 'vuex';
 import  useValidate from '@vuelidate/core'
import { required ,email,helpers,minLength} from '@vuelidate/validators'

  export default {

    name:"StepInfo",
    data() {
        return {
      v$: useValidate(),
      name: '',
      email: '',
      number: '',
    };
        
    },

    validations(){
      return {
      name: { required: helpers.withMessage('This Field Is required', required)},
     email: {email,  required: helpers.withMessage('This Field Is required', required)},
     number: {minLength:minLength(6), required: helpers.withMessage('This Field Is required', required)},
  }

    },


    methods: {

      nextStep() {
        this.v$.$validate();
        if(!this.v$.$error)
        {
          this.$router.push('/plan');
          this.$store.commit('activeStepPlus');
          this.$store.commit('setPersonalInfo', 
          {
                        name: this.name,
                        email: this.email,
                        number: this.number
          }
                    )
        };
    },
    
  },
  computed: {
            ...mapGetters(['personalInfo'])
        },
        mounted() {
            this.name = this.personalInfo.name;
            this.email = this.personalInfo.email;
            this.number = this.personalInfo.number;
        }

  }
  </script>
  
  <style lang="scss" scoped>
   @import "../scss/global/_colors.scss";
   

  .error{
    margin-left: auto;
        color: $strawberry-red;
        font-size: 14px;
        font-weight: $bold;
        letter-spacing: 0.01em;
        opacity: 1;
        transition: .2s;
  }
  .label {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 22px;
        color: $marine-blue;
        font-size: 14px;
        font-weight: $medium;

        input {
            outline: 0;
            height: 48px;
            width: 100%;
            margin-top: 8px;
            border: 1px solid $light-gray;
            border-radius: 8px;
            padding: 0 15px 4px;

            font-size: 17px;
            color: $marine-blue;
            font-weight: $bold;
            letter-spacing: -0.03em;
            font-family: $font-family;
            transition: .2s;

            &::placeholder {
                color: $color-gray;
                opacity: 1;
            }

           

            &::-ms-input-placeholder {
                color: $color-gray;
            }

            &:focus {
                border-color: $marine-blue;
            }
        }
    }
    .btns{
        display: flex;
        margin-top: auto;
    }
    button {
        margin-left: auto;
    }
    @media(max-width: 375px) {
        .error-text {
            font-size: 10px;
            height: 0;
            overflow: hidden;
        }
        label {
            font-size: 12px;
            margin-bottom: 13px;
            input {
                height: 40px;
                margin-top: 6px;
                font-size: 16px;
            }
        }
        .error {
            .error-text {
                height: auto;
            }
        }
    }
  </style>