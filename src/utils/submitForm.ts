export async function submitForm(data: Record<string, unknown>) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY_TEST;

  if (!accessKey) {
    console.error("❌ Web3Forms Access Key is missing!");
    return { success: false, message: "Server configuration error." };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, String(value));
  });

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return response.json();
}
