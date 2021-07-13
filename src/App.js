import React, { useState } from "react";
import { IonButton , IonToast, useIonToast} from "@ionic/react";
import InformationSociety from './components/playground/InformationSociety';
import CBHHeader from './components/CBHHeader';
import CBHMain from './components/CBHMain';
function App() {
  // const handleClick = () => {
  //   console.log("Clicked!");
  // };
  // var [showToast1,showToast2] = useState(true);
  // const [dismiss, present] = useIonToast();
  //console.log(dismiss);
  // console.log(present);
  
  return (
    <div>
      <CBHHeader />
      <CBHMain>
        {/* <IonButton onClick={() => {
          present(Button="Dismiss", Text="New use")
          handleClick();
        } }>Begin</IonButton>
      <IonToast 
        buttons="Dismiss!"
        isOpen={showToast1}message="New user has been joined."
        duration={200}
        /> */}
      </CBHMain>
    </div>
  );
}

export default App;
