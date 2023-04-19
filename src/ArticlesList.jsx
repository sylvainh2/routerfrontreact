import {useState,useEffect} from 'react';
import Header from "./Header";

const ArticlesList = ()=>{
    const [articlesData,setArticlesData] = useState([]);
    
useEffect(()=>{
        fetch("./articles.json")
        .then((response)=>{
            return response.json();
        })
        .then((datas)=>{
            setArticlesData(datas);
        });
    },[])
    
    return (
        <div>
        <Header />    
        {articlesData.map((data)=>{
            return(
                <div key={data.id}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>                
            );
        })}
        </div>
    );
};

export default ArticlesList;