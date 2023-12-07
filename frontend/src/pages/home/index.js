import { useRef, useState } from "react";
import Header from "../../components/header";
import useClickOutside from "../../helpers/clickOutside";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import RightHome from "../../components/home/right";
import Stories from "../../components/home/stories";
import SendVerification from "../../components/home/sendVerification";
import CreatePost from "../../components/createPost";
import "./style.css";

export default function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
    console.log("u clicked outside");
  });
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div className="home">
      <Header />
      <LeftHome user={user} />
      <div className="home_middle">
        <Stories />
        {user.verified === false && <SendVerification user={user} />}
        <CreatePost user={user} />
      </div>
      <RightHome user={user} />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}
