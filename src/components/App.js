import GameBoard from "./GameBoard";
function App() {
    return (
        <div className='container-sm pe-4 ps-4' style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', left: '50%' }}>
            <GameBoard />
        </div >
    )
}
export default App;