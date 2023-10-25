import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Course = ({course}) => {
    const {name, description, img, price} = course;
    const navigate = useNavigate(auth);
    const buttonClick =()=>{
      navigate('/orders')
    }
    
  return (
    <div className="mx-3 my-4 col-10 col-md-5">
          <Card className="text-center">
            <Card.Header>
                <img src={img} alt="" />
            </Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <p className="text-danger">Only for ${price}</p>
              <Button variant="primary" onClick={buttonClick}>Get This Course</Button>
            </Card.Body>
          </Card>
    </div>
  );
};

export default Course;
