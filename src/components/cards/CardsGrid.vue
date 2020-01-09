<template>
  <v-container>
    <v-row>
      <v-col
        v-for="item in items"
        v-bind:key="item.id"
        cols="3"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card class="pointer" :elevation="hover ? 12 : 2">
            <v-card-title style="justify-content: center;">
              <h5
                style="color: black; font-family: 'Audiowide', cursive; text-align: center;"
              >{{item.title}}</h5>
            </v-card-title>

            <v-card-text>
              <v-row style="justify-content: center;">
                <v-img
                  contain
                  eager
                  height="150px"
                  width="100px"
                  :src="item.url != null ? item.url : 'https://pngimage.net/wp-content/uploads/2018/06/img-icon-png-3.png' "
                />
              </v-row>
            </v-card-text>

            <v-card-text class="text-center text-justify">
              <span> {{item.text.substr(0, 85)}} <span> ... </span></span>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "CardsGrid.vue",

    data() {
      return {
        items: [{
          id: 0,
          title: 'Card 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
          url: require('../../assets/vue.png')
        },
          {
            id: 1,
            title: 'Card 2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },
          {
            id: 2,
            title: 'Card 3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },

          {
            id: 3,
            title: 'Card 4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },
          {
            id: 4,
            title: 'Card 5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },
          {
            id: 5,
            title: 'Card 6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },
          {
            id: 6,
            title: 'Card 7',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },
          {
            id: 7,
            title: 'Card 8',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis odio urna, quis luctus elit vestibulum eu. Nulla facilisi. Suspendisse nec est mollis, pellentesque diam at, ultricies velit. Nulla convallis ex in tellus ultrices finibus. Sed sit amet dolor a massa tincidunt ultricies. Pellentesque eget quam consectetur, molestie diam id, congue turpis. Maecenas ac mollis velit. Proin dapibus sapien lectus, mattis suscipit sapien tempor in.',
            url: require('../../assets/vue.png')
          },


        ]
      }
    },
  }
</script>

<style scoped>

</style>