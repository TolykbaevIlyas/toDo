'use client'
import { AddTask } from '@/features/addTaskToServer'
import { GetTask } from '@/features/getTaskFromServer'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const[cardList, setCardList] = useState([
    {id:1, order:3, text: 'CARD 3'},
    {id:2, order:1, text: 'CARD 1'},
    {id:3, order:2, text: 'CARD 2'},
    {id:4, order:4, text: 'CARD 4'},
  ])

  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(e,card){
    setCurrentCard(card)
  }

  function dragLeaveHandler(e){
    e.target.style.background = 'white'
  }

  function dragEndHandler(e){
    e.target.style.background = 'white'
  }

  function dragOverHandler(e){
    e.preventDefault()
    e.target.style.background = 'lightgray'
    
  }

  function dropHandler(e,card){
    e.preventDefault()
    setCardList(cardList.map(c=>{
      if(c.id === card.id){
        return {...c, order: currentCard.order}
      }
      if(c.id === currentCard.id){
        return {...c, order: card.order}
      }
      return c
    }))
    e.target.style.background = 'white'
  }
  
  const sortCard = (a,b) => {
     if(a.order > b.order){
      return 1
     }else{
      return -1
     }
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <AddTask/>
      <GetTask/>
      {cardList.sort(sortCard).map(card => 
      <div 
        key={card.id}
        onDragStart={(e)=> dragStartHandler(e,card)}
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e)}
        onDrop={(e)=> dropHandler(e,card)}
        className='w-52 h-72 rounded-xl border-2 border-black flex items-center justify-center m-5 cursor-grab'
        draggable={true}>
        {card.text}
      </div>)}
    </div>
  )
}
