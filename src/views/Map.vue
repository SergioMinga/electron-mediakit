<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tab" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab>MAP</v-tab>
						<v-tab>¿Qué es?</v-tab>
						<v-tab>Publishers</v-tab> 
						<v-tab>Audiencia </v-tab> 
						<v-tab>Segmentacion</v-tab>  
						<v-tab>Formatos</v-tab> 
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counterMAP==5" style="z-index:7; position:relative">
				<v-btn small to="/programmatic?step=0">Programmatic <v-icon dark right small>arrow_forward</v-icon></v-btn>
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
		<page0 v-if="counterMAP==0"></page0>
		<page1 v-if="counterMAP==1"></page1> 
		<page2 v-if="counterMAP==2"></page2> 
		<page3 v-if="counterMAP==3"></page3> 
		<page4 v-if="counterMAP==4"></page4> 
		<page5 v-if="counterMAP==5"></page5>  
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
			counterMAP: 0, 
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
		nextItem(direction) { 
			/*right*/
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="MAP"){
				if(this.counterMAP < 5){
					this.counterMAP++;
					this.tab++;
					this.$router.push({ path: '/map', query: { step: this.counterMAP }}).catch()
				}  else { 
					this.$router.push({ path: '/programmatic', query: { step: 0 }}).catch()
				}
			} 
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="MAP"){ 
				if(this.counterMAP > 0){
					this.counterMAP--;
					this.tab--;
					this.$router.push({ path: '/map', query: { step: this.counterMAP }}).catch()
				} else  {  
					this.$router.push({ path: '/', query: { step: 2 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	 
			this.tab =  clickedTab;
			this.counterMAP =  clickedTab;
			this.$router.push({ path: '/map', query: { step: clickedTab }}).catch()
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
			this.tab =  parseInt(this.$route.query.step);
			this.counterMAP =  parseInt(this.$route.query.step);  
		} else {
			this.$router.push({ path: '/map', query: { step: 0 }}).catch()
		}
	},
}
</script>
