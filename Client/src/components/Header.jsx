/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar} from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar className='border-b-2'>
        <Link to='/' className='text-wrap'>
        
        </Link>
      </Navbar>
    </>
  )
}

export default Header;