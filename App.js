import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./assets/d2logo2.png")} style={styles.logo} />
        <Text style={styles.title}>D2Helper</Text>
      </View>
      <ImageBackground
        source={require("./assets/preview.webp")}
        style={styles.preview}
        imageStyle={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.content}>
        <ImageBackground
          source={require("./assets/d2logo2.png")}
          style={styles.backgroundElement}
          imageStyle={styles.backgroundImage}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Heroes")}
          >
            <Text style={styles.buttonText}>Герои</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Items")}
          >
            <Text style={styles.buttonText}>Предметы</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Map")}
          >
            <Text style={styles.buttonText}>Карта</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Training")}
          >
            <Text style={styles.buttonText}>Обучение</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={styles.buttonText}>О игре</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const HeroesScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Это страница Героев</Text>
    </View>
  );
};

const ItemsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Это страница Предметов</Text>
    </View>
  );
};

const MapScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Это страница Карты</Text>
    </View>
  );
};

const TrainingScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Это страница Обучения</Text>
    </View>
  );
};

const About = () => {
  return (
    <View style={styles.webViewContainer}>
      <WebView
        source={{ uri: "https://ru.wikipedia.org/wiki/Dota_2" }}
        style={styles.webView}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1e1e1e",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#ffffff",
          },
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Heroes"
          component={HeroesScreen}
          options={{ title: "Герои" }}
        />
        <Stack.Screen
          name="Items"
          component={ItemsScreen}
          options={{ title: "Предметы" }}
        />
        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Карта" }}
        />
        <Stack.Screen
          name="Training"
          component={TrainingScreen}
          options={{ title: "Обучение" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "О игре" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  backgroundElement: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    paddingTop: 30,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 5,
    margin: 10,
    width: Dimensions.get("window").width * 0.8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  preview: {
    width: Dimensions.get("window").width * 1,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  webViewContainer: {
    flex: 1, // Занимает оставшееся пространство
    width: "100%",
  },
  webView: {
    flex: 1, // Растягивается на весь контейнер
  },
});
