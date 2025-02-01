import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc="https://th.bing.com/th/id/R.be080585c0da64067404b23530a814ce?rik=vjGDbB2xFyn9Sw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f318375-nature-landscape-lake-mountain-forest-wildflowers-spring-pine_trees-path-Switzerland-HDR.jpg&ehk=W21nAe%2fQYSWkLQF83VxX2RflaJ7eKm%2fm0J4pW85PpjU%3d&risl=&pid=ImgRaw&r=0"
          imgAlt="Landscape"
          title="Landscape"
          description="Mountains, valleys, lakes, and meadows together create breathtaking landscapes that inspire awe. Landscapes can be natural or designed by humans, like gardens, parks, and cityscapes. The beauty of a landscape lies in its harmony between land, water, and sky."
          buttonText="Learn More"
          link="card1"
        />
        
      </div>
      
       
      
    </div>
  );
}

export default App;