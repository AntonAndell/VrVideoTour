
import './App.css';
import {Player} from "./player";
const url1 = "https://images.unsplash.com/photo-1529671241112-2c70ebef934d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80"
const url2 = "https://images.unsplash.com/photo-1608597003974-cf3c77af0687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
const url3 = "https://images.unsplash.com/photo-1468235786671-7d0c7b22c605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
const url4 = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
function App() {
  return (
    <div class="imageContainer">
    <Player embedId="M7lc1UVf-VE" imgURL={url1} Title="Segling i solnedgågnen" Location="Vättern"/>
    <Player embedId="M7lc1UVf-VE" imgURL={url2} Title="Magiska bokskogen" Location="Bondberget"/>
    <Player embedId="M7lc1UVf-VE" imgURL={url3} Title="Bubbelskoj" Location="Stadsparken"/>
    <Player embedId="M7lc1UVf-VE" imgURL={url4} Title="Morgonpromenad" Location="Vätterstranden"/>

    </div>
    )
  
}
/*<div class="imageContainer">
<img src={url1}  width="720" height="400"/>
<button class="imageButton" width="100px">TA MIG DIT</button>
</div>*/
export default App;
