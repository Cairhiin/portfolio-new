import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./index.css";

type Inputs = {
  access_key: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.access_key = import.meta.env.VITE_EMAIL_API_KEY;

    fetch("https://api.web3forms.com/submit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => setSuccess(true));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="extended-input-group">
        <div className="form-input-group">
          <label htmlFor="firstName">First Name</label>
          <input {...register("firstName")} name="firstName" />
        </div>

        <div className="form-input-group">
          <label htmlFor="lastName">Last Name</label>
          <input {...register("lastName")} name="lastName" />
        </div>
      </div>

      <div className="form-input-group">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          {...register("email", { required: true })}
          name="email"
          type="email"
        />
        {errors.email && <p>A valid email is required!</p>}
      </div>

      <div className="form-input-group">
        <label htmlFor="message">
          Message <span>*</span>
        </label>
        <textarea
          rows={5}
          {...register("message", { required: true })}
          name="message"
        />
        {errors.message && <p>The message field is required!</p>}
      </div>
      <input type="submit" />
      {success && <div>Your message has been delivered!</div>}
    </form>
  );
}
