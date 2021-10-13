import useHover from "hooks/useHover"
import useWindowDimensions from "hooks/useWindowDimensions"

const Projects: React.FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { isHovered: firstPanelHover, props: firstPanelProps } = useHover()
  const { isHovered: secondPanelHover, props: secondPanelProps } = useHover()
  return (
    <div
      className="overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{
        width: `${windowWidth ?? 0}px`,
        height: `calc(${windowHeight ?? 0}px - 8rem)`,
      }}
    ></div>
  )
}

export default Projects
