import { Helmet } from "react-helmet-async";

export default function VerifyEmailHead() {
  return (
    <Helmet>
      <title>Verify Your Email | MERN Authentication</title>
      <meta
        name="description"
        content="Complete your account setup by verifying your email address. Ensure secure access and receive important notifications."
      />
      <meta
        name="keywords"
        content="verify email, email confirmation, account activation, email verification"
      />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://www.yourapp.com/verify-email" />
      <meta
        property="og:title"
        content="Verify Your Email | MERN Authentication"
      />
      <meta
        property="og:description"
        content="Complete your account setup by verifying your email address. Ensure secure access and receive important notifications."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourapp.com/verify-email" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Verify Your Email | MERN Authentication"
      />
      <meta
        name="twitter:description"
        content="Complete your account setup by verifying your email address. Ensure secure access and receive important notifications."
      />
    </Helmet>
  );
}
