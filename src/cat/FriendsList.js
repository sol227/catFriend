import React from "react";
import FriendsCat from "./FriendsCat";

const FriendsList = ({ data, onDel, onAlldel, onMod }) => {
  return (
    <>
      <ul>
        {data.map((item) => (
          <FriendsCat key={item.id} item={item} onDel={onDel} />
        ))}
        <li className="btnWrap">
          <button onClick={() => onAlldel()}>모두 삭제</button>
          <button onClick={() => onMod()}>초기 복구</button>
        </li>
      </ul>
    </>
  );
};

export default FriendsList;
