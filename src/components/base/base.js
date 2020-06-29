import React,{Component} from 'react'
import {fetchObjectsLoading,fetchObjectsSuccess,fetchObjectsError} from "../../actions";
import {connect} from 'react-redux'
import LoadingIndicator from "../loading-indicator";
import FetchClient from "../../fetch-client-service";
import BaseItem from "../base-item";



class Base extends Component {



    componentDidMount() {
        const {activeInPagination} = this.props;
        this.props.fetchObjects(activeInPagination);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.activeInPagination !== this.props.activeInPagination) {
            const {activeInPagination} = this.props;
            this.props.fetchObjectsWithDelay(activeInPagination)
        }
    }

    render() {
        const {loading,error,base} = this.props;

        if(loading) {
            return <LoadingIndicator/>
        }

        if(error) {
            return <div>Error</div>
        }

        return (
            <div className="d-flex flex-wrap mt-3">
                {
                    base.map((baseItem) => {
                        return <BaseItem baseItem={baseItem} key={baseItem.id}/>
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading:state.loading,
        error:state.error,
        base:state.base,
        activeInPagination: state.activeInPagination
    }
}

const mapDispatchToProps = (dispatch) => {
    const fetchObjects = (offset) => {
        const fetchClient = new FetchClient();
        fetchClient.getObjects(offset * 32)
            .then((res) => dispatch(fetchObjectsSuccess(res)))
            .catch(() => dispatch(fetchObjectsError()))
    }
    return {
        fetchObjects:(offset) => {
            fetchObjects(offset)
        },
        fetchObjectsWithDelay:(offset) => {
            dispatch(fetchObjectsLoading())
            fetchObjects(offset)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Base);