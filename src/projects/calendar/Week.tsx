import Day from "./Day";

const Week = (props: any) => {
  const dayList = props.days;

  const style: any = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div style={style}>
      {dayList.map((day: any) => {
        return <Day date={day.date} />;
      })}
    </div>
  );
};

export default Week;
