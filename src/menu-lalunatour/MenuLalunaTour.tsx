import 'bootstrap/dist/css/bootstrap.css';
import { metaMenu } from "../../public/lalunatour/MetaMenuData";
import MenuLalunaTourWithNoCategory from './MenuLalunaTourWithNoCategory';
// import BackToTopButton from '../back-to-top-button/BackToTopButton';
import styled from 'styled-components';

const BackToTopButton = styled.div`
    position: fixed;
    right: 20px;
    bottom: 10px;
    border-radius: 100%;
    border: 2mm ridge rgb(187, 137, 80);
    padding: 10px;
    font-size: 2em;
    font-weight: 500;
    background-color:rgb(187, 137, 80);
    color: black;
    cursor: pointer;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    &:hover {
        background-color: white;
        color: rgb(187, 137, 80);
    }
        &:active {
        transform: translateY(4px)
    }
`

const LogoWrapper = styled.div`
    text-align: center;
    padding: 40px;
`

export default function MenuLalunaTour () {
    const top = () => {
        window.scrollTo(0, 0)
    }

    const urlSource = 'lalunatour';
    
    return (
        <>  
            <LogoWrapper>
                <img className='logo-lalunaspa' src={`/${urlSource}/logo.png`} />
            </LogoWrapper>
          
            <MenuLalunaTourWithNoCategory metaMenu={metaMenu} imgSource={urlSource}/>
            <BackToTopButton onClick={top}>
                <div>Tour</div>
                <div>Menu</div>
            </BackToTopButton>
        </>
    )
}