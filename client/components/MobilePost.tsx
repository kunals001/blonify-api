import React from 'react'
import Head from './headingscom'
import Input from './InputPost'

const MobilePost = () => {
  return (
    <div className='w-full '>

        {/* Network */}
       <Head text={"Network"} />
        <div className="flex flex-col gap-2">
            <Input name={"technology"} type={"text"} placeholder={"Technology"} />
            <Input name={"towbands"} type={"text"} placeholder={"Towbands"} />
            <Input name={"threebands"} type={"text"} placeholder={"Threebands"} />
            <Input name={"fourbands"} type={"text"} placeholder={"Fourbands"} />
            <Input name={"fivebands"} type={"text"} placeholder={"Fivebands"} />
            <Input name={"speed"} type={"text"} placeholder={"Speed"} />
        </div>
    </div>
  )
}

export default MobilePost