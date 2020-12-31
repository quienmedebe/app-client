import React, {useMemo, useCallback} from 'react';
import {View, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StyledText from '../../components/UI/Text/StyledText';
import StyledButtonOpacityMain from '../../components/UI/Button/StyledButtonOpacityMain';
import desertImage from '../../../assets/images/desert.png';
import {Formats, Debts} from '../../modules';
import {Poppins} from '../../theme/fonts';
import {credit, debt, info, separator, text, paid} from '../../theme/colors';

const DebtListView = ({debts, editDebt}) => {
  const navigation = useNavigation();
  const formatter = useMemo(() => {
    return Formats.currencyFormat('es');
  }, []);

  const EmptyList = useMemo(() => {
    return (
      <View style={[styles.emptyListContainer]}>
        <Image source={desertImage} style={[styles.emptyListImage]} />
        <StyledText style={[styles.emptyListTitle]}>Todavía no has apuntado ninguna deuda</StyledText>
        <StyledButtonOpacityMain style={[styles.emptyListButton]} onPress={() => navigation.navigate('AddDebt')}>
          <StyledText style={[styles.emptyListButtonText]}>Añadir deuda</StyledText>
        </StyledButtonOpacityMain>
      </View>
    );
  }, [navigation]);

  const renderDebtItem = useCallback(
    ({item}) => {
      const formattedAmount = formatter.format(item.amount);
      const bgStyle = item.status === Debts.STATUS.PENDING.value ? {} : styles.itemPaid;
      const textColorStyle = item.type === Debts.TYPE.CREDIT.value ? styles.itemText : styles.itemTextLight;

      return (
        <TouchableOpacity onPress={() => editDebt(item.public_id)}>
          <View style={[styles.itemContainer, bgStyle]}>
            <StyledText style={[textColorStyle]}>{item.name}</StyledText>
            <StyledText style={[textColorStyle]}>{formattedAmount}</StyledText>
          </View>
        </TouchableOpacity>
      );
    },
    [formatter, editDebt],
  );

  const DebtsList = useMemo(() => {
    if (!debts.length) {
      return EmptyList;
    }

    return <FlatList data={debts} renderItem={renderDebtItem} keyExtractor={({public_id}) => public_id} />;
  }, [EmptyList, renderDebtItem, debts]);

  return <View style={[styles.mainContainer]}>{DebtsList}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  emptyListContainer: {
    alignItems: 'center',
    marginHorizontal: 25,
  },
  emptyListImage: {
    width: 250,
    height: 200,
  },
  emptyListTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 5,
    fontFamily: Poppins.Bold,
  },
  emptyListButton: {
    marginTop: 15,
    backgroundColor: info,
    alignSelf: 'stretch',
  },
  emptyListButtonText: {
    color: text,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: separator,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  itemPaid: {
    backgroundColor: paid,
  },
  itemText: {
    color: credit,
  },
  itemTextLight: {
    color: debt,
  },
});

export default DebtListView;
