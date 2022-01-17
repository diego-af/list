import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const listTab = [
  {
    status: "All",
  },
  {
    status: "Purple",
  },
  {
    status: "Green",
  },
];

const data = [
  {
    name: "Ronaldo",
    status: "Green",
  },
  {
    name: "kaka",
    status: "Purple",
  },
  {
    name: "Rivaldo",
    status: "Green",
  },
  {
    name: "Neymar",
    status: "Purple",
  },
];
const renderItem = ({ item, index }) => {
  return (
    <View key={index} style={styles.itemContainer}>
      <View styles={styles.itemLogo}>
        <Image
          source={{
            uri: "https://static.netshoes.com.br/produtos/camisa-barcelona-juvenil-home-2021-sn-torcedor-nike/86/HZM-3776-186/HZM-3776-186_zoom1.jpg?ts=1594143474",
          }}
          style={styles.itemImage}
        />
      </View>
      <View style={styles.body}>
          <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <View style={[styles.itemStatus,{backgroundColor: item.status === 'Purple' ? "#e58483": '#69c080'}]}>
          <Text >{item.status}</Text>
      </View>
    </View>
  );
};

const App = () => {
  const [status, setStatus] = useState("All");
  const [dataList, setDataList]= useState(data)
  
  const setStatusFilter = (status) => {
    if(status !== 'All'){
      setDataList([...data.filter(e => e.status === status)])
    }else{
      setDataList(data)
    }
    setStatus(status);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((el) => (
          <TouchableOpacity
            style={[styles.btnTab, status === el.status && styles.btnTabActive]}
            onPress={(e) => setStatusFilter(el.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === el.status && styles.textTabActive,
              ]}
            >
              {el.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={dataList}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    marginTop:100
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get("window").width / 3.5,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",

    borderRadius: 10,
  },
  textTab: {
    fontSize: 16,
    color: "#000",
  },
  btnTabActive: {
    backgroundColor: "#E6838D",
  },
  textTabActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    
  },
  itemLogo: {
    padding: 10,
    
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemBody: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  itemStatus:{
    backgroundColor:'green',
    paddingHorizontal:6,
    justifyContent: 'center',
    alignSelf:'center'
    
  }
});
export default App;
