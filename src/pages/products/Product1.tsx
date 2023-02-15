import { Col, Row, Container, Button } from "react-bootstrap"
import { StoreItem } from "../../components/StoreItem"
import storeItems from "../../data/presentation.json"
import { formatCurrency } from "../../utilities/formatCurrency"
import img1 from "../../data/product1.json"
import { Card } from "react-bootstrap"
import { principalImage } from "../../components/PrincipalImage"


type Image1Props = {
  id: number
  name: string
  price: number
  color: string
  imgUrl: string
}

function Image1({ id, name, price, color, imgUrl }: Image1Props) {

}


export function Product1() {
  return (
    <Container>
      {storeItems.filter(item => item.id === { principalImage }).map(item => (

        //lg= cantidad de columnas
        <Row Row md={2} xs={1} lg={2} className="g-3" >
          <Col key={item.id}><StoreItem {...item} /></Col>
          <Col>
            <div>{item.name}</div>
            <div>Estrellas calificatorias  10,515 calificaciones | 58 preguntas respondidas</div>
            <div>Precio:{formatCurrency(item.price)}</div>
            <div>Talla:</div>
            <Button>Seleccionar</Button>
            <div>Color: {item.color}</div>
            <Row Row md={6} xs={1} lg={6} className="g-3">
              {img1.map(item => (
                <Col>
                  <Card className="visualImageContainer">
                    <Card.Img className="visualImage"
                      variant="top"
                      src={item.imgUrl}
                      height="50px"
                      style={{ objectFit: "scale-down" }} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      ))
      }
    </Container >
  )
}