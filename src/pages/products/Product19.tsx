import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../../components/StoreItem"
import storeItems from "../../data/presentation.json"

export function Product19() {
    return (
        <>
            <h1>Product19</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.filter(item => item.id === 19).map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}