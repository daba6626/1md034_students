'use strict';
const socket = io();

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
    el: '#contact',
    data: {
        fullname: "",
        email: "",
        pm:"Cash",
        gender: "Female",
        output: "",
        orders: {},
        order: {details: {x: 0, y: 0},
                T: false
               },
        orderCount: 0,
        food: food,

        
    },

    methods:{
        clickedBtn: function(){
            
            this.output = this.fullname+ " " + this.email + " " + this.pm + " " + this.gender

            let burger = document.getElementsByName('checkBurger');
            for(var i = 0; i<burger.length; ++i)
            {
                if(burger[i].checked)
                {
                    this.output = this.output + " " +  burger[i].value;
                }
            }
        },

        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            
            return this.orderCount++;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            this.output = this.fullname+ " " + this.email + " " + this.pm + " " + this.gender
            
            let burger = document.getElementsByName('checkBurger');
            for(var i = 0; i<burger.length; ++i)
            {
                if(burger[i].checked)
                {
                    this.output = this.output + " " +  burger[i].value;
                }
            }
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: this.order.details.x,
                    y: this.order.details.y,
                },
                
                orderItems: [this.output],
            });
        },

        displayOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            
            //orderId: this.getNext(),

            this.order.details.x = event.clientX - 10 - offset.x,
            this.order.details.y = event.clientY - 10 - offset.y,
            this.order.showT = true
            
            
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
