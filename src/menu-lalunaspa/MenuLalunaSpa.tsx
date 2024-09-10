import 'bootstrap/dist/css/bootstrap.css';
import { metaMenu } from "../../public/lalunaspa/MetaMenuData";
import MenuLalunaSpaWithNoCategory from './MenuLalunaspaWithNoCategory';
import BackToTopButton from '../back-to-top-button/BackToTopButton';
import HeaderLalunaSpa from './HeaderLalunaSpa';


export default function MenuLalunaSpa () {
    const urlSource = 'lalunaspa';
    
    return (
        <>  
            <div className='logo-wrapper-lalunaspa'>
                <img className='logo-lalunaspa' src={`/${urlSource}/logo.png`} />
            </div>
            <HeaderLalunaSpa/>
            <MenuLalunaSpaWithNoCategory metaMenu={metaMenu} imgSource={urlSource} dishNameColNum={11} dishPriceColNum={4}/>
            <BackToTopButton/>
        </>
    )
}