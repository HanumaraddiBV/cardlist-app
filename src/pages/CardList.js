import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import { AiOutlinePlus } from "react-icons/ai"; // Add icon

import { motion, AnimatePresence } from "framer-motion";
import Card from '../components/Card';
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
            const result = await axios.get("https://picsum.photos/v2/list?page=1&limit=6");

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

        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Image Gallery</h1>
                <button

                    className="bg-blue-500 text-white px-4 py-2 text-sm rounded"
                >
                    <AiOutlinePlus /> Add Card
                </button>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence>
                    {state?.cardsData?.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CardList