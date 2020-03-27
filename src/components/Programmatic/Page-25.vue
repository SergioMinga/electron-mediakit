<template>
    <div> 
        <v-tabs v-model="tabVertical" background-color="white"  color="deep-purple accent-4" vertical right >
            <v-tab>Segmentación Geo Hot point</v-tab>
            <v-tab>Audio Programatico</v-tab>
            <v-tab>Generacion de Leads</v-tab> 
            <v-tab>Descarga APP</v-tab>  
            <v-tab-item> 
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page25/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page25/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-itt" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/Geo-Hot-Point.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page26/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page26/page-2.png" alt="">   
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page27/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page27/page-2.png" alt="">  
                    <div class="video-absolute"> 
                        <video autoplay id="ad-video" width="500" height="400" muted responsive class="video-js vjs-fluid p-itt" preload="auto" poster="" data-setup="{controls: false, autoplay: true, controlBar: {muteToggle: false},controlBar: {progressControl: false}}" >
                            <source src="../../assets/videos/programmatic/Generacion-de-Leads.mp4" type="video/mp4" />
                            <p class="vjs-no-js">
                            To view this video please enable JavaScript
                            </p>
                        </video> 
                    </div>  
                </div>  
            </v-tab-item>
            <v-tab-item> 
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page28/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page28/page-2.png" alt=""> 
                    
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
			tabVertical: null, 
		}
	}, 
}
</script>
