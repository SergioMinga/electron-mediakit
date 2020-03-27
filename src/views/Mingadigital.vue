<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabsMinga" background-color="primary" color="white" dark @change="onTabChange" show-arrows>
						<v-tab> Mingadigital </v-tab>
						<v-tab> Qué es? </v-tab>
						<v-tab> Soluciones </v-tab> 
						{{tabsMinga}}
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counter==2" style="z-index:7; position:relative">
				<v-btn small to="/map?step=0">MAP <v-icon dark right small>arrow_forward</v-icon></v-btn>
			</div>
		</div> 
		<div class="nav-tematics" > 
		
		</div> 
		<page0 v-if="counter==0"></page0>
		<page1 v-if="counter==1"></page1> 
		<page2 v-if="counter==2"></page2> 
	</span>
</template>

<script>
import comp0 from '../components/Mingadigital/Page-1'
import comp1 from '../components/Mingadigital/Page-2'
import comp2 from '../components/Mingadigital/Page-3' 
 
export default {
 
	data: function () {
		return {
			counter: 0,
			e6: 1,
			right: true, 
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1,
		'page2': comp2, 
	},
	created() { 
		if(this.$route.query.step){ 
			this.tabsMinga =  parseInt(this.$route.query.step);
			this.counter =  parseInt(this.$route.query.step);  
		}
	},
	mounted () { 
		document.addEventListener("keyup", this.nextItem);  
	},  
	methods: { 
		nextItem() {
			/*right*/
			if(event.keyCode == 39 && this.$route.name=="Mingadigital"){
				if(this.counter < 2){
					this.counter++;
					this.tabsMinga++;
					this.$router.push({ path: '/', query: { step: this.counter }}).catch()
				} else { 
					this.$router.push({ path: '/map', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if(event.keyCode == 37 && this.$route.name=="Mingadigital"){
				if(this.counter > 0){
					this.counter--;
					this.tabsMinga--; 
				} 
			}  
		}, 
		async onTabChange(clickedTab)
		{	
			this.counter = clickedTab; 
			this.tabs = clickedTab;
			this.$router.push({ path: '/', query: { step: clickedTab }}).catch()
		}
	},
	

}
</script>
