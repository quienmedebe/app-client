import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import H1 from '../../components/UI/Text/H1';
import StyledText from '../../components/UI/Text/StyledText';
import AddButtonCircle from '../../components/UI/Button/AddButtonCircle';
import {Formats} from '../../modules';
import desertImage from '../../../assets/images/desert.png';
import {Poppins} from '../../theme/fonts';

const OverviewView = ({debtBalance, pendingDebts}) => {
  const navigation = useNavigation();

  const BalanceContent = useMemo(() => {
    const formatter = Formats.currencyFormat('es');
    const formattedBalance = formatter.format(debtBalance);

    return <StyledText style={[styles.summaryContent]}>{formattedBalance}</StyledText>;
  }, [debtBalance]);

  const EmptyListContent = useMemo(() => {
    return (
      <View style={[styles.emptyListContainer]}>
        <Image source={desertImage} style={[styles.emptyListImage]} />
        <StyledText style={[styles.emptyListTitle]}>No tienes deudas pendientes</StyledText>
        <StyledText style={[styles.emptyListSubtitle]}>Puedes crear una nueva pulsando en el botón de añadir que hay abajo.</StyledText>
      </View>
    );
  }, []);

  const renderPendingDebtItem = useCallback(item => {
    console.log(item);
    return null;
  }, []);

  const PendingDebtsList = useMemo(() => {
    if (!pendingDebts.length) {
      return EmptyListContent;
    }

    return <FlatList data={pendingDebts} renderItem={renderPendingDebtItem} keyExtractor={({id}) => id} />;
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
        <AddButtonCircle onPress={() => navigation.navigate('DebtEditor')} />
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
});

export default OverviewView;
