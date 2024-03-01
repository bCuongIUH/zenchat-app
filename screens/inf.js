// UserProfile.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const User = () => {
  // Thông tin cá nhân (đây chỉ là mẫu, bạn cần thay thế bằng dữ liệu thực)
  const user = {
    name: 'Bạch Cường',
    phoneNumber: '0123456789',
    email: 'bachcuong27@gmail.com',
    address: '108 Nguyễn Thượng Hiên',
    // Thay thế đường dẫn hình ảnh bằng đường dẫn thực của hình ảnh cá nhân
    imageUrl: 'https://res.cloudinary.com/dhpqoqtgx/image/upload/v1709272691/ywgngx6l24nrwylcp2ta.jpg',
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.imageUrl }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.info}>{`Phone: ${user.phoneNumber}`}</Text>
      <Text style={styles.info}>{`Email: ${user.email}`}</Text>
      <Text style={styles.info}>{`Địa chỉ: ${user.address}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default User;
