import 'bootstrap/dist/css/bootstrap.css';
import { metaMenu } from "../../public/lalunaspa/MetaMenuData";
import MenuLalunaSpaWithNoCategory from './MenuLalunaspaWithNoCategory';
import HeaderLalunaSpa from './HeaderLalunaSpa';


export default function MenuLalunaSpa () {
    const urlSource = 'lalunaspa';
    
    return (
        <>  
            <div className='logo-wrapper'>
                <img className='logo' src={`/${urlSource}/logo.png`} />
            </div>
            <HeaderLalunaSpa/>
            <MenuLalunaSpaWithNoCategory metaMenu={metaMenu} imgSource={urlSource} dishNameColNum={11} dishPriceColNum={4}/>
            
        </>
    )
}