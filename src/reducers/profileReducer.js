const defaultState = [
    {
      id: 0,
      email: 'test@test.com',
      name: 'Fanny',
      join_date: Date,
      profile_picture: '/images/sfFun.jpg',
      current_city: 'San Ramon'
    },
    {
      id: 1,
      email: 'test2@test.com',
      name: 'Justin',
      join_date: Date,
      profile_picture:  '/images/sfFun.jpg',
      current_city: 'Castro'
    },
    {
      id: 2,
      email: 'test3@test.com',
      name: 'Biniam',
      join_date: Date,
      profile_picture:  '/images/sfFun.jpg',
      current_city: 'General Assemb.ly'
    }
  ]

  function Profiles (state = defaultState, action) {
    switch (action.type) {
      default:
        return state
    }
  }

  export default Profiles
