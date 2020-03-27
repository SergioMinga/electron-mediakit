<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tab" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Adshouse </v-tab>
						<v-tab> Qué es? </v-tab> 
						<v-tab> Funcionamiento </v-tab>
						<v-tab> Beneficios </v-tab> 
						<v-tab> pendiente </v-tab> 
						<v-tab> pendiente </v-tab>  
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counter==5" style="z-index:7; position:relative">
				<v-btn small to="/beneficios">Beneficios <v-icon dark right small>arrow_forward</v-icon></v-btn>
			</div>
		</div> 
		<div class="nav-tematics" > 
		
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
import comp0 from '../components/Adshouse/Page-32'
import comp1 from '../components/Adshouse/Page-33' 
import comp2 from '../components/Adshouse/Page-34'
import comp3 from '../components/Adshouse/Page-35' 
import comp4 from '../components/Adshouse/Page-36' 
import comp5 from '../components/Adshouse/Page-37' 
 
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
		'page2': comp2, 
		'page3': comp3, 
		'page4': comp4, 
		'page5': comp5, 
	},
	methods: { 
		nextItem() {
			/*right*/
			if(event.keyCode == 39 && this.$route.name=="Adshouse"){
				if(this.counter < 5){
					this.counter++;
					this.tab++;
					this.$router.push({ path: '/adshouse', query: { step: this.counter }}).catch()
				}  else { 
					this.$router.push({ path: '/beneficios', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if(event.keyCode == 37 && this.$route.name=="Adshouse"){ 
				if(this.counter > 0){
					this.counter--;
					this.tab--;
					this.$router.push({ path: '/adshouse', query: { step: this.counter }}).catch()
				} else  {  
					this.$router.push({ path: '/commodities', query: { step: 1 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.counter = clickedTab; 
			this.$router.push({ path: '/adshouse', query: { step: clickedTab }}).catch()

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
			this.$router.push({ path: '/adshouse', query: { step: 0 }}).catch()
		}
	},

}
</script>
