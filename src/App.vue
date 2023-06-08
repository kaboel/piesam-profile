<template>
  <div class="container">
    <header>
      <div class="logo">
        <img alt="Logo Pie Sam" class="logo-piesam" src="@/assets/piesam-logo-w-name.png" />
        <a href="#" class="link-to-iwabeka">
          <img alt="Logo IWABEKA" class="logo-iwabeka" src="@/assets/iwabeka-logo-w-name.png" />
        </a>
      </div>
      <nav>
        <RouterLink to="/">Beranda</RouterLink>
        <RouterLink to="/product">Produk</RouterLink>
        <RouterLink to="/contact">Kontak</RouterLink>
        <RouterLink to="/locations">Lokasi Kami</RouterLink>
      </nav>
    </header>

    <main>
      <div class="slideshow-container">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
      </div>


      <div class="content">
        <RouterView />
      </div>

    </main>
  </div>

  <footer>
    &copy;2023 Pie Sam Malang <br /> by IWABEKA Coffee n' Eatery
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
header {
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  background: rgb(240, 240, 240);
}

.logo {
  display: flex;
  padding: .5rem 1rem;
}

.logo .logo-piesam {
  width: 100px;
}

.logo .link-to-iwabeka {
  display: none;
}

main .content {
  display: block;
  width: 100%;
}


nav a {
  font-size: 1rem;
  padding: .2rem .75rem;
  color: hsla(196, 71%, 30%, 1);
  border-top-right-radius: 2px;
  border-bottom-right-radius: 3px;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a:hover {
  color: #010101;
  background-color: hsla(196, 71%, 30%, .2);
}

nav a.router-link-exact-active {
  color: #1F1F1F;
  font-weight: bold;
  border-bottom: 1px;
}

main {
  background-color: rgba(240, 240, 240, .65);
}

main .content {
  padding: 2rem;
}

footer {

  padding: 1rem;
  background-color: rgb(240, 240, 240);
  width: 100%;
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .container {
    display: flex;
  }

  header {
    flex: 0 0 auto;
    position: relative;
    max-width: 420px;
    height: calc(100vh - 80px);
    width: 100%;
    align-items: center;
    background: rgb(240, 240, 240);
  }


  .logo {
    padding: 100px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo .logo-piesam {
    width: 300px;
  }

  .logo .link-to-iwabeka {
    display: initial;
  }

  .logo .logo-iwabeka {
    width: 80px;
    opacity: 0.5;
  }

  .logo .logo-iwabeka:hover {
    opacity: 1;
  }

  nav {
    display: flex;
    flex-direction: column;
    border-left: 2px solid var(--color-border);
  }

  nav a {
    margin-left: -2px;
  }

  nav a.router-link-exact-active {
    border-left: 3px solid hsla(196, 41%, 40%, 1);
  }

  main {
    display: flex;
    flex: 1 1 auto;
    place-items: center;
    overflow: hidden;
    height: 100vh;
  }

  footer {
    padding: 1rem 0 1rem 0;
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 420px;
    text-align: center;
  }
}
</style>