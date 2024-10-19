import { Helmet } from "react-helmet-async";

export default function SignInHead() {
  return (
    <Helmet>
      <title>Sign In | MERN Authentication</title>
      <meta
        name="description"
        content="Securely sign in to your account. Access your personalized dashboard and manage your profile with ease."
      />
      <meta
        name="keywords"
        content="sign in, login, account access, secure login, user authentication"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.yourapp.com/signin" />
      <meta property="og:title" content="Sign In | MERN Authentication" />
      <meta
        property="og:description"
        content="Securely sign in to your account. Access your personalized dashboard and manage your profile with ease."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yourapp.com/signin" />
      <meta
        property="og:image"
        content="https://www.yourapp.com/images/signin-og.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Sign In | MERN Authentication" />
      <meta
        name="twitter:description"
        content="Securely sign in to your account. Access your personalized dashboard and manage your profile with ease."
      />
      <meta
        name="twitter:image"
        content="https://www.yourapp.com/images/signin-twitter.jpg"
      />
      <script type="application/ld+json">{`
    {
      "@context": "http://schema.org",
      "@type": "WebPage",
      "name": "Sign In",
      "description": "Securely sign in to your account. Access your personalized dashboard and manage your profile with ease.",
      "url": "https://www.yourapp.com/signin"
    }
  `}</script>
    </Helmet>
  );
}
