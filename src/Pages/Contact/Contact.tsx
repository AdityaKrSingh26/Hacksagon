const contacts = [
{
  name: "Disha",
  phone: "+91 8295459359",
  email: "img_2023000@iiitm.ac.in",
},
{
  name: "Advait Mulmule",
  phone: "+91 7620672917",
  email: "imt_2023000@iiitm.ac.in",
},
{
  name: "Dhrushit Jain",
  phone: "+91 8657232444",
  email: "bcs_2023019@iiitm.ac.in",
},
];
const Contact = () => {
  return ( 
    <div className="flex justify-center w-3/4 h-96 mx-auto mt-20">
      <iframe className="w-1/3 h-3/4 mr-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760223093595!2d78.17156387600703!3d26.249456888277656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1733643918726!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="details inline-block w-1/3 h-3/4 ml-12 pt-6">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="mb-4">
              <p className="font-medium">{contact.name}</p>
              <p>Phone: <a href={`tel:${contact.phone}`} className="underline">{contact.phone}</a></p>
              <p>Email: <a href={`mailto:${contact.email}`} className="underline">{contact.email}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default Contact;