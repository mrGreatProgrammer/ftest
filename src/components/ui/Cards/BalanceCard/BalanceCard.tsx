import { Button } from 'antd';
import React from 'react'

interface BalanceCardProps {
    menu: {title: string; count: number}[]
}

const BalanceCard:React.FC<BalanceCardProps> = ({menu}) => {
  return (
    <div className='border border-[#7362BC] rounded-3xl text-[#323854] w-[344px] h-[372px] pt-7 pb-7 pl-7 pr-2' >
        <h3 className='text-2xl' >Баланс занятий</h3>
        <ul className='h-[200px] overflow-y-auto balance_card-menu' >
            {menu.map(e=><li className='flex flex-row justify-between items-center border-b py-5' >
                <span className='text-base' >{e.title}</span><span className='text-xl flex items-center justify-center rounded-full w-10 h-10 bg-[#EEEEFF]' >{e.count}</span>
            </li>)}
        </ul>
        <button className='bg-[#DECFFF] w-[288px] duration-300 hover:bg-primary h-10 rounded-full mt-9' >Button</button>
    </div>
  )
}

export default BalanceCard