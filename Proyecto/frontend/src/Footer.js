import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import './App.css';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className='footerStyle' aria-label={t('pieDePagina')}>
            <img 
                src='/images/logo.png'
                alt={t('altLogo')}
            />
            <p>© {new Date().getFullYear()} {t('derechos')}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Typography variant="body2" color="#B0BEC5" align="center" style={{ marginTop: '10px' }}>
                    <Link href="#" style={{color: 'white'}} aria-label={t('enlaceLegal')}>
                        {t('legal')}
                    </Link>
                    <span style={{ borderLeft: '1px solid white', height: '20px', marginLeft: '5px', marginRight: '5px' }}></span>
                    <Link href="#" style={{color: 'white'}} aria-label={t('enlacePolitica')}>
                        {t('politica')}
                    </Link>
                </Typography>      
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Link href="https://www.facebook.com" target="_blank" color="inherit" style={{ margin: '0 10px' }} aria-label={t('facebook')}>
                    <FacebookIcon style={{ color: '#FFFFFF' }} />
                </Link>
                <Link href="https://www.twitter.com" target="_blank" color="inherit" style={{ margin: '0 10px' }} aria-label={t('twitter')}>
                    <TwitterIcon style={{ color: '#FFFFFF' }} />
                </Link>
                <Link href="https://www.instagram.com" target="_blank" color="inherit" style={{ margin: '0 10px' }} aria-label={t('instagram')}>
                    <InstagramIcon style={{ color: '#FFFFFF' }} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
