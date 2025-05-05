<template>
  <div class="min-h-screen relative transition-colors duration-300">
    <NavBar />
    <Home id="home" />
    <Invitation id="invitation" />
    <Story id="story" />
    <Location id="location" />
    <WeddingItinerary id="itinerary" />
    <RsvpForm id="rsvp" />
    <ThemeToggle />
    <footer class="bg-primary text-white py-4 text-center">
      <p>&copy; 2023 Wedding of Jacob & Paty. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";
import RsvpForm from "./components/RsvpForm.vue";
import Invitation from "./components/Invitation.vue";
import Story from "./components/Story.vue";
import Location from "./components/Location.vue";
import WeddingItinerary from "./components/WeddingItinerary.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<style>
/* Estilos específicos del componente App */
.font-gathering {
  font-family: "Great Vibes", cursive;
}

.font-raleway {
  font-family: "Raleway", sans-serif;
}
</style>
