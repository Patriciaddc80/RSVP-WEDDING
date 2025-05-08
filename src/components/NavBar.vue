<template>
  <nav class="fixed w-full z-50">
    <!-- Nav para móviles -->
    <div class="md:hidden bg-white dark:bg-background-dark shadow-lg">
      <div class="px-4">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <router-link
              to="/"
              class="font-gathering text-2xl text-primary dark:text-primary-light"
            >
              J & P
            </router-link>
          </div>

          <!-- Botón Menú Móvil y Theme Toggle -->
          <div class="flex items-center gap-4">
            <ThemeToggle />
            <button
              @click="isOpen = !isOpen"
              class="text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light focus:outline-none"
            >
              <svg
                class="h-6 w-6"
                :class="{ hidden: isOpen, block: !isOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="h-6 w-6"
                :class="{ block: isOpen, hidden: !isOpen }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Menú Móvil -->
      <div class="md:hidden" :class="{ block: isOpen, hidden: !isOpen }">
        <div
          class="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-background-dark border-t border-primary/20 dark:border-primary-light/20"
        >
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            @click="isOpen = false"
            class="block px-3 py-2 rounded-md text-base font-raleway text-primary dark:text-primary-light hover:text-secondary dark:hover:text-secondary-light hover:bg-primary/5 dark:hover:bg-primary-light/5 transition-colors duration-300"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Nav para pantallas medianas y grandes -->
    <div
      class="hidden md:block bg-primary dark:bg-primary-dark py-4 px-8 border-b-2 border-gold dark:border-secondary-light shadow-lg"
    >
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex justify-center gap-8 flex-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="text-white font-raleway font-medium hover:text-gold dark:hover:text-secondary-light transition-colors duration-300 text-lg"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";

const isOpen = ref(false);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/story" },
  { name: "Location", path: "/location" },
  { name: "Itinerary", path: "/itinerary" },
  { name: "RSVP", path: "/rsvp" },
];
</script>

<style scoped>
.router-link-active {
  color: #d4af37;
}
</style>
