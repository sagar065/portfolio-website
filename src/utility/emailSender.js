import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast"


const emailSender = (form,setName,setEmail,setSubject,setMessage) => {


    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(service_id, template_id, form.current, public_key)
        .then((result) => {
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                toast.success("Email sent successfully!");
                console.log(result.text);
            })
            .catch((error) => {
                toast.error("An error occurred while sending the email. Please try again later.", error.text);
                // console.log(error.text);
            })

    };
  return ({ sendEmail })
}

export default emailSender;
