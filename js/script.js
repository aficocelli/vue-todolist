var app = new Vue ({

  el: "#root",

  data: {

    defaultIngredients: [
      "Pomodoro",
      "Mozzarella",
      "Basilico"
    ],

    newIng:null,



  },

  methods:{

    deleteIng: function(ingCanc){


      this.defaultIngredients.splice(ingCanc, 1);


    },

    addIng:function(ingredient){

      this.defaultIngredients.push(ingredient);

    }


  }





});
