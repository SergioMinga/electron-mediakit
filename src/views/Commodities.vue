<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tab" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Commodities </v-tab>
						<v-tab> Qué es? </v-tab> 
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counter==1" style="z-index:7; position:relative">
				<v-btn small to="/adshouse">AdsHouse <v-icon dark right small>arrow_forward</v-icon></v-btn>
			</div>
		</div> 
		<div class="nav-tematics" > 
		
		</div> 
		<page0 v-if="counter==0"></page0>
		<page1 v-if="counter==1"></page1>  
	</span>
</template>

<script>
import comp0 from '../components/Commodities/Page-30'
import comp1 from '../components/Commodities/Page-31' 
 
export default {
 
	data: function () {
		return {
			counter: 0,
			e6: 1,
			right: true,
			miniVariant: false, 
			background: false,
			drawer: false, 
			tab: null  
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1, 
	},
	methods: { 
		nextItem() {
			/*right*/
			if(event.keyCode == 39 && this.$route.name=="Commodities"){
				if(this.counter < 2){
					this.counter++;
					this.tab++;
					this.$router.push({ path: '/commodities', query: { step: this.counter }}).catch()
				}  else { 
					this.$router.push({ path: '/adshouse', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if(event.keyCode == 37 && this.$route.name=="Commodities"){ 
				if(this.counter > 0){
					this.counter--;
					this.tab--;
					this.$router.push({ path: '/commodities', query: { step: this.counter }}).catch()
				} else  {  
					this.$router.push({ path: '/programmatic', query: { step: 5 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.counter = clickedTab; 
			this.$router.push({ path: '/commodities', query: { step: clickedTab }}).catch()

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
			this.$router.push({ path: '/commodities', query: { step: 0 }}).catch()
		}
	},

}
</script>
