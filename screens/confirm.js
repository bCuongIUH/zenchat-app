import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';




//màn hình xác nhận địa chỉ email chưa xong đang trong quá trình tìm hiểu -.-
const confirm = () => {
  const [verificationCode, setVerificationCode] = useState('');
  
  const handleVerificationCodeChange = (code) => {
    setVerificationCode(code);
  };

  const handleVerifyEmail = () => {
    // Ở đây, bạn có thể thực hiện logic kiểm tra mã xác nhận với server hoặc cơ sở dữ liệu
    // Nếu mã xác nhận đúng, bạn có thể chuyển người dùng đến màn hình tiếp theo hoặc thực hiện các hành động khác.
    // Nếu mã xác nhận không đúng, bạn có thể hiển thị một thông báo lỗi.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Xác nhận địa chỉ email</Text>
      <Text style={styles.subtitle}>
        Vui lòng nhập mã xác nhận đã được gửi đến địa chỉ email của bạn.
      </Text>
      <View style={styles.codeContainer}>
        <TextInput
          style={styles.codeInput}
          keyboardType="Email"
          maxLength={6}
          value={verificationCode}
          onChangeText={handleVerificationCodeChange}
        />
      </View>
      <Button title="Xác nhận" onPress={handleVerifyEmail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    width: 50,
  },
});

export default confirm;
