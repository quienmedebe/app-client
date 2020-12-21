import styled from 'styled-components/native';
import {backgroundLight} from '../../../theme/colors';

export const StyledButtonOpacity = styled.TouchableOpacity`
  background-color: ${({background}) => background ?? backgroundLight};
  border-radius: 25px;
  padding: 10px 15px;
`;

export default StyledButtonOpacity;
