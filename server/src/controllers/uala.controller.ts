// import {  Router } from "express";
// import axios from "axios"
// const ualaRouter = Router()
// // Endpoint para procesar el pago con Ualá
// ualaRouter.post("/pagar-con-uala", async (_req, res) => {
//   try {
//     // Autenticación: Obtener un token de acceso válido
//     const authResponse = await axios.post(
//       "https://api.uala.com.ar/auth/token",
//       {
//         client_id: "jCG3sOsOKw3hGzu5yS1tUC9H1UA63LsO",
//         client_secret: "BKaAALGoSU7jGBlt328U7U5qauzt-0P_bsCAtCskNfriO0LdJFTR1mK770Yjp9TU",
//         grant_type: "client_credentials",
//       }
//     );
//     const accessToken = authResponse.data.access_token;

//     // Crear un pedido: Enviar una solicitud POST a la API de Ualá
//     const pedidoResponse = await axios.post(
//       "https://api.uala.com.ar/orders",
//       {
//         amount: 1000,
//         currency: "ARS",
//         description: "Un producto de ejemplo",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const orderId = pedidoResponse.data.order_id;

//     // Redirigir al cliente a la página de pago de Ualá
//     const pagoUrl = `https://api.uala.com.ar/payments/checkout?order_id=${orderId}`;
//     res.redirect(pagoUrl);

//     // Esperar la confirmación del pago: Recibir una notificación a través de webhooks
//     // En este ejemplo, suponemos que el servidor recibe una solicitud POST a una URL específica
//     ualaRouter.post("/confirmar-pago", async (req, res) => {
//       const { orderId, transactionId } = req.body;

//       // Confirmar el pago: Enviar una solicitud POST a la API de Ualá
//       const confirmacionResponse = await axios.post(
//         `https://api.uala.com.ar/orders/${orderId}/transactions/${transactionId}/confirm`,
//         {
//           amount: 1000,
//           currency: "ARS",
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       const confirmacionData = confirmacionResponse.data;

//       // Enviar una respuesta al cliente indicando el resultado del pago
//       res.send(`El pago se ha completado con éxito: ${confirmacionData.status}`);
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Se produjo un error al procesar el pago");
//   }
// });

