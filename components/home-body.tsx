import icons from "@/constants/icons";
import images from "@/constants/images";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function HomeMain() {
  return (
    <View style={styles.mainContent}>
      {/* Batteries to Charge Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Batteries to charge</Text>

        <View style={styles.sectionMidContainer}>
          <Text style={styles.batteryCount}>4</Text>
          <View style={styles.batteryIconContainer}>
            {[...Array(4)].map((_, index) => (
              <Image
                key={index}
                source={icons.battery}
                style={styles.batteryIcon}
              />
            ))}
          </View>
        </View>

        {/* <TouchableOpacity style={styles.sectionSubTitle}> */}
        <Text style={styles.sectionSubTitle}>charge batteries</Text>
        {/* </TouchableOpacity> */}
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Latest Insights Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Latest insights</Text>

        <View style={styles.sectionMidContainer}>
          <TouchableOpacity style={styles.insightsImage}>
            <Image
              source={images.insights}
              style={styles.insightsImageContent}
            />
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.sectionSubTitle}> */}
        <Text style={styles.sectionSubTitle}>view details</Text>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 36,
    backgroundColor: "#0A161D",
  },
  section: {
    backgroundColor: "#0A161D",
    alignItems: "center",
    width: "50%",
    maxHeight: 150,
    paddingTop: 7,
    paddingBottom: 36,
  },
  sectionTitle: {
    color: "#CAA360",
    fontSize: 14,
    marginBottom: 4,
  },
  sectionMidContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  batteryCount: {
    fontSize: 36,
    color: "#fff",
  },
  batteryIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 2,
  },
  batteryIcon: {
    width: 15,
    height: 18,
  },
  divider: {
    width: 1,
    backgroundColor: "#36454F",
    height: "100%",
  },

  insightsImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 8,
  },

  insightsImageContent: {
    width: "100%",
    height: "100%",
  },

  sectionSubTitle: {
    fontSize: 12,
    // marginTop: 12,
    color: "#4E9ACD",
  },
});
