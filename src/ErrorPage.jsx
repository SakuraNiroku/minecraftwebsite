import { Link, useRouteError } from "react-router-dom";
import i18n from "./i18n";

export default function ErrorPage(){
    const randomimglist = ['/errorimg/happyenderman.jpg','/errorimg/navicatconnectmysql.jpg','/errorimg/younetworktime.png']
    const randomimg = randomimglist[Math.floor(Math.random()*randomimglist.length)]

    return(<>
        <div id="errorpage" style={{
            display:"flex",
            flexDirection:"row",
            top:'50%',
            left:'50%',
            position:'absolute',
            transform:'translate(-50%,-50%)'}}>
            <div>
                <label style={{fontSize:'32px'}}>{i18n('errorpage.oops')}</label>
                <p style={{fontSize:'24px'}}>{i18n('errorpage.cannothandler')}</p>
                <p style={{fontSize:'20px'}}><Link to={`/`}>{i18n('errorpage.backtext')}</Link></p>
            </div>
            <img src={randomimg} width={'150px'} height={'150px'} style={{marginLeft:'50px'}}></img>
        </div>
    </>)
}