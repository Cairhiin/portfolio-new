import "./index.css";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export default function IconButton({
  type = "button",
  icon,
  disabled,
  isSpinner = false,
  children,
  handleClick,
}: {
  type?: "button" | "submit" | "reset";
  icon: FontAwesomeIconProps["icon"];
  disabled: boolean;
  isSpinner?: boolean;
  children: React.ReactNode;
  handleClick?: () => void;
}) {
  return (
    <button onClick={handleClick} type={type} disabled={disabled}>
      <FontAwesomeIcon
        icon={icon}
        className={isSpinner ? "icon spinner" : "icon"}
      />
      {children}
    </button>
  );
}
