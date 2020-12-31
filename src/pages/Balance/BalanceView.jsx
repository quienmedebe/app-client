import React, {useMemo} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import StyledText from '../../components/UI/Text/StyledText';
import H1 from '../../components/UI/Text/H1';
import {Formats} from '../../modules';

const BalanceView = ({pendingBalance, paidBalance}) => {
  const formatter = useMemo(() => {
    return Formats.currencyFormat('es');
  }, []);

  const totalBalance = useMemo(() => {
    const source = [pendingBalance, paidBalance];

    return source.reduce((acc, {credit, debt}) => ({credit: acc.credit + credit, debt: acc.debt + debt}), {credit: 0, debt: 0});
  }, [pendingBalance, paidBalance]);

  return (
    <ScrollView style={[styles.mainContainer]}>
      <View style={[styles.debtCategoryContainer]}>
        <View style={[styles.debtCategoryTitle]}>
          <H1 style={[styles.debtCategoryTitleLabel]}>Pendiente:</H1>
          <StyledText style={[styles.debtCategoryTitleAmount]}>{formatter.format(pendingBalance.credit - pendingBalance.debt)}</StyledText>
        </View>
        <View style={[styles.debtConceptsContainer]}>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A cobrar:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(pendingBalance.credit)}</StyledText>
          </View>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A deber:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(-pendingBalance.debt)}</StyledText>
          </View>
        </View>
      </View>
      <View style={[styles.debtCategoryContainer]}>
        <View style={[styles.debtCategoryTitle]}>
          <H1 style={[styles.debtCategoryTitleLabel]}>Pagado:</H1>
          <StyledText style={[styles.debtCategoryTitleAmount]}>{formatter.format(paidBalance.credit - paidBalance.debt)}</StyledText>
        </View>
        <View style={[styles.debtConceptsContainer]}>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A cobrar:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(paidBalance.credit)}</StyledText>
          </View>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A deber:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(-paidBalance.debt)}</StyledText>
          </View>
        </View>
      </View>
      <View style={[styles.debtCategoryContainer]}>
        <View style={[styles.debtCategoryTitle]}>
          <H1 style={[styles.debtCategoryTitleLabel]}>Total:</H1>
          <StyledText style={[styles.debtCategoryTitleAmount]}>{formatter.format(totalBalance.credit - totalBalance.debt)}</StyledText>
        </View>
        <View style={[styles.debtConceptsContainer]}>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A cobrar:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(totalBalance.credit)}</StyledText>
          </View>
          <View style={[styles.debtConceptsTypeContainer]}>
            <StyledText style={[styles.debtConceptsTypeLabel]}>A deber:</StyledText>
            <StyledText style={[styles.debtConceptsTypeAmount]}>{formatter.format(-totalBalance.debt)}</StyledText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  debtCategoryContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debtCategoryTitle: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  debtCategoryTitleLabel: {
    fontSize: 24,
  },
  debtCategoryTitleAmount: {
    fontSize: 24,
  },
  debtConceptsContainer: {
    marginHorizontal: 50,
  },
  debtConceptsTypeContainer: {
    flexDirection: 'row',
  },
  debtConceptsTypeLabel: {
    fontSize: 18,
    paddingVertical: 5,
    minWidth: 100,
  },
  debtConceptsTypeAmount: {
    fontSize: 18,
    paddingVertical: 5,
    textAlign: 'right',
    minWidth: 100,
  },
  debtConceptsText: {
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default BalanceView;
