import Topnav from "./components/Topnav/Topnav";
import Leftnav from "./components/Leftnav/Leftnav";
import Rightnav from "./components/Rightnav/Rightnav";
import Profiles from "./components/Profiles/Profiles";
import { CardData } from "./data/card"
import Content from "./components/Content/Content";
import Trending from "./components/Trending/Trending";
import Channels from "./components/Channels/Channals";
import Card from "./components/Card";
import Groups from "./components/Groups/Groups";
import Catigories from "./components/Catigories/Catigories";
import Comment from "./components/Comment/Comment";


function App() {
  console.log('card data ', CardData);
  return (
    <div className="App bg-gray-50">
        <Topnav />
        <div className="flex justify-between">
          <Leftnav />
          <div className="space-y-4"> 
            <Profiles />
            <div className="flex space-x-5">
              <div>
                {CardData.map((card, i) => 
                  
                <Card key={i} card={card} />
                )}
              </div>
              <div className="space-y-2">
                <Content />
                <Trending />
                <Channels />
                <Groups />
              </div>
            </div>
            <Catigories />
            <Comment />
          </div>
          <Rightnav />
        </div>
    </div>
  );
}

export default App;
