// import "./MenuDetails.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './MenuLalunaSpa.css'

export default function MenuLalunaSpaWithNoCategory (props) {
    return (
        <div className='menu-wrapper'>
            {
                (props.metaMenu)[0].dishMenu.map(category => (
                    <Container className="menu-container">
                        {
                            (category.imageURL).length > 0 &&
                            <Row>
                                <Col className="dish-picture-style"><img className='dish-picture' src={`/${props.imgSource}/${category.imageURL}`} /></Col>
                                                   
                            </Row>
                        }
                        <Row>
                            <Col className="title-style">{category.dishTitle}</Col>
                        </Row>
                       
                        {
                        category.dishes.map((dish) => (
                            <>
                                {
                                    (dish.dishName).length > 0 &&
                                    <Row>    
                                        <Col xs={1} className="dish-number">{dish.dishNumber}</Col>      
                                        <Col xs={props.dishNameColNum} className="dish-name">{dish.dishName}</Col>            
                                    </Row>
                                }
                                
                                {
                                    (dish.subPrices).length > 0 &&
                                    <div className="dish-subprice">
                                    {   
                                        dish.subPrices.map((subprice) => (
                                            <Row>
                                                <Col xs={1} lg={1} className="dish-number">{dish.dishNumber}</Col> 
                                                <Col xs={6} lg={8}>{subprice.subDescription}</Col>
                                                <Col xs={5} lg={2}>{subprice.subPrice}</Col>
                                            </Row>
                                        ))
                                    }
                                    </div>
                                }
                                
                                
                                {
                                    (dish.dishDescription).length > 0 &&
                                    <Row>
                                        
                                        <Col xs={1} className="dish-number"></Col>
                                        
                                        <Col xs={10} className="dish-description">{dish.dishDescription}</Col>
                                    </Row>
                                }

                                {
                                    dish.subDishDescription.map((subDishDesc) => (
                                        <Row>
                                            <Col xs={1} className="dish-number">{dish.dishNumber}</Col> 
                                            <Col className="dish-description">
                                                <li>{subDishDesc}</li>
                                            </Col>
                                        </Row>
                                    ))
                                }
                            
                                <hr className="dish-divider"></hr>
                            </>
                            
                            ))
                        }
                       
                    </Container>
                    
                ))
            }
        </div>
                            
    )
}