import axios from "axios";




export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "79f0861735bf46439db0fccd736589f4"
    }
})