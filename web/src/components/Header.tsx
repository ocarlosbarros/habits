import { Plus } from 'phosphor-react';
import logoImage from '../assets/logo.svg';

export function Header() {
    return (
        <header className='w-full max-w-3xl mx-auto flex justify-between items-center'>
                    <img
                    src={logoImage}
                    alt="5 pequenos quadrados com bordas arredondadas o primeiro na cor preta os demais em roxo clareando a tonalidade, abaixo a palavra Habits"
                    />

                    <button
                        type="button"
                        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
                    >
                        <Plus size={ 20 } className="text-violet-500" />
                        Novo hábito
                    </button>
        </header>
    );
}
