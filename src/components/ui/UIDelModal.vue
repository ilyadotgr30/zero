<template>


<div class="modal fade" id="delete_button" tabindex="-1" aria-labelledby="delete_button" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="delete_button">Удаление пользователя</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         Вы действительно хотите удалить пользователя?
      </div>
      <div class="modal-footer butt">
        <button type="button" class="btn btn-secondary butt_width" data-bs-dismiss="modal">Нет</button>
        <button type="button" class="btn btn-primary butt_width">Да</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import UIDelModal from './UIDelModal.vue'
export default {
  components: { UIDelModal },
    name : "ui-del-modal"
}
</script>

<style scoped lang="scss">
@import "src/styles/colors";

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