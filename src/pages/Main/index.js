import React from 'react';

import Header from '~/pages/Header';

import Formulario from '~/components/site/Form';

import fotoMarcio from '~/assets/marcio.png';

export default function FormPage() {
  return (
    <>
      <Header />
      <div className='row'>
        <div className='col-sm-6' style={{ marginTop: '20px' }}>
          <Formulario />
        </div>
        <div className='col-sm-6'>
          <div style={{ textAlign: 'center' }}>
            <img src={fotoMarcio} alt='' className='fotoMarcio' />
          </div>
        </div>
      </div>
    </>
  );
}
