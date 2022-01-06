import React, { useRef } from 'react';

function searchFunction(){

}

function filterFunction(){

}

function sortFunction(){

}

function DataManipulator(props) {
    const manipulatedData = useRef(props.data)

    const onChangeSearch = (e) => {
        manipulatedData.current = searchFunction(props.data, e.target.value)
        props.dataReturner(manipulatedData.current)
    }
    const onClickFilter = (e) => {
        manipulatedData.current = filterFunction(props.data) //The filter will be static for now. So only filter by nothing
        props.dataReturner(manipulatedData.current)
    }

    const onClickSort = (e) => {
        manipulatedData.current = sortFunction(props.data) //The sort will be static for now. So only sort by first letter
        props.dataReturner(manipulatedData.current)
    }

    switch (props.type){
        case "search":
            return (
                <div>

                </div>
            )
        case "filter":
            return (
                <div>

                </div>
            )
        case "sort":
            return (
                <div>
                    
                </div>
            )
    }
}

export default DataManipulator;