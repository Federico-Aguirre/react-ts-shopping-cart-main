import { Col, Row } from "react-bootstrap"
import { PresentationItem } from "../components/PresentationItem"
import PresentationItems from "../data/presentation.json"

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {PresentationItems.map(item => (
          <Col key={item.id}>
            <PresentationItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
