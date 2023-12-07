import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
    console.log("u clicked outside");
  });
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div>
      <Header />
      <LeftHome user={user} />
      <RightHome user={user} />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}
