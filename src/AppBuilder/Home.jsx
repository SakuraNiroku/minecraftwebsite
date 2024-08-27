import { Button } from 'react-bootstrap'
import i18n from '../i18n'
import './Home.css'
import { LinkContainer } from 'react-router-bootstrap'

export default function Home(params) {
    return(<>
            <div style={{
            position:'absolute',
            top:'45%',
            left:'50%',
            fontSize:'50px',
            transform:'translate(-50%,-100%)',
            display:'flex',
            flexDirection:'column'}}>
                <label style={{fontSize:'50px',opacity:'0.8'}}>{i18n('home.servername')}</label>
                <label style={{fontSize:'35px',opacity:'0.5'}}>{i18n('home.servertitle')}</label>
            </div>
            <div style={{
            position:'absolute',
            top:'60%',
            left:'50%',
            fontSize:'50px',
            transform:'translate(-50%,-100%)',
            display:'flex',
            flexDirection:'row'}}>
                <LinkContainer to={`/about`}><Button variant='outline-primary'>{i18n('home.about')}</Button></LinkContainer>
                <LinkContainer to={`/join`} style={{marginLeft:'150px'}}><Button variant='outline-primary'>{i18n('home.join')}</Button></LinkContainer>
            </div>
    </>)
}