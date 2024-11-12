import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HomeHeader from "../../components/home-header";
import HomeMain from "../../components/home-body";

import images from "@/constants/images";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F9DDD9", "#F9E7B3"]}
        start={{ x: 0.3, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        {/* Header */}
        <HomeHeader />

        {/* Mountain Background */}
        <Image source={images.mountain} style={styles.mountainImage} />
      </LinearGradient>

      {/* Main Content */}
      <HomeMain />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10141E",
  },
  gradientBackground: {
    paddingBottom: 80,
  },

  mountainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
