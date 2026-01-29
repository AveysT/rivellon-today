import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { StoryDetail } from './pages/StoryDetail';
import { Edition } from './pages/Edition';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to scroll to top on route change
const ScrollToTopHelper = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <ScrollToTopHelper />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edition/:dateId" element={<Edition />} />
                    <Route path="/story/:id" element={<StoryDetail />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
