import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="My Finances" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}