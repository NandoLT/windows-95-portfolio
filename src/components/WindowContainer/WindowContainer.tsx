import { ReactElement } from "react";

import { Modal } from "@react95/core";

interface WindowProps {
  children: ReactElement;
}

const WindowContainer: React.FC<WindowProps> = ({ children }) => {
  return <Modal>{children}</Modal>;
};

export default WindowContainer;
