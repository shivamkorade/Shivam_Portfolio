import { Col } from "react-bootstrap";

export const ProjectCard = ({ about,title, description, date, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      
      <div className="proj-imgbx">
        <div className="proj-title-top">
        </div>
        <img src={imgUrl} style={{ width: "415px", height:"250px", objectFit: "cover" }}/>
        <div className="proj-txtx">
          <a href={link} target="_blank" style={{ color: "white", textDecoration: "none" }}><h4>{title}</h4></a>
          <span>{description}</span>
          <br></br>
          <span>{date}</span>
        </div>
      </div>
      <h4 className="top_heading">{about}</h4>
    </Col>
  );
};
