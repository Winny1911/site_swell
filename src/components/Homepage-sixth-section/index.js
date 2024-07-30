import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import "./style.css"

const SixthSection = () => {
  return (
    <div className="sixth-section">
      <h2 style={{ fontWeight: 'bold' }}>Transforme Visão em Inovação conosco!</h2>
      <p style={{ textAlign: 'left', marginBottom: 0 }}>Estamos prontos para impulsionar o sucesso da sua empresa!</p>
      <p style={{ textAlign: 'left' }}>Preencha o formulário abaixo e permita que nossa equipe entre em contato.</p>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group col-md-8">
            <input type="text" className="form-control" placeholder="Nome" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" placeholder="Cargo" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8">
            <input type="email" className="form-control" placeholder="E-mail" />
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" placeholder="Empresa" />
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Assunto" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="3" placeholder="Digite sua mensagem aqui (opcional)"></textarea>
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Enviar <FontAwesomeIcon icon={faLongArrowAltRight} />
        </button>
      </form>
      <p className="small-text">
        O Controlador dos dados pessoais é a Swell IT Solutions. Os dados inseridos no formulário serão processados única e exclusivamente para manter contato. <br/>
        Você pode retirar qualquer o consentimento dado a qualquer momento. Para obter informações adicionais ou para exercer os seus direitos, visite o aviso de privacidade. <br/>
        A Swell não utiliza informações de contato para enviar qualquer tipo de SPAM.
      </p>
    </div>
  );
}

export default SixthSection;
