import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function visitProduct(id: number) {
    if (id == 1) {
        return (
            <Nav className="me-auto">
                <Nav.Link to="/Jacket1" as={NavLink}>
                    Home
                </Nav.Link>
            </Nav>
        )
    } else {
        return (
            <Nav className="me-auto">
                <Nav.Link to="/Jacket1" as={NavLink}>
                    Home
                </Nav.Link>
            </Nav>
        )
    }
}