// React element
import { useParams } from "react-router-dom";

// Components
import Layout from "../../components/Layout/Layout";
import SecondTitleForSection from "../../components/SecondTitleForSection/SecondTitleForSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import PageTitle from "../../components/PageTitle/PageTitle";

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
      <section className="project-section">
        <PageTitle title={project.title.french} />

        <div className="project-section__description-block">
          <SecondTitleForSection title="Présentation" />
          <p className="project-section__description">
            {project.description.french}
          </p>
        </div>

        <div className="project-section__technologies-block">
          <SecondTitleForSection title="Technologies utilisées" />
          <div className="project-container__information__icons">
            <div className="project-container__information__icons__technologies">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={` devicon ${tech.icon} ${tech.size} devicon-small-version `}
                  title={tech.technology}
                ></span>
              ))}
            </div>
          </div>
        </div>
        <img src={project.image} className="project-section__image" />
      </section>
      <ContactSection marginBottomVersion="margin-bottom-version" />
    </Layout>
  );
}

export default Project;
