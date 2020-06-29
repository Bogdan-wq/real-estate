import React from 'react'
import {connect} from 'react-redux'
import {changePagination} from "../../actions";
import './pagination.scss'


const Pagination = ({paginationArray,changePaginationArray,activeInPagination}) => {

    return (
        <ul className="pagination justify-content-center mt-3">
            {
                paginationArray.map((itemNumber,index) => {
                    index++;
                    const active = activeInPagination === itemNumber ? 'active' : '';
                    return (
                        <li className={`page-item ${active}`}
                            onClick={() => changePaginationArray(itemNumber)}
                            key={itemNumber}>
                            <a className="page-link">{itemNumber}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        paginationArray: state.paginationArray,
        activeInPagination: state.activeInPagination
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePaginationArray:(newCenter) => {
            dispatch(changePagination(newCenter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pagination);