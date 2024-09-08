import 'bootstrap/dist/css/bootstrap.css';
import { metaMenu } from "../../public/lalunaspa/MetaMenuData";
import MenuWithCategory from "../menu-with-category/MenuWithCategory";
import MenuWithNoCategory from "../menu-with-no-cetegory/MenuWithNoCategory";


export default function MenuDetailsLalunaSpa () {
    const urlSource = 'lalunaspa';
    let enableTabMenu: boolean = false;
    enableTabMenu = metaMenu.length === 1?  false : true;
    console.log(metaMenu)
    return (
        <>
            <div className='logo'>
                <img style={{width: '30vw', height:'15vh'}} src={`/${urlSource}/logo.png`} />
            </div>
            {enableTabMenu ? <MenuWithCategory metaMenu={metaMenu} imgSource={urlSource} dishNameColNum={8} dishPriceColNum={4}/> : <MenuWithNoCategory metaMenu={metaMenu} imgSource={urlSource} dishNameColNum={8} dishPriceColNum={4}/>}
        </>
    )
}