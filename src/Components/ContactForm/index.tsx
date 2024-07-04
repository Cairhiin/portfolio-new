import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import IconButton from "../IconButton";
import "./index.css";

type Inputs = {
  access_key: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.access_key = import.meta.env.VITE_EMAIL_API_KEY;
    setIsLoading(true);

    fetch("https://api.web3forms.com/submit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setSuccess(true);
        reset();
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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

      <div className="submit-button">
        <IconButton
          icon={isLoading ? faSpinner : faPaperPlane}
          type="submit"
          disabled={isLoading}
          isSpinner={isLoading ? true : false}
        >
          Submit
        </IconButton>
      </div>

      <div className="success">
        {success ? "Your message has been delivered!" : ""}
        {error
          ? "We were unable to deliver your message. Please try again later."
          : ""}
      </div>
    </form>
  );
}
