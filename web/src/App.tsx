//import { Habit } from "./components/Habit"
import { Header } from './components/Header';

import './styles/global.css';

export function App() {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <section id="main-content" className="w-full max-w-5xl px-6 flex flex-col gap-16">
                <Header />
            </section>
        </div>
  )
}
