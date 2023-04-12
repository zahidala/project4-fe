import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

class MyCalendar extends React.Component {
  formatEvents() {
    return this.props.plan.map(plan => {
      const { name, end, start } = plan;

      let startTime = new Date(start);
      let endTime = new Date(end);

      return {
        name,
        start: startTime,
        end: endTime,
        extendedProps: { ...plan },
      };
    });
  }

  handleEventClick = ({ event }) => {
    this.props.openPlan(event.extendedProps);
  };

  handleEventDrop = info => {
    if (window.confirm('Are you sure you want to change the event date?')) {
      console.log('change confirmed');
      this.props.updatePlan({ ...info.event.extendedProps, start: info.event.start, end: info.event.end });
    } else {
      console.log('change aborted');
    }
  };
//updated to add cards to calender
  renderEventContent(eventInfo) {
    const { name, rating, startDate, endDate } = eventInfo.event.extendedProps;

    return (
      <div>
        <b>{name}</b>
        <div>Rating: {rating}</div>
        <div>Start Date: {startDate}</div>
        <div>End Date: {endDate}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="maincontainer">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
          }}
          editable={true}
          eventDrop={this.handleEventDrop}
          eventClick={this.handleEventClick}
          events={this.formatEvents()}
          eventContent={this.renderEventContent} //added this
        />
      </div>
    );
  }
}

export default MyCalendar;
