import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header>
            <ul className="header">
                <li><Link to={"/meal-list"} className="link">Liste des recettes</Link></li>
                <li><Link to={"/meals-categories"} className="link">Catégories de recettes</Link></li>
                <li><Link to={"/random-meal"} className="link">Recette aléatoire</Link></li>
                <li><Link to={"/create-meal"} className="link">Création de recettes</Link></li>
            </ul>
        </header>
    )
}

export default Header;
