import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  FlatList,
  SafeAreaView,
} from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice !== '' && discountPercentage !== '') {
      const original = parseFloat(originalPrice);
      const discount = parseFloat(discountPercentage);
      const discountedPrice = original - (original * discount) / 100;
      const saveAmount = original - discountedPrice;

      const calculation = `${original} - ${discount}% = ${discountedPrice.toFixed(2)}`;

      setHistory([...history, calculation]);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}>Discount Calculator App</Text>
        <TextInput
          placeholder="Original Price"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={(text) => setOriginalPrice(text)}
          style={{margin:20,padding:20,borderWidth:2}}
        />
        <TextInput
          placeholder="Discount Percentage"
          keyboardType="numeric"
          value={discountPercentage}
          onChangeText={(text) => setDiscountPercentage(text)}
          style={{margin:20,padding:20,borderWidth:2}}
        />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}></Text>
        <Button title="Calculate Discount" onPress={calculateDiscount} />
        <Text style={{marginLeft:20,paddingTop:20,fontWeight:"bold"}}></Text>
        <Button title="View History" onPress={() => setShowHistoryModal(true)}  />

        <Modal
          visible={showHistoryModal}
          animationType="slide"
          transparent={false}
        >
          <View style={{alignItems:"center",justifyContent:"center",padding:50, margin:50}}>
            <Text>History of Calculations</Text>
            <FlatList
              data={history}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text>{item}</Text>}
            />
            <Button title="Close History" onPress={() => setShowHistoryModal(false)} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DiscountCalculatorApp;
