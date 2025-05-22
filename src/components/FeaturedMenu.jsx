import salad from "../assets/greek salad.jpg";
import check from "../assets/icons/check-02.svg";
import bruschetta from "..//assets/bruschetta.jpg";
import lemonCake from "..//assets/lemon dessert.jpg";
import arrabbiata from "..//assets/penne.jpg";
import fish from "..//assets/fish.jpg";
import redArrow from "..//assets/icons/red-arrow-right.svg";

const Card = ({ image, title, description, price }) => {
  return (
    <>
      <div className="card">
        <img src={image} className="menu-image" />
        <div className="card-text">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
          <div className="price-btn">
            <p className="price">{price}</p>
            <button className="order-btn">
              Order
              <img src={check} alt="check" id="check" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturedMenu = () => {
  return (
    <section className="featured-menu">
      <h2>Featured Menu</h2>
      <div className="cards-slider">
        <Card
          image={salad}
          title="Greek Salad"
          description="The famous greek salad of crispy lettuce, peppers, olives and our organic Tofu."
          price="$12.99"
        />
        <Card
          image={bruschetta}
          title="Bruschetta"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and herbs."
          price="$7.99"
        />
        <Card
          image={lemonCake}
          title="Lemon Layer Cake"
          description="Coming straight from grandma’s recipe , every ingredient has been sourced and is authentic."
          price="$5.99"
        />
        <Card
          image={arrabbiata}
          title="Arrabbiata"
          description="Spicy pasta that packs a punch! Served with fresh parmesan, basil and parsley."
          price="$18.99"
        />
        <Card
          image={fish}
          title="Grilled Fish"
          description="Mediterranean whole char-grilled fish with fresh lemon, herbs and organic olive oil."
          price="$20.99"
        />
      </div>
      <button className="delivery-btn">
        Order a delivery
        <img src={redArrow} alt="arrow" />
      </button>
    </section>
  );
};

export default FeaturedMenu;
