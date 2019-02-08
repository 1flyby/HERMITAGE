<template>
	<div>
		<fieldset class="uk-fieldset">

			<div class="uk-margin">
				<input
					v-model="user.login"
					@input="loginValidation()"
					type="text"
					class="uk-input"
					placeholder="Email"
				>
			</div>

			<div class="uk-margin">
				<input
					v-model="user.pwd"
					@input="pwdValidation()"
					type="text"
					class="uk-input"
					placeholder="Password"
				>
			</div>

			<button
				@click="tryLogin()"
				v-text="'LOGIN'"
				class="uk-button uk-button-secondary"
			/>
			<button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
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