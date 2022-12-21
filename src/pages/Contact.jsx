/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import LineGradient from '../components/lineGradient';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = 'w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-md focus:outline focus:outline-2 focus:outline-yellow';

  return (
    <section id="contact" className="contact pt-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span>
            {' '}
            TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex flex-col justify-center md:justify-start"
        >
          <SocialMediaIcons />
          <p className="text-center md:text-left md:w-[400px]">
            Please get in touch, I&#39;d like to hear from you.
            Do you need a full-stack developer to be part of
            your company or are you just looking for a developer
            for a short project? Please give me a call or leave me a message.

          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:mt-0 md:w-[800px]"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/48a1fcbd7d70dfa963c3de8cb6a624ca"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              name="name"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className={`${inputStyles} p-3 mt-5`}
              type="text"
              name="email"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className={`${inputStyles} p-3 mt-5`}
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required'
                  && 'This field is required.'}
                {errors.message.type === 'maxLength'
                  && 'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="rounded-md p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-deep-blue hover:text-white hover:border-2 hover:border-yellow transition duration-500"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
