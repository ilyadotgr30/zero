<template>
	<div class="container-fluid">
		<div class="row">
            <ui-left-bar></ui-left-bar>
	    <div class="col-md-10 col-lg-10 content-container">
			<div class="container-fluid">
				<div class="row wa">
                    <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 ml-auto mr-auto con">
                    <ui-table></ui-table>
                    <ui-del-modal></ui-del-modal>
                    <ui-add-modal></ui-add-modal>
                     <div class="but">
				<a href="#"><button class="btn btn-primary btn-lg" type="button">Изменить user1</button></a>
				<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#add_button">Добавить пользователя</button>
				<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#delete_button">Удалить пользователя</button>
			</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import UILeftBar from "@/components/ui/UILeftBar.vue";
import UITable from '@/components/ui/UITable.vue';
import UIDelModal from '@/components/ui/UIDelModal.vue';


export default {
	components: { UILeftBar, UITable, UIDelModal },
    name: "main",
    
}
</script>


<style scoped lang="scss">
@import "src/styles/colors";


.but {
	display: flex;
	width: 100%;
	height: 90%;
	justify-content: flex-start;
	align-items: flex-end;
    flex-wrap: wrap;
}

.but .btn{
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

.wa {
	margin-top: 300px;
}

.con {
    margin-left: 150px;
}


@media (max-width: 1023px) {
	.wa {
		margin-top: 40px;
	}
.but {
	display: flex;
	width: 100%;
	height: 10%;
	justify-content: center;
	align-items: center;
    flex-wrap: wrap;
}
.btn {
    margin-top: 10px;
}

.con {
    margin-left: 0px;
}

  }

</style>