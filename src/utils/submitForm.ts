export async function submitForm(data: Record<string, unknown>) {
  const accessKey = "4af6bf76-6257-4f3e-8742-5297195a10f5"; // Your Web3Forms access key

  const formData = new FormData();
  formData.append("access_key", accessKey);

  // Append all form fields dynamically
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, String(value));
  });

  // Send request to Web3Forms API
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  return response.json(); // returns { success: boolean, message: string, ... }
}
