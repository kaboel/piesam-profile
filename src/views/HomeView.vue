<template>
  <div class="main-content">
    <div class="paragraph">
      <h1>Pie Sam, Pie-nya Arek - Arek Malang.</h1>
      <p>
        Selamat datang di Kota Malang, tempat yang kaya akan tradisi kuliner dan memiliki warisan pastry yang memikat
        hati. Terletak di tengah-tengah kota yang penuh kehidupan di Indonesia, sejarah pie telah tumbuh subur selama
        berabad-abad. Cerita tentang pie di Malang dimulai pada masa kolonial ketika pengaruh Belanda memperkenalkan
        camilan yang lezat kepada masyarakat setempat. Seiring berjalannya waktu, perpaduan antara cita rasa lokal dan
        teknik baking Belanda melahirkan variasi pie yang unik dan menjadi bagian penting dari identitas kuliner Malang.
      </p>
      <p>
        Terinspirasi oleh keindahan pemandangan sekitar, para pengrajin pie lokal di Kota Malang menguasai seni
        menciptakan pie kue yang istimewa, mencerminkan keaslian kawasan yang memukau ini. Setiap gigitan menceritakan
        sejarah warisan dan keterampilan, dengan perpaduan rempah wangi, isian lembut, dan kulit yang renyah yang
        meleleh
        di mulut. Pie Malang telah terkenal karena kualitasnya yang luar biasa, menarik para pecinta pie dari dekat dan
        jauh yang menginginkan cita rasa otentik yang ditawarkan oleh kota ini.
      </p>
      <p>
        Di Pie Sam, kami bangga menghidupkan warisan pie khas Kota Malang yang kaya akan tradisi. Semangat kami dalam
        menciptakan pie kue tak terlupakan telah memimpin kami untuk mendirikan bisnis yang merayakan cita rasa dan
        budaya
        kota yang luar biasa ini. Kami berusaha menangkap esensi Malang dalam setiap gigitan, memberikan pengalaman
        nikmat
        yang meninggalkan kesan mendalam.
      </p>
      <p>
        Kami menggunakan bahan-bahan terbaik yang diperoleh secara lokal, dengan cermat mengolah setiap pie kue hingga
        sempurna. Para baker berbakat kami menyuntikkan isian khas kami dengan campuran rempah yang harmonis,
        menghasilkan
        simfoni rasa yang menggoda setiap kali dinikmati. Mulai dari favorit klasik hingga kreasi inovatif, rangkaian
        pie
        kue kami yang beragam mencerminkan kehidupan kuliner yang berwarna di Kota Malang.
      </p>
      <p>
        Di Pie Sam, kami tidak hanya menghormati warisan kuliner Malang, tetapi juga berkontribusi pada komunitas dengan
        mendukung petani dan pengrajin lokal. Kami percaya pada praktik berkelanjutan dan bertujuan menciptakan dampak
        positif bagi pelanggan dan lingkungan sekitar. Dengan komitmen kami terhadap kualitas, keaslian, dan inovasi,
        kami
        mengundang Anda untuk memulai perjalanan mengagumi dunia pie bersama Pie Sam, di mana tradisi bertemu inovasi,
        dan
        setiap gigitan adalah momen kebahagiaan yang murni.
      </p>
    </div>
    <div class="figure">
      <img src="@/assets/images/figures/fig-1.webp" alt="Foto Wanita Memakan Pie Sam">
    </div>
  </div>
</template>

<style scoped>
.figure img {
  max-width: 100%;
  margin-top: 1rem;
}

@media screen and (min-width: 800px) {
  .main-content {
    display: flex;
    gap: 2rem;
  }

  .paragraph h1 {
    font-weight: bold;
  }

  .paragraph p {
    font-weight: 500;
    text-align: justify;
    margin-bottom: 1rem;
  }

  .paragraph p:last-child {
    margin-bottom: 0 !important;
  }

  .figure img {
    max-width: 500px;
    width: auto;
  }
}
</style>