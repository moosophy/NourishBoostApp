// External dependencies
import { useState } from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  Colors,
  ExpandableSection,
  Button,
} from "react-native-ui-lib";

// Components
import Entry from "./Entry";
import RotatingCaret from "./RotatingCaret";
import PlusIcon from "./icons/PlusIcon";
import { useNavigation } from "@react-navigation/native";
import dateToString from "../functions/dateToString";
import { useSQLiteContext } from "expo-sqlite";

export default function MealDrawer({ meal, date, entries }) {
  // Extracting the device's dimensions.
  const screenWidth = Dimensions.get("window").width;

  const database = useSQLiteContext();

  const navigator = useNavigation();

  // Setting up a state to handle the expandable section's expansion.
  const [expanded, setExpanded] = useState(false);

  const kcals = entries.reduce((acc, val) => acc + val.kcals, 0);

  return (
    <>
      <ExpandableSection
        expanded={expanded}
        sectionHeader={
          // Expandable Section Header
          <View
            centerH
            centerV
            row
            spread
            style={{
              width: screenWidth * 0.8,
              height: "auto",
              backgroundColor: Colors.white,
              padding: 15,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: expanded ? 0 : 10,
              borderBottomRightRadius: expanded ? 0 : 10,
            }}
          >
            {kcals !== 0 ? (
              <View
                style={{
                  backgroundColor: Colors.green70,
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 100,
                }}
              >
                <Text tec green10>
                  {kcals}
                </Text>
              </View>
            ) : (
              <View />
            )}

            <Text grey10 text70>
              {meal.name}
            </Text>
            <RotatingCaret rotated={expanded} />
          </View>
        }
        onPress={() => setExpanded(!expanded)}
      >
        {/* Expandable Section Body */}
        <View
          centerH
          style={{
            gap: 8,
            backgroundColor: Colors.grey80,
            paddingVertical: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          {entries.map((entry) => {
            return <Entry key={entry.id} entry={entry} />;
          })}

          <Button
            backgroundColor={Colors.green70}
            style={{ padding: 9 }}
            iconSource={() => (
              <PlusIcon
                style={{ width: 16, height: 16 }}
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
      </ExpandableSection>
    </>
  );
}
