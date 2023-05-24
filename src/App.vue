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
      this.storeFigurine.figurine = r.data.data
      console.log(this.storeFigurine.figurine)
      console.log(this.storeFigurine.figurine[0].card_images[0].image_url)

    })
  }
}
</script>

<template>
  <header>
     <h1>Yu-Gi-Oh-Api</h1>
    
  </header>
  <main>
    <div class="cardBox" > 
      <div v-for="(img, i) in storeFigurine.figurine" class="card">
        <img :src=" img.card_images[0].image_url " alt="">
        <h2> {{ img.name }} </h2>
        <p> {{ img.archetype }} </p>
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>
*{
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
  header{
    height: 80px;
  }
  main{
    background-color: orange;
    padding: 80px ;
    .cardBox{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;      
      background-color: white;
      padding: 25px;
      width: 100%;

      .card{
        text-align: center;
        background-color: orange;
        margin: 25px;
        display: flex;
        flex-direction: column;
        h2{
          color: white;
          margin: 1em;
        };
        p{
          margin: 1em
        };
      }
      

    }
  }
</style>