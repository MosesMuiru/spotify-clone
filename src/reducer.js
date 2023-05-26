// this is the initial state

export const initialState = {
    user:null,
    playlist:[],
    playing:false,
    item:null

}

// the reducer
// state is the initial state
const reducer = (state,action) => {
        console.log(action);

        // to dispatch an action --it listens to action
        switch(action.type){
// when you receive an action called SET_USER
            case "SER_USER":
                return {
                    ...state,
                    user:action.user
                }
            default:
             return state;
        }

}
export default reducer;