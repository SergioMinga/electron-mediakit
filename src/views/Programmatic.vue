<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabProgrammatic" background-color="primary" color="white" dark @change="onTabChange" center-active show-arrows>
						<v-tab>Programmatic</v-tab>
						<v-tab>¿Qué es?</v-tab>
						<v-tab>Formatos</v-tab> 
						<v-tab>-Pendiente- </v-tab> 
						<v-tab>-Pendiente-</v-tab>  
						<v-tab>Formatos</v-tab> 
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counterProgrammatic==5" style="z-index:7; position:relative">
				<v-btn small to="/commodities?step=0">Commodities <v-icon dark right small>arrow_forward</v-icon></v-btn>
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
		<page0 v-if="counterProgrammatic==0"></page0>
		<page1 v-if="counterProgrammatic==1"></page1> 
		<page2 v-if="counterProgrammatic==2"></page2> 
		<page3 v-if="counterProgrammatic==3"></page3> 
		<page4 v-if="counterProgrammatic==4"></page4> 
		<page5 v-if="counterProgrammatic==5"></page5>  
	</span>
</template>

<script>
import comp0 from '../components/Programmatic/Page-17'
import comp1 from '../components/Programmatic/Page-18'
import comp2 from '../components/Programmatic/Page-19' 
import comp3 from '../components/Programmatic/Page-24' 
import comp4 from '../components/Programmatic/Page-25' 
import comp5 from '../components/Programmatic/Page-29'
 
export default {
	props: ['counterProgrammatic_set'],
	data: function () {
		return {
			counterProgrammatic: 0,
			e6: 1,
			right: true,
			miniVariant: false, 
			background: false,
			drawer: false, 
			tabProgrammatic: null,
			items: [
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me' },
				{ title: 'Click Me 2' },
			],
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
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="Programmatic"){  
				if(this.counterProgrammatic < 5){ 
					this.counterProgrammatic++;
					this.tabProgrammatic++;
					this.$router.push({ path: '/programmatic', query: { step: this.counterProgrammatic }}).catch()
				}  else {  
					this.$router.push({ path: '/commodities', query: { step: 0 }}).catch()
				} 
			} 
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="Programmatic"){ 
				if(this.counterProgrammatic > 0){
					this.counterProgrammatic--;
					this.tabProgrammatic--;
					this.$router.push({ path: '/programmatic', query: { step: this.counterProgrammatic }}).catch()
				} else  {  
					this.$router.push({ path: '/map', query: { step: 5 }}).catch()  
				}
			}
		},
		async onTabChange(clickedTab)
		{	
			this.tabProgrammatic =  clickedTab;
			this.counterProgrammatic =  clickedTab;
			this.$router.push({ path: '/programmatic', query: { step: clickedTab }}).catch()
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
			this.tabProgrammatic =  parseInt(this.$route.query.step);
			this.counterProgrammatic =  parseInt(this.$route.query.step);  
		}
	},
}
</script>
