import { Link } from 'react-router-dom'
// import logoImg from '../../assets/images/logo.png'
const Logo = () => {
  return (
    <Link className='w-11 h-11 rounded-lg bg-black flex justify-center items-center' to='/'>
      <div className='h-3 w-3 bg-white rounded-full'></div>
      {/* <img
        className='hidden md:block'
        src={logoImg}
        src=''
        alt='logo'
        width='100'
        height='100'
      /> */}
    </Link>
  )
}

export default Logo
