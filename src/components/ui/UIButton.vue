<template>

    <router-link class="btn"
                 :to="to"
                 v-if="tag==='router-link'">
        <slot></slot>
    </router-link>
	 
	<div class="form-group d-grid gap-2">
      <button type="button" 
                class="btn btn-primary btn-lg btn-block" 
                @click="onButtonCliked">Войти</button>
   </div>

</template>

<script>
export default {
    name: "btn",
    props: {
        tag: { type: String, default: "button" },
        href: { type: String },
        to: { type: [String, Object] }
    },
    methods: {
        onButtonClicked() {
            this.$emit("onButtonClicked");
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/styles/colors";

.form-group{
    padding: 0 40px;
    margin: 0 0 25px 0;
   }

.btn{
    font-size: 14px;
    color: $white;
    background: $blue-600;
    border-radius: 20px;
    border: none;
    transition: 0.3s;
    opacity: 0.8;
    outline: none;
   }

.btn:hover {opacity: 1}

button:focus {
    outline: none !important;
    }

	@media only screen and (max-width: 1023px){

        .form-group{
        padding: 0 25px;
        }
		 
		 .btn{
        padding: 10px 20px;
        }

		  .btn{
            border-radius: 8px;
				padding: 10px 20px;
           }
		 
		  }

</style>