// import "./MenuDetails.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';

export default function MenuWithNoCategory (props) {
    console.log(props.dishNameColNum)
    return (
        <>
            {
                (props.metaMenu)[0].dishMenu.map(category => (
                    <Container className="menu-container">
                        <Row>
                            <Col className="title-style">{category.dishTitle}</Col>
                        </Row>
                        {
                        category.dishes.map((dish) => (
                            <>
                                <Row>
                                    {
                                        (dish.dishNumber).length > 0 &&
                                        <Col xs={1} className="dish-number">{dish.dishNumber}</Col>
                                    }
                                    <Col xs={props.dishNameColNum} className="dish-name">{dish.dishName}</Col>
                                    <Col xs={props.dishPriceColNum} className="dish-price">{dish.dishPrice}</Col>
                                </Row>
                                {
                                    (dish.dishDescription).length > 0 &&
                                    <Row>
                                        {
                                            (dish.dishNumber).length > 0 &&
                                            <Col xs={1} className="dish-number"></Col>
                                        }
                                        <Col xs={10} className="dish-description">{dish.dishDescription}</Col>
                                    </Row>
                                }
                            
                                <hr className="dish-divider"></hr>
                            </>
                            
                            ))
                        }
                        {
                            (category.imageURL).length > 0 &&
                            <Row>
                                <Col className="dish-picture-style"><img className='dish-picture' src={`/${props.imgSource}/${category.imageURL}`} /></Col>
                                                   
                            </Row>
                        }
                    </Container>
                    
                ))
            }
        </>
                            
    )
}