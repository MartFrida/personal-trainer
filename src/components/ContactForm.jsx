import { useState } from 'react';
import emailjs from 'emailjs-com';
import { theme } from "../helpers/theme"

const ContactForm = () => {
  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const validateForm = () => {
    let newErrors = {};

    // Валидация email
    if (!formData.email) {
      newErrors.email = 'Introducir correo electrónico';
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Formato de correo electrónico incorrecto (ejemplo: ejemplo@mail.com)';
      }
    }

    // Валидация телефона
    if (!formData.phone) {
      newErrors.phone = 'Introduce tu número de teléfono';
    } else {
      const phonePattern = /^\+?[0-9]{10,15}$/;
      if (!phonePattern.test(formData.phone)) {
        if (!/^\+?[0-9]*$/.test(formData.phone)) {
          newErrors.phone = 'Solo números y el signo +';
        } else if (formData.phone.replace(/\D/g, '').length < 10) {
          newErrors.phone = 'Mínimo 10 dígitos';
        } else if (formData.phone.replace(/\D/g, '').length > 15) {
          newErrors.phone = 'Máximo 15 dígitos';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true если ошибок нет
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Убираем ошибку при исправлении поля
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Останавливаем отправку, если есть ошибки

    // Найдем ближайший родительский контейнер с ID
    const section = document.getElementById('contact-section'); // Или через ref

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone,
      location: window.location.href,
      section_id: section ? section.id : 'unknown', // ID секции, если найден
    };

    emailjs
      .send(serviceId,
        templateID,
        templateParams,
        publicKey)
      .then(() => {
        setIsSent(true); // Показываем сообщение
        setFormData({
          name: '',
          email: '',
          message: '',
          phone: '',
        });
        // Скрываем уведомление через 3 секунды
        setTimeout(() => setIsSent(false), 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err)
      });
  };


  return (
    <div className={`${theme.primary} text-white max-w-md mx-auto p-6  rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold mb-4">Contáctenos</h2>
      {isSent && <p className="text-green-600 mb-4">¡Formulario enviado exitosamente!</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white" htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-blue-300'
              }`}
          />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-white" htmlFor="phone">Número de teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:ring-blue-300'
              }`}
          />
          {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white" htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            // required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
