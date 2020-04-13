<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabAdshouse" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Adshouse </v-tab>
						<v-tab> ¿Qué es? </v-tab> 
						<v-tab> Funcionamiento </v-tab>
						<v-tab> Beneficios </v-tab> 
						<v-tab> pendiente </v-tab> 
						<v-tab> pendiente </v-tab>  
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counterAdshouse==5" style="z-index:7; position:relative">
				<v-btn small to="/beneficios">Beneficios <v-icon dark right small>arrow_forward</v-icon></v-btn>
			</div>
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
		<page0 v-if="counterAdshouse==0"></page0>
		<page1 v-if="counterAdshouse==1"></page1>  
		<page2 v-if="counterAdshouse==2"></page2>
		<page3 v-if="counterAdshouse==3"></page3>  
		<page4 v-if="counterAdshouse==4"></page4>
		<page5 v-if="counterAdshouse==5"></page5>  
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
			counterAdshouse: 0,
			e6: 1,
			right: true,
			miniVariant: false, 
			background: false,
			drawer: false, 
			tabAdshouse: null  
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
		nextItem(direction) {
			/*right*/
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="Adshouse"){
				if(this.counterAdshouse < 5){
					this.counterAdshouse++;
					this.tabAdshouse++;
					this.$router.push({ path: '/adshouse', query: { step: this.counterAdshouse }}).catch()
				}  else { 
					this.$router.push({ path: '/beneficios', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="Adshouse"){ 
				if(this.counterAdshouse > 0){
					this.counterAdshouse--;
					this.tabAdshouse--;
					this.$router.push({ path: '/adshouse', query: { step: this.counterAdshouse }}).catch()
				} else  {  
					this.$router.push({ path: '/commodities', query: { step: 1 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	 
			this.tabAdshouse =  clickedTab;
			this.counterAdshouse =  clickedTab;
			this.$router.push({ path: '/adshouse', query: { step: clickedTab }}).catch()
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
			this.tabAdshouse =  parseInt(this.$route.query.step);
			this.counterAdshouse =  parseInt(this.$route.query.step);  
		}
	},

}
</script>
