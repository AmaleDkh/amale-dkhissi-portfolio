// React elements
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Component
import Layout from "../../components/Layout/Layout";

// Data
import projectsList from "../../assets/data/projectsList.json";

// Style
import "./Project.scss";

function Project({ title }) {
  const { id } = useParams();

  const project = projectsList.find((project) => project.id === id);
  console.log(project);

  return (
    <Layout>
      <div className="project">
        <div className="container-nordic">
          <Link to="/projects" className="project__back-link">
            <ArrowLeft size={20} className="mr-2" />
            Retour aux projets
          </Link>

          <div
            className="project__header-image"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>

          <div className="project__grid">
            <div className="project__grid__main">
              <h1 className="project__grid__main__section-title">
                {project.title}
              </h1>
              <p className="project__grid__main__description">
                {project.description}
              </p>

              {/* <h2 className="text-2xl mb-4">Témoignage client</h2>
              <blockquote className="border-l-4 border-nordic-ctaPrimary pl-6 py-2 mb-8 italic text-gray-700">
                "{project.clientFeedback}"
              </blockquote> */}
            </div>

            <div className="project__grid__sidebar">
              <div className="project__grid__sidebar__info-block">
                <h3 className="project__grid__sidebar__info-block__title">
                  Catégorie
                </h3>
                <p className="project__grid__sidebar__info-block__value">
                  {project.category}
                </p>
              </div>

              <div className="project__grid__sidebar__info-block">
                <h3 className="project__grid__sidebar__info-block__title">
                  Technologies
                </h3>
                <div className="project__grid__sidebar__tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project__grid__sidebar__tag">
                      {tech.technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="project__gallery">
            <h2 className="project__gallery__title">Galerie</h2>
            <div className="project__gallery__images">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="project__gallery__image-wrapper"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="project__gallery__image"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default Project;
