export function Employee(props) {
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 bg-light";
  const { employee } = props;
  const [actionTweet, setActionTweet] = useState(
    props.tweet ? props.tweet : null
  );

  const handlePerformAction = (newActionTweet, status) => {
    if (status === 200) {
      setActionTweet(newActionTweet);
    } else if (status === 201) {
      if (didRetweet) {
        didRetweet(newActionTweet);
      }
    }
  };

  return (
    <div className={className}>
      <div className="d-flex">
        <div className="col-13">
          <p>{employee.first_name}</p>
          <p>{employee.last_name}</p>
        </div>
      </div>
    </div>
  );
}
