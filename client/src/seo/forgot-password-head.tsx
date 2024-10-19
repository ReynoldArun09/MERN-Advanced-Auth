import { Helmet } from "react-helmet-async";

export default function ForgotPasswordHead() {
  return (
    <Helmet>
      <title>Forgot Password | Mern Authentication</title>
      <meta
        name="description"
        content="Forgot your password? No worries. Follow our simple process to securely reset your password and regain access to your account."
      />
      <meta
        name="keywords"
        content="forgot password, password recovery, account access"
      />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://www.yourapp.com/forgot-password" />
      <meta
        property="og:title"
        content="Forgot Password | Mern Authentication"
      />
      <meta
        property="og:description"
        content="Forgot your password? No worries. Follow our simple process to securely reset your password and regain access to your account."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.yourapp.com/forgot-password"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Forgot Password | Mern Authentication"
      />
      <meta
        name="twitter:description"
        content="Forgot your password? No worries. Follow our simple process to securely reset your password and regain access to your account."
      />
    </Helmet>
  );
}
