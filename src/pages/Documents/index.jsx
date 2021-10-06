import React from 'react';
import { DocumentButton, DocumentsTitle, Line, Wrap, WrapDoc } from '../Documents/styles';

function Documents(){
    return(
        <Wrap>
            <DocumentsTitle id='documents'>Documentos</DocumentsTitle>
            <WrapDoc>
                <DocumentButton href="SERVICOS_JCASTRO_CONSULTORIA_EM_LICITACOES_E_ASSESSORIA_JURIDICA.pdf" target="_blank" rel="noopener noreferrer" title="Faça o Download dos Nossos Serviços">Nossos serviços para sua empresa</DocumentButton>
                <DocumentButton href="como_ler_um_edital_de_licitacao.pdf" target="_blank" rel="noopener noreferrer" title="Como Ler um Edital de Licitação">Como ler um edital de licitação</DocumentButton>
            </WrapDoc>
            <Line />
        </Wrap>
    );
}

export default Documents;