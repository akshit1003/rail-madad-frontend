import React from 'react';
import Button from './Button';
// import Train from './assets/train.svg';
// import IRCTCLogo from './assets/irctc-rail-connect.svg';
import circle from '../assets/circle.svg';
import person from '../assets/persons.svg';
import logos from '../assets/logos.svg';

function Header() {
    return (
        <header className='w-[100vw] h-[40rem] p-4'>
            <img src={circle} alt="" className='h-[30rem] w-[30rem] absolute right-[0px] top-[0px]' />
            <img src={person} alt="" className='h-[40rem] w-[40rem] absolute right-[100px] -top-[80px]' />
            <img src={logos} alt="" className='h-[80rem] w-[80rem] absolute left-[300px] -top-[80px]' />
            <h1 className='text-left'>Railway enquiry</h1>
            <p className='text-left'>An online platform that allows railway passengers in India to register their complaints and seek assistance related to various railway services.</p>
            <div className="buttons mt-[100px]">
                <Button text="Add complaint" color="#65e4a3" />
                <Button text="More info" color="#1169fe" />
            </div>
            {/* <img src={Train} alt="Train" /> */}
            {/* <img src={IRCTCLogo} alt="IRCTC Logo" /> */}
        </header>
    );
}

export default Header;
