import { Carro } from '../../CarroTypes';



interface CarroItemProps {
    carro: Carro;
    onDelete: (numChassi: string) => void;
    onEdit: (carro: Carro) => void;
  }


  
  export default function CarroItem({ carro, onDelete, onEdit }: CarroItemProps) {
    return (
      <li className="border p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold">{carro.modeloCarro}</h2>
        <p>Chassi: {carro.numChassi}</p>
        <p>Placa: {carro.placaCarro}</p>
        <p>Montadora: {carro.montadoraCarro}</p>
        <p>Ano: {new Date(carro.anoCarro).toLocaleDateString()}</p>
        <button
          onClick={() => onDelete(carro.numChassi)}
          className="bg-red-500 text-white p-2 mt-2 rounded"
        >
          Deletar
        </button>
        <button
          onClick={() => onEdit(carro)}
          className="bg-yellow-500 text-white p-2 mt-2 ml-2 rounded"
        >
          
          Editar
        </button>
      </li>
    );
  }