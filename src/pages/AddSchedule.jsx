import React from 'react'
import { Agenda, Day, Inject, Month, ScheduleComponent, Week, WorkWeek } from '@syncfusion/ej2-react-schedule'

const AddSchedule = () => {
    
  return (
    <div className='min-h-screen w-screen bg-linear-to-r/srgb from-indigo-500 to-teal-400'>
         <ScheduleComponent currentView='Month' selectedDate={new Date(2025,19,5)}>
        <Inject  services={[Day,Week,WorkWeek,Month,Agenda]} />
        </ScheduleComponent>

    </div>
    
       
       
        
  )
  
}

export default AddSchedule
