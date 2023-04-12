import React from 'react';
//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import listPlugin from '@fullcalendar/list'; //For List View
class MyCalendar extends React.Component {
  
//   formatEvents() {
//     return this.props.plan.map(plan => {
//               const {name, end, start} = plan
  
//               let startTime = new Date(start)
//               let endTime = new Date(end)
  
//               return {
//                 name, 
//                 start: startTime,
//                 end: endTime, 
//                 extendedProps: {...plan}
//               }
//           })
//   }

//   handleEventClick= ({event}) => {
//     // openPlan is a function I wrote to open a form to edit that plan
//     this.props.openPlan(event.extendedProps)
// }

// handleEventDrop = (info) => {
//         if(window.confirm("Are you sure you want to change the event date?")){
//             console.log('change confirmed')

//             // updatePlan is another custom method
//             this.props.updatePlan({...info.event.extendedProps, start: info.event.start, end: info.event.end})

//         } else {
//             console.log('change aborted')
//         }
//    }
  render() {
    return (
<div className="maincontainer">
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
        }}
        // editable={true}
        // eventDrop={this.handleEventDrop}
        // eventClick={this.handleEventClick}
        // events={this.formatEvents()}
        
      />
</div>
)
};
}
export default MyCalendar;