//Component

// function of javascript.
// returns html 
// can be reused
import AddToCart from "../AddToCart/AddToCart";
import "./ProductCard.css"

function ProductCard({item}) {
  return (
    <div className="p-card">
      <div>
        {item.title}
      </div>
      <div>
        { item.price}
      </div>
      <div>
        <img src={item.image} alt="" />
        {/* { item.image} */}
      </div>
      <AddToCart item={item} />
    </div>
  )
}

export default ProductCard;

// JSX - javacsript Xml notation

// function add() {return 1+2};
// function add(a, b) {return a+b};

// props - properties