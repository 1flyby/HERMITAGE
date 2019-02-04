<template>
  <div id="app">
    <div v-if="!status">
      <button
        type="button"
        uk-toggle="target: #login"
        v-text="'Login'"
      />
    </div>
    <div v-else>
      <button
        type="button"
        @click="logout()"
        v-text="'Logout'"
      />
    </div>
    <router-view/>

    <div id="login" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <h2 class="uk-modal-title">Login</h2>
            <div>
              <login />
            </div>
            <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                <button class="uk-button uk-button-secondary" type="button">Forgot password?</button>
                <button class="uk-button uk-button-primary" type="button">Registration</button>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login';

export default {
  computed: {
    status() {
      return this.$store.state.user.status;
    },
  },
  components: {
    Login
  },
  methods: {
    logout() {
      this.$store.commit('login');
      this.$router.push('/');
    }
  }
}
</script>
