<template>
	    	<table class="table table-borderless table-hover table-striped">
				<thead class="thead-info">
				<tr>
				    <th scope="col">ID</th>
				    <th scope="col">Имя пользователя</th>
				    <th scope="col">Фамилия И.О</th>
				    <th scope="col">Роль</th>
				    <th scope="col">-</th>
				</tr>
				</thead>
				<caption>Список пользователей</caption>
				<tbody>
				<tr>
				    <td data-label="ID">1</td>
					<td data-label="Имя пользователя">admin</td>
					<td data-label="Фамилия И.О">Иванов И.И.</td>
					<td data-label="Роль">admin</td>
					<td data-label="-">-</td>
				</tr>
				</tbody>
			</table>
</template>

<script>
import UITable from './UITable.vue'
export default {
  components: { UITable },
    name : "ui-table"
}
</script>

<style scoped lang="scss">
@import "src/styles/colors";

.thead-info {
	background-color: #1088fc;
	color: #fff;
}

.bg2 {
	background-color: #00BFFF;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
	background-color: #ADD8E6;
}

table {
	width: 100%;
	table-layout: fixed;
	box-sizing: border-box;
}

  table td {
	width: 100%;
}

@media (max-width: 1023px) {
	.wa {
		margin-top: 40px;
	}
	 .thead-info {
		display: none;
	}
	 tr {
		display: block;
	}
	td {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}
 td::before {
		content: attr(data-label);
		font-weight: bold;
		margin-right: 20px;
   }
	
  }

</style>