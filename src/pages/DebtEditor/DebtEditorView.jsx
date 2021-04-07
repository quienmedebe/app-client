import React, {useRef, useMemo, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useForm} from 'react-hook-form';
import Input from '../../components/UI/Input/Input';
import InputWithValidation from '../../components/UI/Input/InputWithValidation';
import StyledButtonOpacity from '../../components/UI/Button/StyledButtonOpacity';
import StyledText from '../../components/UI/Text/StyledText';

import {MAX_FIELD_VALUE, MAX_FIELD_LENGTH} from '../../config/config';
import {REQUIRED, MAX_LENGTH, MIN_VALUE, MAX_VALUE, NOT_VALID_NUMBER, isNumber} from '../../modules/validation';
import {TYPE, STATUS} from '../../modules/debt';
import Select from '../../components/UI/Select/Select';
import {backgroundLight, error, info} from '../../theme/colors';

const DebtEditorView = ({
  name,
  setName,
  amount,
  setAmount,
  type,
  setType,
  description,
  setDescription,
  status,
  setStatus,
  deleteDebtHandler,
  editDebtHandler,
  addDebtHandler,
  debtPublicId,
  finishFirstLoad,
}) => {
  const amountRef = useRef(null);
  const {control, errors, handleSubmit, reset} = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (finishFirstLoad) {
      reset({
        name,
        amount,
        type,
        description,
        status,
      });
    }
  }, [reset, finishFirstLoad, name, amount, type, description, status]);

  const SaveDebtButton = useMemo(() => {
    if (debtPublicId) {
      return (
        <StyledButtonOpacity testId='DebtEditor_button-save' style={[styles.sendContainer]} onPress={handleSubmit(() => editDebtHandler(reset))}>
          <StyledText style={[styles.sendLabel]}>Guardar cambios</StyledText>
        </StyledButtonOpacity>
      );
    }

    return (
      <StyledButtonOpacity testId='DebtEditor_button-save' style={[styles.sendContainer]} onPress={handleSubmit(() => addDebtHandler(reset))}>
        <StyledText style={[styles.sendLabel]}>Crear deuda</StyledText>
      </StyledButtonOpacity>
    );
  }, [debtPublicId, handleSubmit, editDebtHandler, addDebtHandler, reset]);

  const DeleteDebtButton = useMemo(() => {
    if (debtPublicId) {
      return (
        <StyledButtonOpacity style={[styles.deleteContainer]} onPress={deleteDebtHandler}>
          <StyledText style={[styles.deleteLabel]}>Eliminar</StyledText>
        </StyledButtonOpacity>
      );
    }

    return null;
  }, [debtPublicId, deleteDebtHandler]);

  return (
    <KeyboardAwareScrollView>
      <View style={[styles.formContainer]}>
        <InputWithValidation
          name='name'
          control={control}
          error={errors.name?.message}
          defaultValue={name}
          rules={{required: REQUIRED(), maxLength: {value: MAX_FIELD_LENGTH, message: MAX_LENGTH(MAX_FIELD_LENGTH)}}}
          containerProps={{style: [styles.input]}}
          render={({onChange, onBlur}) => (
            <Input
              value={name}
              onChangeText={value => {
                onChange(value);
                setName(value);
              }}
              onBlur={onBlur}
              label={type === TYPE.CREDIT.value ? '¿Quién te debe?' : '¿A quién le debes?'}
              error={!!errors.name?.message}
              autoCapitalize='words'
              autoCompleteType='off'
              clearButtonMode='while-editing'
              importantForAutofill='no'
              keyboardType='default'
              maxLength={MAX_FIELD_LENGTH}
              returnKeyType='next'
              onSubmitEditing={() => amountRef.current?.focus()}
              testId='DebtEditor_name'
            />
          )}
        />
        <InputWithValidation
          name='amount'
          control={control}
          error={errors.amount?.message}
          defaultValue={amount}
          rules={{
            required: REQUIRED(),
            min: {value: 0, message: MIN_VALUE(0)},
            max: {value: MAX_FIELD_VALUE, message: MAX_VALUE(MAX_FIELD_VALUE)},
            validate: val => isNumber(+val) || NOT_VALID_NUMBER(),
          }}
          containerProps={{style: [styles.input]}}
          render={({onChange, onBlur}) => (
            <Input
              value={amount}
              onChangeText={value => {
                const parsedValue = value.replace(/,/gi, '.');
                onChange(parsedValue);
                setAmount(parsedValue);
              }}
              ref={amountRef}
              onBlur={onBlur}
              label='Cantidad (€)'
              error={!!errors.amount?.message}
              autoCompleteType='off'
              keyboardType='decimal-pad'
              testId='DebtEditor_amount'
            />
          )}
        />
        <InputWithValidation
          name='type'
          control={control}
          error={errors.type?.message}
          defaultValue={type}
          rules={{required: REQUIRED(), maxLength: {value: MAX_FIELD_LENGTH, message: MAX_LENGTH(MAX_FIELD_LENGTH)}}}
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
              error={!!errors.type?.message}
              testId='DebtEditor_type'
            />
          )}
        />
        <InputWithValidation
          name='description'
          control={control}
          error={errors.description?.message}
          defaultValue={description}
          containerProps={{style: [styles.input]}}
          rules={{maxLength: {value: MAX_FIELD_LENGTH, message: MAX_LENGTH(MAX_FIELD_LENGTH)}}}
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
              numberOfLines={3}
              autoCapitalize='sentences'
              autoCompleteType='off'
              importantForAutofill='no'
              keyboardType='default'
              maxLength={MAX_FIELD_LENGTH}
              returnKeyType='next'
              testId='DebtEditor_description'
            />
          )}
        />
        <InputWithValidation
          name='status'
          control={control}
          error={errors.status?.message}
          defaultValue={status}
          rules={{required: REQUIRED(), maxLength: {value: MAX_FIELD_LENGTH, message: MAX_LENGTH(MAX_FIELD_LENGTH)}}}
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
              error={!!errors.status?.message}
              testId='DebtEditor_status'
            />
          )}
        />
        {SaveDebtButton}
        {DeleteDebtButton}
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
  deleteContainer: {
    marginTop: 25,
    marginHorizontal: 25,
    backgroundColor: backgroundLight,
  },
  deleteLabel: {
    textAlign: 'center',
    color: error,
  },
});

export default DebtEditorView;
