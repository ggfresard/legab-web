import ProjectSection from "components/ProjectSection"
import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"
import React from "react"

const Projects: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { isHovered: firstPanelHover, props: firstPanelProps } = useHover()
  const { isHovered: secondPanelHover, props: secondPanelProps } = useHover()
  return (
    <div
      className="overflow-y-auto flex-1 overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
      }}
    >
      <ProjectSection
        title="ReBa Accounting"
        image="reba.png"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        eligendi ducimus tenetur quia, praesentium aut adipisci deserunt ullam
        fuga nulla nam vero quas illo deleniti exercitationem, rem sequi assumenda
        mollitia. Facilis aperiam nemo esse explicabo voluptate fugit laboriosam
        corrupti, mollitia laborum beatae et officiis nihil earum accusantium quis
        quia perspiciatis consequuntur suscipit, ipsum debitis neque numquam ex
        fuga? Consequatur, accusantium! Quod provident eum vitae harum enim,
        magnam quas. Dolores unde praesentium facere, nihil, accusamus velit"
      ></ProjectSection>
      <ProjectSection
        title="json2api"
        image="json2api.png"
        right
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        eligendi ducimus tenetur quia, praesentium aut adipisci deserunt ullam
        fuga nulla nam vero quas illo deleniti exercitationem, rem sequi assumenda
        mollitia. Facilis aperiam nemo esse explicabo voluptate fugit laboriosam
        corrupti, mollitia laborum beatae et officiis nihil earum accusantium quis
        quia perspiciatis consequuntur suscipit, ipsum debitis neque numquam ex
        fuga? Consequatur, accusantium! Quod provident eum vitae harum enim,
        magnam quas. Dolores unde praesentium facere, nihil, accusamus velit"
      ></ProjectSection>
    </div>
  )
}

export default Projects
