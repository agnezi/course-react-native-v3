import {
  Alert,
  PixelRatio,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  function handleDelete() {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good!",
      [
        {
          text: "Yes",
          onPress: () => console.log("Ok, deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancelling"),
        },
      ],
    );
    console.log(PixelRatio.get());
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Coffee</Text>
          {/* <Pressable onPress={() => console.log("Pressed")}>
          <Text>Delete</Text>
        </Pressable> */}
          <TouchableOpacity
            onPress={handleDelete}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.cerulean,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  button: {
    backgroundColor: theme.colors.black,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
