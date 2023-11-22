import { useState } from "react";
import FriendsList from "./FriendsList";
import FriendsAdd from "./FriendsAdd";
import catData from "../assets/DB/catData";
import "../assets/style/FriendsStyle.css";

const Friends = () => {
  const [data, setData] = useState(catData);
  const [isToggle, setIsToggle] = useState(false);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };
  // 모두 삭제
  const onAlldel = () => {
    setData([]);
  };
  // 복구
  const onMod = () => {
    setData(catData);
  };
  // 고양이 추가
  const onChk = (e) => {
    const { checked } = e.target;
    setIsToggle(checked);
  };

  // 추가
  const onAdd = (name, age, img) => {
    if (name === "" || age === "" || img === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    setData([...data, { id: data.length + 1, name, age, img }]);
  };

  return (
    <div className="container">
      <h2>고양이 친구들 {data.length}마리</h2>
      <label htmlFor="chk" className="chkBox">
        <input type="checkbox" id="chk" onChange={onChk} /> 고양이 추가
      </label>
      <FriendsList
        data={data}
        onDel={onDel}
        onAlldel={onAlldel}
        onMod={onMod}
      />
      {isToggle && <FriendsAdd onAdd={onAdd} />}
    </div>
  );
};

export default Friends;
