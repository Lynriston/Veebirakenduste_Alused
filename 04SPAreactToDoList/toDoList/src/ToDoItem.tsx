import React from 'react';

type ToDo = {
    id: number;
    text: string;
    completed: boolean;
}

type Props = {
    toDo: ToDo;
    toggleToDo: (id: number) => void;
    deleteToDo: (id: number) => void;
}
// ToDoItem on eraldi komponent, mis esindab ühte ülesannet meie nimekirjas.
// See komponent võtab vastu kolm prop-i: toDo, toggleToDo ja deleteToDo.
// toDo on objekt, mis sisaldab ülesande ID-d, teksti ja lõpetamise staatust.
// toggleToDo on funktsioon, mida kasutatakse ülesande lõpetamise staatuse muutmiseks.
// deleteToDo on funktsioon, mida kasutatakse ülesande kustutamiseks nimekirjast.
const ToDoItem: React.FC<Props> = ({ toDo, toggleToDo, deleteToDo }) => {
    return (
        <li className={`todo-item ${toDo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleToDo(toDo.id)}>{toDo.text}</span>
            <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
        </li>
    );
};

export default ToDoItem;