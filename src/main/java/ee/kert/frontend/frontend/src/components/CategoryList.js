import Category from "./Category";

function CategoryList(props){    
    return(
        <div>
            {props.categories.map(category => (
                <Category key={category.key}
                name={category.name}
                price={category.price} />
            ))}
        </div>
    );
}

export default CategoryList;