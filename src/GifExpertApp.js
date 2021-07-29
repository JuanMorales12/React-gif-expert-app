import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Gallardo'])



    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            <ol>
                {categories.map((categori) => (

                        <GifGrid key = {categori} category= {categori}/>
                    
                    )
                )}
            </ol>
        </>
    )
}

export default GifExpertApp;