import React from "react";
import { useState } from "react";
import Dua from "./Dua";


function Subcategory({subcat_name_en}){
    const [isDuasOpen, setIsDuasOpen] = useState(false);
    function toggleDuas() {
        // setIsDuasOpen(prevState => !prevState);
        setIsDuasOpen(!isDuasOpen);
    }

    return(
        <div className="flex gap-2">
            <div className="left ml-2 w-5 relative flex justify-center">
                <div className="line w-[1px] h-full mx-auto bg-accent1"></div>
                <div className="dot w-2 h-2 bg-accent1 rounded-full absolute left-1/2 -translate-x-1/2 top-5"></div>
            </div>
            <div className="">
                <button onClick={toggleDuas} className="subcategory hover:bg-gray3 rounded-lg px-3 py-2 w-full text-sm font-medium leading-snug text-left transition">{subcat_name_en}</button>
                <div className={`duas-container ${isDuasOpen? '':'hidden'}`}>
                    <Dua></Dua>
                </div>
            </div>
        </div>
    );
};

export default Subcategory;


