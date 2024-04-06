export async function onRequestPost(context) {
  try {
    const telegramBotToken = context.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = context.env.TELEGRAM_CHAT_ID;

    let input = await context.request.formData();
    const countryCode = context.request.headers.get('CF-IPCountry');

    let output = {};
    for (let [key, value] of input) {
      let tmp = output[key];
      if (tmp === undefined) {
        output[key] = value;
      } else {
        output[key] = [].concat(tmp, value);
      }
    }
    console.log(output);
    output.countryCode = countryCode;

    let data = JSON.stringify(output, null, 2);

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: data,
      }),
    });

    let getTelephone = output.phone.trim() !== '' ? output.phone : output.whatsapp

    return new Response(data, {
      status: 302,
      headers: {
        'Location': `./thanks.html?name=${output.name}&tel=${getTelephone}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Ошибка обработки формы:', error);
    return new Response(error);
  }
}