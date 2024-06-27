import "./index.css";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function IconButton({
  icon,
  children,
  handleClick,
}: {
  icon: FontAwesomeIconProps["icon"];
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return (
    <button onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className="icon" /> {children}
    </button>
  );
}
