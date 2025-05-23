function ContactInformation() {
  return (
    <section
      id="contacto"
      className="pt-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="mb-12 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
        Información de Contacto
      </h1>

      <div className="max-w-4xl px-6 mx-auto">
        <div className="p-10 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <p className="mb-6 text-center text-black">
            En <strong>NovaDigital</strong>, estamos aquí para ayudarte. Puedes
            comunicarte con nosotros por los siguientes medios:
          </p>

          <div className="space-y-6 text-lg text-black">
            <div>
              <h3 className="font-semibold">📧 Correo electrónico:</h3>
              <p>contacto@novadigital.com</p>
            </div>

            <div>
              <h3 className="font-semibold">📞 Teléfono:</h3>
              <p>+1 (849) 401-8312</p>
            </div>

            <div>
              <h3 className="font-semibold">🌐 Redes sociales:</h3>
              <ul className="ml-6 list-disc">
                <li>
                  <a
                    href="https://www.instagram.com/novadigital"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/novadigital"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/18091234567"
                    className="text-green-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInformation;
