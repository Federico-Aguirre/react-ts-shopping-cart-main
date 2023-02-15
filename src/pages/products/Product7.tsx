import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../../components/StoreItem"
import storeItems from "../../data/presentation.json"

export function Product7() {
    return (
        <>
            <h1>Product7</h1>
            <Row md={2} xs={1} lg={3} className="g-3">
                {storeItems.filter(item => item.id === 7).map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}