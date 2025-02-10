import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import { AiOutlinePlus } from "react-icons/ai"; // Add icon

import {  AnimatePresence } from "framer-motion";
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

    // Add New Card
    const handleAdd = () => {
        let tempState = state;
        //creating new item 
        const newItem = [{
            id: Date.now(),
            author: `New Image ${state.cardsData.length + 1}`,
            download_url: `https://picsum.photos/id/${Math.floor(Math.random() * (10 - 0) + 0)}/5000/3333`,
            width: 5000,
        }];

        //updating the state with newly created item
        tempState['cardsData'] = [...newItem, ...tempState.cardsData];


        dispatch({
            type: "commonUpdate",
            payload: tempState,
        });
    };

    // Delete Card
    const handleDelete = (id) => {
        let tempState = state;
        //deleting the selected item from the state
        let newList = tempState?.cardsData?.filter((item) => item.id !== id)
        tempState['cardsData'] = newList;

        dispatch({
            type: "commonUpdate",
            payload: tempState,
        });
    };

    console.log("state", state)
    return (
        <div className="container mx-auto p-4 flex flex-col items-center justify-start">

        <div className="flex justify-between items-center w-full max-w-3xl mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Image Gallery</h2>
            <button
                onClick={handleAdd}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded flex items-center"
            >
                <AiOutlinePlus className="mr-1" /> Add Card
            </button>
        </div>

        {/* No Items Message */}
        {state?.cardsData?.length === 0 ? (
            <div className="text-gray-500 text-lg font-semibold mt-4">No items available</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
                <AnimatePresence>
                    {state?.cardsData?.map((item) => (
                        <Card key={item.id} item={item} handleDelete={handleDelete} />
                    ))}
                </AnimatePresence>
            </div>
        )}
    </div>
    )
}

export default CardList