import send from "../assets/icons/Send.svg";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <h2 className="subscribe-h2">Stay updated</h2>
      <p className="newsletter">Subscribe to our newsletter!</p>
      <button className="subscribe-btn">
        <div className="subscribe-email">Your Email Address</div>
        <div className="send">
          Subscribe
          <img src={send} />
        </div>
      </button>
    </section>
  );
};

export default Subscribe;
