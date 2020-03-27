<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tab" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab>MAP</v-tab>
						<v-tab>Qué es?</v-tab>
						<v-tab>Publishers</v-tab> 
						<v-tab>Audiencia </v-tab> 
						<v-tab>Segmentacion</v-tab>  
						<v-tab>Formatos</v-tab> 
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counter==5" style="z-index:7; position:relative">
				<v-btn small to="/programmatic?step=0">Programmatic <v-icon dark right small>arrow_forward</v-icon></v-btn>
			</div>
		</div>  
		<page0 v-if="counter==0"></page0>
		<page1 v-if="counter==1"></page1> 
		<page2 v-if="counter==2"></page2> 
		<page3 v-if="counter==3"></page3> 
		<page4 v-if="counter==4"></page4> 
		<page5 v-if="counter==5"></page5>  
	</span>
</template>

<script>
import comp0 from '../components/Map/Page-4'
import comp1 from '../components/Map/Page-5'
import comp2 from '../components/Map/Page-6' 
import comp3 from '../components/Map/Page-7' 
import comp4 from '../components/Map/Page-8' 
import comp5 from '../components/Map/Page-9'
 
export default { 
	data: function () {
		return {
			counter: 0, 
			right: true, 
			tab: null, 
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1,
		'page2': comp2, 
		'page3': comp3,
		'page4': comp4,
		'page5': comp5, 
	},
	methods: { 
		nextItem() { 
			/*right*/
			if(event.keyCode == 39 && this.$route.name=="MAP"){
				if(this.counter < 5){
					this.counter++;
					this.tab++;
					this.$router.push({ path: '/map', query: { step: this.counter }}).catch()
				}  else { 
					this.$router.push({ path: '/programmatic', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if(event.keyCode == 37 && this.$route.name=="MAP"){ 
				if(this.counter > 0){
					this.counter--;
					this.tab--;
					this.$router.push({ path: '/map', query: { step: this.counter }}).catch()
				} else  {  
					this.$router.push({ path: '/', query: { step: 2 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.tab =  clickedTab;
			this.counter =  clickedTab;
		}
	},
	mounted () {  
		document.addEventListener("keyup", this.nextItem);		 
	},  
	created() { 
		if(this.$route.query.step){ 
			this.tab =  parseInt(this.$route.query.step);
			this.counter =  parseInt(this.$route.query.step);  
		} else {
			this.$router.push({ path: '/map', query: { step: 0 }}).catch()
		}
	},
}
</script>
