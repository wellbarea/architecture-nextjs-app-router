"use client"

import React from 'react';
import Image from 'next/image';
import { HeaderContainer } from './styles';

export const Header = () => {
    return (
        <HeaderContainer data-testid="header-container">
            <Image src="/svg/lorem-credit-union.svg" alt="Lorem Credit Union Logo" width={116} height={33} />
        </HeaderContainer>
    );
};