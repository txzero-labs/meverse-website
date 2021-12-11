const images = require.context("./images/showcase", true);

function Showcase() {
  return (
    <div className="container Showcase mt-5">
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 h-100">
        {[...Array(56).keys()].map((value, key) => (
          <div key={key} className="col text-center p-1 rounded">
            <img
              src={images(`./${value}.png`).default}
              alt="Ooops..."
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
