import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './slides.scss';

const Slides = (props) => {
  const imagesItems = props.images.map((image, index) => {
    return (
      <div
        className={'carousel-item' + (index === 0 ? ' active' : '')}
        key={index}
      >
        <img
          src={image}
          className="d-block w-100"
          alt="..."
          onClick={props.onClick}
        />
      </div>
    );
  });

  const thumbnailImages = props.thumbnails.map((thumb, index) => {
    return (
      <button
        key={index}
        type="button"
        data-bs-target={'#' + props.id}
        data-bs-slide-to={index}
        aria-label={'Slide' + index}
        className={index === 0 ? 'active' : ''}
      >
        <img src={thumb} className="thumbnail d-block w-100 " />
      </button>
    );
  });
  //console.log(thumbnailImages);
  return (
    <div id={props.id} className="carousel slide">
      <button className="closeButton" onClick={props.closeButtonHandle}>
        X
      </button>
      <div className="carousel-inner">{imagesItems}</div>
      <button
        style={!props.showButtons ? { display: 'none' } : {}}
        className="carousel-control-prev"
        type="button"
        data-bs-target={'#' + props.id}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        style={!props.showButtons ? { display: 'none' } : {}}
        className="carousel-control-next"
        type="button"
        data-bs-target={'#' + props.id}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators">{thumbnailImages}</div>
    </div>
  );
};

export default Slides;
