import styled from 'styled-components/native';
import {main} from '../../../theme/colors';

export const CompleteBackground = styled.View`
  background-color: ${({background}) => background ?? main};
  flex: 1;
`;

export default CompleteBackground;
