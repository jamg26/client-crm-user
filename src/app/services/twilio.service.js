import axios from 'axios';

export const ROOT_URL = process.env.REACT_APP_API_URL;
export const TWILIO_CALL_API = 'api/twilio/voicecall';

export function sendVoiceMessage(phone, message) {
  return axios.post(`${ROOT_URL}/${TWILIO_CALL_API}`, {
    phoneNo: phone,
    voiceMessage: message,
  });
}
