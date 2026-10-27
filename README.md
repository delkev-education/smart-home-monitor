# Smart Home Monitor — Node-RED en Render

Este proyecto sirve como punto de partida para la práctica de laboratorio. Incluye:
- Endpoint HTTP `POST /actualizar_datos`
- Parseo de JSON y nodo Debug
- Function que separa temperatura, gas, humedad del suelo, intrusión y energía
- Dashboard clásico con medidores, gráfico y estado de seguridad
- Configuración del puerto mediante `PORT`, como requiere Render

## Despliegue en Render

1. Sube estos archivos a un repositorio nuevo de GitHub.
2. En Render, elige **New → Web Service** y conecta el repositorio.
3. Render detectará el `Dockerfile`. Usa una instancia disponible y pulsa **Deploy**.
4. Cuando el servicio esté activo, abre la URL pública asignada por Render.
5. El editor de Node-RED suele estar en la raíz de la URL. El Dashboard clásico está en `/ui`.

## Enviar datos de prueba

Envía una petición HTTP POST a:

`https://TU-SERVICIO.onrender.com/actualizar_datos`

Con encabezado `Content-Type: application/json` y cuerpo:

```json
{
  "temperatura": 27.5,
  "gas": 320,
  "humedad_suelo": 64,
  "intrusion": false,
  "energia": 450
}
```

Puedes usar Postman o una terminal con curl:

```bash
curl -X POST "https://TU-SERVICIO.onrender.com/actualizar_datos" \
  -H "Content-Type: application/json" \
  -d '{"temperatura":27.5,"gas":320,"humedad_suelo":64,"intrusion":false,"energia":450}'
```

La respuesta confirma que el JSON fue recibido. En Node-RED, abre la pestaña Debug para ver el mensaje original.

## Notas importantes

- Cambia `TU-SERVICIO` por el nombre real de tu servicio Render.
- El Dashboard clásico (`node-red-dashboard`) está obsoleto, pero se incluye para mantener compatibilidad con los nombres de nodos de la guía de laboratorio.
- En Render Free, el servicio puede entrar en suspensión y el disco local no es persistente. Exporta periódicamente tus flujos y no guardes secretos en el repositorio.
- Este proyecto no conecta automáticamente el Arduino físico; el microcontrolador debe enviar el JSON por HTTP a la URL pública.
- Ajusta las unidades, rangos y nombres de campos según los sensores reales de tu práctica.
