import {useState, useEffect} from 'react';
import Header from "./Header";

const MealsCategoriesList = ()=>{

    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then((mealsCat)=>{
            return mealsCat.json()
        .then((cat)=>{
            setCategories(cat.categories);
        })
        })
    },[])
    

    return(
        <>
        <Header />
        {categories.map((data)=>{
            return(
                <div key={data.idCategory} className='categoryCont'>
                    <h2>{data.strCategory}</h2>
                    <div className='flexCont'>
                        <img src={data.strCategoryThumb} alt={data.strCategory} width="300px" height="300px"/>
                        <div className='instrCont'>
                            <p className='instr'>{data.strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default MealsCategoriesList;