import React from 'react';

import Formulario from '~/components/site/Form';

import john from '~/assets/john.png';

export default function FormPage() {
  return (
    <>
      <div className='row'>
        <div className='col-sm-6'>
          <div
            style={{
              textAlign: 'center',
              fontSize: '50px',
              marginTop: '150px',
            }}
          >
            404
          </div>
        </div>
        <div className='col-sm-6'>
          <div style={{ textAlign: 'center' }}>
            <img src={john} alt='' style={{ maxWidth: '400px' }} />
          </div>
        </div>
      </div>
    </>
  );
}
