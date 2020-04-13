<template>
	<span>  
		<div class="nav-top"> 
			<template>
				<v-card class="tab-nav-minga">
					<v-tabs v-model="tabsMinga" background-color="primary" color="white" dark @change="onTabChange" show-arrows>
						<v-tab> Mingadigital </v-tab>
						<v-tab> ¿Qué es?  </v-tab>
						<v-tab> Soluciones </v-tab>  
					</v-tabs>
				</v-card>  
			</template> 
			<div class="my-2 text-right" v-if="counterMinga==2" style="z-index:7; position:relative">
				<v-btn small to="/map?step=0">MAP <v-icon dark right small>arrow_forward</v-icon></v-btn>
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
		<page0 v-if="counterMinga==0"></page0>
		<page1 v-if="counterMinga==1"></page1> 
		<page2 v-if="counterMinga==2"></page2> 
	</span>
</template>

<script>
import comp0 from '../components/Mingadigital/Page-1'
import comp1 from '../components/Mingadigital/Page-2'
import comp2 from '../components/Mingadigital/Page-3' 
 
export default {
 
	data: function () {
		return {
			counterMinga: 0,
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
			this.counterMinga =  parseInt(this.$route.query.step);  
		}
	},
	mounted () { 
		document.addEventListener("keyup", this.nextItem);  
	},
	beforeDestroy() {
		document.removeEventListener('keyup', this.nextItem);
    },
	methods: { 
		nextItem(direction) { 
			/*right*/
			if((event.keyCode == 39 || direction == 'right') && this.$route.name=="Mingadigital"){
				if(this.counterMinga < 2){
					this.counterMinga++;
					this.tabsMinga++;
					this.$router.push({ path: '/', query: { step: this.counterMinga }}).catch()
				} else { 
					this.$router.push({ path: '/map', query: { step: 0 }}).catch()
				}
			}   
			/*left*/
			if((event.keyCode == 37 || direction == 'left') && this.$route.name=="Mingadigital"){ 
				if(this.counterMinga > 0){
					this.counterMinga--;
					this.tabsMinga--;
					this.$router.push({ path: '/', query: { step: this.counterMinga }}).catch()
				} 
			}
		}, 
		async onTabChange(clickedTab)
		{	
			this.counterMinga = clickedTab; 
			this.tabsMinga = clickedTab;
			this.$router.push({ path: '/', query: { step: clickedTab }}).catch()
		}, 
	},
}
</script>
