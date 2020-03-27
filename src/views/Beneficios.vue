<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tab" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Beneficios </v-tab>
						<v-tab> Respaldo </v-tab> 
					</v-tabs>
				</v-card>  
			</template>  
		</div> 
		<div class="nav-tematics" > 
		
		</div> 
		<page0 v-if="counter==0"></page0>
		<page1 v-if="counter==1"></page1>  
	</span>
</template>

<script>
import comp0 from '../components/Beneficios/Page-38'
import comp1 from '../components/Beneficios/Page-39' 
 
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
			if(event.keyCode == 39 && this.$route.name=="Beneficios"){
				if(this.counter < 1){
					this.counter++;
					this.tab++;
					this.$router.push({ path: '/beneficios', query: { step: this.counter }}).catch()
				} 
			} 
			/*left*/
			if(event.keyCode == 37 && this.$route.name=="Beneficios"){ 
				if(this.counter > 0){
					this.counter--;
					this.tab--;
					this.$router.push({ path: '/beneficios', query: { step: this.counter }}).catch()
				} else  {  
					this.$router.push({ path: '/adshouse', query: { step: 5 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.counter = clickedTab; 
			this.$router.push({ path: '/beneficios', query: { step: clickedTab }}).catch()

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
			this.$router.push({ path: '/beneficios', query: { step: 0 }}).catch()
		}
	},

}
</script>
