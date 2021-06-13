import React from 'react';
import { Card, Grid, InfoCard, InformationsTitle, Wrapper } from './styles';

function Informations(){
    return(
        <Wrapper id='informations'>
            <InformationsTitle>Informações</InformationsTitle>
            <Grid>
                <Card item1>
                    <InfoCard>A assessoria jurídica em licitações garante à sua empresa mais segurança para organização de sua documentação possibilitando o saneamento desta conforme os requisitos do instrumento convocatório.</InfoCard>
                </Card>
                <Card item2>
                    <InfoCard>Nossas dicas são: Busque conhecimento, Diminua os riscos, Verifique as exigências de cada órgão, Providencie todos os documentos necessários, Busque licitações, Leia o edital</InfoCard>
                </Card>
                <Card item3></Card>
                <Card item4></Card>
                <Card item5>
                    <InfoCard>Contrate uma consultoria em licitações, doe-se mais às questões administrativas da sua empresa e tenha mais segurança jurídica nos processos licitatórios.</InfoCard>
                </Card>
                <Card item7></Card>
                <Card item8>
                    <InfoCard>Sua probabilidade em vencer contratos só tende a aumentar com uma assessoria jurídica em licitações.</InfoCard>
                </Card>
                <Card item9></Card>
                <Card item11>
                    <InfoCard>Quanto à execução dos contratos, garanta que lhe seja mantido o equilíbrio contratual entre as partes e continue lucrando!</InfoCard>
                </Card>
            </Grid>
        </Wrapper> 
    );
}

export default Informations;