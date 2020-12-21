import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import Input from '../../components/UI/Input/Input';
import InputWithValidation from '../../components/UI/Input/InputWithValidation';
import StyledButtonOpacity from '../../components/UI/Button/StyledButtonOpacity';
import StyledText from '../../components/UI/Text/StyledText';

const DebtEditorView = ({name, setName, amount, setAmount, type, setType, description, setDescription, status, setStatus}) => {
  const {control, errors, handleSubmit} = useForm();

  return (
    <KeyboardAwareScrollView>
      <View style={[styles.formContainer]}>
        <InputWithValidation
          name='name'
          control={control}
          error={errors.name?.message}
          defaultValue={name}
          rules={{required: 'Es requerido'}}
          containerProps={{style: [styles.input]}}
          render={({onChange, onBlur}) => (
            <Input
              value={name}
              onChangeText={value => {
                onChange(value);
                setName(value);
              }}
              onBlur={onBlur}
              label='¿A quién le debes?'
              error={!!errors.name?.message}
            />
          )}
        />
        <InputWithValidation
          name='amount'
          control={control}
          error={errors.amount?.message}
          defaultValue={amount}
          rules={{required: 'Es requerido'}}
          containerProps={{style: [styles.input]}}
          render={({onChange, onBlur}) => (
            <Input
              value={amount}
              onChangeText={value => {
                onChange(value);
                setAmount(value);
              }}
              onBlur={onBlur}
              label='Cantidad (€)'
              error={!!errors.amount?.message}
            />
          )}
        />
        <StyledButtonOpacity onPress={handleSubmit(console.log)}>
          <StyledText>Enviar</StyledText>
        </StyledButtonOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
  input: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
});

export default DebtEditorView;
