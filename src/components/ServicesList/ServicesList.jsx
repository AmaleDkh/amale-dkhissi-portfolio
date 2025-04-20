// Style
import "./ServicesList.scss";

// Component
import SecondaryButton from "../SecondaryButton/SecondaryButton";

// Data
import servicesList from "../../assets/data/servicesList.json";

function ServicesList({ marginVersion, isTitleAndButtonVisible }) {
  return (
    <section id="services" className={`services ${marginVersion}`}>
      <div className="services__container">
        {isTitleAndButtonVisible ? (
          <div className="services__header">
            <h2 className="services__title">Les solutions proposées</h2>
            <p className="services__subtitle">
              Des solutions sur mesure pour répondre à vos besoins.
            </p>
          </div>
        ) : (
          <div className="projects-section__information">
            <h1 className="projects-section__information__title">
              Les solutions proposées
            </h1>
            <p className="projects-section__information__description">
              Des solutions sur mesure pour répondre à vos besoins.
            </p>
          </div>
        )}

        <div className="services__grid">
          {servicesList.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__image-wrapper">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="services__image"
                />
              </div>
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isTitleAndButtonVisible === true && (
        <SecondaryButton
          link="/services"
          label=" Découvrir tous les services"
          centerVersion="secondary-button__center-version"
        />
      )}
    </section>
  );
}

export default ServicesList;
