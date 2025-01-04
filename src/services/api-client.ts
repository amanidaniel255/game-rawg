import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "24cd148aa22944369fb6708143ceec5d"
    }
})