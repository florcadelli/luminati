const textStyle = {
    color: 'blue',
    fontSize: '30px',
    textAlign: 'center',
    alignItem: 'center',
  };

const NotFoundPage = () => {
    return ( 
        <div>
            <p style={textStyle}>Error 404</p>
            <p style={textStyle}>Página no encontrada =/ </p>

        </div>
     );
}
 
export default NotFoundPage;