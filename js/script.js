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


      if(ingredient != null){

        this.defaultIngredients.push(ingredient);

        this.newIng = null;

      }


    },

    enterIng: function(e){

      if(e.which == 13){

        this.defaultIngredients.push(this.newIng);

        this.newIng = null;

      }
    }


  }





});
