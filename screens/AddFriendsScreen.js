import React, { useState } from 'react';

const AddFriendsScreen = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddFriend = () => {
    // Xử lý thêm bạn bè qua địa chỉ email
    console.log(`Thêm bạn bè: ${email}`);
    // Có thể gửi yêu cầu API, xử lý trạng thái, vv. ở đây
  };

  const handleShowContacts = () => {
    // Xử lý hiển thị danh sách bạn bè từ danh bạ
    console.log('Hiển thị danh sách bạn bè từ danh bạ');
    // Có thể chuyển hướng đến trang danh sách bạn bè, hiển thị modal, vv. ở đây
  };

  return (
    <div>
      <h2>Thêm bạn bè</h2>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleAddFriend}>Thêm bạn bè</button>
      <button onClick={handleShowContacts}>Danh sách bạn bè trong danh bạ</button>
    </div>
  );
};

export default AddFriendsScreen;
