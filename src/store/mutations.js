export default {
    activeStepPlus(state) {
     {
            state.alldata.activeStep ++;
        }
    },
    activeStepminus(state) {
        {
               state.alldata.activeStep --;
           }
       },
    changetoyearplan(state,payload){
        state.alldata.default=payload.choicce;

    },
    setFirstPlan(state,payload){
        state.alldata.chosenplan=payload.plan;
      
    },
    setalladdprice(state,payload){
        state.alldata.sum=payload.adddf;

    },
    setPersonalInfo(state, payload){
        
            state.alldata.personalInfo = payload
        
    },
    
  
    
}