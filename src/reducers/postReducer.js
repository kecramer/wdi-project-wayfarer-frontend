
const defaultState = [
	{
	  id: 0,
	  post: 'Test this Todo Page',
	  completed: false
	},
	{
	  id: 1,
	  post: 'Learn Redux',
	  completed: false
	},
	{
	  id: 2,
	  post: 'Learn React',
	  completed: true
	}
  ]
  
  function Posts (state = defaultState, action) {
	switch (action.type) {
	  default:
		return state
	}
  }
  
  export default Posts