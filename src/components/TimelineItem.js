import { EventWrapper } from "../styles";
import { Year } from "../styles";
const TimelineItem = (props) => {
  return (
    <EventWrapper>
      <img alt={props.name} src={props.event.Image} />
      <Year>{props.event.name}</Year>
      <p>{props.event.Descripe}</p>
      <p>{props.event.Note}</p>
    </EventWrapper>
  );
};

export default TimelineItem;
