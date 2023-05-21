export default {
    activeStep (state) {
        return state.alldata.activeStep;
    },
    getPlan(state){
        return state.alldata.plan;

    },
    defultStep (state) {
        return state.alldata.default;
    },

    chosenPlan(state){
        return state.alldata.chosenplan;

    },
    addplan(state)
    {
        return state.alldata.add;

    },
    
    getsumadd(state){
        return state.alldata.sum;

    },
   
    personalInfo (state) {
        return state.alldata.personalInfo;
    },
   
    
};