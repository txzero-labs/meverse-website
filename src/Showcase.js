const images = require.context("./images/showcase", true);

function Showcase() {
  return (
    <div className="container Showcase mt-5">
      <div className="row row-cols-auto h-100 justify-content-center">
        {[...Array(54).keys()].map((value, key) => (
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
