import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import CategoryList from "../components/CategoryList";

function ViewCat(){

const [isLoading, setIsLoading] = useState(true);
const [loadedCategories, setLoadedCategories] = useState([]);

    
useEffect(()=>{
    fetch('http://localhost:8080/categories').then(res => {
        return res.json();
    }).then(data =>{
        console.log(data);
        setIsLoading(false);
        setLoadedCategories(data);
    });
},[])
        return(
            <div>    
                <Link to="add-cat">
                    <button>Lisa uus kategooria</button>
                </Link>
                <CategoryList categories={loadedCategories}/>
            </div>
        );
    }

export default ViewCat;