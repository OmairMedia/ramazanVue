<template>
  <section class="Quran-section">
    <h2 class="text-center">Quran Section</h2>

    <b-row class="justify-content-center align-items-center">
      <b-col cols="6">
        <b-overlay :show="show">
          <b-form-group>
            <b-form-select
              v-model="edition"
              @change="getQuranData"
              class="mb-3"
            >
              <b-form-select-option :value="null"
                >Please select an option</b-form-select-option
              >
              <b-form-select-option
                v-for="edition in getAllEditions"
                :key="edition.identifier"
                :value="edition.identifier"
                >{{ edition.englishName }} ({{
                  edition.language
                }})</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </b-overlay>

        <!-- Surahs  -->
        <b-overlay :show="show">
          <div class="" v-if="getQuran">
            <b-form-group>
              <b-form-select v-model="surah" @change="getAyats" class="mb-3">
                <b-form-select-option :value="null"
                  >Please select an Surah</b-form-select-option
                >
                <b-form-select-option
                  v-for="surah in getQuran.surahs"
                  :key="surah.englishName"
                  :value="surah.number"
                  >{{ surah.englishName }}</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </div>
        </b-overlay>

        <!-- Ayats -->
        <b-overlay :show="show">
          <div class="">
            <b-form-group>
              <b-form-select v-model="ayat" @change="showAyat" class="mb-3">
                <b-form-select-option
                  v-for="ayat in ayatsInSurah"
                  :key="ayat.number"
                  :value="ayat.numberInSurah"
                  >{{ ayat.numberInSurah }}</b-form-select-option
                >
              </b-form-select>
            </b-form-group>
          </div>
        </b-overlay>
      </b-col>
    </b-row>

    <b-row class="justify-content-center align-items-center">
      <b-col cols="6">
        <div class="ayat"></div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
  import { mapGetters } from "vuex";
  import axios from "axios";

  export default {
    name: "QuranSection",
    data() {
      return {
        edition: null,
        quranData: [],
        show: false,
        surah: 1,
        surahObject: [],
        ayat: null,
        ayatText: null,
      };
    },
    methods: {
      async getQuranData() {
        if (this.edition == null) {
          this.edition = "ar.muyassar";
        }
        this.show = true;
        const response = await axios.get(
          `http://api.alquran.cloud/v1/quran/${this.edition}`
        );
        this.show = false;
        this.$store.dispatch("addQuranData", response.data.data);
      },
      getAyats() {
        let data = this.getQuran;
        const filtered = data.surahs.filter((x) => x.number == this.surah);
        this.surahObject = filtered;
      },
      showAyat() {
        console.log(this.ayatsInSurah);
        const text = this.ayatsInSurah.filter((x) => {
          x.numberInSurah == this.ayat;
        });
        this.ayatText = text;
      },
    },
    mounted() {
      this.getQuranData();
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(["getAllEditions", "getQuran"]),
      ayatsInSurah() {
        let data = this.getQuran;
        const filtered = data.surahs.filter((x) => x.number == this.surah);
        const getAyats = filtered[0].ayahs;

        return getAyats;
      },
    },
  };
</script>

<style></style>
