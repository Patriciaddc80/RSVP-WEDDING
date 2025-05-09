<template>
  <section id="rsvp-form" class="min-h-screen py-20 px-5 relative">
    <div class="max-w-2xl mx-auto relative z-10">
      <div
        class="bg-white/95 dark:bg-transparent backdrop-blur-sm p-8 rounded-lg shadow-lg border border-primary/20"
      >
        <h2
          class="font-gathering text-3xl md:text-5xl text-primary text-center mb-8 whitespace-nowrap"
        >
          Confirm Your Attendance
        </h2>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label
              for="name"
              class="block font-raleway font-medium text-secondary dark:text-white mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              required
              class="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-raleway bg-white/95 dark:bg-transparent dark:text-white"
            />
          </div>

          <div>
            <label
              for="email"
              class="block font-raleway font-medium text-secondary dark:text-white mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-raleway bg-white/95 dark:bg-transparent dark:text-white"
            />
          </div>

          <div>
            <label
              for="attending"
              class="block font-raleway font-medium text-secondary dark:text-white mb-2"
            >
              Will you attend?
            </label>
            <div id="attending" class="flex flex-col sm:flex-row gap-4">
              <label
                class="inline-flex items-center p-4 border border-primary/30 rounded-lg cursor-pointer hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300 bg-white/95 dark:bg-transparent"
              >
                <input
                  type="radio"
                  v-model="formData.attending"
                  value="yes"
                  class="text-primary focus:ring-primary/50"
                  required
                />
                <span class="ml-2 font-raleway text-secondary dark:text-white"
                  >I will attend with pleasure</span
                >
              </label>
              <label
                class="inline-flex items-center p-4 border border-primary/30 rounded-lg cursor-pointer hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300 bg-white/95 dark:bg-transparent"
              >
                <input
                  type="radio"
                  v-model="formData.attending"
                  value="no"
                  class="text-primary focus:ring-primary/50"
                />
                <span class="ml-2 font-raleway text-secondary dark:text-white"
                  >Unfortunately, I cannot attend</span
                >
              </label>
            </div>
          </div>

          <div v-if="formData.attending === 'yes'">
            <label
              for="guests"
              class="block font-raleway font-medium text-secondary dark:text-white mb-2"
            >
              Number of Guests
            </label>
            <select
              id="guests"
              v-model="formData.guests"
              class="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-raleway bg-white/95 dark:bg-transparent dark:text-white"
            >
              <option value="0">Just me</option>
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </div>

          <div>
            <label
              for="message"
              class="block font-raleway font-medium text-secondary dark:text-white mb-2"
            >
              Message for the couple (optional)
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="3"
              class="w-full px-4 py-3 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-raleway bg-white/95 dark:bg-transparent dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-primary hover:bg-secondary text-white font-raleway font-medium py-4 px-6 rounded-lg transition duration-300"
          >
            Send Confirmation
          </button>
        </form>

        <div
          v-if="submitStatus === 'success'"
          class="mt-6 p-4 bg-green-100 border border-green-200 rounded-lg text-center"
        >
          <p class="font-raleway text-green-800">
            Thank you for confirming! Your response has been received.
          </p>
        </div>

        <div
          v-if="submitStatus === 'error'"
          class="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg text-center"
        >
          <p class="font-raleway text-red-800">
            There was an error sending your response. Please try again.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  attending: "",
  guests: "0",
  message: "",
});

const submitStatus = ref(null);

const handleSubmit = async () => {
  try {
    // Aquí iría la lógica para enviar los datos a tu backend
    // Por ahora simulamos una respuesta exitosa después de 1 segundo
    submitStatus.value = "loading";

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulación de éxito
    submitStatus.value = "success";

    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      formData.value = {
        name: "",
        email: "",
        attending: "",
        guests: "0",
        message: "",
      };
      submitStatus.value = null;
    }, 3000);
  } catch (error) {
    console.error("Error submitting the form:", error);
    submitStatus.value = "error";
    setTimeout(() => {
      submitStatus.value = null;
    }, 3000);
  }
};
</script>
