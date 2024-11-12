import icons from "@/constants/icons";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.greetingText}>Good afternoon, Tom</Text>

      <View style={styles.headerRight}>
        <Image source={icons.notification} style={styles.notificationIcon} />

        <View style={styles.starContainer}>
          <Text style={styles.starText}>650</Text>
          <Image source={icons.starFilled} style={styles.starFilled} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  greetingText: {
    fontSize: 18,
    color: "#262D31",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  notificationIcon: {
    tintColor: "#242E39",
  },
  starContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#242E39",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 30,
  },
  starText: {
    color: "#fff",
    fontSize: 14,
  },
  starFilled: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },
});
