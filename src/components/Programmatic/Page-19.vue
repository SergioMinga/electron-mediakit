<template>
    <div> 
        <v-tabs v-model="tabVertical" background-color="white"  color="deep-purple accent-4" vertical right >
            <v-tab>ITT Interacción Básica</v-tab>
            <v-tab>ITT Interacción Intermedia</v-tab>
            <v-tab>ITT Interacción Avanzada</v-tab> 
            <v-tab>Mobile Display Expandible</v-tab> 
            <v-tab>Notificaciones Push</v-tab> 
            <v-tab-item> 
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page19/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page19/page-2.png" alt="">  
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
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page20/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page20/page-2.png" alt="">  
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
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page21/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page21/page-2.png" alt="">  
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
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page22/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page22/page-2.png" alt=""> 
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
                <div class="full-absolute"> 
                    <img class="img-fluid bg-absolute" src="../../assets/images/mediakit/page23/page-1.png" alt="">
                    <img class="img-fluid" data-aos="fade-right"  src="../../assets/images/mediakit/page23/page-2.png" alt="">  
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
			tabVertical: null, 
		}
	}, 
}
</script>
