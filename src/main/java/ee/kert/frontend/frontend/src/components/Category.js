function Category(props){
    return(
        <div>
            <div className="categoryName">{props.name}</div>
            <div className="categoryPrice">{props.price}</div>
        </div>
    );
}
//muudatus
export default Category;