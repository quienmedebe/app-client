import React, {useMemo} from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import StyledButtonOpacity from './StyledButtonOpacity';
import StyledText from '../Text/StyledText';
import {main, text} from '../../../theme/colors';
import CircleIndeterminate from '../Progress/CircleIndeterminate';

const Styles = styled(StyledButtonOpacity)`
  ${({disabled}) => {
    if (disabled) {
      return `
        background-color: ${main};
      `;
    }

    return `
      background-color: ${main};
    `;
  }}
`;

const ColorText = styled(StyledText)`
  color: ${text};
  text-align: center;
`;

const CenterView = styled(View)`
  justify-content: center;
  align-items: center;
`;

const StyledButtonOpacityMain = ({children, isLoading, textProps, ...props}) => {
  const InnerComponent = useMemo(() => {
    if (isLoading) {
      return (
        <CenterView>
          <CircleIndeterminate />
        </CenterView>
      );
    }

    return <ColorText {...textProps}>{children}</ColorText>;
  }, [isLoading, children, textProps]);

  return <Styles {...props}>{InnerComponent}</Styles>;
};

StyledButtonOpacityMain.defaultProps = {
  StyledButtonOpacityMain: {},
};

export default StyledButtonOpacityMain;
