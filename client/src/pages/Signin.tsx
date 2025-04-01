import Auth from '../components/Auth'
import Banner from "../components/Banner";

function Signin() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div><Auth type="signin"/></div>
        <div><Banner/></div>
    </div>
  )
}

export default Signin