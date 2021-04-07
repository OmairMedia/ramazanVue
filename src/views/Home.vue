<template>
  <div class="home">
     <showcase/>
     <quran-section/>
  </div>
</template>

<script>
// @ is an alias to /src
import showcase from '../components/showcase';
import QuranSection from '../components/Quran';

export default {
  name: "Home",
  components: {
    showcase,
    "quran-section": QuranSection
  },
};
</script>
