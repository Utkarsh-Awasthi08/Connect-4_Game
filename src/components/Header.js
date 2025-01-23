import React from 'react';
let Header = ({gameState, player, winPlayer}) => {
    const renderLabel = () => {
        switch (gameState) {
        case 1:
        return <div>Player { player } Turn</div>
        case 2:
        return <div>Player { winPlayer } Wins</div>
        case 3:
        return <div>Game is Drawn</div>
        default:
        }
    }
    return (
        <div className="panel-header p-2 m-auto" style={{
            position: 'relative',
            maxWidth: '200px',
            transform: 'translate(0, 5%)',
            textAlign: 'center',
            zIndex: '5',
            backgroundColor: 'lightgoldenrodyellow',
            border: '8px solid burlywood',
            WebkitBoxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.7)',
            boxShadow: '7px 5px 15px 3px rgba(0, 0, 0, 0.7)',
            fontWeight: 'bold'
        }}>
            <div className="header-text">{renderLabel()}</div>
        </ div>
    )
}
export default Header;