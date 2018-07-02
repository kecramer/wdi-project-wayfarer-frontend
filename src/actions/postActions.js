import uuid from 'uuid'
let user ={
  id = Number,
  email: String,
  password: String,
  name: String,
  join_date: Date,
  profile_picture: String,
  current_city: String
}

let city = {
  id= Number,
  name: String,
  thumbnail: String
}

let post = {
  id = Number,
  title: String,
  body: String,
  author:user,
  city:city,
  created: Date,
  }



export function addPost (post) {
  return {
  
  }
  
}


