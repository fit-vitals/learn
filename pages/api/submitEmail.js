// import config from "../../lib/config";

// const tagIds = {
//   nextVitals: 1574153,
//   homepage: 1447147,
//   user: 1447149,
//   earlySupporter: 1447150,
// };

// const getTagIds = (tags) => {
//   return tags.map((x) => tagIds[x]);
// };

// export default async function submitEmail(req, res) {
//   const formId = "1608232";
//   const tags = ["nextVitals", "homepage"];

//   try {
//     const email = req.query.email;
//     console.log("email", email);
//     const data = {
//       api_key: config.CONVERT_KIT_API_KEY,
//       email: email,
//       tags: getTagIds(tags),
//     };
//     const response = await fetch(
//       `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     return res.send(await response.json());
//   } catch (error) {
//     console.error(error);
//     res.status(error.status || 500).end(error.message);
//   }
// }
