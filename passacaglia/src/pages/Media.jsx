import Banner_podstrona from "../components/Banner_podstrona";
import Logo_web from "../components/Logo_web";
import Menu_Web from "../components/Menu_web";
import mediaImg from "../Pictures/banner1.jpg";
import "../Css/Media.css";
const Media = () => {
  return (
    <div>
      <Logo_web />
      <Menu_Web />
      <Banner_podstrona
        image={mediaImg}
        style={{ backgroundPosition: `center 875px` }}
      />
    </div>
  );
};
export default Media;
