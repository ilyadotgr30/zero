<template>
<ui-card @Clicked="onTestButtonClicked"
         v-model:post_login="post_login"
         v-model:post_password="post_password"
         post_password="post_password"></ui-card>

</template>

<script>
import { signInAsync } from "@/api/account";
import { mapActions, mapGetters } from "vuex";
import UICard from '@/components/ui/UICard.vue';
import UITextInput from '@/components/ui/UITextInput.vue';
import UIButton from '@/components/ui/UIButton.vue';
export default {
	components: { UICard, UITextInput, UIButton },
    name: "MainPage",
    data() {
        return {
            post_login: "",
            post_password: ""
        }
    },
    provide: {
        test: ""
    },
    methods: {
        setLogin(login) {
            // post_login = login;
        },
        setPassword(password) {
            // post_password = password;
        },
        ...mapActions(["setAccessToken", "setRefreshToken", "setLocale"]),
        async onTestButtonClicked() {
            const result = await signInAsync(post_login, post_password);
            this.setAccessToken(result?.accessToken);
            this.setRefreshToken(result?.refreshToken);
        },
    /*    doPost() {
            const config = {
               let payload = { login = this.login,password = this.password };
               let res = await axios.post('https://projectzero-api-0.herokuapp.com/api/v1.0/auth/signin', payload);
               let data = res.data;
            }
         } */
    },
    computed: {
        ...mapGetters(["accessToken", "refreshToken", "locale"])
    }
}
</script>

<style scoped>

</style>