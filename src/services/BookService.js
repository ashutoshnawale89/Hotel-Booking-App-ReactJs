import axios from "axios";
let userId = localStorage.getItem('userId')
class BookService {

  baseUrl = 'http://localhost:9094/book'


  addBook= (user) => {
    return axios.post(`${this.baseUrl}`+ "/addBook", user);
}

  getAllBooks() {
    return axios.get(`${this.baseUrl}` + "/getAll");
  }

  getBooksCount() {
    return axios.get(`${this.baseUrl}` + "/totalBookCount");
  }

  searchByBookName(search) {
    console.log(search);
    return axios.get(`${this.baseUrl}` + "/searchByName"+"/"+search)
  }

  getAllBooksSortedByPriceAsc() {
    return axios.get(`${this.baseUrl}` + "/sortAsc");
  }

  getAllBooksSortedByPriceDesc() {
    return axios.get(`${this.baseUrl}` + "/sortDesc");
  }

}

export default new BookService();
