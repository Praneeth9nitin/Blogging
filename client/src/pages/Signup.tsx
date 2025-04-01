import Auth from '../components/Auth'
import Banner from "../components/Banner";

function Signup() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div><Auth type="signup"/></div>
        <div><Banner/></div>
    </div>
  )
}

export default Signup