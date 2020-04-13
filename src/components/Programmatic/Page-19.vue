<template>
    <div> 
        <v-tabs v-model="tabVertical" background-color="white"  @change="onTabChange" color="deep-purple accent-4" vertical right >
            <v-tab>ITT Interacción <br> Básica</v-tab>
            <v-tab>ITT Interacción <br> Intermedia</v-tab>
            <v-tab>ITT Interacción <br> Avanzada</v-tab> 
            <v-tab>Mobile Display <br> Expandible</v-tab> 
            <v-tab>Notificaciones <br> Push</v-tab> 
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/Programmatic/page19/page-1.png" alt="">
                    <img class="img-fluid bg-data" data-aos="fade-right"  src="../../assets/images/mediakit/Programmatic/page19/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-itt" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/ITT-Basico.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/Programmatic/page20/page-1.png" alt="">
                    <img class="img-fluid bg-data" data-aos="fade-right"  src="../../assets/images/mediakit/Programmatic/page20/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-itt" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/ITT-Intermedio.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/Programmatic/page21/page-1.png" alt="">
                    <img class="img-fluid bg-data" data-aos="fade-right"  src="../../assets/images/mediakit/Programmatic/page21/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-itt" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/ITT-Avanzado.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/Programmatic/page22/page-1.png" alt="">
                    <img class="img-fluid bg-data" data-aos="fade-right"  src="../../assets/images/mediakit/Programmatic/page22/page-2.png" alt=""> 
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-push" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/ITT-Expandible.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>   
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/Programmatic/page23/page-1.png" alt="">
                    <img class="img-fluid bg-data" data-aos="fade-right"  src="../../assets/images/mediakit/Programmatic/page23/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-push" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/Push.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item> 
        </v-tabs>
    </div> 
</template> 
<script>
import 'video.js/dist/video-js.css' 
export default { 
	data: function () {
		return {
			tabVertical: false, 
		}
	}, 
    methods: { 
		nextTab( ) {
            // down
            if((event.keyCode == 40) && this.$route.name=="Programmatic"){
                if(this.tabVertical >= 0){ 
					this.tabVertical++; 
				}
			}
            // up
            if((event.keyCode == 38) && this.$route.name=="Programmatic"){ 
                if(this.tabVertical <= 5){
					this.tabVertical--; 
				}
			}
		}, 
		async onTabChange(clickedTab)
		{	  
			this.tabVertical =  clickedTab; 
		}
	}, 
    mounted () {    
        document.addEventListener("keyup", this.nextTab);	 
    },
    beforeDestroy() {
        document.removeEventListener('keyup', this.nextTab);
    }, 
}
</script>
