import ProjectBoardColumns from "./ProjectBoardColumns"
import ProjectBoardHeader from "./ProjectBoardHeader"

export default function ProjectBoard() {
  return (
    <div className="container-fluid">
      <ProjectBoardHeader />
      <ProjectBoardColumns />
    </div>
  )
}