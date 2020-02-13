<template>
	<span> 
		<page0  v-if="counter==0"></page0>
		<page1  v-if="counter==1"></page1> 
		<page2  v-if="counter==2"></page2> 
		<page3  v-if="counter==3"></page3> 
		<page4  v-if="counter==4"></page4>
		<page5  v-if="counter==5"></page5> 
		<page6  v-if="counter==6"></page6> 
		<page7  v-if="counter==7"></page7> 
		<page8  v-if="counter==8"></page8>
		<page9  v-if="counter==9"></page9> 
		<page10  v-if="counter==10"></page10> 
		<page11	 v-if="counter==11"></page11>  
		<div class="nav-router">
			<button v-on:click="decrement">atras</button>
			<button v-on:click="increment">siguiente</button>
        </div>
	</span>
</template>

<script>
import comp0 from '../components/Page-0'
import comp1 from '../components/Page-1'
import comp2 from '../components/Page-2'
import comp3 from '../components/Page-3'
import comp4 from '../components/Page-4'
import comp5 from '../components/Page-5'
import comp6 from '../components/Page-6'
import comp7 from '../components/Page-7'
import comp8 from '../components/Page-8'
import comp9 from '../components/Page-9'
import comp10 from '../components/Page-10'
import comp11 from '../components/Page-11'
 
export default {
 
	data: function () {
		return {
			counter: 0
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1,
		'page2': comp2,
		'page3': comp3,
		'page4': comp4,
		'page5': comp5,
		'page6': comp6,
		'page7': comp7,
		'page8': comp8,
		'page9': comp9,
		'page10': comp10,
		'page11': comp11
	},
	methods: {
		increment() { 
			this.counter++;
		},
		decrement() { 
			this.counter--;
		},
		nextItem() {
			if(event.keyCode == 39){
				this.counter++;
			}
			if(event.keyCode == 37){
				this.counter--;
			}
		}
	},
	mounted () {
		document.addEventListener("keyup", this.nextItem);
	}, 

}
</script>
