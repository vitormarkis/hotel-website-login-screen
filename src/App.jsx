import { Modal } from "./components/Modal";
import { Signup } from "./components/Signup";

export const App = () => (
    <div id="layout" className="h-screen w-screen flex bg-slate-800 overflow-hidden">
        <Modal />
        <Signup />
    </div>
);
