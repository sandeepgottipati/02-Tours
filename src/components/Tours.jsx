import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  return (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <section className="tours">
        {tours.map((item) => {
          return <Tour {...item} key={item.id} removeTours={removeTours} />;
        })}
      </section>
    </>
  );
};
export default Tours;
