import {useState,useEffect} from 'react';
import Header from "./Header";

const MealList = ()=>{

    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((dataJson)=>{
            return dataJson.json();
        })
        .then((dataJs)=>{
            setDatas(dataJs.meals);
        });
    },[])

    return(
        <>
        <Header />
        <div className='contain'>
            {datas.map((data)=>{
                return(
                    <>
                    <div key={data.idMeal}>
                        <h2>{data.strMeal}   <button>Supprimer</button></h2>
                        <div className='flexCont'>
                            <img src={data.strMealThumb} alt={data.strMeal} width="300px" height="300px"/>
                            <div className='instrCont'>
                                <p className='instr'>{data.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                    
                    </>
                )
            })}
        </div>
        </>
    )
}

export default MealList;