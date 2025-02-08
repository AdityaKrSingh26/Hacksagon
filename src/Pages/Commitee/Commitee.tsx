// import { Patrons } from "../../data/Patrons";
import { OrganisingCommitee } from "../../data/OrganisingCommitee";
import { Patrons } from "../../data/Patrons";

const Commitee = () => {

  console.log(Patrons)

  return ( 
    <div className="px-4">
      <h1 className="text-center text-6xl my-4 font-bold">Commitees</h1>

      <div className="lg:w-2/3 w-full mx-auto my-4">
        <h1 className="text-4xl text-yellow-500 mb-8">Patrons</h1>
        <div className="flex gap-12 flex-wrap justify-center md:justify-normal md:pl-10 pl-0">
          {Patrons.map((member, index) => (
            <div key={index} className="w-60">
              <img className="w-60 h-60 rounded-full" src={member.imgUrl} alt="" />
              <p className="text-center text-xl font-bold">{member.name}</p>
              <p className="text-center text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-2/3 w-full mx-auto my-10">
        <h1 className="text-4xl text-yellow-500 mb-8">Organising Commitee</h1>
        <div className="flex gap-12 flex-wrap justify-center md:justify-normal md:pl-10 pl-0">
          {OrganisingCommitee.map((member, index) => (
            <div key={index} className="w-60">
              <img className="w-60 h-60 rounded-full" src={member.imgUrl} alt="" />
              <p className="text-center text-xl font-bold">{member.name}</p>
              <p className="text-center text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default Commitee;