import stars from "../assets/stars.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "..//assets/avatar2.png";
import avatar3 from "..//assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

const cardContents = [
  {
    id: 1,
    title: "Absolutely satisfied!",
    review:
      "The food quality is just amazing!  Great customer service too! I love it.",
    avatar: avatar1,
    name: "Adrian",
    place: "Chicago",
  },
  {
    id: 2,
    title: "Great experience",
    review:
      "We had a small gathering at Little Lemon. The friendly staff and fantastic food!",
    avatar: avatar2,
    name: "Maria",
    place: "Boston",
  },
  {
    id: 3,
    title: "Everything is fresh!!",
    review:
      "The Salads were screaming FRESH! Perfectly seasoned. I will definitely visit again.",
    avatar: avatar3,
    name: "Peter",
    place: "Texas",
  },
  {
    id: 4,
    title: "Felt even more special",
    review:
      "The staff made my wife feel even more special with their kind attention!",
    avatar: avatar4,
    name: "Oswald",
    place: "Chicago",
  },
];

const TestimonialCard = ({ title, review, avatar, name, place }) => {
  return (
    <div className="testimonial-card">
      <div className="review-text">
        <h3>{title}</h3>
        <img src={stars} alt="stars" className='stars'/>
        <p className="review">{review}</p>
      </div>
      <div className="avatar-name">
        {" "}
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="name-place">
          <p className="name">{name}</p>
          <p className="place">{place}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className='testimonial-h2'>Testimonials</h2>
      <div className="card-container">
        {cardContents.map((card) => (
          <TestimonialCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
