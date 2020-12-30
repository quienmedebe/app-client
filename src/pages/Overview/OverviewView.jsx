import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import H1 from '../../components/UI/Text/H1';
import StyledText from '../../components/UI/Text/StyledText';
import AddButtonCircle from '../../components/UI/Button/AddButtonCircle';
import {Formats, Debts} from '../../modules';
import desertImage from '../../../assets/images/desert.png';
import {Poppins} from '../../theme/fonts';
import {separator, credit, debt} from '../../theme/colors';

const OverviewView = ({debtBalance, pendingDebts, editDebt}) => {
  const navigation = useNavigation();

  const formatter = useMemo(() => {
    return Formats.currencyFormat('es');
  }, []);

  const BalanceContent = useMemo(() => {
    const formattedBalance = formatter.format(debtBalance);

    return <StyledText style={[styles.summaryContent]}>{formattedBalance}</StyledText>;
  }, [formatter, debtBalance]);

  const EmptyListContent = useMemo(() => {
    return (
      <View style={[styles.emptyListContainer]}>
        <Image source={desertImage} style={[styles.emptyListImage]} />
        <StyledText style={[styles.emptyListTitle]}>No tienes deudas pendientes</StyledText>
        <StyledText style={[styles.emptyListSubtitle]}>Puedes crear una nueva pulsando en el botón de añadir que hay abajo.</StyledText>
      </View>
    );
  }, []);

  const renderPendingDebtItem = useCallback(
    ({item}) => {
      const formattedAmount = formatter.format(item.amount);
      const textColorStyle = item.type === Debts.TYPE.CREDIT.value ? styles.itemText : styles.itemTextLight;

      return (
        <TouchableOpacity onPress={() => editDebt(item.public_id)}>
          <View style={[styles.itemContainer]}>
            <StyledText style={[textColorStyle]}>{item.name}</StyledText>
            <StyledText style={[textColorStyle]}>{formattedAmount}</StyledText>
          </View>
        </TouchableOpacity>
      );
    },
    [formatter, editDebt],
  );

  const PendingDebtsList = useMemo(() => {
    if (!pendingDebts.length) {
      return EmptyListContent;
    }

    return <FlatList data={pendingDebts} renderItem={renderPendingDebtItem} keyExtractor={({public_id}) => public_id} />;
  }, [EmptyListContent, pendingDebts, renderPendingDebtItem]);

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.summaryContainer]}>
        <H1 style={[styles.summaryLabel]}>Balance:</H1>
        {BalanceContent}
      </View>
      <View style={[styles.pendingDebtsContainer]}>
        <H1 style={[styles.pendingDebtsTitle]}>Deudas pendientes</H1>
        {PendingDebtsList}
      </View>
      <View style={[styles.addDebtContainer]}>
        <AddButtonCircle onPress={() => navigation.navigate('AddDebt')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    flex: 1,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryLabel: {
    margin: 5,
    fontSize: 24,
  },
  summaryContent: {
    margin: 5,
    fontSize: 24,
  },
  pendingDebtsContainer: {
    marginTop: 20,
    flex: 1,
  },
  pendingDebtsTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  emptyListContainer: {
    alignItems: 'center',
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
  emptyListSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 5,
    marginHorizontal: 25,
  },
  addDebtContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
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
  itemText: {
    color: credit,
  },
  itemTextLight: {
    color: debt,
  },
});

export default OverviewView;
