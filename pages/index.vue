<template>
<v-container fluid style="background-color:white !important">
    <v-row>
        <v-col cols="12" class=" textcenter">
            <v-card style="background-color:#ebf0e6;">
                <v-row no-gutters>
                    <v-col cols="2">
                        <v-icon class="save-icon">mdi-content-save-outline</v-icon>
                    </v-col>
                    <v-col cols="10">
                    </v-col>
                    <v-col cols="12">
                        <v-card-text>
                            <h1 class="custom-heading" >KM PRIYANKA</h1>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12">
            <h4 class="define" style="color:black !important">
                Define Your Automation Flow
            </h4>
        </v-col>
    </v-row>

    <v-row>

        <v-col cols="12" style="display:flex; justify-content:center; align-items:center;">
            <v-card style="background-color:#ebf0e6;">

                <v-card-text>
                    <h4 style="color:#4a61c1;">Task: Former Suite</h4>
                </v-card-text>

            </v-card>
        </v-col>

    </v-row>

    <v-container>
        <v-row>
            <v-col cols="12" sm="3">
            </v-col>
            <v-col cols="12" sm="6" class=" mt-5">
                <v-card>
                    <v-row>
                        <v-col cols="12" style="background-color:#4a61c1;" class="d-flex justify-end align-center">
                            <v-icon class="view-icon icon-with-gap eyeicon1" >mdi-eye</v-icon>
                            <v-icon class="search-icon icon-with-gap eyeicon1">mdi-magnify</v-icon>
                            <v-icon @click="openDialog" size="x-large" class="icon-spacing eyeicon1">mdi-pencil</v-icon>
                            <v-dialog v-model="dialogVisible" max-width="500">
                                <v-card style="background-color: #4a61c1">
                                    <v-card-title class="eyeicon1">Dialog Title</v-card-title>
                                    <v-card-text>
                                        <v-responsive class="mx-auto" max-width="344">
                                            <v-text-field class="mt-5 " label="Type Here..." hide-details="auto" outlined></v-text-field>
                                        </v-responsive>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn @click="dialogVisible = false" style="background-color:rgb(0, 5, 32)" class="eyeicon1">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                        </v-col>

                    </v-row>

                    <v-row>
                        <v-col cols="12" style="background-color: #4a61c1">
                            <div class="icon-and-text-container">
                                <v-avatar>
                                    <v-icon style="font-size: 48px;" class="eyeicon1">mdi-weather-partly-cloudy</v-icon>
                                </v-avatar>
                                <p style="color:white !important">Lorem ipsum dolor sit amet consectetur adipisicing eli olor sit amet consectetur adipisicing elit. Magnam consectetur adipisicing elit. Magnam, quam?</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" sm="3">
            </v-col>
            <v-col cols="12" style="display: flex; justify-content:center; align-items:center">
                <div>
                    <v-icon style=" font-size:30px" >
                        mdi-chevron-down
                    </v-icon>

                </div>
            </v-col>
        </v-row>
    </v-container>

    <!-- <v-row style="margin-bottom:290px">
        <v-col cols="12" style="display: flex; justify-content:center; align-items:center">
            <div>
                <v-icon style="color:#4a61c1; font-size:60px">
                    mdi-chevron-down
                </v-icon>

            </div>
        </v-col>
    </v-row> -->
    <v-container>
        <v-row v-for="(box, index) in newBoxes" :key="index" style="margin-top: 5px;">
            <v-col cols="12" sm="3"></v-col>
            <v-col cols="12" sm="6" style="background-color: #4a61c1">
                <v-card>
                    <v-row>
                        <v-col cols="12" style="background-color:#4a61c1" class="d-flex justify-end align-center">
                            <v-icon class="view-icon icon-with-gap eyeicon1">mdi-eye</v-icon>
                            <v-icon class="search-icon icon-with-gap eyeicon1">mdi-magnify</v-icon>
                            <v-icon @click="openDialog" size="x-large" class="icon-spacing eyeicon1">mdi-pencil</v-icon>
                            <v-dialog v-model="dialogVisible" max-width="500">
                                <v-card style="background-color: #26c6da">
                                    <v-card-title>Dialog Title</v-card-title>
                                    <v-card-text>
                                        <v-responsive class="mx-auto" max-width="344">
                                            <v-text-field class="mt-5" label="Type Here..." hide-details="auto" outlined></v-text-field>
                                        </v-responsive>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn @click="dialogVisible = false" style="background-color:rgb(0, 5, 32)">Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
    
                        </v-col>
    
                    </v-row>
    
                    <v-row>
                        <v-col cols="12" style="background-color: #4a61c1">
                            <div class="icon-and-text-container">
                                <v-avatar>
                                    <v-icon style="font-size: 48px;" class="eyeicon1">mdi-weather-partly-cloudy</v-icon>
                                </v-avatar>
                                <p class="eyeicon1">Lorem ipsum dolor sit amet consectetur adipisicing eli olor sit amet consectetur adipisicing elit. Magnam consectetur adipisicing elit. Magnam, quam?</p>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6"></v-col>
    
            <v-col cols="12" style="display: flex; justify-content:center; align-items:center">
                <div>
                    <v-icon style="color:#4a61c1; font-size:30px">
                        mdi-chevron-down
                    </v-icon>
    
                </div>
            </v-col>
    
        </v-row>


        <v-row>
            <v-col cols="12" style="display: flex; justify-content: center; align-items: center">
                <v-icon id="arrow" style="color: #4a61c1; font-size: 40px; cursor: pointer" @click="addArrow">
                    mdi-chevron-down
                </v-icon>
    
            </v-col>
            <v-col cols="12" style="display: flex; justify-content: center; align-items: center">
                <template>
                    <v-btn style="background-color: rgb(196, 193, 193);  padding: 20px; ">
                        <v-icon id="arrow" style="color: white; font-size: 30px;background-color: #4a61c1;border-radius: 50px; cursor: pointer;">
                            mdi-play
                        </v-icon>
                    </v-btn>
    
                </template>
            </v-col>
        </v-row>
    </v-container>
   
    
   

</v-container>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            newBoxes: [],
        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        addArrow() {
            // Push a new box to the newBoxes array on arrow click
            this.newBoxes.push({});
        },
    },
};
</script>

<style scoped>
.textcenter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}

.custom-heading {
    font-size: 40px;

    @media (max-width: 600px) {
        font-size: 24px;
    }

    color: #4a61c1;
    font-family: 'Montserrat',
    sans-serif;
}

.save-icon {
    font-size: 24px;
    color: #4a61c1;
    position: absolute;
    right: 5px;
    top: -10px;
}

.define {
    display: flex;
    align-items: center;
    justify-content: center;
}

.task {
    color: #4a61c1;

}

.icon-and-text-container {
    display: flex;
    /* Use flexbox */
    align-items: center;
    /* Vertically center items */
}

.icon-and-text-container p {
    margin-left: 10px;
    /* Add some space between the icon and text */
}

.icon-with-gap {
    border-right: 5px solid transparent;
}


.eyeicon1{
    color:white ;
}
</style>
