const apiHelper = async (
  route: string,
  method: string,
  data: any = null,
  format: string = "application/json",
) => {
  const apiUrl = `${process.env.COFFEE_BACK}/${route}`; // Utilisation de l'URL provenant des variables d'environnement
  const headers: HeadersInit = {
    "Content-Type": format,
    Accept: "application/json",
  };

  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = format;
  }

  const requestInit: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (data) {
    requestInit.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(apiUrl, requestInit);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`Request failed:`);
  }
};

export default apiHelper;


