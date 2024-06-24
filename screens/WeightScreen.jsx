// External dependencies
import React, { useState } from "react";
import {Dimensions, StyleSheet } from "react-native";
import { Button, Colors, NumberInput, Picker, Text, TouchableOpacity, View } from "react-native-ui-lib";
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Components
import CalendarDayIcon from "../components/icons/CalendarDayIcon";
import tweakStyles from "../functions/tweakStyles";



  const screenWidth = Dimensions.get("window").width;


export default function WeightScreen() {

  const [weightMeasure, setWeightMeasure] = useState(0);
  const [measureValidity, setMeasureValidity] = useState(false);
  const [showMeasureAlert, setShowMeasureAlert] = useState(false);
  const [startValidating, setStartValidating] = useState(false);



  // Retrieving the device's dimensions


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
        <View style={styles.upperHalf}>
          <Text text60L>
              [Diagram]
          </Text>
        </View>

        <View style={{    
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,}}>
          <View style={styles.greenRectangle}>

            <View style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: 15,
              }}>
              <NumberInput
                initialNumber={weightMeasure}
                onChangeNumber={(numberInput) => {
                  const number = numberInput.number;
                  setWeightMeasure(number);
                  const validity = number > 0;
                  setMeasureValidity(validity);
                }}
                containerStyle={tweakStyles(styles.iconFields, {
                  borderColor:
                    startValidating && !measureValidity
                      ? Colors.green30
                      : Colors.grey60,
                })}
              />
              {/* Field that changes the currently selected measurement unit */}
              <View>
                <Picker
                  value={"unit"}
                  onChange={(element) => {
                    setUnit(element);
                  }}
                  style={styles.iconFields}
                >
                </Picker>
              </View>
            </View>
            <Button
            backgroundColor={Colors.green70}
            style={{ padding: 9}}
            iconSource={() => (
              <Text text60L>
                Weight!
              </Text>
            )}
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
  upperHalf:{
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: 'white',
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenRectangle: {
    backgroundColor: Colors.green30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    gap:10
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