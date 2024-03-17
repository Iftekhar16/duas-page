import React from "react";
import { useState } from "react";
import Subcategory from "./Subcategory";


function Category({cat_name_en, no_of_subcat, no_of_dua, cat_icon, subCategories, duas}){
    const [isSubcategoriesOpen, setIsSubcategoriesOpen] = useState(false);
    function toggleSubcategories() {
        setIsSubcategoriesOpen(!isSubcategoriesOpen);
    }

    return(
        <div className="category">
            <button onClick={toggleSubcategories} className="bg-light1 hover:bg-gray3 rounded-lg w-full p-2 flex justify-between items-center gap-1 transition">
                <div className="flex items-center gap-3">
                    <img className="w-14 h-14 rounded-lg" src="/images/category.png" alt="" />
                    <div className="text flex flex-col justify-center gap-1">
                        <div className="title text-sm font-semibold text-left">{cat_name_en}</div>
                        <div className="subtitle text-gray1 text-xs text-left">Subcategories: {no_of_subcat}</div>
                    </div>
                </div>
                <div className="px-2 border-l-[1px] border-gray1 flex flex-col justify-center items-center">
                    <div className="no-of-duas">{no_of_dua}</div>
                    <div className="no-of-duas-subtitle text-gray1 text-xs">Duas</div>
                </div>
            </button>
            <div className={`subcategory-container ${isSubcategoriesOpen? '' : 'hidden'}`}>
                {
                    subCategories.map((subcat,index)=>{
                        return (

                            <Subcategory subcat_name_en={subcat.subcat_name_en} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Category;