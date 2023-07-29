import './ErrorPage.css';


function ErrorPage (){
    return (
        <div class="error-container">
            <h1 class="error-heading">Oops!</h1>
            <p class="error-message">We're sorry, but an error occurred.</p>
            <p class="error-description">Please check your url.</p>
        </div>
    );
}

export default ErrorPage;