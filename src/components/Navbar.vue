<template>
	<nav class="navbar navbar-expand-lg border-bottom bg-body-tertiary">
		<div class="container">
			<RouterLink to="/" class="navbar-brand">
				<img src="@/assets/images/piesam-logo-w-name.png" alt="Logo Pie Sam" width="70">
			</RouterLink>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
					<li class="nav-item text-center">
						<RouterLink :class="['nav-link', { 'active': $route.path === '/' }]" to="/">
							Beranda
						</RouterLink>
					</li>
					<li class="nav-item text-center">
						<RouterLink :class="['nav-link', { 'active': $route.path === '/product' }]" to="/product">
							Produk
						</RouterLink>
					</li>
					<!-- <li class="nav-item text-center">
						<RouterLink :class="['nav-link', { 'active': $route.path === '/activity' }]" to="/activity">
							Aktivitas
						</RouterLink>
					</li> -->
					<li class="nav-item text-center">
						<RouterLink :class="['nav-link', { 'active': $route.path === '/contact' }]" to="/contact">
							Kontak
						</RouterLink>
					</li>
					<li class="nav-item text-center">
						<RouterLink :class="['nav-link', { 'active': $route.path === '/locations' }]" to="/locations">
							Lokasi Kami
						</RouterLink>
					</li>
				</ul>
				<div class="d-flex row border-top pt-2" role="hashtag">
					<div class="col-12 text-center">
						<a class="hashtag" href="https://www.instagram.com/explore/tags/pieaslidaringalam/" target="_blank">
							#pieaslidaringalam
						</a>
					</div> <!-- <div class="col-4 col-md-4 text-center">
						<a href="https://tinyurl.com/2yzv9y93" target="_blank" class="bi bi-instagram" />
					</div>
					<div class="col-4 col-md-4 text-center">
						<a href="https://tinyurl.com/yv3zn97m" target="_blank" class="bi bi-facebook" />
					</div>
					<div class="col-4 col-md-4 text-center">
						<a :href="waUrl" target="_blank" class="bi bi-whatsapp" />
					</div> -->
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.hashtag {
	color: rgb(22, 101, 130);
	font-weight: lighter;
	font-size: 1.5rem;
	text-decoration: none;
}

@media screen and (min-width: 1024px) {
	div.border-top {
		border: 0 !important
	}

	div.pt-2 {
		padding-top: initial !important;
	}
}
</style>