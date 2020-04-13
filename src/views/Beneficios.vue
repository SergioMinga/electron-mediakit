<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabBeneficios" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Beneficios </v-tab>
						<v-tab> Respaldo </v-tab> 
					</v-tabs>
				</v-card>  
			</template>  
		</div> 
		<v-speed-dial 
            bottom
            left
            absolute
            direction="left"
            transition="slide-x-transition" >
            <template v-slot:activator> 
                <v-btn @click="nextItem('left')" fab x-small dark> <v-icon dark small>keyboard_arrow_left</v-icon></v-btn>
				<v-btn @click="nextItem('right')" fab x-small dark> <v-icon dark small>keyboard_arrow_right</v-icon></v-btn>
            </template> 
        </v-speed-dial>
		<page0 v-if="counterBeneficios==0"></page0>
		<page1 v-if="counterBeneficios==1"></page1>  
	</span>
</template>

<script>
import comp0 from '../components/Beneficios/Page-38'
import comp1 from '../components/Beneficios/Page-39' 
 
export default {
 
	data: function () {
		return {
			counterBeneficios: 0,
			e6: 1,
			right: true,
			miniVariant: false, 
			background: false,
			drawer: false, 
			tabBeneficios: null  
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1, 
	},
	methods: { 
		nextItem(direction) {
			/*right*/
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="Beneficios"){
				if(this.counterBeneficios < 1){
					this.counterBeneficios++;
					this.tabBeneficios++;
					this.$router.push({ path: '/beneficios', query: { step: this.counterBeneficios }}).catch()
				} 
			} 
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="Beneficios"){ 
				if(this.counterBeneficios > 0){
					this.counterBeneficios--;
					this.tabBeneficios--;
					this.$router.push({ path: '/beneficios', query: { step: this.counterBeneficios }}).catch()
				} else  {  
					this.$router.push({ path: '/adshouse', query: { step: 5 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.counterBeneficios = clickedTab; 
			this.$router.push({ path: '/beneficios', query: { step: clickedTab }}).catch()

		}
	},
	mounted () {    
		document.addEventListener("keyup", this.nextItem);	 
	},
	beforeDestroy() {
		document.removeEventListener('keyup', this.nextItem);
    },
	created() { 
		if(this.$route.query.step){ 
			this.tabBeneficios =  parseInt(this.$route.query.step);
			this.counterBeneficios =  parseInt(this.$route.query.step);  
		}
	},

}
</script>
