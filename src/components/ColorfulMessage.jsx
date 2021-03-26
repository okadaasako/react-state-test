import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

// デフォルトすると分割代入しなくてよいが、通常のReactの場合は基本的にコンポーネント全体を出すので直接exportするほうがよい
// export default ColorfulMessage;
