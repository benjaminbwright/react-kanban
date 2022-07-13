import Card from "./Card"

export default function ProjectBoardColumns() {
  const styles = {
    columnContent: {
      background: "#787878",
      borderRadius: "5px"
    }
  }
  return (
    <div className="col-3" >
      <div className="p-3" style={styles.columnContent} >
        <Card />
      </div>
    </div>
  )
}