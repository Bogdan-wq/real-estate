const initialState = {
    loading:true,
    error:false,
    base:null,
    paginationArray:[1,2,3,4,5],
    activeInPagination:1,
}

const reducer = (state = initialState,action) => {
    switch (action.type) {

        case 'FETCH_OBJECTS_LOADING':
            return {
                ...state,
                loading: true,
                error: false,
                base:null,
            }
        case 'FETCH_OBJECTS_SUCCESS':
            return {
                ...state,
                base: action.payload,
                loading: false,
                error: false,
            }

        case 'FETCH_OBJECTS_ERROR':
            return {
                ...state,
                base: [],
                loading: false,
                error: true,
            }

        case 'PAGINATION_CHANGE':

            if(action.payload === 1 || action.payload === 2) {
                return {
                    ...state,
                    paginationArray: [1,2,3,4,5],
                    activeInPagination: action.payload,
                }
            }
            else {
                let arrayBefore = new Array(2)
                    .fill(0)
                    .map((item,index) => {
                        index++;
                        return action.payload - index;
                    })
                    .reverse()
                    .filter((item) => item > 0)


                let arrayAfter = new Array(2)
                    .fill(0)
                    .map((item,index) => {
                        index++;
                        return action.payload + index;
                    })
                return {
                    ...state,
                    paginationArray: [
                        ...arrayBefore,
                        action.payload,
                        ...arrayAfter
                    ],
                    activeInPagination: action.payload,
                }
            }


        default:
            return state;
    }
}

export default reducer;