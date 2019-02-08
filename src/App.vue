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

					<ul uk-tab>
						<li class="uk-active login-modal-tabs"><a href="#">log in</a></li>
						<li><a href="#">new account</a></li>
						<li><a href="#">recovery</a></li>
					</ul>
					<ul id="my-id" class="uk-switcher uk-margin">
						<li>
							<login/> <!--is realy wrap necessary?-->
						</li>
						<li>
							<singup/>
						</li>
						<li>
							<recovery/>
						</li>
					</ul>
				</div>
		</div>
	</div>
</template>

<script>
import Login from '@/components/Login';
import Singup from '@/components/Singup';
import Recovery from '@/components/Recovery';

export default {
	computed: {
		status() {
			return this.$store.state.user.status;
		},
	},
	components: {
		Login, Singup, Recovery
	},
	methods: {
		logout() {
			this.$store.commit('login');
			this.$router.push('/');
		}
	}
}

</script>
