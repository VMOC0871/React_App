import {useState} from 'react';
import { AddCategory, GifGrid } from './componentes';

export const GiftExpertApp = () => {

    const[categories, setCategories] = useState(['Mario Bros', 'Marvel', 'Dragon Ball']);
   
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };
    
    return (
        <>
            
            <h2>GiftExpertApp</h2>

            
            <AddCategory 

                //setCategories = {setCategories}
                onNewCategory = {(value) => onAddCategory(value)}
            />

            
            {
                categories.map((category ) =>
                    (
                        <GifGrid key={ category} category={category}/>
                    )
                )
            }
            
        </>
    )
}
