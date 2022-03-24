import React, { useState } from "react";

function Text(params) {
  const [text, setText] = useState("");

  const getComment = (e) => {
    const newData = { ...text };
    newData[e.target.name] = e.target.value;
    setText(newData);
    // console.log(newData);
  };
  console.log(text);
  return (
    <div>
      <form className="text-center mt-5">
        <textarea
          type="text"
          name="name"
          cols={50}
          rows={10}
          value={text.value}
          onChange={(e) => getComment(e)}
          style={{ borderColor: "crimson" }}
        ></textarea>
        <h2 className="text-center text-primary">
          <span className="text-danger">You Say:</span>
          {text?.name}
        </h2>
      </form>
    </div>
  );
}

export default Text;
