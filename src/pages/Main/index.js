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
        <div className='col-sm-6 textoMarcio'>
          <div className='row'>
            <div className='col-12' style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  paddingBottom: '10px',
                }}
              >
                Sobre Márcio Fernandes
              </div>
              <div style={{ textAlign: 'justify' }}>
                Nomeado aos 36 anos Presidente de uma das maiores distribuidoras
                de energia elétrica do país em 2011, foi considerado pela
                revista Você S/A o líder mais admirado do Brasil em 2014, com a
                maior pontuação da história da pesquisa - 98,3% de satisfação e
                engajamento de seu time.
                <br />
                Em 2016, foi nomeado Executivo de Valor em seu setor pelo Jornal
                Valor Econômico. Em 2017, alcançou 100% da confiança de seus,
                até então, quase 4 mil colaboradores de acordo com a pesquisa
                GPTW e foi considerado, pela segunda vez, o líder mais admirado
                do Brasil pela revista Você S/A. Sob seu comando, a Elektro foi
                eleita por 6 vezes consecutivas a Melhor Empresa para Trabalhar
                no Brasil pelas pesquisas Great Place to Work e Você S/A e ainda
                por duas vezes a Melhor da América Latina. A trajetória de
                grande reconhecimento é fruto da nova Filosofia de Gestão, que
                desafia modelos tradicionais e propõe novas possibilidades.
                <br />
                Autor de três livros - Felicidade dá Lucro, O fim do Círculo
                Vicioso e Filosofia de Gestão: Cultura e estratégia com as
                pessoas.
                <br />
                Fundou a Thutor e desenvolveu milhares de líderes em todo o
                Brasil, além de implantar a Nova Cultura Organizacional em
                várias organizações.
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12' style={{ textAlign: 'center' }}>
              <img src={fotoMarcio} alt='' className='fotoMarcio' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
