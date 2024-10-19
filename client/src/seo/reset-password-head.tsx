import { Helmet } from "react-helmet-async";

export default function ResetPasswordHead() {
  return (
    <Helmet>
      <title>Reset Your Password | MERN Authentication</title>
      <meta
        name="description"
        content="Securely reset your password. Follow our easy steps to regain access to your account quickly and safely."
      />
      <meta
        name="keywords"
        content="reset password, forgot password, account recovery, password change"
      />
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://www.yourapp.com/reset-password" />
      <meta
        property="og:title"
        content="Reset Your Password | MERN Authentication"
      />
      <meta
        property="og:description"
        content="Securely reset your password. Follow our easy steps to regain access to your account quickly and safely."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.yourapp.com/reset-password"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Reset Your Password | MERN Authentication"
      />
      <meta
        name="twitter:description"
        content="Securely reset your password. Follow our easy steps to regain access to your account quickly and safely."
      />
    </Helmet>
  );
}
