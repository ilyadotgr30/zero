<template>
		  <div class="col-md-2 col-lg-2 navbar-container" style="background-color: #1088fc;">
			<!-- Вертикальное меню -->
			<nav class="navbar navbar-expand-md navbar-light">
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
			  <div class="collapse navbar-collapse ml-auto mr-auto" id="navbarToggleExternalContent">
				<!-- Пункты вертикального меню -->
				<ul class="navbar-nav">
				  <li class="nav-item active pb-3">
				  <a class="nav-link text-warning" href="#">Пользователи</a>
				  </li>
				  <li class="nav-item pb-3">
				  <a class="nav-link text-light underline-one" href="#">Исследования</a>
				  </li>
				  <li class="nav-item pb-3">
				  <a class="nav-link text-light underline-one" href="#">Опросы</a>
				  </li>
				  <li class="nav-item pb-3">
				  <a class="nav-link text-light underline-one" href="#">Аналитика</a>
				  </li>
				  <li class="nav-item pb-3">
				  <a class="nav-link text-light underline-one" href="#">Настройка</a>
				  </li>
				  <li class="nav-item" id="exit">
					<a class="nav-link text-light underline-one" href="#">Выйти</a>
					</li>
				</ul>
			  </div>
			</nav>
		  </div>
</template>

<script>
import UILeftBar from './UILeftBar.vue'
export default {
  components: { UILeftBar },
    name : "ui-left-bar"
}
</script>

<style scoped lang="scss">
@import "src/styles/colors";

@media (min-width: 1023px) {
	.navbar-container {
	  position: sticky;
	  top: 0;
	  height: 100vh;
	}
	.navbar-container .navbar {
	  align-items: center;
	  justify-content: center;
	  flex-wrap: nowrap;
	  flex-direction: column;
	  height: 100%;
	  width: 100%;
	}
	.navbar-container .navbar-collapse {
	  align-items: center;
	}
	.navbar-container .nav {
	  flex-direction: column;
	  flex-wrap: nowrap;
	}
	.navbar-container .navbar-nav {
	  flex-direction: column !important;
	}
  }

.underline-one {
    color: #00bfff; /* Цвет обычной ссылки */
    position: relative;
    cursor: pointer;
    text-decoration: none; /* Убираем подчеркивание */
}

.underline-one:after {
	content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; /* Высота линии */
    background-color: black; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.5s; /* Время эффекта */
}

.underline-one:hover:after {
	content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; /* Высота линии */
    background-color: yellow; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s;  /* Время эффекта */
}

#navbarToggleExternalContent {
	text-align: center;
}

@media (max-width: 1023px) {
	#navbar {
		text-align: center;
	}

	.navbar-container {
		overflow-x: hidden;
	  }
	  
  }
</style>