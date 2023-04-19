import {useState, useEffect} from 'react';
import Header from "./Header";

const RandomMeal = ()=>{

    const [randomD,setRandomD] = useState([]);

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((randomJson)=>{
            return randomJson.json()
        .then((randomData)=>{
            console.log(randomData.meals[0])
            setRandomD(randomData.meals[0])
        })
    }) 
    },[])
    
    const handleClick =() =>{
        setRandomD([]);
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((randomJson)=>{
            return randomJson.json()
        .then((randomData)=>{
            console.log(randomData.meals[0])
            setRandomD(randomData.meals[0])
        })
        }) 
    }
    
    return(
        <>
        <Header />
        <div className='contain'>
            <button onClick={handleClick}>Nouvelle Recette</button>
            {(randomD.length===0)? (
                <>
                    <h2>CHARGEMENT</h2>
                </>
            ):(
                <>
                    {/* <button onClick={handleClick}>Nouvelle Recette</button> */}
                    <h2>{randomD.strMeal}</h2>
                    <div className='flexCont'>
                        <img src={randomD.strMealThumb} alt={randomD.strMeal} width="300px" height="300px"/>
                        <div className='instrCont'>
                            <p className='instr'>{randomD.strInstructions}</p>
                        </div>
                    </div>
                </>
             )} 
        </div>
        </>
    )
}

export default RandomMeal;