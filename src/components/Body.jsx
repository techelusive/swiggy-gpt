import OnlineRes from "./OnlineRes";
import TopRes from "./TopRes";
import Footer from "./Footer";
import MindGrid from "./MindGrid";
import WhatsAppButton from "./WhatsappButton";

const Body = () => {

  return  (
    <div className="body">
      <MindGrid />
      <TopRes />
      <OnlineRes />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Body;
