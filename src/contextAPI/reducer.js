export const initialState={
    term: null,
    messageBoxStatus: false
}

export const actionTypes={
    SET_SEARCH_TERM:'SET_SEARCH_TERM',
    OPEN_MESSAGE_BOX: 'OPEN_MESSAGE_BOX'
}

const reducer=(state, action)=>{
    console.log(action);

    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                term: action.term
            };
        case actionTypes.OPEN_MESSAGE_BOX:
            return{
                ...state,
                messageBoxStatus: action.messageBoxStatus
            };

            default: 
                return state;
    }
}

export default reducer