# Misión: Desarrollador Front-end

![GIF de celebración](https://media.giphy.com/media/g7SFZQGzS4HwQ/giphy.gif)

🙌 ¡Gracias por participar en esta misión! ¿Estás listo para una aventura? ¡Vamos a comenzar!

¿Por qué tenemos misiones? Las usamos para:

1. Entender tu nivel de habilidad y cómo abordas las tareas. Queremos asegurarnos de que tengas las habilidades básicas para tener éxito como un futuro uizard 🧙, al tiempo que te damos mucho espacio para asumir desafíos.
2. Que decidas si es el rol adecuado para ti. Es importante para nosotros que te encante lo que harás y que puedas explorar nuevas ideas y oportunidades.

## ✅ **Instrucciones para tu Misión**

1. Tienes 48 horas para completar el desafío a partir del momento en que recibas este documento. Ten en cuenta que una solución a este desafío puede implementarse en 1 o 2 horas. Queremos darte más tiempo para que sea divertido y no estresante. 🙂
2. Entrega el desafío enviando un archivo zip (sin la carpeta node_modules) a [tony@uizard.io](https://www.notion.so/Quest-VP-Director-Head-of-Marketing-f69c1ca236a948beb0fe1c192f6dd56a?pvs=21).
3. Después de entregar el desafío, revisaremos tu envío y nos pondremos en contacto contigo con los siguientes pasos.
4. ¡Misión cumplida! ¡Ve a celebrar 🎉!

## ⛰ **Misión: Lector de Hacker News**

### Contexto General:

Estás construyendo un clon simple de Hacker News ([https://news.ycombinator.com](https://news.ycombinator.com/)). La aplicación deberá obtener datos de un punto de acceso público de JSON API y mostrarlos en un visor simple.

El visor debe tener dos paneles; un panel izquierdo mostrando las 10 principales historias; y un panel derecho mostrando una vista previa de la historia seleccionada usando un iframe. Cuando un usuario haga clic en una historia en el panel izquierdo, el panel derecho debería cambiar a la historia seleccionada.

Por favor, consulta este prototipo interactivo simple hecho en Uizard para ilustrar esto:

[uizard](https://app.uizard.io/p/de328bd3)

### Paquetes:

Se espera que utilices los siguientes paquetes para implementar la solución. Eres libre de instalar y usar paquetes adicionales.

- create-react-app
- react
- styled-components (o una biblioteca similar de css-in-js)
- gatsby (opcional, punto extra)

### API:

Se te proporcionan dos puntos de acceso para obtener datos. Uno para las historias principales y otro para historias individuales. El último toma un ID de historia como argumento, que se puede encontrar en la respuesta de las historias principales. Nota que el punto de acceso de historias principales devuelve 500 historias. Es tu trabajo asegurarte de que el visor solo muestre las últimas 10.

- Historias principales: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- Historia individual: [https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty](https://hacker-news.firebaseio.com/v0/item/%7BSTORY_ID%7D.json?print=pretty)

### **Nota Técnica Importante:**

Para mostrar la vista previa de la historia en el panel derecho, querrás usar un elemento `<iframe />`. Debido a las políticas de seguridad del navegador, no todos los sitios web mostrarán el iframe; ¡esto está bien! Una solución para esto requiere crear proxies de servidor y está muy fuera del alcance del desafío, así que por favor, no intentes resolverlo.

### Nota de Diseño:

No se requiere que implementes el diseño exactamente como se muestra en el prototipo de Uizard, pero eres libre de usarlo como guía. No evaluaremos tu capacidad para crear diseños impresionantes al revisar el desafío, nos enfocaremos únicamente en tus habilidades técnicas para implementar una solución funcional.

¡Buena suerte y diviértete! 😊💻
