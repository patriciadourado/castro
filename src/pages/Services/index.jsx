import React from 'react';
import { Back, Col, Cols, Container, Front, Inner, Paragraph, Span, Title, Wrapper } from './styles';
import planning from '../../assets/info-planning.jpg';
import search from '../../assets/info-search.jpg';
import meeting from '../../assets/info-meeting.jpg';
import law from '../../assets/info-law.jpg';
import focus from '../../assets/info-focus.jpg';
import contract from '../../assets/info-contract.jpg';
import bid from '../../assets/info-bid-1.jpg';
import justice from '../../assets/info-the-law.jpg';

function Services(){
    
    return(
        <Wrapper id='services'>
            <Title>Serviços</Title>
            <Cols>
                <Col>
                    <Container>
                        <Front img={bid}>
                            <Inner>
                                <Span>Consultoria</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Contamos com equipe de especialistas experientes com atuação na área de licitações e compras públicas.</Paragraph> 
                                <br/>
                                <Paragraph>Profissionais aptos a prestar informações sobre licitação bem como intervir em situações necessárias.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={justice}>
                            <Inner>
                                <Span>Assessoria Jurídica</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Da análise do instrumento convocatório à execução dos contratos.</Paragraph>
                                <br/>
                                <Paragraph>Para a Administração Pública, nossa equipe está apta a facilitar a formalização de processos licitatórios com análise de editais e pareceres jurídicos que se fizerem necessários.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={law}>
                            <Inner>
                                <Span>Representação em licitações</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Conte com a nossa equipe na representação da sua empresa em qualquer modalidade de processo licitatório.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={planning}>
                            <Inner>
                                <Span>Gestão de contratos</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Além da assinatura de contrato, acompanhamos a execução do mesmo para garantia do cumprimento das obrigações avençadas pelas partes bem como a manutenção do equilíbrio econômico-financeiro durante manutenção dessas obrigações.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={contract}>
                            <Inner>
                                <Span>Capacitações</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Nossa equipe ajuda a capacitar você ou seu colaborador para maior independência da sua empresa ou especialização da equipe administrativa.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={search}>
                            <Inner>
                                {/* <Paragraph>Info</Paragraph> */}
                                <Span>Exclusividade</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Garantimos total exclusividade ao cliente durante o processo licitatório.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={focus}>
                            <Inner>
                                <Span>Análise do Edital</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Análise detalhada e compreensão total do edital de modo a garantir a entrega correta de documentos, bem como aumentar a compatibilidade da proposta apresentada com as especificações técnicas exigidas.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Front img={meeting}>
                            <Inner>
                                <Span>Elaboração de Propostas</Span>
                            </Inner>
                        </Front>
                        <Back>
                            <Inner>
                                <Paragraph>Como um de nossos serviços, fornecemos a elaboração de propostas de acordo com a análise do edital.</Paragraph>
                            </Inner>
                        </Back>
                    </Container>
                </Col>
            </Cols>
        </Wrapper>
    );
}

export default Services;