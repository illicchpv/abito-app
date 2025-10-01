import {useLayoutEffect} from "react";
import {Link} from "react-router-dom";

export const ErrorPage = () => {

  useLayoutEffect(() => {
    document.documentElement.classList.add('error');

    return () => {
      document.documentElement.classList.remove('error');
    }
  }, []);

  return (

    <main className="bsod container">
      <h1 className="neg title"><span className="bg">Error - 404</span></h1>
      <p>An error has occured, to continue:</p>
      <p>* Return to our homepage.<br />
        * Send us an e-mail about this error and try later.</p>
      <nav className="nav">
        <Link to="/" className="link">home</Link>&nbsp;|&nbsp;<Link to="/" className="link">webmaster</Link>
      </nav>
    </main>
  );
};