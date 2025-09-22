import Header from './components/Header'
import Footer from './components/Footer'
import AllRoutes from './routes/AllRoutes'
const App = () => {




    return (
        <>
            <Header />
            <div style={{ minHeight: "600px" }}>
                <AllRoutes />
            </div>



            <Footer />


        </>
    )
}

export default App