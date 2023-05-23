import {reactive} from 'vue'

export const storeFigurine = reactive({
    loading: true,
    urlAPIFigurine: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    figurine : []

});