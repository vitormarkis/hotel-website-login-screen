export const Signup = () => (
    <div className="border-l border-black w-1/2 h-full bg-white basis-0 grow flex items-center justify-center p-12">
        <div
            className="flex flex-col w-full
        [&_input]:p-3
        [&_input]:border
        [&_input:focus]:border-black
        [&_input]:mb-2
        [&_input]:border-neutral-400
        [&_input::placeholder]:text-sm
        ">
            <h3 className="font-semibold text-lg mb-2">Sign-up</h3>
            <input type="text" placeholder="Coloque seu e-mail..." />
            <input type="text" placeholder="Coloque sua senha..." />
            <span className="ml-auto text-xs text-neutral-500 mb-4 hover:underline cursor-pointer">
                Esqueci minha senha
            </span>
            <div className="flex items-center justify-start flex-row-reverse
            gap-2
            [&_button]:w-1/4
            ">
                <button className="font-semibold p-2 bg-black text-white">
                    Enviar
                </button>
                <button className="p-2 text-neutral-500 border border-neutral-400">
                    Criar conta
                </button>
            </div>
        </div>
    </div>
);
