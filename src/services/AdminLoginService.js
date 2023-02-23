import axios from "axios";

class AdminLoginService {

    baseUrl = 'http://localhost:9094/bookstoreadmin'


    userLogin = (user) => {
        console.log(user);
        return axios.post(`${this.baseUrl}` + "/login", user);
    }

    
}

export default new AdminLoginService();