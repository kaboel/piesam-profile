<template>
	<div class="border-top foot-top">
		<div class="container">
			<div class="row">
				<div class="col-md-2 pt-2">
					<img src="@/assets/images/piesam-logo-w-name.png" alt="Logo Pie Sam" class="img-fluid" />
				</div>
				<div class="col-md-2 pt-3">
					<div class="list">
						<RouterLink to="/"> Beranda </RouterLink>
						<RouterLink to="/product"> Produk </RouterLink>
						<!-- <RouterLink to="/activity"> Aktivitas </RouterLink> -->
						<RouterLink to="/contact"> Kontak </RouterLink>
						<RouterLink to="/locations"> Lokasi Kami </RouterLink>
					</div>
					<div class="social">
						<a href="https://tinyurl.com/2yzv9y93" target="_blank" class="bi bi-instagram" />
						<a href="https://tinyurl.com/yv3zn97m" target="_blank" class="bi bi-facebook" />
						<a :href="waUrl" target="_blank" class="bi bi-whatsapp" />
					</div>
				</div>
				<!-- <div class="col-md-6 text-center thanks">
					Terima kasih telah menjadi bagian dari keluarga Pie Sam
				</div> -->
			</div>
		</div>
	</div>
	<div class="border-top pt-3 pb-3 foot-bottom">
		<div class="container text-center ">
			<span class="copyright">Copyright &copy; 2023 Pie Sam</span>
			by <a href="#">IWABEKA Coffee n' Eatery</a>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const waMessage = 'Halo, saya ingin memesan produk Pie Sam';
const encodedMsg = encodeURIComponent(waMessage);
const waUrl = `https://wa.me/6281330741156?text=${encodedMsg}`
</script>

<style scoped>
.list {
	list-style: none;
	display: flex;
	flex-direction: column;
	margin-bottom: .5rem;
}

.list a {
	text-decoration: none;
	color: rgba(50, 50, 50)
}

.list a:hover {
	color: rgb(22, 101, 130);
}

.social a {
	margin-left: 2rem;
	font-size: 2rem;
	color: rgb(22, 101, 130);
}

.social a:hover {
	color: rgb(100, 100, 100);
}

.social a:first-child {
	margin: 0;
}

.thanks {
	font-size: 1.5rem;
	display: flex;
	align-items: center;
}

.foot-bottom {
	background-color: whitesmoke;
	font-weight: 300;
	font-size: 14px;
}

.copyright {
	font-weight: 500;
}
</style>