import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Card(props) {
  // console.log(props, "form Card");
  return (
    <div className="border rounded-lg w-72 mr-5 mb-10 p-8" key={props.devInfo._id}>
      <div className="flex justify-center mb-10">
        <Image
          src={props.devInfo.image}
          alt={props.devInfo.name}
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>

      <div className="flex text-lg items-center justify-center mb-10">
        <h3 >{props.devInfo.name}</h3>
        <p className="flex flex-wrap ml-2 text-blue-500">
          <a href={props.devInfo.linkedIn} className="mr-2">
            <FaLinkedin />
          </a>
          <a href={props.devInfo.github}>
            <FaGithub />
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-3">Expertise</h3>
        <div className="flex flex-wrap">
          {props.devInfo.techstack.map((tech) => {
            return (
              <span className="border p-1 border-red-300 m-2" key={tech}>
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
