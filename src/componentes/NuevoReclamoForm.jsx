import { useState } from 'react';
import styles from '../../styles/NuevoReclamoForm.module.css';
import axios from 'axios';

function FormularioReclamo() {

  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    tipo: '',
    descripcion: '',
    direccion: ''
  });

  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estado, setEstado] = useState(null); 

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setEstado(null);

    const vecino_id = parseInt(localStorage.getItem("vecino_id"), 10); // 👈 lo leés acá

    const datos = new FormData();
    datos.append('nombre', formData.nombre);
    datos.append('apellido', formData.apellido);
    datos.append('email', formData.email);
    datos.append('tipo', formData.tipo);
    datos.append('descripcion', formData.descripcion);
    datos.append('direccion', formData.direccion);
    datos.append('vecino_id', vecino_id); 
    if (imagen) datos.append('imagen', imagen);

    try {
      const response = await axios.post('http://localhost:3000/reclamos', datos);
      
      console.log('Respuesta del backend:', response.data);
      setEstado('enviado');
      setFormData({ nombre: '',apellido: '', email: '', tipo: '', descripcion: '', direccion: '' });
      setImagen(null);
    } catch (error) {
      console.error('Error al enviar reclamo:', error);
      setEstado('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id='nuevo' className={styles.formulario} onSubmit={handleSubmit}>

      <div className={styles.fila}>
        <div className={styles.campo}>
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div className={styles.campo}>
          <label>Apellido</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
      </div>

      <div className={styles.fila}>
        <div className={styles.campo}>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.campo}>
          <label>Tipo de Residuos</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange} required>
            <option value="">Seleccionar</option>
            <option value="basural">Micro Basurales</option>
            <option value="recoleccion">Recolección y Residuos</option>
            <option value="ramas">Ramas y Desmalezado</option>
            <option value="otros">Otros Residuos</option>
          </select>
        </div>
      </div>

      <div className={styles.fila}>
        <div className={styles.campo}>
          <label>Descripción</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>
        <div className={styles.campo}>
          <label>Dirección</label>
          <textarea name="direccion" value={formData.direccion} onChange={handleChange} required />
        </div>
      </div>

      <div className={styles.fila}>
        <div className={styles.campo}>
          <label>Subir imagen (opcional)</label>
          <input type="file" name="imagen" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className={styles.campo}>
          {/* Campo vacío para mantener la simetría */}
        </div>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      {estado === 'enviado' && <p className={styles.exito}>✅ Reclamo enviado correctamente</p>}
      {estado === 'error' && <p className={styles.error}>❌ Hubo un problema al enviar el reclamo</p>}
    </form>

  );
}

export default FormularioReclamo;


