import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/currency"

type StoreItemProps = {
    id: number,
    title: string,
    price: number,
    image: string
}

export function StoreItem({id, title, price, image} : StoreItemProps) {
    const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart} = useShoppingCart()
    const quantity= getItemQuantity(id)
    return <Card className="h-100">
        <Card.Img 
            variant="top" 
            src={image}
            height="200px"
            style={{objectFit: "cover"}}
            />
        <Card.Body className="d-flex flex-column" >
            <Card.Title className="d-flex justify-content-betwen align-items-baseline mb-4">
                <span className="fs-2">{title}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? <Button className="w-100" onClick={() => increaseQuantity(id)}>+ Add to Cart</Button>
                 : <div className="d-flex align-items-center flex-column" style={{gap : ".5rem"}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap : ".5rem"}}>
                        <Button onClick={() => decreaseQuantity(id)}>-</Button>
                        <div>
                            <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>    
    </Card>
}