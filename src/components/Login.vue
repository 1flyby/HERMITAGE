<template>
  <div>
      <fieldset class="uk-fieldset">

          <legend class="uk-legend">Login</legend>

          <div class="uk-margin">
              <input
                v-model="user.login"
                @input="loginValidation()"
                type="text"
                class="uk-input"
                placeholder="Login"
              >
          </div>

          <legend class="uk-legend">Pass</legend>

          <div class="uk-margin">
              <input
                v-model="user.pwd"
                @input="pwdValidation()"
                type="text"
                class="uk-input"
                placeholder="Pwd"
              >
          </div>

          <button
            @click="tryLogin()"
            v-text="'LOGIN'"
            class="uk-button uk-button-secondary"
          />
      </fieldset>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: '',
        pwd: ''
      }
    }
  },
  props: {
    islogin: {
      type: Boolean
    }
  },
  computed: {
    actualLogin() {
      return this.$store.state.user.login;
    },
    actualPwd() {
      return this.$store.state.user.pwd;
    }
  },
  methods: {
    loginValidation() {
      return true;
    },
    
    pwdValidation() {
      return true;
    },

    tryLogin() {
      if(
        this.user.login === this.actualLogin
        &&
        this.user.pwd === this.actualPwd
      ){
        this.user.login = '';
        this.user.pwd = '';

        this.$store.commit('login');
        this.$router.push('/cabinet');
      } else {
        this.$router.push('/');
      }

    }
  }
}
</script>