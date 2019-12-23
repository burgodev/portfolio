<template>

        <v-row>
            <v-col sm="2" md="2" lg="2" xl="2" cols="2" class="align-center text-right">
                <v-btn text icon x-large color="black" @click="previousPhoto()" :disabled="previousDisabled">
                    <v-icon>arrow_back_ios</v-icon>
                </v-btn>
            </v-col>

            <v-col sm="8" md="8" lg="8" xl="8" cols="8">
                <v-img
                        :src="gallery[arrayPosition]"
                        aspect-ratio="1"
                        contain
                        class="mx-auto"
                        max-height="85vh"
                ></v-img>
            </v-col>

            <v-col sm="2" md="2" lg="2" xl="2" cols="2" class="align-center text-left">
                <v-btn text icon x-large color="black" @click="nextPhoto()" :disabled="nextDisabled">
                    <v-icon>arrow_forward_ios</v-icon>
                </v-btn>
            </v-col>
        </v-row>

</template>

<script>
    export default {
        name: "Gallery.vue",

        data() {
            return {
                gallery: [
                    'https://www.racecomunicacao.com.br/wp-content/uploads/2016/08/A-tecnologia-a-favor-da-comunicação_Ana-Carolina.jpg',
                    'https://cio.com.br/wp-content/uploads/2019/12/transformacao-digital.jpg',
                    'http://www.grupoalliance.com.br/wp-content/uploads/2018/08/tecnologia-e-marketing-por-que-aproximar-esses-setores-da-empresa.jpeg'
                ],
                arrayPosition: 0,
                nextDisabled: false,
                previousDisabled: true,
            };
        },

        methods: {
            nextPhoto() {
                if (this.arrayPosition < this.gallery.length - 1) {
                    this.arrayPosition += 1;
                    this.previousDisabled = false;
                }

                if (this.arrayPosition === this.gallery.length - 1) {
                    this.nextDisabled = true;
                }
            },

            previousPhoto() {
                if (this.arrayPosition > 0) {
                    this.arrayPosition -= 1;
                    this.nextDisabled = false;
                }

                if (this.arrayPosition === 0) {
                    this.previousDisabled = true;
                }
            },
        }
    }
</script>

<style scoped>
    .text-right {
        text-align: right;
    }

    .text-left {
        text-align: left;
    }

    .align-center {
        align-self: center;
    }
</style>