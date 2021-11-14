import { useState, useEffect } from "react";

function Modal(props, children, header) {
  const [isOpen, setIsOpen] = useState(false);

  const isThereData = data.length > 0;

  return (
    <div class="my-modal">
      <div class="">{header}</div>
      {children}
    </div>
  );
}

export default Counter;
