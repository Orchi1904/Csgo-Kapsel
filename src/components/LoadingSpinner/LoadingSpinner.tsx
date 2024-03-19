import { BeatLoader } from "react-spinners";
import styles from "./LoadingSpinner.module.css";

type Props = {
  color: string;
};

function LoadingSpinner({ color }: Props) {
  return (
    <div className={styles.loadingSpinner}>
      <BeatLoader color={color} size={18} />
    </div>
  );
}

export default LoadingSpinner;
