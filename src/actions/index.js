const fetchObjectsLoading = () => {
    return {
        type:'FETCH_OBJECTS_LOADING',
    }
}

const fetchObjectsSuccess = (base) => {
    return {
        type:'FETCH_OBJECTS_SUCCESS',
        payload:base,
    }
}

const fetchObjectsError = () => {
    return {
        type:'FETCH_OBJECTS_ERROR',
    }
}

const changePagination = (newCenter) => {
    return {
        type:'PAGINATION_CHANGE',
        payload:newCenter,
    }
}

export {
    fetchObjectsError,
    fetchObjectsLoading,
    fetchObjectsSuccess,
    changePagination,
}