import { props } from "react"

const NewsInfo = (props) => {
  return (
    <div
      style={{
        border: "1px solid #6b6161",
        borderRadius: "15px",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        gap: "1rem"
      }}
    >
      {props.children}
    </div>
  );
}

export default NewsInfo