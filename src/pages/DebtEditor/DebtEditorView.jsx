import React from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import Input from '../../components/UI/Input/Input';
import InputWithValidation from '../../components/UI/Input/InputWithValidation';
import StyledButtonOpacity from '../../components/UI/Button/StyledButtonOpacity';
import StyledText from '../../components/UI/Text/StyledText';

import {TYPE, STATUS} from '../../modules/debt';
import Select from '../../components/UI/Select/Select';
import {info} from '../../theme/colors';

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
        <InputWithValidation
          name='type'
          control={control}
          error={errors.type?.message}
          defaultValue={type}
          rules={{required: 'Es requerido'}}
          containerProps={{style: [styles.input, styles.select]}}
          render={({onChange, onBlur}) => (
            <Select
              value={type}
              onValueChange={value => {
                onChange(value);
                setType(value);
              }}
              items={TYPE.TYPES()}
              onBlur={onBlur}
              placeholder={{value: '', label: 'Tipo de deuda'}}
            />
          )}
        />
        <InputWithValidation
          name='description'
          control={control}
          error={errors.description?.message}
          defaultValue={description}
          containerProps={{style: [styles.input]}}
          render={({onChange, onBlur}) => (
            <Input
              value={description}
              onChangeText={value => {
                onChange(value);
                setDescription(value);
              }}
              onBlur={onBlur}
              label='Descripción'
              error={!!errors.description?.message}
              multiline
            />
          )}
        />
        <InputWithValidation
          name='status'
          control={control}
          error={errors.status?.message}
          defaultValue={status}
          rules={{required: 'Es requerido'}}
          containerProps={{style: [styles.input, styles.select]}}
          render={({onChange, onBlur}) => (
            <Select
              value={status}
              onValueChange={value => {
                onChange(value);
                setStatus(value);
              }}
              items={STATUS.STATUS()}
              onBlur={onBlur}
              placeholder={{value: '', label: 'Estado de la deuda'}}
            />
          )}
        />
        <StyledButtonOpacity style={[styles.sendContainer]} onPress={handleSubmit(console.log)}>
          <StyledText style={[styles.sendLabel]}>Guardar</StyledText>
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
  select: {
    marginTop: 10,
    marginBottom: 5,
  },
  sendContainer: {
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: info,
  },
  sendLabel: {
    textAlign: 'center',
  },
});

export default DebtEditorView;
