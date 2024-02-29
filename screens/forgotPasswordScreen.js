import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const forgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [step, setStep] = useState(1); // Bước 1: Nhập email, Bước 2: Nhập mã xác nhận và mật khẩu mới

  const handleSendVerificationCode = () => {
    // Ở đây, bạn có thể thực hiện gửi mã xác nhận hoặc liên kết đặt lại mật khẩu đến địa chỉ email
    // Ví dụ: Gửi yêu cầu đặt lại mật khẩu đến server
    // Sau khi gửi thành công, chuyển sang bước 2
    setStep(2);
  };

  const handleResetPassword = () => {
    // Ở đây, bạn có thể thực hiện logic đặt lại mật khẩu
    // Ví dụ: Gửi mã xác nhận và mật khẩu mới đến server để đặt lại mật khẩu
    // Sau khi đặt lại thành công, bạn có thể chuyển người dùng đến màn hình đăng nhập hoặc màn hình khác
    navigation.navigate('Login'); // Chuyển đến màn hình đăng nhập
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quên mật khẩu</Text>
      {step === 1 ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Địa chỉ email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Button color={'#ff8c00'} title="Gửi mã xác nhận" onPress={handleSendVerificationCode} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Mã xác nhận"
            keyboardType="numeric"
            maxLength={6}
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu mới"
            secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu mới"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={(text) => setConfirmNewPassword(text)}
          />
          <Button color={'#ff8c00'} title="Đặt lại mật khẩu" onPress={handleResetPassword} />
        </>
      )}
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  

  },
  btn:{
    color:'#ff8c00',
  },
});

export default forgotPasswordScreen;
