import React, { useEffect, useState } from 'react';

import Header from '~/pages/Header';

import { db } from '../../config/Firebase';

export default function FormPage() {
  const [loading, setLoading] = useState(false);
  const [relatorio, setRelatorio] = useState([]);

  useEffect(() => {
    setLoading(true);
    let data = [];
    db.collection('subscription')
      .orderBy('name')
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          data.push(doc.data());
        });
        setLoading(false);
        setRelatorio(data);
      });
  }, []);
  return (
    <>
      <Header />
      {loading && (
        <div className='row' style={{ marginTop: '20px' }}>
          Aguarde...
        </div>
      )}
      <div className='row' style={{ marginTop: '20px' }}>
        {JSON.stringify(relatorio)}
      </div>
      {relatorio.map((sub, key) => (
        <div key={key} className='row' style={{ marginTop: '20px' }}>
          <div className='col-sm-3'>{sub.name}</div>
          <div className='col-sm-3'>{sub.email}</div>
          <div className='col-sm-2'>{sub.cpf}</div>
          <div className='col-sm-2'>{sub.phone}</div>
          <div className='col-sm-2'>{sub.cooperativa}</div>
        </div>
      ))}
    </>
  );
}
