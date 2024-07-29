import {nav} from '../data/data'

const MobileNav = ({showMobileNav}) => {
   
    return (
        <>
            <div className={`${showMobileNav ? 'min-h-screen' : 'min-h-0'} lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 overflow-hidden transition-all -z-10 h-0`}>
                <ul className='w-full h-full flex flex-col items-center justify-center gap-y-8 duration-200'>
                    {nav?.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a className='text-white hover:text-primary-200 text-body-md transition' href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* buttons */}
                <div className='-mt-32 flex justify-center gap-x-6'>
                    <button className='btn btn-lg text-white hover:text-primary-200 transition'>Log in</button>
                    <button className='btn btn-lg btn-primary'>Sign up</button>
                </div>
            </div>
        </>
    );
};

export default MobileNav;