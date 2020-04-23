<template>
    <div> 
        <v-tabs v-model="tabVertical" background-color="white" @change="onTabChange" color="deep-purple accent-4" vertical right >
            <v-tab >Overpage</v-tab>
            <v-tab>Full Overpage</v-tab>
            <v-tab>Overside</v-tab> 
            <v-tab>Full Mobile</v-tab> 
            <v-tab>Nativos</v-tab> 
            <v-tab>Video in Context</v-tab> 
            <v-tab>Video Preroll</v-tab> 
            <v-tab>Formato IAB</v-tab>  

            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page9/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page9/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Overpage.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page10/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page10/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Full-Overpage.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page11/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page11/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid v-overside" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Overside.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page12/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page12/page-2.png" alt=""> 
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid v-overside" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Full-Mobile.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>   
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page13/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page13/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Nativo.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page14/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page14/page-2.png" alt=""> 
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Video-In-Content.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>   
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page15/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page15/page-2.png" alt="">
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Pre-Roll.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>    
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute-format"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/MAP/page16/page-1.png" alt="">
                    <img class="img-fluid bg-data"  src="../../assets/images/mediakit/MAP/page16/page-2.png" alt=""> 
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid hvr-grow-shadow" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/Chevrolet.mp4" type="video/mp4" />
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
            if((event.keyCode == 40) && this.$route.name=="MAP"){
                if(this.tabVertical >= 0){ 
					this.tabVertical++; 
				}
			}
            // up
            if((event.keyCode == 38) && this.$route.name=="MAP"){ 
                if(this.tabVertical <= 7){
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
