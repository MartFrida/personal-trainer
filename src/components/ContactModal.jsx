/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { theme } from "../helpers/theme";

const ContactModal = ({ isOpen, onClose, sectionId }) => {

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alis',
    email: 'alisa.nenko@gmail.com',
    message: 'Test',
    phone: '+3123456789',
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Блокируем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Разрешаем скролл
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Очистка при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;


  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Introducir correo electrónico';
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Formato de correo incorrecto (ejemplo: ejemplo@mail.com)';
      }
    }
    if (!formData.phone) {
      newErrors.phone = 'Introduce tu número de teléfono';
    } else {
      const phonePattern = /^\+?[0-9]{10,15}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'Formato de teléfono incorrecto';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone,
      location: window.location.href,
      section_id: sectionId || 'unknown',
    };

    emailjs.send(serviceId, templateID, templateParams, publicKey)
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '', phone: '' });
        setTimeout(() => {
          setIsSent(false),
            onClose()
        }, 3000);
      })
      .catch((err) => console.error('FAILED...', err));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className={`${theme.primary} text-white max-w-md p-6 rounded-lg shadow-lg relative`}>
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>✖</button>
        <h2 className="text-2xl font-bold mb-4">Contáctenos</h2>
        {isSent && <p className="text-green-600 mb-4">¡Formulario enviado exitosamente!</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="w-full p-2 mb-2 border rounded-md" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 mb-2 border rounded-md" required />
          {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" className="w-full p-2 mb-2 border rounded-md" required />
          {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" className="w-full p-2 mb-2 border rounded-md" rows="4" />
          <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
