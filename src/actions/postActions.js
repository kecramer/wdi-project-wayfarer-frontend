import uuid from 'uuid'

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post:{
      id: uuid(),
      title: 'title',
      body: 'body',
      author: 'author',
      city: 'city',
      created: Date()

    }
  }

}
