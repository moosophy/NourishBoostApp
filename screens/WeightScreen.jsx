// External dependencies
import React, { useState } from "react";
import {Dimensions, StyleSheet } from "react-native";
import { Button, Colors, NumberInput, Picker, Text, TouchableOpacity, View } from "react-native-ui-lib";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Components
import CalendarDayIcon from "../components/icons/CalendarDayIcon";
import tweakStyles from "../functions/tweakStyles";
import getAllUnits from "../queries/getAllUnits";
import RulerVerticalIcon from "../components/icons/RulerVerticalIcon";
import GaugeIcon from "../components/icons/GaugeIcon";
import PlusIcon from "../components/icons/PlusIcon";


/* Katya - 
  I reused the same code for the calendar,
  maybe we could make it so that by changing the date on one screen, it
  will also use this date when you go to another screen? just a suggestion

*/

  // Retrieving the device's dimensions
const screenWidth = Dimensions.get("window").width;


export default function WeightScreen() {

  const [weightMeasure, setWeightMeasure] = useState(0);
  const [measureValidity, setMeasureValidity] = useState(false);
  const [startValidating, setStartValidating] = useState(false);


  // Stateful variable for controling the display of the date picker.
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // Function that displays the date picker.
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  // Function that hides the date picker.
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Function that retrieves the picked date.
  const handleConfirm = (date) => {
    hideDatePicker();
    setDate(date);
  };

  // Intantiating the initial date.
  const [date, setDate] = useState(new Date());
  

  // Displays the Calendar on top:
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: screenWidth,
          backgroundColor: Colors.green30,
          paddingHorizontal: 24,
          alignItems: "center",
          paddingVertical: 16,
        }}
      >
        <Text text60L white style={{ marginTop: 8 }}>
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
        <TouchableOpacity onPress={showDatePicker}>
          <CalendarDayIcon
            color={Colors.white}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={date}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
      

      {/* Text and input on bottom half*/}

      <View style={{flexGrow: 1}}>
        {/*diagram goes here, in the view below*/}
        <View style={styles.diagramStyle}>
          <Text text60L>
              [Diagram]
          </Text>
        </View>

        <View style={styles.bottomThingyStyle}>
          
          {/* Text and number input (check if correct) */}
          <Text text60 white> 
            Add new weight:
          </Text>

          <View style={{
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
            }}>

            <View width={24} height={24} style={{ marginBottom: 2, marginHorizontal: 5}}>
                <GaugeIcon />
              </View>

            <NumberInput
              initialNumber={weightMeasure}
              onChangeNumber={(numberInput) => {
                const number = numberInput.number;
                setWeightMeasure(number);
                const validity = number > 0;
                setMeasureValidity(validity);
              }}
              containerStyle={[
                tweakStyles(styles.iconFields, {
                  borderColor:
                    startValidating && !measureValidity
                      ? Colors.green30
                      : Colors.grey60,
                }),
                { width: 120 }  // Set specific width here
              ]}
            />
            {/* A little separator  */}
            <View style={{ marginHorizontal: 10 }} />

            {/* Field that changes the currently selected measurement unit */}
            
              <View width={24} height={24} style={{ marginBottom: 2 }}>
                <RulerVerticalIcon />
              </View>
              <Picker
                value={"unit"}
                onChange={(element) => {
                  setUnit(element);
                }}
                style={[
                  styles.iconFields,
                  { width: 120 }  // Set specific width here
                ]}
              >
              </Picker>

            {/* A little separator  */}
            <View style={{ marginHorizontal: 10 }} />      

            <Button
            backgroundColor={Colors.green70}
            style={{ padding: 9 }}
            iconSource={() => (
              <PlusIcon
                style={{ width: 20, height: 20 }}
                color={Colors.green10}
              />
            )}
            round
            onPress={() => {
              navigator.navigate("List", {
                mealId: meal.id,
                date: dateToString(date),
              });
            }}
          />

          </View>
          
        </View>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  diagramStyle:{
    position: 'absolute',
    top: 50,
    width: screenWidth,
    height: 300,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomThingyStyle: {
    position: 'absolute',
    bottom: 50,
    width: screenWidth,
    height: 110,
    backgroundColor: Colors.green40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  iconFields: {
    flexDirection: "column",
    width: 100,
    height: 36,
    backgroundColor: Colors.grey60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey60,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: 'center',
  }

});