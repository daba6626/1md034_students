/*document.getElementById("myID").innerHTML = "Välj en burgare";
const v = new Vue({
  el: '#yID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})*/



//let menu = [TheMightyBurger, TheOriginalBurger, TheChickenator, ITBurger, DVBurger];

const vm = new Vue({
  el: '#myID',
  data: {
  	
  	  food: food
        	
  }
})

const btn = new Vue({
    el: '#myBtn',
    data: {
        fullname: "",
        email: "",
        street: "",
        house: "",
        selected: "",
        gender: "",
        output: ""
        
        
    },
    methods:{
        clickedBtn: function(){
            this.output = this.fullname + this.email + this.street + this.house + this.selected + this.gender;
        }
    }
})




/*const vm = new Vue({ //TODO Change CONST VM TO CONST X ?
  el: '#myID',
  data: {
  	B1: 'The Mighty Burger',
    B2: 'The Original Burger',
    B3: 'The Chickenator',
    B4: 'ITBurger',
    B5: 'DVBurger'
  }
  })*/


/*
<div id="myID">
<h1>
Välj en burgare
</h1>

  <li v-for="burger in menu">
  {{burger.info()}}
  </li>
 
 </div>  

*/
