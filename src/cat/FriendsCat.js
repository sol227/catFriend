import React from "react";

const FriendsCat = ({ item, onDel }) => {
  const { image, name, age, id } = item;

  return (
    <li className="catWrap">
      <img src={image} alt="고양이" />
      <ul className="catItem">
        <li>
          <strong>이름 :</strong> {name}
        </li>
        <li>
          <strong>나이 :</strong> {age}
        </li>
        <li>
          <button onClick={() => onDel(id)}>삭제</button>
        </li>
      </ul>
    </li>
  );
};

export default FriendsCat;
