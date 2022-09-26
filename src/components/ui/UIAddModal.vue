<template>
<div class="modal fade" id="add_button" tabindex="-1" aria-labelledby="add_button" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="add_button">Добавление пользователя</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body butt">
        <div class="form-group">
			<input type="text" class="form-control" id="inputEmail" placeholder="Имя пользователя">
		</div>
		<div class="form-group">
			<input type="text" class="form-control" id="inputPassword" placeholder="Фамилия И.О.">
			   <div class="dropdown mt-3">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Выберите роль</button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">admin</a></li>
                            <li><a class="dropdown-item" href="#">interviewer</a></li>
                        </ul>
                </div>
			</div>
      </div>
      <div class="modal-footer butt">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" @click="addRow">Добавить</button>
      </div>
    </div>
  </div>
</div>                
</template>

<script>
import UIAddModal from './UIAddModal.vue'
export default {
  components: { UIAddModal },
    name : "ui-add-modal"
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
    height: 40px;
    transition: all 0.3s ease 0s;
   }

.form-control:focus{
    background: $gray-300;
    box-shadow: none;
    outline: 0 none;
   }

.butt .btn {
	font-size: 14px;
    color: #fff;
    background: #1088fc;
    border-radius: 20px;
    border: none;
    transition: 0.3s;
    opacity: 0.8;
    outline: none;
	margin-right: 30px;

}

.butt_width {
	width: 50px;
}

.astext {
	background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
	font-size: 30px;
}

.astext:focus {
	outline: none !important;
}

.astext:hover{
	color: #1088fc;
}

</style>