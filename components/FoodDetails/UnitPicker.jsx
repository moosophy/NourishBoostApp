import { NumberInput, Picker, View } from "react-native-ui-lib";

import RulerVerticalIcon from "../icons/RulerVerticalIcon";

import styles from "../../styles/styles";

export default function UnitPicker({ pickerKey, value, onChange, options }) {
  return (
    <View style={styles.foodDetailsScreen.fieldViewStyle}>
      <View>
        <RulerVerticalIcon width={24} height={24} />
      </View>
      <Picker
        key={pickerKey}
        value={value}
        onChange={onChange}
        style={styles.foodDetailsScreen.inputFieldStyle}
      >
        {options.map((unit) => (
          <Picker.Item key={unit.id} value={unit.id} label={unit.symbol} />
        ))}
      </Picker>
    </View>
  );
}
