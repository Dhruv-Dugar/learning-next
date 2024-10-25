import React from 'react'

function Button({ bg_color, f_color, text }) {
    console.log(bg_color, f_color, text);
  return (
    <div>
      <button style={{backgroundColor: bg_color, color: f_color, minWidth: "30%", minHeight: "30%" }}>
        {text}
      </button>
    </div>
  )
}

export default Button
