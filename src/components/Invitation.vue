<template>
  <section
    id="invitation"
    class="min-h-screen flex flex-col justify-center items-center py-20 px-5"
  >
    <div class="max-w-4xl mx-auto text-center">
      <!-- Header -->
      <div class="mb-16">
        <div class="mb-8">
          <img
            src="/src/assets/scott-web.jpg"
            alt="Jacob & Paty"
            class="w-48 h-48 mx-auto rounded-full object-cover border-4 border-gold shadow-lg"
          />
        </div>
        <h1 class="font-gathering text-7xl md:text-8xl text-primary mb-6">
          You're Invited!
        </h1>
        <p class="font-raleway text-secondary text-xl md:text-2xl">
          Join us to celebrate our love
          <span class="text-gold font-semibold">July 15, 2026</span>
        </p>
      </div>

      <!-- Event Details -->
      <div class="bg-white p-8 rounded-lg shadow-lg mb-16">
        <h2 class="font-gathering text-4xl text-primary mb-8">Event Details</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="p-6 border border-primary/20 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div class="mb-4">
              <img
                src="/src/assets/wedding-rings.jpg"
                alt="Fecha"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <h3 class="font-gathering text-2xl text-primary mb-4">Date</h3>
            <p class="font-raleway text-secondary">July 15, 2026</p>
          </div>
          <div
            class="p-6 border border-primary/20 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div class="mb-4">
              <img
                src="/src/assets/hands-to-hands.jpg"
                alt="Hora"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <h3 class="font-gathering text-2xl text-primary mb-4">Time</h3>
            <p class="font-raleway text-secondary">5:00 PM</p>
          </div>
          <div
            class="p-6 border border-primary/20 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div class="mb-4">
              <img
                src="/src/assets/botanica.jpg"
                alt="Lugar"
                class="w-full h-32 object-cover rounded-lg"
              />
            </div>
            <h3 class="font-gathering text-2xl text-primary mb-4">Location</h3>
            <p class="font-raleway text-secondary">
              Santo Domingo Event Center<br />123 Wedding Lane<br />Paradise
              City
            </p>
          </div>
        </div>
      </div>

      <!-- RSVP Button -->
      <div class="mb-16">
        <a
          href="#rsvp"
          class="inline-block bg-primary text-white px-12 py-4 rounded-full hover:bg-secondary transition-colors duration-300 font-raleway text-lg"
        >
          Confirm RSVP
        </a>
      </div>

      <!-- Footer -->
      <footer class="text-center">
        <p class="font-raleway text-secondary text-lg mb-4">
          We can't wait to celebrate with you! ❤️
        </p>
        <p class="font-raleway text-primary">&copy; 2026 Our Wedding</p>
      </footer>
    </div>
  </section>
</template>

<script setup>
// script no neccesary
</script>

<style scoped>
/* Styles here */
</style>
