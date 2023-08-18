import React from "react";
import Button from "./Button";

const buttons = ["All", "Music", "Mixes", "Live", "Dramedy", "Bollywood Music", "Thrillers", "Cricket", "Big Boss", "Gaming", "Indian pop music", "Gadgets", "Cars", "Lessons", "Science", "Recently uploaded", "New to you"]

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll">
      {buttons.map(button => <Button key = {button.id} name={button} />)}
    </div>
  );
};

export default ButtonList;
