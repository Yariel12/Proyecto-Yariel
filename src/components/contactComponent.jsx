import React, { useState } from "react";
// import baseURL from "../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info(
      "📞 Esta opción no está disponible por el momento. Escríbeme al WhatsApp: 849-401-8312"
    );
    return;

    // Si en el futuro quieres habilitar el envío, puedes quitar el return de arriba y descomentar esto 👇
    /*
    try {
      const res = await baseURL.post("/messages/create", formData);
      if (res.data.ok) {
        toast.success("✅ Mensaje enviado correctamente.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("❌ Error del servidor. Intenta más tarde.");
    }
    */
  };

  return (
    <section
      id="contact-form"
      className="pt-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="mb-12 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
        Contáctanos
      </h1>

      <div className="max-w-3xl px-6 mx-auto">
        <div className="p-10 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
            NovaDigital
          </h2>

          <p className="mb-6 text-lg font-medium text-center text-red-600">
            ⚠️ Esta opción de contacto no está disponible por el momento. Puedes
            escribirme directamente por WhatsApp al{" "}
            <span className="font-bold">849-401-8312</span>.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-800"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default ContactComponent;
