import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';


// class MyCalendar extends React.Component {
  
// //   formatEvents() {
// //     return this.props.plan.map(plan => {
// //               const {name, end, start} = plan
  
// //               let startTime = new Date(start)
// //               let endTime = new Date(end)
  
// //               return {
// //                 name, 
// //                 start: startTime,
// //                 end: endTime, 
// //                 extendedProps: {...plan}
// //               }
// //           })
// //   }

// //   handleEventClick= ({event}) => {
// //     // openPlan is a function I wrote to open a form to edit that plan
// //     this.props.openPlan(event.extendedProps)
// // }

// // handleEventDrop = (info) => {
// //         if(window.confirm("Are you sure you want to change the event date?")){
// //             console.log('change confirmed')

// //             // updatePlan is another custom method
// //             this.props.updatePlan({...info.event.extendedProps, start: info.event.start, end: info.event.end})

// //         } else {
// //             console.log('change aborted')
// //         }
// //    }
//   render() {
//     return (
// <div className="maincontainer">
//       <FullCalendar
//         plugins={[ dayGridPlugin, interactionPlugin, listPlugin ]}
//         initialView="dayGridMonth"
//         headerToolbar={{
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
//         }}
//         // editable={true}
//         // eventDrop={this.handleEventDrop}
//         // eventClick={this.handleEventClick}
//         // events={this.formatEvents()}
        
//       />
// </div>
// )
// };
// }

// export default MyCalendar;



export default function MyCalendar() {

  const[user, setUser] = useState({});
  const[plan, setPlan] = useState({});
  

  useEffect(()=> {
    let token = localStorage.getItem("token")
    if(token !=null){
      let user = jwt_decode(token)

      if(user){
        setUser(user)
        console.log(user.user.id)
        getPlanbyUserId(user.user.id)
      }
      else if(!user){
        localStorage.removeItem("token")
      }
    }

  }, []);

  const getPlanbyUserId = (id) => {
    console.log(id)
    Axios.get(`plan/getPlan?id=${id}`)
    .then(res => {
        console.log(res.data)
        setPlan(res.data)
      })
    .catch(err => {
        console.log(err)
      })

  }

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
}

