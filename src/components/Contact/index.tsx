"use client";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslations } from "next-intl";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);
  const t = useTranslations('contactSection');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const serviceId = "service_cysqmp7";
    const templateId = "template_cgnfvia";
    const publicKey = "KAfA-1eqc2SFs2m3Q";
    
    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          formRef.current?.reset();
          setSuccessMessage(true);  // Set success message to true on success
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-4 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {t('title')}
              </h2>
              <p className="mb-4 text-base font-medium text-body-color">
                {t('subtitle')}
              </p>

              {successMessage && (  
                <p className="mb-6 text-green-500 font-medium">
                  {t('successMessage')}
                </p>
              )}

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="from_name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('name')}
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder={t('nameplaceholder')}
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="from_email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('email')}
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder={t('emailplaceholder')}
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder={t('companyplaceholder')}
                        required
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {t('message')}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={t('messageplaceholder')}
                        required
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      {t('submitbutton')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
