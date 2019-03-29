<template>
  <div app>
    <v-container id="portfolio" grid-list-md text-xs-center fill-height>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title class="headline mb-0"> Portfólio </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-card-title class="headline mb-0">Subtítulo 1</v-card-title>
            <v-divider />
            <v-card-text>{{ card_text }}</v-card-text>
            <v-img
              src="https://picsum.photos/200/300/?image=882"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>favorite</v-icon> </v-btn>
              <v-btn icon> <v-icon>bookmark</v-icon> </v-btn>
              <v-btn icon> <v-icon>share</v-icon> </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4>
          <v-card>
            <v-card-title class="headline mb-0">Subtítulo 2</v-card-title>
            <v-divider />
            <v-card-text>{{ card_text_2 }}</v-card-text>
            <v-img
              src="https://picsum.photos/200/300/?image=885"
              aspect-ratio="1.75"
            ></v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon> <v-icon>favorite</v-icon> </v-btn>
              <v-btn icon> <v-icon>bookmark</v-icon> </v-btn>
              <v-btn icon> <v-icon>share</v-icon> </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs12 sm4>
          <v-card>
            <v-card-title class="headline mb-0">Subtítulo 3</v-card-title>
            <v-divider />
            <v-card-text>{{ card_text_3 }}</v-card-text>
            <v-img
              src="https://picsum.photos/200/300/?image=861"
              aspect-ratio="1.75"
            ></v-img>

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

<script>
export default {
  data() {
    return {
      card_text:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
      card_text_2:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.",
      card_text_3:
        "Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat. Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat."
    };
  },
  name: "Portfolio"
};
</script>
