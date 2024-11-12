import { View, StyleSheet, Text, Image } from "react-native";
import icons from "@/constants/icons";
import images from "@/constants/images";

function BatteryProgress() {
  return (
    <View style={styles.batteryContainer}>
      <View style={{ padding: 8, marginRight: 4 }}>
        <View style={styles.iconContainer}>
          <Image source={icons.smiley} style={styles.smiley} />

          <Text style={styles.batteryText}>Mood check-in</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
      <Image source={images.moodBattery} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  batteryContainer: {
    position: "relative",
    padding: 10,
    borderBlockColor:'red',
    borderWidth:2
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },

  icon: {
    position: "absolute",
  },
  smiley: {
    width: 24,
    height: 24,
  },

  batteryText: {
    color: "#DADADA",
    fontSize: 12,
    marginBottom: 4,
    zIndex: 999,
  },
  progressContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "#2C2F36",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    width: "75%", // Set this to control the fill level, e.g., 75% full
    height: "100%",
    backgroundColor: "#00FF00", // Green color for progress
  },
});

export default BatteryProgress;
