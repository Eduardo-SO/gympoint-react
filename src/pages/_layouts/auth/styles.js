import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: #ee4d64;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 360px;
    border-radius: 4px;
    padding: 40px 20px;
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 10px;
    }

    form {
        display: flex;
        flex-direction: column;

        strong {
            text-transform: uppercase;
            color: #444;
            margin: 20px 0 5px;
        }

        input {
            width: 300px;
            height: 45px;
            padding: 0 15px;
            border: solid 1px #ddd;
            border-radius: 4px;

            color: rgba(0, 0, 0, 0.9);

            &::placeholder {
                color: #999;
            }
        }

        span {
            margin: 5px 0 0 5px;
            color: #ee4d64;
        }

        button {
            background: #ee4d64;
            width: 300px;
            height: 45px;
            margin-top: 15px;
            border: solid 1px #ddd;
            border-radius: 4px;

            color: #fff;
            font-weight: bold;
            font-size: 16px;

            transition: all 0.3s;

            &:hover {
                background: ${darken(0.03, '#ee4d64')};
                transform: scale(1.01);
            }
        }
    }
`;
