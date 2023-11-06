<template>
<div class="page-container">
    <v-container fluid>
        <v-row>
            <v-col cols="12">

                <v-card class="mx-auto">
                    <v-layout>
                        <v-app-bar style="background-color: #4a61c1;" image="https://picsum.photos/1920/1080?random">
                            <template v-slot:image>
                                <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
                            </template>

                            <template v-slot:prepend>
                                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                            </template>

                            <v-app-bar-title>
                                <v-btn icon>
                                    <v-icon class="iconicon">mdi-menu</v-icon>
                                </v-btn>
                            </v-app-bar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon class="iconicon">mdi-bell</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon class="iconicon">mdi-share-variant</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon class="iconicon">mdi-magnify</v-icon>
                            </v-btn>
                        </v-app-bar>

                        <!-- <v-main>
                              <v-container fluid>
                                <v-row dense>
                                  <v-col
                                    v-for="n in 4"
                                    :key="n"
                                    cols="12"
                                  >
                                    <v-card
                                      :title="`Content ${n}`"
                                      :subtitle="`Subtitle for Content ${n}`"
                                      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
                                    ></v-card>
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-main> -->
                    </v-layout>
                </v-card>

            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="mt-5">
                <div style="display:flex; align-items:center; justify-content:center ">
                    <h2 class="textcolor">AUTOMATE YOUR TASKS IN A SMARTER WAY</h2>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" class="mt-2">
              <div style="display:flex; align-items:center; justify-content:center">
                <img
                  :src="require('~/assets/images/artificial-intelligence.png')"
                  :alt="imageAltText"
                  
                >
              </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            imageSource: '@/assets/images/artificial-intelligence.png', // Image ka path specify karein
            imageAltText: 'Alternative Text for Image', // Image ke liye alt text
        };
    },
};
</script>

<style scoped>
.page-container {
    background-color: #ffffff;
}

.iconicon {
    color: white !important;
}

.textcolor {
    color: rgb(74 97 193);
}
</style>
