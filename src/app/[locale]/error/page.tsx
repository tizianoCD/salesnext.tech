// Assuming your locale is either 'en', 'es', 'fr', etc.
const locales = ['en', 'es', 'fr']; // Add your supported locales here

// Error page component
const ErrorPage = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, something went wrong.</p>
    </div>
  );
};

// Generate static params for each locale
export const generateStaticParams = async () => {
  return locales.map(locale => ({
    locale // This will correspond to the dynamic part of your route
  }));
};

// Set the rendering mode as needed
export const dynamic = 'force-static'; // or 'force-dynamic' if needed

export default ErrorPage;
