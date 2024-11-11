import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='footerStyle'>
            <img 
                src='/images/logo.png'
                alt={t('altLogo')}/>
            <p>© {new Date().getFullYear()} {t('derechos')}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Link href="#" style={{color: 'white'}}>{t('legal')}</Link>
                <span style={{ borderLeft: '1px solid white', height: '20px' , marginLeft: '5px', marginRight: '5px'}}></span>
                <Link href="#" style={{color: 'white'}}>{t('politica')}</Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Link href="https://www.facebook.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
                    <FacebookIcon style={{ color: '#FFFFFF' }} />
                </Link>
                <Link href="https://www.twitter.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
                    <TwitterIcon style={{ color: '#FFFFFF' }} />
                </Link>
                <Link href="https://www.instagram.com" target="_blank" color="inherit" style={{ margin: '0 10px' }}>
                    <InstagramIcon style={{ color: '#FFFFFF' }} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
