/*document.getElementById("myID").innerHTML = "Välj en burgare";
const v = new Vue({
  el: '#yID',
  data: {
    arbitraryVariableName: 'Välj en burgare'
  }
})*/



//let menu = [TheMightyBurger, TheOriginalBurger, TheChickenator, ITBurger, DVBurger];

'use strict';
const socket = io();

const vm = new Vue({
  el: '#myID',
  data: {
  	
  	  food: food
   
        	
  }
})

const btn = new Vue({
    el: '#contact',
    data: {
        fullname: "",
        email: "",
        pm:"Cash",
        gender: "Female",
        output: "",
        orders: {},
        
        
        
    },
    hej: {socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
},
    methods:{
        clickedBtn: function(){
           
            this.output = this.fullname+ " " + this.email + " " + this.street + " " + this.house + " " + this.pm + " " + this.gender

            let burger = document.getElementsByName('checkBurger');
            for(var i = 0; i<burger.length; ++i)
            {
                if(burger[i].checked)
                {
                    this.output = this.output + " " +  burger[i].value;
                }
            }
        }
    },

     getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
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
