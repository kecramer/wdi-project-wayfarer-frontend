const defaultState = [
    {
      id: 0,
      name: 'Carmel',
    },
    {
      id: 1,
      name: 'San Francisco',
    },
    {
      id: 2,
      name: 'Santa Cruz',
    }
  ]

  function Cities (state = defaultState, action) {
    switch (action.type) {
      default:
        return state
    }
  }

  export default Cities
