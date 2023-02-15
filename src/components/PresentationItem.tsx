import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"

type PresentationProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function PresentationItem({ id, name, price, imgUrl }: PresentationProps) {
    const {
        getItemQuantity,
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="300px"
                style={{ objectFit: "scale-down" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
