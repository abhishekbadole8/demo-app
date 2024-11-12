import { View, StyleSheet, Image, Button, Pressable, Text } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import BatteryProgress from "@/components/batteryProgress";

const Mood = () => {
  const handleSubmit = () => {
    console.log("clicked");
  };
  return (
    <View style={styles.moodContainer}>
      <Image source={images.multiMoodLog} />

      <View style={styles.section}>
        {/* Context */}
        <View style={styles.contextContainer}>
          <Text style={styles.title}>Great job logging again today!</Text>

          <Text style={styles.subTitle}>
            While personalized hypotheses and suggestions are currently shared
            just once per day,
            <Text style={{ color: "#CAA360" }}>
              {" "}
              each mood log helps refine your profile
            </Text>{" "}
            for even more tailored insights in the future.
          </Text>

          <Text style={styles.moodTitle}>
            Consider your ‘Mood check-in’ battery boosted!
          </Text>
        </View>

        {/* Battery */}
        {/* <View style={styles.batteryImage}>
          <Image source={images.moodBattery} style={styles.batteryImage} />

          <View style={styles.moodBatteryContext}>
            <Image source={icons.smiley} style={styles.smileyIcon} />
          </View>
        </View> */}
        <BatteryProgress />
      </View>

      {/* Continue Button */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodContainer: {
    flex: 1,
    backgroundColor: "#10141E",
  },

  section: {
    paddingHorizontal: 12,
  },

  contextContainer: {
    padding: 12,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    marginBottom: 32,
  },
  title: {
    color: "#DADADA",
    fontSize: 20,
    textAlign: "center",
  },
  subTitle: {
    color: "#DADADA",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  moodTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 27,
    textAlign: "center",
    marginHorizontal: 8,
  },

  batteryImage: {},
  moodBatteryContext: {
    padding: 8,
  },

  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4E9ACD",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: "auto",
  },
  buttonText: {
    color: "#111C23",
    fontSize: 18,
  },
});

export default Mood;
