import events from "../TimelineEvent";
import { ListWrapper } from "../styles";
import TimelineItem from "./TimelineItem";

const TimelineList = () => {
  const TimelineEventsList = events.map((event) => (
    <TimelineItem event={event} key={event.id} />
  ));
  console.log(TimelineEventsList);
  return <ListWrapper>{TimelineEventsList}</ListWrapper>;
};

export default TimelineList;
