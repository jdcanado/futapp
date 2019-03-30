<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile v-if="isAuthenticated" avatar>
            <v-list-tile-avatar>
              <img :src="profile.picture">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{profile.nickname}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider v-if="isAuthenticated"/>

          <v-list-tile v-if="!isAuthenticated" @click.prevent="login();drawer = false;">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>ENTRAR</v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="isAuthenticated" @click.prevent="logout();drawer = false;">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>SAIR</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer;">
          <v-icon v-if="drawer">close</v-icon>
        </v-toolbar-side-icon>
        <v-toolbar-title>FutApp</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-if="!isAuthenticated" @click.prevent="login" flat>
            <v-icon>home</v-icon>Entrar
          </v-btn>
          <v-btn v-if="isAuthenticated" @click.prevent="logout" flat>
            <v-icon>contact_mail</v-icon>Sair
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer class="elevation-12" app>
        <span style="margin-left: 20px">JDCanado&copy; 2019</span>
        <v-layout row justify-center>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <v-card-title>
                <span class="headline">Deixe sua mensagem</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6>
                      <v-text-field label="Nome*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6>
                      <v-text-field label="Email*" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                      <v-textarea
                        name="msg"
                        label="Mensagem*"
                        hint="Deixe sua mensagem"
                        rows="3"
                        required
                      ></v-textarea>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="indigo" flat @click="dialog = false;">Fechar
                  <v-spacer/>
                  <v-icon left dark>close</v-icon>
                </v-btn>
                <v-btn color="indigo" flat @click="dialog = false;">Enviar
                  <v-icon left dark>send</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
        <v-btn color="pink" @click="dialog = true;" dark medium right absolute fab>
          <v-icon>contact_mail</v-icon>
        </v-btn>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    drawer: false,
    pagina: "Home",
    dialog: false,
    isAuthenticated: false
  }),
  props: {
    source: String
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
