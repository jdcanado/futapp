<template>
  <div app>
    <v-container id="produtos" grid-list-md text-xs-center fill-height>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title class="headline mb-0"> Produtos </v-card-title>
            <v-divider />
            <v-container fluid grid-list-sm>
              <v-layout row wrap>
                <v-flex v-for="i in 9" :key="i" xs4>
                  <img
                    :src="`https://picsum.photos/200/300/?image=${i + 20}`"
                    class="image"
                    alt="lorem"
                    width="100%"
                    height="100%"
                  />
                </v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>favorite</v-icon> </v-btn>
              <v-btn icon> <v-icon>bookmark</v-icon> </v-btn>
              <v-btn icon> <v-icon>share</v-icon> </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
