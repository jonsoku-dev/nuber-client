import React from 'react';
import styled from '../../typed-components';

const Container = styled("div")<{ mine: boolean }>`
  background-color: ${props =>
    props.mine ? props.theme.blueColor : props.theme.greyColor};
  color: white;
  padding: 15px 20px;
  border-radius: 20px;
  margin: 10px 0;
  align-self: ${props => (props.mine ? `flex-end` : `flex-start`)};
  border-bottom-right-radius: ${props => (props.mine ? "0px" : "20px")};
  border-bottom-left-radius: ${props => (props.mine ? "20ox" : "0")};
`;

interface IProps {
  text: string;
  mine: boolean;
}

const Message: React.SFC<IProps> = ({ text, mine }) => (
  <Container mine={mine}>{text}</Container>
);

export default Message;
