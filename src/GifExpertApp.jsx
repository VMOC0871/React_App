import {useState} from 'react';
import { AddCategory } from './componentes/Addcategory';

export const GiftExpertApp = () => {

    const[categories, setCategories] = useState(['Mario Bros', 'Marvel', 'Dragon Ball']);
    const onAddCategory = () => {
        //setCategorias(['Hola mundo']);
        setCategories(['Valorant', ...categories]);
        //setCategorias(cat = [...cat, 'Valorant'])
    };
    
    return (
        <>
            {/*titulo*/}
            <h2>GiftExpertApp</h2>

            {/*Input*/}
            <AddCategory />

            {/*Listado de Gif*/}
            <button onClick={onAddCategory}> AGREGAR </button>
            <ol>
                {
                categories.map(category =>{
                    return <li key={category}>{category}</li>
                })
                }
            </ol>
                {/*Gif Item*/}
        </>
    )
}
