// import "./MenuDetails.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import styled, {keyframes} from 'styled-components';

const shake = keyframes`
    0%{
       transform: translateX(0)
     }
    25%{
       transform: translateX(10px);
     }
     
    50%{
       transform: translateX(-5px);
     }
    100%{
       transform: translateX(0px);
     }
`

const Title = styled.div`
    text-align: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    font-size: larger;
    color: rgb(170, 122, 34);
    font-weight: bold;
`;

const MenuSelection = styled.div `
    border: 1.5mm ridge rgb(221, 196, 168);
    padding: 10px;
    font-size: medium;
    font-weight: 500;
    background-color: rgb(245, 239, 228);
    color: black;
    cursor: pointer;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    box-shadow: 0 2px #999;
    margin-bottom: 5px;
    text-decoration: underline;
    &:hover {
        background-color: white;
        color: rgb(187, 137, 80);
    };
    &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
    }  
`

const TourSelection = styled.div`
    animation: ${shake} 1s linear infinite;
`

const SubTitle = styled.div`
    text-align: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    font-size: medium;
    color: rgb(170, 122, 34);
    font-weight: bold;
`;


const  Time = styled.div`
    text-align: center;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    font-size: small;
    color: rgb(170, 122, 34);
    font-weight: bold;
`;

const Content = styled.div`
    font-weight: 500;
    font-size: small;
    color: rgb(170, 122, 34);
    margin-bottom: 4px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    color: rgb(170, 122, 34);
    text-align: justify;
    text-justify: inter-word;
`;

const ContentBenefit = styled.div`
    font-weight: 1000;
    font-size: small;
    color: rgb(170, 122, 34);
    margin-bottom: 4px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    color: rgb(170, 122, 34);
    text-align: justify;
    text-justify: inter-word;
`;

const TitleWrapper = styled.div`
    border: 0.5px solid rgb(189, 160, 108);
    padding: 1rem;
    border-radius: 20px;
    width: 100%;
    margin: 1rem auto;
`;

const Benefit = styled.div`
    background-color: rgb(245, 239, 228);
    padding: 0.5rem
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;



export default function MenuLalunaTourWithNoCategory (props) {

    const handleScroll = (param) => {
        const element = document.getElementById(param);
        element?.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <>
            <Container>
            <Title>Quick Choices</Title>
            {
                (props.metaMenu).map(menu => (
                    <MenuSelection onClick={() => handleScroll(menu.id)}>
                        <TourSelection>
                            {menu.title}
                        </TourSelection> 
                    </MenuSelection>
                ))
            }
            </Container>
            <hr className="dish-divider-lalunaspa"></hr>
            <div className=''>
            {
                (props.metaMenu).map(menu => (
                    <Container>
                        
                        <TitleWrapper id={menu.id}>
                            
                            <Row>
                                    <Title>{menu.title}</Title> 
                            </Row>
                            
                            <Row>
                              
                                    <SubTitle>{menu.subTitle}</SubTitle>
                             
                            </Row>

                            <Row>
                             
                                    <Time>{menu.depart}</Time>
                             
                            </Row>

                            <Row>
                             
                                    <Time>{menu.finish}</Time>
                              
                            </Row>

                           
                        </TitleWrapper>
                            
                       
                        {
                            (menu.content).map(contentItem => (
                                <Row>
                                    
                                        <Content>
                                        ⇨{contentItem}        
                                        </Content>
                                    
                                </Row>
                            ))
                        }
                           
                      

                        <Col><Image src={`/${props.imgSource}/${menu.img}`} /></Col>

                        <Benefit>
                        <ContentBenefit>Include:</ContentBenefit>  

                            {
                                (menu.include).map(includeItem => (
                                    <Row>
                                            <Content>
                                            ✔ {includeItem}
                                            </Content>
                                    </Row>
                                ))
                            }

                            <ContentBenefit>Exclude:</ContentBenefit>  

                            {
                                (menu.exclude).map(excludeItem => (
                                    <Row>
                                            <Content>
                                            ✘ {excludeItem}
                                            </Content>
                                    </Row>
                                ))
                            }
                        </Benefit>
                        
                        <hr className="dish-divider-lalunaspa"></hr>
                    
                    </Container>
                    
                ))
            }
            </div>
        </>
        
                            
    )
}