import { Fragment } from 'react';
import Card from '../layout/Card';


function Team(props) {
  // console.log(typeof (props), "From Team");
  return (
    <Fragment >
    <h1 className="text-2xl text-blue-700 m-10 px-32">Our Team</h1>
    <div className="flex flex-wrap w-3/4 mx-auto">
    {props.devInfo.map((dev) => (
      <Card devInfo={dev} key= {dev._id}/>
    ))}
    </div>
    </Fragment>
  );
}
export default Team;
