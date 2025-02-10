import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
const CardList = () => {

    //initial state
    const initialState = {
        cardsData: [],
    }

    //reducer for handle state update
    const reducer = (state, action) => {
        switch (action.type) {
            case "commonUpdate":
                return {
                    ...state,
                    ...action.payload,
                };
            default:
                return {
                    ...state,
                };
        }
    };


    //using useReducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
     //initial function call for getting list of items
        init()
        //eslint-disable-next-line
    }, []);


    const init = async () => {
        let tempState = state;
        try {
            //triggering api using axios
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");

            // console.warn("result", result);
   
            let { data } = result;
            //updating the staste with result
            tempState["cardsData"] = [...data];
            
            dispatch({
                type: "commonUpdate",
                payload: tempState,
            });
        } catch (error) {

            console.error(error)
        }
    }
    console.log("state", state)
    return (
        <div>CardList</div>
    )
}

export default CardList