import React from 'react';
import { Link } from 'react-router-dom';

import titulo from '~/assets/titulo.png';
import logoOcb from '~/assets/logo-ocb.png';
import logoSomosCoop from '~/assets/somoscoop.png';

export default function Header() {
  return (
    <div className='container'>
      <div className='row titulo'>
        <div className='col-8'>
          <Link to='/'>
            <img src={titulo} alt='Título' className='imagemTitulo' />
          </Link>
        </div>
        <div className='col-4'>
          <div className='row row-cols-1 row-cols-sm-2'>
            <div className='col'>
              <img src={logoOcb} alt='OCB-GO' className='imagemOcb' />
            </div>
            <div className='col'>
              <img
                src={logoSomosCoop}
                alt='SomosCoop'
                className='imagemSomosCoop'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
