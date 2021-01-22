export const initialState={
    term: null,
    messageBoxStatus: false,
    messages: [],
    Message: {}
}

export const actionTypes={
    SET_SEARCH_TERM:'SET_SEARCH_TERM',
    OPEN_MESSAGE_BOX: 'OPEN_MESSAGE_BOX',
    SET_MESSAGES: 'SET_MESSAGES',
    SET_MESSAGE: 'SET_MESSAGE'
}

const reducer=(state, action)=>{

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
        case actionTypes.SET_MESSAGES:
            return{
                ...state,
                messages: action.messages
            };
            default: 
                return state;
    }
}

export default reducer