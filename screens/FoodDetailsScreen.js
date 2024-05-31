// Libraries
import { addDatabaseChangeListener, useSQLiteContext } from "expo-sqlite/next";
import { Dimensions } from "react-native";
import { useEffect, useState } from "react";
import {
  Button,
  Colors,
  GridView,
  NumberInput,
  Picker,
  Text,
  View,
} from "react-native-ui-lib";

// Queries
import getNutriTablesQuery from "../queries/getNutriTables";

// Components
import DeleteFoodDialog from "../components/DeleteFoodDialog";

// Icons
import GaugeIcon from "../components/icons/GaugeIcon";
import RulerVerticalIcon from "../components/icons/RulerVerticalIcon";
import EditIcon from "../components/icons/EditIcon";
import TrashIcon from "../components/icons/TrashIcon";

export default function FoodDetailsScreen({ navigation, route }) {
  // Retrieving the database.
  const database = useSQLiteContext();

  // Retrieving the screen's width.
  const screenWidth = Dimensions.get("window").width;

  // Getting all the nutritional tables for the currently selected food.
  const nutritionalTables = database.getAllSync(getNutriTablesQuery, {
    $food_id: route.params.food.id,
  });

  // Creating stateful variables for the measurement unit and the quantity and
  // setting their initial values to those of the food's first nutritional table.
  const [selectedUnit, setSelectedUnit] = useState(nutritionalTables[0].unit);
  const [quantity, setQuantity] = useState(nutritionalTables[0].baseMeasure);

  // Function to retrieve the nutritional table that uses the correct measurement unit.
  function getNutriTable(unit) {
    return nutritionalTables.filter((nutriTable) => {
      return nutriTable.unit === unit;
    })[0];
  }

  // Creating a stateful variable for the current nutritional table and setting
  // its initial value to the one that uses the currently selected measurement unit.
  const [nutritionalTable, setNutritionalTable] = useState(
    getNutriTable(selectedUnit)
  );

  // Creating a key to manually re-render the <InputNumber/> component.
  const [inputKey, setInputKey] = useState(Date.now());

  // Hook to automatically update the currently selected nutritional table as soon
  // as the currently selected measurement unit is changes.
  useEffect(() => {
    setNutritionalTable(getNutriTable(selectedUnit));
    // Resetting the quantity (in order to trigger the update of the displayed macronutrients
    // in accordance to the newly selected nutritional table's base measure).
    setQuantity(nutritionalTable.baseMeasure);
    // Forcing the re-render of the <InputNumber/> component.
    setInputKey(Date.now());
  }, [selectedUnit]);

  // Function to calculate the quantities fo each macronutrient in the food
  // according to its currently informed portion.
  function calculateProportion(number) {
    return (number / nutritionalTable.baseMeasure) * quantity;
  }

  // Object to hold all the details of the currently informed food portion.
  const portionDetails = {
    calories: calculateProportion(nutritionalTable.calories),
    carbs: calculateProportion(nutritionalTable.carbs),
    fats: calculateProportion(nutritionalTable.fats),
    protein: calculateProportion(nutritionalTable.protein),
  };

  const [showDeleteDialogue, setShowDeleteDialogue] = useState(false);

  // console.log(nutritionalTable);

  return (
    <>
      <DeleteFoodDialog
        navigation={navigation}
        food={{
          id: nutritionalTable.foodId,
          name: nutritionalTable.foodName,
        }}
        nutritionalTable={nutritionalTable}
        visible={showDeleteDialogue}
        setVisible={setShowDeleteDialogue}
      />
      <View>
        <Text text30 style={{ marginLeft: 16, marginVertical: 20 }}>
          {nutritionalTable.foodName}
        </Text>
        {/* Field that changes the amount of food */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            marginLeft: 16,
          }}
        >
          <View width={24} height={24}>
            <GaugeIcon />
          </View>
          <NumberInput
            key={inputKey}
            initialNumber={quantity}
            onChangeNumber={(numberInput) => {
              setQuantity(numberInput.number);
            }}
            containerStyle={{
              width: screenWidth - 64,
              height: 36,
              backgroundColor: Colors.grey60,
              borderRadius: 5,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          />
        </View>
        {/* Field that changes the currently selected measurement unit */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            marginTop: 12,
            marginLeft: 16,
          }}
        >
          <View width={24} height={24}>
            <RulerVerticalIcon />
          </View>
          <Picker
            value={selectedUnit}
            onChange={(element) => {
              setSelectedUnit(element);
            }}
            style={{
              width: screenWidth - 64,
              height: 36,
              backgroundColor: Colors.grey60,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
          >
            {nutritionalTables.map((nutritionalTable) => (
              <Picker.Item
                key={nutritionalTable.unit}
                value={nutritionalTable.unit}
                label={nutritionalTable.unit}
              />
            ))}
          </Picker>
        </View>
        {/* Macronutrients grid */}
        <GridView
          numColumns={2}
          items={[
            {
              title: "Calories",
              value: portionDetails.calories,
              macro: false,
            },
            {
              title: "Carbohydrates",
              value: portionDetails.carbs,
              macro: true,
            },
            {
              title: "Fats",
              value: portionDetails.fats,
              macro: true,
            },
            {
              title: "Protein",
              value: portionDetails.protein,
              macro: true,
            },
          ]}
          renderCustomItem={({ title, value, macro }) => {
            return (
              <View
                key={title}
                style={{
                  width: screenWidth / 2 - 15, // Adjust the width for padding/margin
                  padding: 10,
                  justifyContent: "center",
                  backgroundColor: Colors.grey50,
                  borderRadius: 5,
                  marginLeft: 10,
                  marginTop: 10,
                  alignItems: "center",
                }}
              >
                <Text text70>{title}</Text>
                <Text text70BL>
                  {value}
                  {macro && "g"}
                </Text>
              </View>
            );
          }}
        />
        {/* Delete and edit buttons */}
        <View
          style={{
            flexDirection: "row",
            width: screenWidth,
            marginTop: 20,
          }}
        >
          {/* Delete button */}
          <Button
            label="Delete"
            iconSource={() => {
              return (
                <View width={20} height={20} style={{ marginRight: 6 }}>
                  <TrashIcon color={Colors.white} />
                </View>
              );
            }}
            style={{
              width: screenWidth / 2 - 15,
              padding: 6,
              borderRadius: 10,
              backgroundColor: Colors.red20,
              marginHorizontal: 10,
            }}
            onPress={() => {
              // console.log("delete!");
              setShowDeleteDialogue(true);
              // navigation.navigate("List");
            }}
          />
          {/* Edit button */}
          <Button
            label="Edit"
            iconSource={() => {
              return (
                <View width={20} height={20} style={{ marginRight: 6 }}>
                  <EditIcon color={Colors.white} />
                </View>
              );
            }}
            style={{
              width: screenWidth / 2 - 15,
              padding: 6,
              borderRadius: 10,
              backgroundColor: Colors.yellow10,
            }}
            onPress={() => {
              // console.log("edit!");
              // navigation.navigate("List");
            }}
          />
        </View>
      </View>
    </>
  );
}
