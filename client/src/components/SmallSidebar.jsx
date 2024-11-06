import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { NavLinks } from "../components";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebr } = useDashboardContext();
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebr}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
};

export default SmallSidebar;