import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, #FF1414 0%, #1cabf5 34.48%, #58068c 100%);
  padding-top: 50px;
`;


const Header = styled.div`
  padding: 10vw;
  background: linear-gradient(to bottom, #006ded 0%, #f5d2b8 40%, #00e2ed 100%);
  font-size: 7vw;
  color: #58068c;
  font-family:'Courier New', Courier, monospace;
  font-weight: 800;
  border-radius: 50%;
  width: 80%;
  margin: 0 auto
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
`;

const Footer = styled.div`
  padding: 10vw;
  background: linear-gradient(to bottom, #006ded 0%, #f5d2b8 40%, #00e2ed 100%);
  font-size: 7vw;
  color: #76534f;
  font-family:'Courier New', Courier, monospace;
  font-weight: 800;
  text-align: center
`;

export default function BeBong () {
    
    return (
        <>  
        <Wrapper>
            <Header>
                Happy Birthday Em iu!
            </Header>
            <Img src='/bebong/bebong.png'/>
        </Wrapper>
        <Footer>
              If Life doesn't make me happy, then Money Does!
        </Footer>
            
        </>
    )
}