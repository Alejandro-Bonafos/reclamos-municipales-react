import Accordion from 'react-bootstrap/Accordion';
import styles from '../../styles/Accordeon.module.css';

function AcordeonComoFunciona() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0" className={styles.primerItem}>
        <Accordion.Header>Que datos necesitas tener en la mano</Accordion.Header>
        <Accordion.Body>
                  Para realizar tu reclamo de manera efectiva, necesitarás:
                  Tus datos personales (nombre, apellido, email)
                  Dirección exacta del problema
                  Descripción detallada del inconveniente
                  Fotografías que ilustren la situación (opcional pero recomendado)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Podes incluir una foto para ilustrar tu reclamo</Accordion.Header>
              <Accordion.Body>
                  Una imagen vale más que mil palabras. Incluir fotos en tu reclamo nos ayuda a:
                  Evaluar con precisión la magnitud del problema
                  Asignar los recursos adecuados para su solución
                  Priorizar correctamente los casos más urgentes
                  Documentar la situación para seguimiento
              </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Es indispensable que tengas la ubicación exacta donde se encuentra el inconveniente</Accordion.Header>
              <Accordion.Body>
                  La ubicación precisa es fundamental para que podamos resolver tu reclamo. Te recomendamos:
                  Indicar calle y número
                  Mencionar referencias cercanas (esquina, plaza, escuela, etc.)
                  Si es posible, compartir ubicación GPS
                  Especificar el barrio o zona
              </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>¿Cuánto demora la resolución?</Accordion.Header>
              <Accordion.Body>
                  El tiempo de resolución de tu pedido, dependerá de la demanda que tenga el área correspondiente de su ejecución al momento de ingresar tu reclamo. También se deberá tener en cuenta la complejidad del mismo.
                  Algunos factores que influyen en los tiempos:
                  Tipo de reclamo y su urgencia
                  Recursos disponibles en el momento
                  Condiciones climáticas (para trabajos exteriores)
                  Volumen de solicitudes similares
              </Accordion.Body>
          </Accordion.Item>
      </Accordion>
  );
}

export default AcordeonComoFunciona;