<template>
  <section
    id="story"
    class="min-h-screen flex flex-col justify-center items-center py-20 px-5"
  >
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="font-gathering text-6xl md:text-7xl text-primary mb-8">
        Our Story
      </h1>
      <div class="space-y-8">
        <p
          class="text-secondary text-lg md:text-xl leading-relaxed font-raleway"
        >
          It all started with a look... and today we're about to say "I do."
        </p>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div
            class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div class="mb-4">
              <img
                src="/src/assets/causal-wedding.jpg"
                alt="First Meeting"
                class="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 class="font-gathering text-2xl text-primary mb-4">
              The First Meeting
            </h3>
            <p class="text-secondary font-raleway">
              [Add your story of how you met here]
            </p>
          </div>
          <div
            class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div class="mb-4">
              <img
                src="/src/assets/hands-to-hands.jpg"
                alt="The Proposal"
                class="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 class="font-gathering text-2xl text-primary mb-4">
              The Proposal
            </h3>
            <p class="text-secondary font-raleway">
              [Add your proposal story here]
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
