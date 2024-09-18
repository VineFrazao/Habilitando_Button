import styled, { css } from 'styled-components';

interface ButtonContainerProps {
    disabled?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;
    border: 1px solid #81259D;
    border-radius: 21px;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }

    ${props => props.disabled && css`
        background-color: #ccc;
        border-color: #ccc;
        color: #666;
        cursor: not-allowed;
        opacity: 0.7;

        &:hover {
            opacity: 0.7;
            cursor: not-allowed;
        }
    `}
`;