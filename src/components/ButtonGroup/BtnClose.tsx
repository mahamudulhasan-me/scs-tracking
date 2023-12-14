import { MdClose } from "react-icons/md";
// import "./BtnCloseStyle.css";

interface CloseBtnProps {
  onClick: () => void;
}
const BtnClose: React.FC<CloseBtnProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="close float-right">
      <button className="noselect">
        <span className="text">Close</span>
        <span className="icon">
          <MdClose size={24} color="#eee" />
        </span>
      </button>
    </div>
  );
};

export default BtnClose;
