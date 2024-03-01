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
const Chatpage = () => {
  const nav = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isActionModalVisible, setActionModalVisible] = useState(false);

  const handleSearchIconPress = () => {
    setIsSearching(!isSearching);
  };

  const handleAddFriendPress = () => {
    setActionModalVisible(true);
  };

  const handleCreateChatPress = () => {
    setActionModalVisible(false);
  };

  const handleModalClose = () => {
    setActionModalVisible(false);
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

        <TouchableOpacity
          onPress={handleAddFriendPress}
          style={styles.addFriendButton}
        >
          <Ionicons name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Modal để hiển thị lựa chọn tính năng chat */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isActionModalVisible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalcontent}>
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={handleCreateChatPress}
            >

            {/* test 1.3 */}
              {/* <Text onPress={()=>nav.navigate("addchat")} style={styles.modalOption}>Tạo cuộc trò chuyện mới</Text>      */}
              <Text  style={styles.modalOption}>Tạo cuộc trò chuyện mới</Text>     
            </TouchableOpacity>     
            <TouchableOpacity
              style={styles.modalbtn}
              onPress={handleModalClose}
            >
              <Text style={styles.modalOption}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* ---------------menu bar------------- */}
      <View style={styles.menuView}>
        
        <TouchableOpacity style={styles.menubtn}>
        <Ionicons name="chatbubble-ellipses-outline" size={40} color="black" />
        <Text style={styles.mtext}>Tin Nhắn</Text>

        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome  onPress={() => nav.navigate("friend")}  name="address-book-o" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
        <Ionicons onPress={() => nav.navigate("time")} name="time-outline" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
        <FontAwesome  onPress={() => nav.navigate("user")}  name="user" size={40} color="black" />
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
  // header------------------------------
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
  // modal------

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalcontent: {
    backgroundColor: "gray",
    height: 220,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalOption: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  modalbtn: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    width: 250,
    backgroundColor: "#ff8c00",
    margin: 5,
  },
  //
  // menubarr------------
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
    width: 90,
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
  mtext1: {
    fontWeight: "bold",
    color: "#ff8c00",
  },
});

export default Chatpage;
