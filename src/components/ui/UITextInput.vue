 <template>
 	<div class="form-group">
      <input v-model="model" :type="type" class="form-control" id="inputEmail"
             :placeholder="placeholder"/>
      <font-awesome-icon v-if="icon" :icon="['fas', icon]" id="d"/>
	</div>
<!--   <div class="form-group">-->
<!--      <input :value="post_password" @input="updatePassword" type="password" class="form-control" id="inputPassword" placeholder="Пароль">-->
<!--       <font-awesome-icon :icon="['fas', 'lock']" id="s"/>-->
<!--   </div>-->
<!--     УБРАТЬ ID !!!! -->
</template>



<script>
export default {
      name: "ui-text-input",
      props: {
         text: {
            type: String,
            default: ""
         },
          placeholder: {
              type: String,
              default: ""
          },
          icon: {
              type: String
          },
          type: {
             type: String,
              default: "text"
          }

      },
    inject: ["test"],
      computed: {
        model: {
            get: function () {
                return this.text
            },
            set: function (newValue) {
                this.$emit("update:text", newValue)
            }
        }
      },
      methods: {
         updateLogin() {
            this.$emit("updateLogin", this.post_login);
         },
         updatePassword() {
            this.$emit("updatePassword", this.post_password);
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

.form-control{
    background: $gray-100;
    border: none;
    border-radius: 20px;
    box-shadow: none;
    padding: 0 20px 0 45px;
    height: 40px;
    transition: all 0.3s ease 0s;
   }

.form-control:focus{
    background: $gray-300;
    box-shadow: none;
    outline: 0 none;
   }

#d {
    font-size: 16px;
    color: #c8c8c8;
    transition : all 0.5s ease 0s;
   }

#s {
    font-size: 16px;
    color: #c8c8c8;
    transition : all 0.5s ease 0s;
   }

.form-control:focus + #d{
    color: $blue-600;
   }

.form-control:focus + #s{
    color: $blue-600;
   }	

.fa-user{	
	position:absolute;
	top: 366px;
	left: 700px;
   }

.fa-lock{
    position: absolute;
   top: 430px;
	left: 700px;
   }

	@media only screen and (max-width: 1023px){
        .form-group{
        padding: 0 25px;
        }
        .fa-user{
        left: 290px;
        }
        .fa-lock{
      	left: 290px;
        }

			.form-control{
            border-radius: 8px;
           }

	}
</style>