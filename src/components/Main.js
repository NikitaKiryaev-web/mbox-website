import star from "../images/RatingStar.svg";
import image from "../images/PremiereFilm.png"

function Main(props) {
  return(
    <main className="content">
      <section className="banner">
        <div className="banner__info">
          <h1 className="banner__title">{props.title}</h1>
          <div className="banner__info-wrapper">
            <p className="banner__info-year">{props.year}</p>
            <div className="banner__info-age-wrapper">
              <p className="banner__info-age">{`${props.age}+`}</p>
            </div>
            <p className="banner__info-seasons">{`${props.seasons} Seasons`}</p>
            <div className="banner__info-rating">
            <img className="banner__info-star" src={star}></img>
            <p className="banner__info-rating-number">{props.rating}</p>
            </div>
          </div>
          <p className="banner__about">{props.about}</p>
        </div>
      </section>
    </main>
  )
}

export default Main;