import React, {useMemo} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import H1 from '../../components/UI/Text/H1';
import StyledText from '../../components/UI/Text/StyledText';
import AddButtonCircle from '../../components/UI/Button/AddButtonCircle';
import {Formats} from '../../modules';

const OverviewView = ({debtBalance, pendingDebts}) => {
  const BalanceContent = useMemo(() => {
    const formatter = Formats.currencyFormat('es');
    const formattedBalance = formatter.format(debtBalance);

    return <StyledText style={[styles.summaryContent]}>{formattedBalance}</StyledText>;
  }, [debtBalance]);

  const PendingDebtItem = useMemo(item => {
    console.log(item);
    return null;
  }, []);

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.summaryContainer]}>
        <H1 style={[styles.summaryLabel]}>Balance:</H1>
        {BalanceContent}
      </View>
      <View style={[styles.pendingDebtsContainer]}>
        <H1 style={[styles.pendingDebtsTitle]}>Deudas pendientes</H1>
        <FlatList data={pendingDebts} renderItem={PendingDebtItem} keyExtractor={({id}) => id} />
      </View>
      <View style={[styles.addDebtContainer]}>
        <AddButtonCircle onPress={console.log} />
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
  addDebtContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
});

export default OverviewView;
