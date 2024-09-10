// import "./MenuDetails.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './MenuLalunaSpa.css'

export default function MenuLalunaSpaWithNoCategory (props) {
    return (
        <div className='menu-wrapper-lalunaspa'>
            {
                (props.metaMenu)[0].dishMenu.map(category => (
                    <Container className="menu-container-lalunaspa">
                        {
                            (category.imageURL).length > 0 &&
                            <Row>
                                <Col className="dish-picture-style-lalunaspa"><img className='dish-picture-lalunaspa' src={`/${props.imgSource}/${category.imageURL}`} /></Col>
                                                   
                            </Row>
                        }
                        <Row>
                            <Col className="title-style-lalunaspa">{category.dishTitle}</Col>
                        </Row>
                       
                        {
                        category.dishes.map((dish) => (
                            <>
                                {
                                    (dish.dishName).length > 0 &&
                                    <Row>    
                                        <Col xs={1} className="dish-number-lalunaspa">{dish.dishNumber}</Col>      
                                        <Col xs={props.dishNameColNum} className="dish-name-lalunaspa">{dish.dishName}</Col>            
                                    </Row>
                                }
                                
                                {
                                    (dish.subPrices).length > 0 &&
                                    <div className="dish-subprice-lalunaspa">
                                    {   
                                        dish.subPrices.map((subprice) => (
                                            <Row>
                                                <Col xs={1} lg={1} className="dish-number-lalunaspa">{dish.dishNumber}</Col> 
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
                                        
                                        <Col xs={1} className="dish-number-lalunaspa"></Col>
                                        
                                        <Col xs={10} className="dish-description-lalunaspa">{dish.dishDescription}</Col>
                                    </Row>
                                }

                                {
                                    dish.subDishDescription.map((subDishDesc) => (
                                        <Row>
                                            <Col xs={1} className="dish-number-lalunaspa">{dish.dishNumber}</Col> 
                                            <Col xs={10} className="dish-description-lalunaspa">
                                                <li>{subDishDesc}</li>
                                            </Col>
                                        </Row>
                                    ))
                                }
                            
                                <hr className="dish-divider-lalunaspa"></hr>
                            </>
                            
                            ))
                        }
                       
                    </Container>
                    
                ))
            }
        </div>
                            
    )
}