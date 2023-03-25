import axios from "axios";
let userId = localStorage.getItem('userId')
class HotelService {

  baseUrl = 'http://localhost:9094/hotel'


  addHotel= (user) => {
    return axios.post(`${this.baseUrl}`+ "/addBook", user);
}

  getAllHotels() {
    return axios.get(`${this.baseUrl}` + "/getAll");
  }

  getHotelsCount() {
    return axios.get(`${this.baseUrl}` + "/totalBookCount");
  }

  searchByHotelName(search) {
    console.log(search);
    return axios.get(`${this.baseUrl}` + "/searchByName"+"/"+search)
  }

  getAllHotelsSortedByPriceAsc() {
    return axios.get(`${this.baseUrl}` + "/sortAsc");
  }

  getAllHotelsSortedByPriceDesc() {
    return axios.get(`${this.baseUrl}` + "/sortDesc");
  }

}

export default new HotelService();
