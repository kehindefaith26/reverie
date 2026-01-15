import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import MemoryLane from './pages/MemoryLane';
import Tickets from './pages/Tickets';
import Details from './pages/Details';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';

function App() {
    return (
        <Router>
            <div className="relative min-h-screen overflow-hidden font-body text-cream selection:bg-gold selection:text-burgundy">

                <main className="relative z-10 w-full min-h-screen flex flex-col">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/memory-lane" element={<MemoryLane />} />
                        <Route path="/tickets" element={<Tickets />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/confirmation" element={<Confirmation />} />
                    </Routes>
                </main>

            </div>
        </Router>
    )
}
export default App;