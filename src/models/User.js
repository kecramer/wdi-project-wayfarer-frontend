import axios from 'axios'
const URL = 'https://nameless-retreat-49699.herokuapp.com/'

class UserModel {
  static all(){
    let request = axios.get(URL + 'user')
    return request
  }
  static create(){

  }
}

export default UserModel
