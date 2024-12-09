import "./contact.css";
import { Instagram, Linkedin, Globe, Facebook } from 'lucide-react';

const contacts = [
  {
    name: "Disha",
    phone: "+91 8295459359",
    email: "img_2023000@iiitm.ac.in",
    path: "./Images/profiles/disha.jpg",
    pos: "Vice-Chair person"
  },
  {
    name: "Advait Mulmule",
    phone: "+91 7620672917",
    email: "imt_2023000@iiitm.ac.in",
    path: "./Images/profiles/advait.jpg",
    pos: "Vice - Secretary"
  },
  {
    name: "Dhrushit Jain",
    phone: "+91 8657232444",
    email: "bcs_2023019@iiitm.ac.in",
    path: "./Images/profiles/dhrushit.jpg",
    pos: "Web Master"
  },
];
const social = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/abv_iiitm_ieee' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/abviiitmieee' },
  { name: 'Email', icon: Globe, url: 'https://ieee.iiitm.ac.in/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/abviiitmieee' }
];
const Contact = () => {
  return (
    <div className="w-2/3 mx-auto flex flex-col">
      <h1 className="text-4xl mt-10 pb-6 border-b text-center font-bold animate-text">
        {["C", "o", "n", "t", "a", "c", "t", " ", "U", "s", "!"].map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
      <div className="my-6 flex flex-col md:flex-row">
        <div className="address-map w-full md:w-2/5 h-full">
          <ul>
            <iframe className="w-full h-full px-4 md:p-0 md:mr-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760223093595!2d78.17156387600703!3d26.249456888277656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1733643918726!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <br />
            <li className="ml-4 md:m-0 mb-4">
              <p className="font-medium">IEEE Student Branch of ABV-IIITM</p>
              <p>Email: <a href="mailto:ieee@iiitm.ac.in" className="underline">ieee@iiitm.ac.in</a></p>
              <p>Address: 2nd Floor G-Block, <br />Atal Bihari Vajpayee Indian Institute of Information Technology and Management Gwalior, Madhya Pradesh – 474015</p>
            </li>
          </ul>
        </div>
        <div className="contact-details w-full md:w-3/5 md:px-10 h-full">
          <ul>
            {contacts.map((contact) => (
              <li className="mb-6">
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img className="w-10 h-10 m-4 rounded-full" src={contact.path} alt="" />
                      <p className="hidden md:flex">{contact.name} |<span className="opacity-50"> Hover to see details</span></p>
                      <p className="md:hidden">{contact.name} |<span className="opacity-50"> Click to see details</span></p>
                    </div>
                    <div className="card-back p-2 md:pl-8 md:flex align-middle">
                      <p className="text-sm md:text-xl md:inline-block">{contact.pos}</p>
                      <div className="hidden md:flex border border-white h-full mx-4" />
                      <p className="text-sm md:inline-block">&nbsp; Phone: <a href={`tel:${contact.phone}`} className="underline">{contact.phone}</a><br />&nbsp; Email: <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex md:flex-col mx-auto my-10 md:w-full">
        <h1 className="text-2xl md:text-3xl md:pb-2 my-auto pr-4 md:p-0 md:border-b text-center font-bold">Our Social accounts!</h1>
        <div className="w-full border-l md:border-none md:flex md:justify-evenly">
          {social.map((app) => (
            <a className="flex p-2" href={app.url} key={app.name}>
              <app.icon />
              <p className="mx-2">{app.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Contact;
