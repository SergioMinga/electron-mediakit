<template>
  <div id="app"> 
      <router-view/>
        <v-speed-dial 
            bottom
            right
            absolute
            direction="left"
            transition="slide-x-transition" >
            <template v-slot:activator>
              <v-btn   color="blue-grey" dark fab>
                <v-avatar size="30">
                    <img src="./assets/images/icon-minga.png"  alt="John" >
                </v-avatar>
              </v-btn>
            </template>
            <v-btn to="/adshouse"> Adshouse</v-btn>
            <v-btn to="/commodities"> Commodities</v-btn>
            <v-btn to="/programmatic"> Programmatic</v-btn>
            <v-btn to="/map"> MAP </v-btn>
            <v-btn to="/"> Mingadigital </v-btn>
        </v-speed-dial>
  </div>
</template> 
<style>
  @import './assets/css/style.css';
</style>