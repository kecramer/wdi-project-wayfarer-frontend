const defaultState = [
    {
      id: 0,
      title: 'come to Carmel',
      body: 'it is beautiful',
      author: 'Fanny',
      city: 'Carmel',
      created: Date(),
    },
    {
      id: 1,
      title: 'foggy San Francisco',
      body: 'it is foggy',
      author: 'Justin',
      city: 'San Francisco',
      created: Date(),
    },
    {
      id: 2,
      title: 'kite surf in Santa Cruz',
      body: 'it is fun if you do not die',
      author: 'Biniam',
      city: 'Santa Cruz',
      created: Date(),
    }
  ]

  function Posts (state = defaultState, action) {
    switch (action.type) {
      default:
        return state
    }
  }

  export default Posts
