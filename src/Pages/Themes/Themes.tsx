import { Cpu, Brain, Leaf, Shield } from 'lucide-react';
import { useEffect } from 'react';

const themes = [
  {
    icon: Cpu,
    title: 'IoT & Robotics',
    description: 'Build innovative solutions combining hardware sensors, actuators, and smart software integration.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Brain,
    title: 'AI Hardware',
    description: 'Develop cutting-edge hardware accelerators and AI-powered embedded systems.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Leaf,
    title: 'Sustainable Tech',
    description: 'Create eco-friendly hardware solutions addressing environmental challenges.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Design secure hardware-software solutions for modern cybersecurity challenges.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },{
    icon: Cpu,
    title: 'IoT & Robotics',
    description: 'Build innovative solutions combining hardware sensors, actuators, and smart software integration.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Brain,
    title: 'AI Hardware',
    description: 'Develop cutting-edge hardware accelerators and AI-powered embedded systems.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Leaf,
    title: 'Sustainable Tech',
    description: 'Create eco-friendly hardware solutions addressing environmental challenges.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Design secure hardware-software solutions for modern cybersecurity challenges.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },{
    icon: Cpu,
    title: 'IoT & Robotics',
    description: 'Build innovative solutions combining hardware sensors, actuators, and smart software integration.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  },
  {
    icon: Brain,
    title: 'AI Hardware',
    description: 'Develop cutting-edge hardware accelerators and AI-powered embedded systems.',
    details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sequi nemo adipisci itaque doloremque non velit nihil. Dolor suscipit quis libero et maiores excepturi ut magni est. Iste porro facilis ea dignissimos laboriosam, quas quae sint saepe vel quod distinctio optio? Numquam reiciendis vero blanditiis eveniet natus odit tempora iure soluta quis mollitia aliquam exercitationem modi velit ipsum est, rerum adipisci voluptatibus? Eveniet quos distinctio odit magni eius aspernatur natus vero temporibus sequi corporis, consequuntur, quibusdam dolorem. Fugiat numquam a beatae illo dolore ipsum natus explicabo reiciendis unde? Nesciunt aspernatur nostrum perspiciatis dolorum corporis cumque beatae quis id voluptatum accusantium?"
  }
];

const Themes = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Extract the ID from the URL hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        element.classList.remove('bg-white/5');
        element.classList.add('bg-white/15'); // Add the glow effect
        setTimeout(() => {
          element.classList.remove('bg-white/15');
          element.classList.add('bg-white/5');
        }, 1000);
      }
    }
  }, []);

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center">Themes</h2>
      {themes.map((theme, index) => (
        <section
          id={`${index}`}
          key={index}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 w-full m-4 flex flex-col transition-colors duration-500"
        >
          <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
          <p className="text-gray-400">{theme.description}</p>
          <p className="text-gray-400">{theme.details}</p>
        </section>
      ))}
    </div>
  );
}

export default Themes;