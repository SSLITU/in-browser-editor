import { getEnvironment } from "../helpers/getEnvironment";

export async function sendData(data: any): Promise<void> {
  console.log("Sending data...", data);

  try {
    const endpoint = getEnvironment("DB");
    console.log("Endpoint:", process.env.DB, endpoint);
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
