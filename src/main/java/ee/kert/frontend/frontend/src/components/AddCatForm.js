import './AddItemForm.css'
import {useRef} from 'react';

function AddCatForm(props){
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    function formSubmitHandler(e){
        e.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value; 

        const category = {
            name: nameValue,
            price: priceValue,
        };
        props.onAddCat(category);
        console.log(category);
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label><br/>
            <input type="text" required ref={nameInputRef}/><br/>
            <label>Kategooria hind</label><br/>
            <input type="number" required ref={priceInputRef}/><br/>
            <button>Sisesta uus kategooria</button>
        </form>
    );
}

export default AddCatForm;