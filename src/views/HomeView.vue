<script setup>

import Nav from "@/views/layouts/components/Nav.vue";
</script>


<template>
  <article class="prose">
    <header>
      <h3>Sep 15</h3>
      <h2>WASCNA Spiritual Getaway</h2>
      <p>
        Join us for the WASCNA Spiritual Getaway on September 15th, 2023 at 7 PM for a weekend of
        spiritual growth, fellowship, and fun!
      </p>
    </header>
    <section>
      <h2 class="mb-0">When and where</h2>
      <div class="flex justify-between gap-2">
        <article>
          <h3>Date and time</h3>
          <p>September 15 · 3pm - September 17 · 1pm EDT</p>
        </article>
        <article>
          <h3>Location</h3>
          <p>Zion Retreat & RV Park 334 East High Street Flushing, OH 43977</p>
        </article>
      </div>
    </section>
    <section>
      <h2>About this event</h2>
      <h3>WASCNA Spiritual Getaway</h3>
      <p>
        Join us for a weekend of spiritual rejuvenation and fellowship at the
        <strong>WASCNA Spiritual Getaway!</strong> Starting on
        <strong>Fri Sep 15 2023 at 3:00pm </strong>, we'll gather at
        <strong>334 East High Street, Flushing, OH 43977</strong> to embark on a journey of
        self-discovery and growth.
      </p>
      <p>
        Our event will feature a variety of workshops and meetings focused on the principles of
        the Narcotics Anonymous program. We'll also have plenty of time for relaxation and
        reflection, with opportunities for meditation, yoga, and other spiritual practices.
        Whether you're a newcomer or a seasoned member of NA, you'll find something to inspire and
        uplift you at the
        <strong> WASCNA Spiritual Getaway.</strong>
      </p>
      <p>
        Don't miss this chance to connect with fellow NA members and deepen your spiritual
        practice. Register now to reserve your spot!
      </p>
    </section>
  </article>
  <RouterLink
    class="no-underline bg-orange-600 px-8 py-4 text-white items-center text-2xl flex"
    to="/register"
  >
    Register Now
  </RouterLink>
</template>

<style scoped>
h1,h2,h3,p, section, strong {
  @apply text-black;
}
</style>