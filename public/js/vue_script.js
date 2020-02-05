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
  	
  	  menu: menu
        	
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
