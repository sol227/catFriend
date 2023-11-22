import { useState } from "react";

const FriendsAdd = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = () => {
    onAdd(name, age, img);
    setName("");
    setAge("");
    setImg("");
  };

  return (
    <div className="addWrap">
      <p>
        이름 :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        나이 :{" "}
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </p>
      <p>
        사진 :{" "}
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </p>
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};

export default FriendsAdd;
