<template>
	<div>
		<fieldset class="uk-fieldset">

			<div class="uk-margin">
				<input
					type="text"
					class="uk-input"
					placeholder="Email"
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