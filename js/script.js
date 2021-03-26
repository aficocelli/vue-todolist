var app = new Vue ({

  el: "#root",

  data: {

    defaultIngredients: [
      "Pomodoro",
      "Mozzarella",
      "Basilico"
    ]



  },

  methods:{

    deleteIng: function(ingCanc){


      this.defaultIngredients.splice(ingCanc, 1);


    }


  }





});
