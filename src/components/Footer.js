
const Footer = ({handleClick, onSuggestClick}) => {
    return (
        <div className="panel-footer p-3 d-flex m-auto d-flex justify-content-around w-25" style={{
            minWidth: '285px',
            position: 'relative',
            transform: 'translate(0, -5%)',
            zIndex: '5',
            backgroundColor: 'lightgoldenrodyellow',
            border: '8px solid burlywood',
            WebkitBoxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.9)',
            boxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.9)',
            fontWeight: 'bold'
        }}>
            <button onClick={handleClick} className="btn btn-info" style={{border: '3px solid red',
            WebkitBoxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.5)',
            boxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.5)',
            fontWeight: 'bold',
            color: 'black'}}>New Game</button>
            <button type="button" onClick={onSuggestClick} class="btn btn-warning" style={{border: '3px solid red',
            WebkitBoxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.5)',
            boxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.5)',
            fontWeight: 'bold',
            color: 'black'}}>Suggest</button>
</div >

);
}
export default Footer;