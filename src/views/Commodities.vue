<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabCommodities" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab> Commodities </v-tab>
						<v-tab> ¿Qué es? </v-tab> 
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counterCommodities==1" style="z-index:7; position:relative">
				<v-btn small to="/adshouse">AdsHouse <v-icon dark right small>arrow_forward</v-icon></v-btn>
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
		<page0 v-if="counterCommodities==0"></page0>
		<page1 v-if="counterCommodities==1"></page1>  
	</span>
</template>

<script>
import comp0 from '../components/Commodities/Page-30'
import comp1 from '../components/Commodities/Page-31' 
 
export default {
 
	data: function () {
		return {
			counterCommodities: 0,
			e6: 1,
			right: true,
			miniVariant: false, 
			background: false,
			drawer: false, 
			tabCommodities: null  
		}
	},
	components: {
		'page0': comp0,
		'page1': comp1, 
	},
	methods: { 
		nextItem(direction) {
			/*right*/
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="Commodities"){
				if(this.counterCommodities < 1){
					this.counterCommodities++;
					this.tabCommodities++;
					this.$router.push({ path: '/commodities', query: { step: this.counterCommodities }}).catch()
				}  else { 
					this.$router.push({ path: '/adshouse', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="Commodities"){ 
				if(this.counterCommodities > 0){
					this.counterCommodities--;
					this.tabCommodities--;
					this.$router.push({ path: '/commodities', query: { step: this.counterCommodities }}).catch()
				} else  {   
					this.$router.push({ path: '/programmatic', query: { step: 5 }}).catch() 
				}
			}
		},
		async onTabChange(clickedTab)
		{	 
			this.tabCommodities =  clickedTab;
			this.counterCommodities =  clickedTab;
			this.$router.push({ path: '/commodities', query: { step: clickedTab }}).catch()
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
			this.tabCommodities =  parseInt(this.$route.query.step);
			this.counterCommodities =  parseInt(this.$route.query.step);  
		}
	},
}
</script>
