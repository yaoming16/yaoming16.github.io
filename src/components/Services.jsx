import Title from "./Title";

function Services() {
  return (
    <section id="services" className="mt-10" aria-labelledby="services-heading">
      <Title text="Services" />
      <p className="md:w-3/4 mr-auto ml-auto">
        I also design and build simple, modern websites for professionals and
        small businesses who want to establish a clear and effective online
        presence.
      </p>
      <p className="md:w-3/4 mr-auto ml-auto mt-3">
        My focus is on creating fast, responsive, and easy-to-manage websites
        that communicate your work clearly and help you connect with your
        audience.
      </p>
      <p className="md:w-3/4 mr-auto ml-auto mt-3 text-mygreen font-bold">
        If you're looking for a clean and straightforward website, feel free to
        get in touch.
      </p>
    </section>
  );
}

export default Services;
