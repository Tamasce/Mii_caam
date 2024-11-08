'use client'
import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'

import Calendario from './ui/Calendario'







const Prenotazione = () => {
  
  return (
    
    <div className='w-full h-screen bg-neutral-100 pb-10'>
    <div className="w-full mx-auto rounded-md  h-full overflow-hidden bg-neutral-100 flex flex-col items-center justify-center" id='prenotazioni'>
        
          {/*
          <div className='mb-20 flex flex-col w-full relative'>
            <div className='absolute bottom-[3px] border right-0 left-0 border-blue-500 z-100'></div>
          <Label htmlFor="email" className='e-textlabel'>Servizio</Label>
          <DropDownListComponent id='servizio' dataSource={['Extension', 'Laminazione','Ricostruzione', 'Semipermanente','Smontaggio/Sopracciglia/Baffetto']} placeholder='Clicca qui per scegliere il servizio' data-name='Servizio' className='e-field e-dropdownlist' value={null} change={handleServiceChange}
           >
            </DropDownListComponent>
            </div>*/}
         
          <Calendario/>
          
          
          <div>
          
          </div>
          
    </div>
    </div>
     )
}

export default Prenotazione