<script>
import { storeFigurine } from '../src/components/store';
import axios from 'axios';

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      storeFigurine
    }
  },
  mounted() {
    console.log(this.storeFigurine.urlAPIFigurine)

    axios.get(this.storeFigurine.urlAPIFigurine).then(r => {
      //Se completata correttamente stampo il dato
      console.log("Ricevuto: ", r);
      //Copio i dati nello store per riutilizzarli in altri componenti
    })
  }
}
</script>

<template>
</template>

<style lang="scss" scoped>
</style>