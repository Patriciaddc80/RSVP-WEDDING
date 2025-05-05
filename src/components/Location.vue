<template>
  <section
    id="location"
    class="min-h-screen flex flex-col justify-center items-center py-20 px-5"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="font-gathering text-6xl md:text-7xl text-primary mb-8">
        Location
      </h1>

      <div class="grid md:grid-cols-2 gap-12 mt-12">
        <div
          class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div class="mb-6">
            <img
              src="/src/assets/botanica.jpg"
              alt="Ceremonia"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <h2 class="font-gathering text-3xl text-primary mb-4">Ceremony</h2>
          <p class="text-secondary font-raleway text-lg mb-4">Santo Domingo</p>
          <p class="text-secondary font-raleway mb-4">Camino tropical</p>
          <p class="text-gold font-raleway font-semibold">5:00 PM</p>
        </div>

        <div
          class="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <div class="mb-6">
            <img
              src="/src/assets/weedding-wong.jpg"
              alt="Recepción"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <h2 class="font-gathering text-3xl text-primary mb-4">Reception</h2>
          <p class="text-secondary font-raleway text-lg mb-4">
            Santo Domingo Event Center.
          </p>
          <p class="text-secondary font-raleway mb-4">Dominican Republic</p>
          <p class="text-gold font-raleway font-semibold">5:00 PM</p>
        </div>
      </div>

      <div class="mt-12">
        <a
          href="https://maps.google.com"
          target="_blank"
          class="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300 font-raleway"
        >
          See on Google Maps
        </a>
      </div>
    </div>
  </section>
</template>
