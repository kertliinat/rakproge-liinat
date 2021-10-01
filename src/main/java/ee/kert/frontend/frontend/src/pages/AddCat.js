import AddCatForm from "../components/AddCatForm";
function AddCat(){
    function categorySubmitHandler(category){
        fetch('http://localhost:8080/categories', {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type':'application/json'
            } 
        });
    }
    return(
        <div>
            <h1>Lisa uus kategooria</h1>
            <AddCatForm onAddCat={categorySubmitHandler}/>
        </div>
    );
}

export default AddCat;