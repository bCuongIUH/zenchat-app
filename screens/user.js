import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const User = () => {
  const nav = useNavigation();
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchIconPress = () => {
    setIsSearching(!isSearching);
  };
  const user = {
    // Thay thế đường dẫn hình ảnh bằng đường dẫn thực của hình ảnh cá nhân
    imageUrl: 'https://res.cloudinary.com/dhpqoqtgx/image/upload/v1709272691/ywgngx6l24nrwylcp2ta.jpg',
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* -------header------- */}
      <View style={styles.searchBarContainer}>
        {isSearching ? (
          <TextInput
            style={styles.searchInput}
            placeholder="Nhập từ khóa tìm kiếm"
            placeholderTextColor="gray"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            focusable={false}
          />
        ) : null}
        <TouchableOpacity onPress={handleSearchIconPress}>
          {isSearching ? (
            <Ionicons style={styles.searchIcon} name="search" size={24} color="black" />
          ) : (
          
            <Ionicons style={styles.searchIcon} name="search" size={24} color="black" />
              
            
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.addFriendButton}>
          <AntDesign name="setting" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------Body---------------------------------------------------- */}
      <View style={styles.body}>
        <View>
        <Image source={{ uri: user.imageUrl }} style={styles.avatar} />


        {/* <TouchableOpacity>
        <FontAwesome name="user" size={40} color="black" />
        </TouchableOpacity> */}
        
        </View>


       
        <TouchableOpacity 
        onPress={()=>nav.navigate('inf')}
        style={styles.option}>
            <Text style={styles.optiontext}>Thông Tin Cá Nhân</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
            <Text style={styles.optiontext}>update Soon</Text>
        </TouchableOpacity> */}
      </View>
      {/* ------------------------------------------------------Body---------------------------------------------------- */}

      {/* ---------------menu bar------------- */}
      <View style={styles.menuView}>
        <TouchableOpacity
          onPress={() => nav.navigate("chatpage")}
          style={styles.menubtn1}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => nav.navigate("friend")}
          style={styles.menubtn1}
        >
         <FontAwesome  onPress={() => nav.navigate("friend")}  name="address-book-o" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons onPress={() => nav.navigate("time")} name="time-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menubtn}>
        <FontAwesome  onPress={() => nav.navigate("user")}  name="user" size={40} color="black" />
          <Text style={styles.mtext}>Cá Nhân</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  // ------------------------------------header------------------------------------------------------------------
  searchBarContainer: {
    flex: 1,
    position: "absolute",
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff8c00",
    padding: 20,
    paddingTop: 55,
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 20,
    marginLeft: 10,
  },
  addFriendButton: {
    marginLeft: "auto",
  },
  addFriendIcon: {
    width: 25,
    height: 25,
  },
  //------------------------------------body------------------------------------
  body: {
    width: "100%",
    marginTop: 50,
    alignContent:'center',
    alignItems:'center'
  },
  avt: {
   
    margin: 20,
    resizeMode: "contain",
    height: 100,
    width: 100,
  },
  avatar: {
    marginTop:20,
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  option:{
    width:"100%",
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    height:40,
    borderBottomWidth:0.5,
    borderTopWidth:0.5,
    margin:2,
  },

  //------------------------------------ menubarr------------------------------------------------
  menuView: {
    flexDirection: "row",
    position: "absolute",
    width: "100%",
    height: 90,
    marginTop: "190%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.4,
    borderColor: "gray",
  },
  menubtn: {
    height: 65,
    width: 100,
    borderColor: "#ff8c00",
    backgroundColor: "#ff8c00",
    borderRadius: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  menuimg: {
    resizeMode: "contain",
    height: 35,
    width: 35,
    margin: 5,
  },
  mtext: {
    fontWeight: "bold",
    color: "white",
  },
  menubtn1: {
    height: 65,
    width: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  menuimg1: {
    resizeMode: "contain",
    height: 35,
    width: 35,
  },
});

export default User;
