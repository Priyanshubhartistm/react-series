import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';


function App() {
    const[isLoggedIn, setLoggedIn] = useState(false);

    // 1. if - else
//     if(isLoggedIn) {
//     return (
//     <LogoutBtn />
//     )  
// }
// else {
//     return(
//         <LoginBtn />
//     )
// }

   // 2. Ternary
//     return (
//     <div>
//         {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
//     </div>
// )

    // 3. Logical operator

    // return (
    //     <div>
    //         <h1>Hello Everyone</h1>
    //         <div>
    //             {isLoggedIn && <LogoutBtn />}
    //         </div>
    //     </div>
    // )

    // 4. early

    if(!isLoggedIn) {
        return (
        <LoginBtn />
    )
    }


}

export default App
